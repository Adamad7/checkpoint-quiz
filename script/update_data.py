import json
import os

# Read the new questions
print("Enter the new questions JSON file name:")
new_questions_file_name = input().strip()
if not os.path.isfile(new_questions_file_name):
    print(f"File '{new_questions_file_name}' does not exist.")
    exit(1)
with open(new_questions_file_name, 'r', encoding='utf-8') as f:
    questions = json.load(f)


print("Enter the new exam ID:")
new_exam_id = input().strip()
print("Enter the new exam title:")
new_exam_title = input().strip()
new_exam = {
    "id": new_exam_id,
    "title": new_exam_title,
    "questions": questions
}

# Read data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last closing bracket of the array
last_bracket_index = content.rfind(']')

if last_bracket_index != -1:
    # Prepare the new content
    # We need to add a comma if there are existing items
    # But checking if the list is empty is hard with just string manipulation
    # Assuming the list is not empty as we saw content in it.
    
    new_exam_json = json.dumps(new_exam, indent=4)
    
    # Indent the new exam JSON to match data.js style (2 spaces or 4 spaces?)
    # data.js seems to use 2 spaces based on previous view_file
    new_exam_json = json.dumps(new_exam, indent=2)
    
    # Add indentation to each line
    new_exam_str = ",\n  " + new_exam_json.replace('\n', '\n  ')
    
    updated_content = content[:last_bracket_index] + new_exam_str + "\n]"
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("Successfully updated data.js")
else:
    print("Could not find the closing bracket in data.js")
