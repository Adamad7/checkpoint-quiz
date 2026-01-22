import os
from bs4 import BeautifulSoup
import json

print("Enter the HTML file name:")
file_name  = input().strip();

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
        if question_text[0].isdigit():
             parts = question_text.split('.', 1)
             if len(parts) > 1:
                 question_text = parts[1].strip()
        
        ul = p.find_next_sibling('ul')
        
        # Look for the UL that contains options (indicated by correct answer styling)
        # This handles cases where there are multiple ULs (e.g. one for context, one for options)
        candidate_uls = []
        curr = ul
        while curr and curr.name == 'ul':
            candidate_uls.append(curr)
            curr = curr.find_next_sibling()
            if curr and curr.name != 'ul':
                break
        
        target_ul = None
        for cand in candidate_uls:
             # Check for correct answer indicators
             if any(li.find('span', style=lambda s: s and ('color: #ff0000' in s or 'color: red' in s)) for li in cand.find_all('li')):
                 target_ul = cand
                 break
        
        # Fallback: if no answers found, use the last UL (likely options) or the first one if only one exists
        if not target_ul and candidate_uls:
            target_ul = candidate_uls[-1]
            
        ul = target_ul

        if ul:
            options = []
            correct_answers = []
            for li in ul.find_all('li'):
                option_text = li.get_text().strip()
                options.append(option_text)
                
                # Check for correct answer based on style attribute of a span
                span = li.find('span')
                if span and ('color: #ff0000' in span.get('style', '') or 'color: red' in span.get('style', '')):
                    correct_answers.append(option_text)
                # Fallback for class-based (if mixed, or if style is not present)
                elif 'correct_answer' in li.get('class', []):
                    correct_answers.append(option_text)
            
            # Determine if single or multiple choice
            if len(correct_answers) == 1:
                correct = correct_answers[0]
            else:
                correct = correct_answers
            
            questions.append({
                "pytanie": question_text,
                "opcje": options,
                "poprawna": correct,
                "image": ""
            })

print("Enter the output JSON file name:")
output_file_name  = input().strip()
with open(output_file_name, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)
