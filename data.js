const examsData = [
  {
    "id": "exam1",
    "title": "Checkpoint 3.5.3",
    "questions": [
      {
        "pytanie": "Which two tools could be used to gather DNS information passively? (Choose two.)",
        "opcje": [
          "Recon-ng",
          "Dig",
          "Wireshark",
          "Nmap",
          "ExifTool"
        ],
        "poprawna": [
          "Recon-ng",
          "Dig"
        ]
      },
      {
        "pytanie": "When performing passive reconnaissance, which Linux command can be used to identify the technical and administrative contacts of a given domain?",
        "opcje": [
          "netstat",
          "dig",
          "whois",
          "nmap"
        ],
        "poprawna": "whois"
      },
      {
        "pytanie": "Which specification defines the format used by image and sound files to capture metadata?",
        "opcje": [
          "Exchangeable Image File Format (Exif)",
          "Extensible Image File Format (Exif)",
          "Exchangeable File Format (EFF)",
          "Interchangeable File Format (IFF)"
        ],
        "poprawna": "Exchangeable Image File Format (Exif)"
      },
      {
        "pytanie": "Why would a penetration tester perform a passive reconnaissance scan instead of an active one?",
        "opcje": [
          "to collect information about a network without being detected",
          "because the time to perform the scan is limited",
          "because the root-level SSH credentials to a target have been compromised",
          "to test whether specific services or protocols are available on the network"
        ],
        "poprawna": "to collect information about a network without being detected"
      },
      {
        "pytanie": "What type of server is a penetration tester enumerating when they enter the nmap -sU command?",
        "opcje": [
          "DNS, SNMP, or DHCP server",
          "HTTP or HTTPS server",
          "POP3, IMAP, or SMTP server",
          "FTP server"
        ],
        "poprawna": "DNS, SNMP, or DHCP server"
      },
      {
        "pytanie": "What is the disadvantage of conducting an unauthenticated scan of a target when performing a penetration test?",
        "opcje": [
          "Vulnerability of services running inside the target may not be detected.",
          "The scanner will report the port as open whether or not the service on that network segment is listening or not.",
          "Unauthenticated scans are more likely to provide a lower rate of false positives than authenticated scans.",
          "Unauthenticated scans are a form of passive reconnaissance that return little useful information."
        ],
        "poprawna": "Vulnerability of services running inside the target may not be detected."
      },
      {
        "pytanie": "What is required for a penetration tester to conduct a comprehensive authenticated scan against a Linux host?",
        "opcje": [
          "user credentials with root-level access to the target system",
          "system user credentials",
          "physical on-premises access to the target system",
          "unauthenticated scans are a form of passive reconnaissance that return little useful information.",
          "backdoor access to the target system"
        ],
        "poprawna": "user credentials with root-level access to the target system"
      },
      {
        "pytanie": "In which circumstance would a penetration tester perform an unauthenticated scan of a target?",
        "opcje": [
          "when user credentials were not provided",
          "when the number of false positive vulnerability reports is not required",
          "when time is limited and faster scans are required",
          "when only targets with UDP services are to be scanned"
        ],
        "poprawna": "when user credentials were not provided"
      },
      {
        "pytanie": "Why would a penetration tester use the nmap -sF command?",
        "opcje": [
          "when a TCP SYN scan is detected by a network filter or firewall",
          "when the tester wants to conclude the scan",
          "when a TCP SYN scan reports more than one open port",
          "when the tester needs to time stamp the scan"
        ],
        "poprawna": "when a TCP SYN scan is detected by a network filter or firewall"
      },
      {
        "pytanie": "What is the purpose of host enumeration when beginning a penetration test?",
        "opcje": [
          "to identify all active IP addresses within the scope of the test",
          "to count the total number of IP addresses within the scope of the test",
          "to identify all vulnerable hosts within the scope of the test",
          "to count the total number of vulnerable hosts within the scope of the test"
        ],
        "poprawna": "to identify all active IP addresses within the scope of the test"
      },
      {
        "pytanie": "What can be deduced when a tester enters the nmap -sF command to perform a TCP FIN scan and the target host port does not respond?",
        "opcje": [
          "that the port is not responding to TCP traffic",
          "that the port is listening for UDP traffic",
          "that the port is open",
          "that the port is not ready to close the TCP connection"
        ],
        "poprawna": "that the port is open"
      },
      {
        "pytanie": "What is the disadvantage of running a TCP Connect scan compared to running a TCP SYN scan during a penetration test?",
        "opcje": [
          "Both open and closed ports are detected.",
          "Indeterminate ICMP messages are generated.",
          "Hosts and addresses outside the scope of the test may be scanned.",
          "The extra packets required may trigger an IDS alarm."
        ],
        "poprawna": "The extra packets required may trigger an IDS alarm."
      },
      {
        "pytanie": "When a penetration test identifies a vulnerability, how should the vulnerability be further verified?",
        "opcje": [
          "determine if the vulnerability is exploitable",
          "prioritize the vulnerability severity",
          "assess the business risk associated with the vulnerability",
          "mitigate the vulnerability"
        ],
        "poprawna": "determine if the vulnerability is exploitable"
      },
      {
        "pytanie": "Why is the Common Vulnerabilities and Exposures (CVE) resource useful when investigating vulnerabilities detected by a penetration test?",
        "opcje": [
          "It is a high level list of software weaknesses.",
          "It is an international consolidation of cybersecurity tools and databases.",
          "It has three vulnerability score components.",
          "It is a dictionary of known attacks."
        ],
        "poprawna": "It is an international consolidation of cybersecurity tools and databases."
      },
      {
        "pytanie": "What is the purpose of applying the Common Vulnerability Scoring System (CVSS) to a vulnerability detected by a penetration test?",
        "opcje": [
          "to determine the priority of the vulnerability",
          "to determine the attack vector that applies to the vulnerability",
          "to accurately record how the vulnerability was detected",
          "to calculate the severity of the vulnerability"
        ],
        "poprawna": "to calculate the severity of the vulnerability"
      },
      {
        "pytanie": "A threat actor is looking at the IT and technical job postings of a target organization. What would be the most beneficial information to capture from these postings?",
        "opcje": [
          "the type of hardware and software used",
          "the salaries of the positions listed",
          "the hours of work required by the roles listed",
          "the employment benefits offered by the company"
        ],
        "poprawna": "the type of hardware and software used"
      },
      {
        "pytanie": "How is open-source intelligence (OSINT) gathering typically implemented during a penetration test?",
        "opcje": [
          "by using public internet searches",
          "by installing and running the OSINT API",
          "by sending phishing emails",
          "by using nmap for web page and web application enumerations"
        ],
        "poprawna": "by using public internet searches"
      },
      {
        "pytanie": "What initial information can be obtained when performing user enumeration in a penetration test?",
        "opcje": [
          "the IP addresses of the target hosts",
          "a valid list of users",
          "the credentials of a specified user",
          "access to the target internal network"
        ],
        "poprawna": "a valid list of users"
      },
      {
        "pytanie": "What useful information can be obtained by running a network share enumeration scan during a penetration test?",
        "opcje": [
          "systems on a network that are sharing files, folders, and printers",
          "the usernames and password credentials of users on the network",
          "all vulnerable hosts on the network",
          "lists of the attack vectors that can exploit the network"
        ],
        "poprawna": "systems on a network that are sharing files, folders, and printers"
      },
      {
        "pytanie": "A penetration tester must run a vulnerability scan against a target. What is the benefit of running an authenticated scan instead of an unauthenticated scan?",
        "opcje": [
          "Authenticated scans can provide a more detailed picture of the target attack surface.",
          "Authenticated scans are a form of passive reconnaissance that does not trigger target security alarms.",
          "Authenticated scans are performed without user credentials.",
          "Authenticated scans are less complex and are quicker than unauthenticated scans."
        ],
        "poprawna": "Authenticated scans can provide a more detailed picture of the target attack surface."
      },
      {
        "pytanie": "What are three considerations when planning a vulnerability scan on a target production network during a penetration test? (Choose three.)",
        "opcje": [
          "the timing of the scan",
          "the trained personnel available to analyze the scan results",
          "the available network bandwidth",
          "the network topology",
          "authenticated scans are less complex and are quicker than unauthenticated scans",
          "the available scanning tools",
          "the scan reporting requirement"
        ],
        "poprawna": [
          "the timing of the scan",
          "the available network bandwidth",
          "the network topology"
        ]
      },
      {
        "pytanie": "When performing a vulnerability scan of a target, how can adverse impacts on traversed devices be minimized?",
        "opcje": [
          "Unauthenticated vulnerability scans should be performed.",
          "Only passive reconnaissance scans should be performed.",
          "The scan should be performed as close to the target as possible.",
          "Scanning policy options should include query throttling."
        ],
        "poprawna": "The scan should be performed as close to the target as possible."
      },
      {
        "pytanie": "A company hires a cybersecurity consultant to conduct a penetration test to assess vulnerabilities in network systems. The consultant is preparing the final report to send to the company. What is an important feature of a final penetration test report?",
        "opcje": [
          "It gives an accurate presentation of vulnerabilities.",
          "It follows expected report presentation standards and style.",
          "It is a summary of general information so non-technical managers can understand it.",
          "It is made publicly available to all interested parties."
        ],
        "poprawna": "It gives an accurate presentation of vulnerabilities."
      },
      {
        "pytanie": "What is the advantage of using the target Wi-Fi network for reconnaissance packet inspection?",
        "opcje": [
          "The packet scan takes less time wirelessly compared to using the target wired network.",
          "More information can be captured wirelessly compared to using the target wired network.",
          "Fewer false positive vulnerabilities are detected.",
          "Physical access to the building may not be required."
        ],
        "poprawna": "Physical access to the building may not be required."
      },
      {
        "pytanie": "What guidance does the NIST Cybersecurity Framework provide to help improve an organization’s cybersecurity posture?",
        "opcje": [
          "The framework provides a global consolidation of cybersecurity tools and databases.",
          "The framework lists cyber attacks that have been seen in the real world.",
          "The framework provides a vulnerability scoring system.",
          "The framework outlines standards and industry best practices."
        ],
        "poprawna": "The framework outlines standards and industry best practices."
      }
    ]
  },
  {
    "id": "exam2",
    "title": "Checkpoint 4.6.3",
    "questions": [
      {
        "pytanie": "What type of threat allows an attacker to obtain the credentials of a bank client by spoofing the login webpage of a financial institution?",
        "opcje": [
          "piggybacking",
          "vishing",
          "whaling",
          "malvertising"
        ],
        "poprawna": "malvertising"
      },
      {
        "pytanie": "What is a watering hole attack?",
        "opcje": [
          "an attack carried out in a phone conversation",
          "an attack targeted at high-profile business executives and key individuals in a company",
          "an attack that exploits a website that is commonly accessed by members of a targeted organization",
          "an attack performed by an unauthorized person who tags along with an authorized person to gain entry to a restricted area"
        ],
        "poprawna": "an attack that exploits a website that is commonly accessed by members of a targeted organization"
      },
      {
        "pytanie": "What is the act of gaining knowledge or information from a victim without directly asking for that particular information?",
        "opcje": [
          "influence",
          "elicitation",
          "interrogation",
          "impersonation"
        ],
        "poprawna": "elicitation"
      },
      {
        "pytanie": "A threat actor has altered the host file for a commonly accessed website on the computer of a victim. Now when the user clicks on the website link, they are redirected to a malicious website. What type of attack has the threat actor accomplished?",
        "opcje": [
          "phishing",
          "vishing",
          "pharming",
          "tailgating"
        ],
        "poprawna": "pharming"
      },
      {
        "pytanie": "Why would a threat actor use the Social-Engineering Toolkit (SET)?",
        "opcje": [
          "to send a spear phishing email",
          "to spoof a phone number",
          "to manipulate users by leveraging XSS vulnerabilities",
          "to practice social engineering elicitation, interrogation, and pretexting skills"
        ],
        "poprawna": "to send a spear phishing email"
      },
      {
        "pytanie": "Which option is a voice over IP management tool that can be used to impersonate caller ID?",
        "opcje": [
          "SpoofCard",
          "Asterisk",
          "SpoofApp",
          "Nikto"
        ],
        "poprawna": "Asterisk"
      },
      {
        "pytanie": "A salesperson is attempting to convince a customer to buy a product because limited supplies are available. Which social engineering method of influence is being used by the salesperson?",
        "opcje": [
          "social proof",
          "authority",
          "likeness",
          "scarcity"
        ],
        "poprawna": "scarcity"
      },
      {
        "pytanie": "What method of influence is characterized when a celebrity endorses a product on social media?",
        "opcje": [
          "social proof",
          "scarcity",
          "authority",
          "fear"
        ],
        "poprawna": "social proof"
      },
      {
        "pytanie": "Apple is a company constantly working towards making its products and processes more environmentally friendly. Therefore, the Apple brand is associated with ideals and values that customers can relate to and support. What method of influence is being used by Apple?",
        "opcje": [
          "fear",
          "scarcity",
          "authority",
          "likeness"
        ],
        "poprawna": "likeness"
      },
      {
        "pytanie": "A threat actor has sent a phishing email to a victim stating that suspicious activity has been detected on their bank account and that they must immediately click on a provided link to change their password. What method of influence is being used by the threat actor?",
        "opcje": [
          "social proof",
          "authority",
          "likeness",
          "urgency"
        ],
        "poprawna": "urgency"
      },
      {
        "pytanie": "Which social engineering physical attack statement is correct?",
        "opcje": [
          "In the tailgating attack, an unauthorized person tags along with an authorized person to gain entry to a restricted area with the person’s consent.",
          "In the piggybacking attack, an unauthorized person tags along with an authorized person to gain entry to a restricted area without the person’s consent.",
          "Badge cloning attacks cannot be performed by software.",
          "Shoulder surfing can be prevented by using special screen filters for computer displays."
        ],
        "poprawna": "Shoulder surfing can be prevented by using special screen filters for computer displays."
      },
      {
        "pytanie": "Which tool provides a threat actor a web console to manipulate users who are victims of cross-site scripting (XSS) attacks?",
        "opcje": [
          "Asterisk",
          "SET",
          "BeEF",
          "Nikto"
        ],
        "poprawna": "BeEF"
      },
      {
        "pytanie": "Which Apple iOS and Android tool can be used to spoof a phone number?",
        "opcje": [
          "SpoofApp",
          "Nessus",
          "Asterisk",
          "BeEF"
        ],
        "poprawna": "SpoofApp"
      },
      {
        "pytanie": "What two physical attacks are mitigated by using access control vestibules? (Choose two.)",
        "opcje": [
          "shoulder surfing",
          "dumpster diving",
          "tailgating",
          "badge cloning",
          "piggybacking"
        ],
        "poprawna": [
          "tailgating",
          "piggybacking"
        ]
      },
      {
        "pytanie": "Which two access control options are commonly used in conjunction with access control vestibules? (Choose two.)",
        "opcje": [
          "proximity card and PIN",
          "turnstile",
          "security guard",
          "toll collector",
          "biometric scan"
        ],
        "poprawna": [
          "proximity card and PIN",
          "biometric scan"
        ]
      },
      {
        "pytanie": "Which resource would mitigate piggybacking and tailgating?",
        "opcje": [
          "security guard",
          "camera",
          "“no trespassing” warnings",
          "badge/card access"
        ],
        "poprawna": "security guard"
      },
      {
        "pytanie": "Which tool can launch social engineering attacks and be integrated with third-party tools and frameworks such as Metasploit?",
        "opcje": [
          "BeEF",
          "Nessus",
          "SET",
          "Asterisk"
        ],
        "poprawna": "SET"
      },
      {
        "pytanie": "Who is the target of a whaling attack?",
        "opcje": [
          "upper managers such as the CEO or key individuals in an organization",
          "ordinary users",
          "user groups of social networks such as Facebook and Twitter",
          "companies that use animals in product testing"
        ],
        "poprawna": "upper managers such as the CEO or key individuals in an organization"
      },
      {
        "pytanie": "What is the purpose of a vishing attack?",
        "opcje": [
          "to create emails and web pages to collect sensitive information from a user",
          "to convince a victim on a phone call to disclose private or financial information",
          "to use text messages to send malware or malicious links to mobile devices of users",
          "to use USB sticks to compromise the systems of victims"
        ],
        "poprawna": "to convince a victim on a phone call to disclose private or financial information"
      },
      {
        "pytanie": "Which Apple iOS and Android tools can spoof a phone number, record calls, and generate different background noises?",
        "opcje": [
          "Nessus",
          "Asterisk",
          "SpoofCard",
          "BeEF"
        ],
        "poprawna": "SpoofCard"
      },
      {
        "pytanie": "A threat actor has sent a text message to a victim stating that they have won bitcoins in a bank contest. To claim their prize, the victim must click the provided link and enter their bank account information. What social engineering attack can be accomplished if the user enters their banking information?",
        "opcje": [
          "vishing",
          "SMS phishing",
          "whaling",
          "watering hole"
        ],
        "poprawna": "SMS phishing"
      },
      {
        "pytanie": "Which tool permits post-exploitation activities, such as Windows reverse VNC DLL and reverse TCP shell?",
        "opcje": [
          "BeEF",
          "SET",
          "Nessus",
          "Nikto"
        ],
        "poprawna": "SET"
      },
      {
        "pytanie": "Which tool can send fake notifications to the browser of a victim?",
        "opcje": [
          "Nexpose",
          "BeEF",
          "Nikto",
          "Asterisk"
        ],
        "poprawna": "BeEF"
      },
      {
        "pytanie": "A new employee is celebrating their position with a large company by posting a picture of their access identification on social media. What kind of physical attack has the new employee unknowingly enabled?",
        "opcje": [
          "watering hole",
          "pivot",
          "badge cloning",
          "shoulder surfing"
        ],
        "poprawna": "badge cloning"
      },
      {
        "pytanie": "A user has found a USB pen drive in the corporate parking lot. What should the user do with this pen drive?",
        "opcje": [
          "throw the pen drive away",
          "deliver the pen drive to the security sector of the company",
          "plug the pen drive into a computer of the company, try to delete all the files, and use the pen drive for personal use",
          "plug the pen drive into a computer of the company, try to access the files to identify who the pen drive belongs to"
        ],
        "poprawna": "deliver the pen drive to the security sector of the company"
      }
    ]
  }
];