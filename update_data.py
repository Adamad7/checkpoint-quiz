import json
import os

# Read the new questions
with open('new_exam.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

new_exam = {
    "id": "checkpoint5-3-3",
    "title": "Checkpoint 5.3.3",
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
