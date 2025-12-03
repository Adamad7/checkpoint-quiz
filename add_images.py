import json
import re

# Read data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the JSON part (everything after "const examsData = " and before the last ";")
# Assuming the format is relatively stable as I saw it
match = re.search(r'const examsData = (\[.*\])', content, re.DOTALL)
if match:
    json_str = match.group(1)
    try:
        exams_data = json.loads(json_str)
        
        # Add image property to all questions
        for exam in exams_data:
            for question in exam['questions']:
                if 'image' not in question:
                    question['image'] = ""
        
        # Convert back to JSON
        new_json_str = json.dumps(exams_data, indent=2)
        
        # Reconstruct the file content
        new_content = f"const examsData = {new_json_str};\n"
        
        with open('data.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated data.js with image properties")
        
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
else:
    print("Could not find examsData array in data.js")
