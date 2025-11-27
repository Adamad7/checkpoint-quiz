from bs4 import BeautifulSoup
import json

html_content = """
<p><strong>1. What type of threat allows an attacker to obtain the credentials of a bank client by spoofing the login webpage of a financial institution?</strong></p>
<ul>
<li>piggybacking</li>
<li>vishing</li>
<li>whaling</li>
<li class="correct_answer">malvertising</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Malvertising involves incorporating malicious ads on trusted websites. Users who click these ads are inadvertently redirected to sites hosting malware.</p></div>
<p><strong>2. What is a watering hole attack?</strong></p><div class="92f2483bb651eed307c93e619d752c78" data-index="2" style="float: none; margin:10px 0 10px 0; text-align:center;">
<div id="adngin-incontent_auto_large-0"></div>
</div>

<ul>
<li>an attack carried out in a phone conversation</li>
<li>an attack targeted at high-profile business executives and key individuals in a company</li>
<li class="correct_answer">an attack that exploits a website that is commonly accessed by members of a targeted organization</li>
<li>an attack performed by an unauthorized person who tags along with an authorized person to gain entry to a restricted area</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> A watering hole attack is targeted when an attacker profiles websites the intended victim accesses. The attacker then scans those websites for possible vulnerabilities.</p></div>
<p><strong>3. What is the act of gaining knowledge or information from a victim without directly asking for that particular information?</strong></p>
<ul>
<li>influence</li>
<li class="correct_answer">elicitation</li>
<li>interrogation</li>
<li>impersonation</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Elicitation is the act of gaining knowledge or information from people. In most cases, an attacker gets information from a victim without directly asking for that particular information.</p></div>
<p><strong>4. A threat actor has altered the host file for a commonly accessed website on the computer of a victim. Now when the user clicks on the website link, they are redirected to a malicious website. What type of attack has the threat actor accomplished?</strong></p>
<ul>
<li>phishing</li>
<li>vishing</li>
<li class="correct_answer">pharming</li>
<li>tailgating</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Pharming is an impersonation attack in which a threat actor redirects a victim from a valid website or resource to a malicious one that could be made to appear as a valid site to the user. Pharming can be done by altering the host file on the victim&#8217;s system, through DNS poisoning, or by exploiting a vulnerability in a DNS server.</p></div>
<p><strong>5. Why would a threat actor use the Social-Engineering Toolkit (SET)?</strong></p>
<ul>
<li class="correct_answer">to send a spear phishing email</li>
<li>to spoof a phone number</li>
<li>to manipulate users by leveraging XSS vulnerabilities</li>
<li>to practice social engineering elicitation, interrogation, and pretexting skills</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The Social-Engineer Toolkit (SET) is a tool that can be used to launch numerous social engineering attacks and can be integrated with third-party tools and frameworks such as Metasploit. SET can be used to create spear phishing emails easily.</p></div>
<p><strong>6. Which option is a voice over IP management tool that can be used to impersonate caller ID?</strong></p>
<ul>
<li>SpoofCard</li>
<li class="correct_answer">Asterisk</li>
<li>SpoofApp</li>
<li>Nikto</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Several call spoofing tools can be used in social engineering attacks. Asterisk is one of these tools. It is a legitimate voice-over IP (VOIP) management tool that can also be used to impersonate caller ID.</p></div>
<p><strong>7. A salesperson is attempting to convince a customer to buy a product because limited supplies are available. Which social engineering method of influence is being used by the salesperson?</strong></p>
<ul>
<li>social proof</li>
<li>authority</li>
<li>likeness</li>
<li class="correct_answer">scarcity</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Scarcity is a method of influence that can create a feeling of urgency in a decision-making context. Salespeople often use scarcity to manipulate clients.</p></div>
<p><strong>8. What method of influence is characterized when a celebrity endorses a product on social media?</strong></p>
<ul>
<li class="correct_answer">social proof</li>
<li>scarcity</li>
<li>authority</li>
<li>fear</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Social proof is a method of influence in which an individual cannot determine the appropriate mode of behavior. For example, a person might see others acting or doing something in a certain way and assume it is appropriate. Social engineers may manipulate multiple people at once by using this technique.</p></div>
<p><strong>9. Apple is a company constantly working towards making its products and processes more environmentally friendly. Therefore, the Apple brand is associated with ideals and values that customers can relate to and support. What method of influence is being used by Apple?</strong></p>
<ul>
<li>fear</li>
<li>scarcity</li>
<li>authority</li>
<li class="correct_answer">likeness</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Likeness is a method of influence in which things or people can influence individuals they like—most individuals like what is aesthetically pleasing.</p></div>
<p><strong>10. A threat actor has sent a phishing email to a victim stating that suspicious activity has been detected on their bank account and that they must immediately click on a provided link to change their password. What method of influence is being used by the threat actor?</strong></p>
<ul>
<li>social proof</li>
<li>authority</li>
<li>likeness</li>
<li class="correct_answer">urgency</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Scarcity is a method of influence that can create a feeling of urgency in a decision-making context. Specific language can be used to heighten urgency and manipulate the victim. In this scenario, the email appeared to be sent from a bank, an authoritative body in the eyes of the victim. The attacker also created a perception of urgency, and a scarcity of time, which increased the likelihood of action.</p></div>
<p><strong>11. Which social engineering physical attack statement is correct?</strong></p>
<ul>
<li>In the tailgating attack, an unauthorized person tags along with an authorized person to gain entry to a restricted area with the person&#8217;s consent.</li>
<li>In the piggybacking attack, an unauthorized person tags along with an authorized person to gain entry to a restricted area without the person&#8217;s consent.</li>
<li>Badge cloning attacks cannot be performed by software.</li>
<li class="correct_answer">Shoulder surfing can be prevented by using special screen filters for computer displays.</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> There are various types of physical attacks. With piggybacking, unauthorized person tags along with an authorized person to gain entry to a restricted area, usually with the person&#8217;s consent. Tailgating is the same but usually occurs without the authorized consent of the person. In badge cloning attacks, specialized software and hardware can perform such attacks. With shoulder surfing, someone obtains information such as personally identifiable information, passwords, and other confidential data by looking over the shoulder of the victim. There are special screen filters for computer displays to prevent someone from seeing the screen at an angle.</p></div>
<p><strong>12. Which tool provides a threat actor a web console to manipulate users who are victims of cross-site scripting (XSS) attacks?</strong></p>
<ul>
<li>Asterisk</li>
<li>SET</li>
<li class="correct_answer">BeEF</li>
<li>Nikto</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Browser Exploitation Framework (BeEF) is a tool that can be used to manipulate users by leveraging XSS vulnerabilities. The tool starts a web service on port 3000 by default. From there, the attacker can log in to a web console and manipulate users who are victims of XSS attacks.</p></div>
<p><strong>13. Which Apple iOS and Android tool can be used to spoof a phone number?</strong></p>
<ul>
<li class="correct_answer">SpoofApp</li>
<li>Nessus</li>
<li>Asterisk</li>
<li>BeEF</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Several call spoofing tools can be used in social engineering attacks. SpoofApp is an Apple iOS and Android app that can easily spoof a phone number. Asterisk is a legitimate VoIP management tool that can also be used to impersonate caller ID. BeEF and Nessus are not called spoofing tools.</p></div>
<p><strong>14. What two physical attacks are mitigated by using access control vestibules? (Choose two.)</strong></p><div class="92f2483bb651eed307c93e619d752c78" data-index="1" style="float: none; margin:10px 0 10px 0; text-align:center;">
<div id="adngin-incontent_auto-0"></div>
</div>

<ul>
<li>shoulder surfing</li>
<li>dumpster diving</li>
<li class="correct_answer">tailgating</li>
<li>badge cloning</li>
<li class="correct_answer">piggybacking</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Piggybacking and tailgating can be defeated through access control vestibules, formerly mantraps. An access control vestibule is a small space that usually fits only one person. It has two sets of closely spaced doors; the first set must be closed before the other will open, creating a sort of waiting room where people are identified (and cannot escape).</p></div>
<p><strong>15. Which two access control options are commonly used in conjunction with access control vestibules? (Choose two.)</strong></p>
<ul>
<li class="correct_answer">proximity card and PIN</li>
<li>turnstile</li>
<li>security guard</li>
<li>toll collector</li>
<li class="correct_answer">biometric scan</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Multifactor authentication is often used in conjunction with an access control vestibule. For example, a proximity card and PIN may be required at the first door and a biometric scan at the second.</p></div>
<p><strong>16. Which resource would mitigate piggybacking and tailgating?</strong></p>
<ul>
<li class="correct_answer">security guard</li>
<li>camera</li>
<li>&#8220;no trespassing&#8221; warnings</li>
<li>badge/card access</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> An access control vestibule is an example of a preventive security control. Turnstiles, double entry doors, and security guards can eliminate piggybacking and tailgating and help address confidentiality. These options are less expensive and less effective than access control vestibules.</p></div>
<p><strong>17. Which tool can launch social engineering attacks and be integrated with third-party tools and frameworks such as Metasploit?</strong></p>
<ul>
<li>BeEF</li>
<li>Nessus</li>
<li class="correct_answer">SET</li>
<li>Asterisk</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Social-Engineer Toolkit (SET) is a tool that can be used to launch numerous social engineering attacks and can be integrated with third-party tools and frameworks such as Metasploit. SET is installed by default in Kali Linux and Parrot Security.</p></div>
<p><strong>18. Who is the target of a whaling attack?</strong></p>
<ul>
<li class="correct_answer">upper managers such as the CEO or key individuals in an organization</li>
<li>ordinary users</li>
<li>user groups of social networks such as Facebook and Twitter</li>
<li>companies that use animals in product testing</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Whaling is an attack targeted at a company&#8217;s high-profile business executives and key individuals. The main goal in whaling attacks is to steal sensitive information or compromise the victim&#8217;s system and then target other key high-profile victims.</p></div>
<p><strong>19. What is the purpose of a vishing attack?</strong></p>
<ul>
<li>to create emails and web pages to collect sensitive information from a user</li>
<li class="correct_answer">to convince a victim on a phone call to disclose private or financial information</li>
<li>to use text messages to send malware or malicious links to mobile devices of users</li>
<li>to use USB sticks to compromise the systems of victims</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Vishing is a social engineering attack carried out in a phone conversation. The attacker persuades the user to reveal private personal and financial information or information about another person or company. The goal is typically to steal credit card numbers, Social Security numbers, and other information that can be used in identity theft schemes.</p></div>
<p><strong>20. Which Apple iOS and Android tools can spoof a phone number, record calls, and generate different background noises?</strong></p>
<ul>
<li>Nessus</li>
<li>Asterisk</li>
<li class="correct_answer">SpoofCard</li>
<li>BeEF</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Several call spoofing tools can be used in social engineering attacks. SpoofCard is an Apple iOS and Android app that can spoof a number and change a voice, record calls, generate different background noises, and send calls straight to voicemail. Asterisk is a legitimate VoIP management tool that can also be used to impersonate caller ID. BeEF and Nessus are not called spoofing tools.</p></div>
<p><strong>21. A threat actor has sent a text message to a victim stating that they have won bitcoins in a bank contest. To claim their prize, the victim must click the provided link and enter their bank account information. What social engineering attack can be accomplished if the user enters their banking information?</strong></p>
<ul>
<li>vishing</li>
<li class="correct_answer">SMS phishing</li>
<li>whaling</li>
<li>watering hole</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> One example of social engineering attack is Short Message Service (SMS) phishing. SMS phishing is the bitcoin-related SMS scams that have surfaced in recent years. Numerous victims have received messages instructing these users to click on links to confirm user accounts and claim Bitcoin.</p></div>
<p><strong>22. Which tool permits post-exploitation activities, such as Windows reverse VNC DLL and reverse TCP shell?</strong></p>
<ul>
<li>BeEF</li>
<li class="correct_answer">SET</li>
<li>Nessus</li>
<li>Nikto</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Social Engineer Toolkit (SET) is a tool that can be used to launch numerous social engineering attacks. It allows the performance of some post-exploitation activities, such as spawning a Meterpreter shell, Windows reverse VNC DLL, reverse TCP shell, Windows Shell Bind_TCP, and Windows Meterpreter Reverse HTTPS.</p></div>
<p><strong>23. Which tool can send fake notifications to the browser of a victim?</strong></p>
<ul>
<li>Nexpose</li>
<li class="correct_answer">BeEF</li>
<li>Nikto</li>
<li>Asterisk</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Browser Exploitation Framework (BeEF) is a tool that can be used to manipulate users by leveraging XSS vulnerabilities. BeEF can perform numerous attacks (including social engineering attacks). For example, the attacker can send fake notifications to the victim&#8217;s browser. Asterisk is a legitimate VoIP management tool that can also be used to impersonate caller ID. Nikto and Nexpose are vulnerability scanning tools.</p></div>
<p><strong>24. A new employee is celebrating their position with a large company by posting a picture of their access identification on social media. What kind of physical attack has the new employee unknowingly enabled?</strong></p>
<ul>
<li>watering hole</li>
<li>pivot</li>
<li class="correct_answer">badge cloning</li>
<li>shoulder surfing</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Attackers can perform different badge cloning attacks. Attackers can often leverage pictures of people´s badges on social media. Attackers can often obtain detailed information about corporate badges&#8217; design (look and feel) from social media websites such as Twitter, Instagram, and LinkedIn when people post photos showing their badges when they get new jobs or leave old ones.</p></div>
<p><strong>25. A user has found a USB pen drive in the corporate parking lot. What should the user do with this pen drive?</strong></p>
<ul>
<li>throw the pen drive away</li>
<li class="correct_answer">deliver the pen drive to the security sector of the company</li>
<li>plug the pen drive into a computer of the company, try to delete all the files, and use the pen drive for personal use</li>
<li>plug the pen drive into a computer of the company, try to access the files to identify who the pen drive belongs to</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Many pen testers and attackers have used Universal Serial Bus (USB) drop key attacks to successfully compromise victim systems. This attack involves leaving USB sticks (USB keys or USB pen drives) unattended or placing these pen drives in strategic locations. Frequently, users think these devices are lost and insert these pen drives into the systems to figure out whom to return the devices to;w it, they download before they know and install malware. Plugging in that USB stick lying on the street outside an office could lead to a security breach. The best thing to do is to deliver the pen drive to the security sector of the company.</p></div>
"""

soup = BeautifulSoup(html_content, 'html.parser')

questions = []
for p in soup.find_all('p'):
    if p.find('strong'):
        question_text = p.get_text().strip()
        # Remove the leading number (e.g., "1. ")
        if question_text[0].isdigit():
             parts = question_text.split('.', 1)
             if len(parts) > 1:
                 question_text = parts[1].strip()
        
        ul = p.find_next_sibling('ul')
        if ul:
            options = []
            correct_answers = []
            for li in ul.find_all('li'):
                option_text = li.get_text().strip()
                options.append(option_text)
                if 'correct_answer' in li.get('class', []):
                    correct_answers.append(option_text)
            
            # Determine if single or multiple choice
            if len(correct_answers) == 1:
                correct = correct_answers[0]
            else:
                correct = correct_answers
            
            questions.append({
                "pytanie": question_text,
                "opcje": options,
                "poprawna": correct
            })

print(json.dumps(questions, indent=2))
