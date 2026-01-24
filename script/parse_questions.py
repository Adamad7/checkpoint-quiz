import os
from bs4 import BeautifulSoup
import json

print("Enter the HTML file name:")
file_name  = input().strip()
file_name = "data-html/" + file_name
if not os.path.isfile(file_name):
    print(f"File '{file_name}' does not exist.")
    exit(1)

with open(file_name, 'r', encoding='utf-8') as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, 'html.parser')


questions = []
for p in soup.find_all('p'):
    question_node = p.find('strong') or p.find('b')
    if question_node:
        question_text = p.get_text().strip()
        if not question_text:
            continue
        # Remove the leading number (e.g., "1. ")
        if question_text and question_text[0].isdigit():
             parts = question_text.split('.', 1)
             if len(parts) > 1:
                 question_text = parts[1].strip()
        
        # Check for image div following the question
        img_src = ""
        current_sibling = p.find_next_sibling()
        
        # Skip empty strings/newlines
        while current_sibling and (isinstance(current_sibling, str) or current_sibling.name == 'br'):
             current_sibling = current_sibling.find_next_sibling()

        if current_sibling and current_sibling.name == 'div' and current_sibling.find('img'):
             img_tag = current_sibling.find('img')
             if img_tag:
                 img_src = img_tag.get('src') or img_tag.get('srcset', '').split(' ')[0]
             current_sibling = current_sibling.find_next_sibling()

        # Look for Table (Matching) or UL (Choice)
        # We need to skip potential noise between question/image and answers
        
        target_table = None
        target_ul = None
        
        # Search siblings until we find a table, ul, or another p (start of new question)
        search_node = current_sibling
        while search_node:
            if search_node.name == 'table':
                target_table = search_node
                break
            elif search_node.name == 'ul':
                target_ul = search_node
                break
            elif search_node.name == 'p':
                 # Stop if we hit another paragraph that looks like a question start
                 if search_node.find('strong') or search_node.find('b'):
                     break
            search_node = search_node.find_next_sibling()
        
        q_obj = {
            "pytanie": question_text,
            "image": img_src,
            "type": "choice" # default
        }

        if target_table:
            # START MATCHING PARSING
            q_obj["type"] = "matching"
            match_pairs = []
            rows = target_table.find_all('tr')
            for row in rows:
                cols = row.find_all('td')
                if len(cols) >= 2:
                    left_text = cols[0].get_text().strip()
                    right_text = cols[1].get_text().strip()
                    if left_text and right_text:
                        match_pairs.append({
                            "left": left_text,
                            "right": right_text
                        })
            q_obj["match_pairs"] = match_pairs
            # Matching questions essentially don't have standard options/correct fields in this schema
            q_obj["opcje"] = []
            q_obj["poprawna"] = []
            questions.append(q_obj)
            
        elif target_ul:
            # START CHOICE/MULTI PARSING
            options = []
            correct_answers = []
            
            # Using find_all('li') on the specific UL found
            for li in target_ul.find_all('li'):
                option_text = li.get_text().strip()
                options.append(option_text)
                
                # Check for correct answer based on style attribute of a span
                span = li.find('span')
                is_correct = False
                if span:
                    style = span.get('style', '').lower()
                    if 'color' in style and ('#ff0000' in style or 'red' in style):
                         is_correct = True
                
                if not is_correct and 'correct_answer' in li.get('class', []):
                     is_correct = True
                     
                if is_correct:
                    correct_answers.append(option_text)
            
            # Determine type
            if len(correct_answers) > 1:
                q_obj["type"] = "multi-choice"
                q_obj["poprawna"] = correct_answers
            else:
                q_obj["type"] = "choice"
                if len(correct_answers) == 1:
                    q_obj["poprawna"] = correct_answers[0]
                else:
                    q_obj["poprawna"] = None # Should not happen if data is good
            
            q_obj["opcje"] = options
            questions.append(q_obj)
            
        # --- Explanation Parsing ---
        explanation_text = ""
        explanation_search_node = None
        
        if target_table:
             explanation_search_node = target_table.find_next_sibling()
        elif target_ul:
             explanation_search_node = target_ul.find_next_sibling()
        
        while explanation_search_node:
            # Check for explanation div or p (sometimes separate)
            if explanation_search_node.name == 'div' and explanation_search_node.get('class') and 'message_box' in explanation_search_node.get('class') and 'success' in explanation_search_node.get('class'):
                 explanation_text = explanation_search_node.get_text().strip()
                 break
            
            # Stop if we hit the next question
            if explanation_search_node.name == 'p':
                 if explanation_search_node.find('strong') or explanation_search_node.find('b'):
                     break

            explanation_search_node = explanation_search_node.find_next_sibling()

        # Clean up "Explanation:" prefix
        if explanation_text:
            # Common prefixes to remove
            prefixes = ["Explanation:", "Explanation"]
            for prefix in prefixes:
                if explanation_text.lower().startswith(prefix.lower()):
                    explanation_text = explanation_text[len(prefix):].strip()
                    break
        
        q_obj["explanation"] = explanation_text

print("Enter the output JSON file name:")
output_file_name  = input().strip()
output_file_name = "data-json/" + output_file_name
with open(output_file_name, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

