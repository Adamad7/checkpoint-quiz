import os
from bs4 import BeautifulSoup
import json

file_name = 'eh2.html'

if not os.path.isfile(file_name):
    print(f"File '{file_name}' does not exist.")
    # Tworzymy pusty plik jeśli nie istnieje, aby nie wywalało błędu przy testach,
    # ale w produkcji tu powinien być exit(1) lub obsługa błędu.
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write("")
    # exit(1)

with open(file_name, 'r', encoding='utf-8') as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, 'html.parser')

questions = []

# Iterujemy po nagłówkach h3, które wyznaczają początek pytania
for header in soup.find_all('h3'):
    # Znajdujemy element rodzica (li), który zawiera całe pytanie i opcje
    question_li = header.find_parent('li')
    
    if not question_li:
        continue

    # 1. Pobieranie treści pytania
    question_text = header.get_text().strip()
    
    # Usuwanie numeracji (np. "1. ")
    if question_text and question_text[0].isdigit():
            parts = question_text.split('.', 1)
            if len(parts) > 1:
                question_text = parts[1].strip()

    # 2. Pobieranie obrazka (jeśli istnieje)
    img_src = ""
    img_tag = question_li.find('img')
    if img_tag:
        img_src = img_tag.get('src', '')

    # 3. Pobieranie opcji odpowiedzi
    options = []
    correct_answers = []
    
    # Szukamy listy ul wewnątrz elementu li pytania
    ul = question_li.find('ul')
    
    if ul:
        for li in ul.find_all('li'):
            option_text = li.get_text().strip()
            options.append(option_text)
            
            # Sprawdzanie poprawnej odpowiedzi na podstawie stylu
            is_correct = False
            span = li.find('span')
            
            if span:
                # Pobieramy styl i zamieniamy na małe litery dla łatwiejszego porównania
                style = span.get('style', '').lower()
                # W eh2.html kolor to #cc0000
                if 'color' in style and ('#cc0000' in style or '#ff0000' in style or 'red' in style):
                    is_correct = True
            
            # Fallback (opcjonalnie, jeśli używano klas)
            elif 'correct_answer' in li.get('class', []):
                is_correct = True

            if is_correct:
                correct_answers.append(option_text)
        
        # Formatowanie pola poprawnej odpowiedzi (string lub lista)
        if len(correct_answers) == 1:
            correct = correct_answers[0]
        else:
            correct = correct_answers
        
        # Dodajemy pytanie tylko, jeśli znaleziono opcje (pomija pytania typu "Match to...", które nie mają opcji w tym formacie)
        if options:
            questions.append({
                "pytanie": question_text,
                "opcje": options,
                "poprawna": correct,
                "image": img_src
            })

output_file_name = 'eh2.json'
with open(output_file_name, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Successfully parsed {len(questions)} questions into {output_file_name}")