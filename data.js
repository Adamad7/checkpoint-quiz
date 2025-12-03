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
        ],
        "image": ""
      },
      {
        "pytanie": "When performing passive reconnaissance, which Linux command can be used to identify the technical and administrative contacts of a given domain?",
        "opcje": [
          "netstat",
          "dig",
          "whois",
          "nmap"
        ],
        "poprawna": "whois",
        "image": ""
      },
      {
        "pytanie": "Which specification defines the format used by image and sound files to capture metadata?",
        "opcje": [
          "Exchangeable Image File Format (Exif)",
          "Extensible Image File Format (Exif)",
          "Exchangeable File Format (EFF)",
          "Interchangeable File Format (IFF)"
        ],
        "poprawna": "Exchangeable Image File Format (Exif)",
        "image": ""
      },
      {
        "pytanie": "Why would a penetration tester perform a passive reconnaissance scan instead of an active one?",
        "opcje": [
          "to collect information about a network without being detected",
          "because the time to perform the scan is limited",
          "because the root-level SSH credentials to a target have been compromised",
          "to test whether specific services or protocols are available on the network"
        ],
        "poprawna": "to collect information about a network without being detected",
        "image": ""
      },
      {
        "pytanie": "What type of server is a penetration tester enumerating when they enter the nmap -sU command?",
        "opcje": [
          "DNS, SNMP, or DHCP server",
          "HTTP or HTTPS server",
          "POP3, IMAP, or SMTP server",
          "FTP server"
        ],
        "poprawna": "DNS, SNMP, or DHCP server",
        "image": ""
      },
      {
        "pytanie": "What is the disadvantage of conducting an unauthenticated scan of a target when performing a penetration test?",
        "opcje": [
          "Vulnerability of services running inside the target may not be detected.",
          "The scanner will report the port as open whether or not the service on that network segment is listening or not.",
          "Unauthenticated scans are more likely to provide a lower rate of false positives than authenticated scans.",
          "Unauthenticated scans are a form of passive reconnaissance that return little useful information."
        ],
        "poprawna": "Vulnerability of services running inside the target may not be detected.",
        "image": ""
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
        "poprawna": "user credentials with root-level access to the target system",
        "image": ""
      },
      {
        "pytanie": "In which circumstance would a penetration tester perform an unauthenticated scan of a target?",
        "opcje": [
          "when user credentials were not provided",
          "when the number of false positive vulnerability reports is not required",
          "when time is limited and faster scans are required",
          "when only targets with UDP services are to be scanned"
        ],
        "poprawna": "when user credentials were not provided",
        "image": ""
      },
      {
        "pytanie": "Why would a penetration tester use the nmap -sF command?",
        "opcje": [
          "when a TCP SYN scan is detected by a network filter or firewall",
          "when the tester wants to conclude the scan",
          "when a TCP SYN scan reports more than one open port",
          "when the tester needs to time stamp the scan"
        ],
        "poprawna": "when a TCP SYN scan is detected by a network filter or firewall",
        "image": ""
      },
      {
        "pytanie": "What is the purpose of host enumeration when beginning a penetration test?",
        "opcje": [
          "to identify all active IP addresses within the scope of the test",
          "to count the total number of IP addresses within the scope of the test",
          "to identify all vulnerable hosts within the scope of the test",
          "to count the total number of vulnerable hosts within the scope of the test"
        ],
        "poprawna": "to identify all active IP addresses within the scope of the test",
        "image": ""
      },
      {
        "pytanie": "What can be deduced when a tester enters the nmap -sF command to perform a TCP FIN scan and the target host port does not respond?",
        "opcje": [
          "that the port is not responding to TCP traffic",
          "that the port is listening for UDP traffic",
          "that the port is open",
          "that the port is not ready to close the TCP connection"
        ],
        "poprawna": "that the port is open",
        "image": ""
      },
      {
        "pytanie": "What is the disadvantage of running a TCP Connect scan compared to running a TCP SYN scan during a penetration test?",
        "opcje": [
          "Both open and closed ports are detected.",
          "Indeterminate ICMP messages are generated.",
          "Hosts and addresses outside the scope of the test may be scanned.",
          "The extra packets required may trigger an IDS alarm."
        ],
        "poprawna": "The extra packets required may trigger an IDS alarm.",
        "image": ""
      },
      {
        "pytanie": "When a penetration test identifies a vulnerability, how should the vulnerability be further verified?",
        "opcje": [
          "determine if the vulnerability is exploitable",
          "prioritize the vulnerability severity",
          "assess the business risk associated with the vulnerability",
          "mitigate the vulnerability"
        ],
        "poprawna": "determine if the vulnerability is exploitable",
        "image": ""
      },
      {
        "pytanie": "Why is the Common Vulnerabilities and Exposures (CVE) resource useful when investigating vulnerabilities detected by a penetration test?",
        "opcje": [
          "It is a high level list of software weaknesses.",
          "It is an international consolidation of cybersecurity tools and databases.",
          "It has three vulnerability score components.",
          "It is a dictionary of known attacks."
        ],
        "poprawna": "It is an international consolidation of cybersecurity tools and databases.",
        "image": ""
      },
      {
        "pytanie": "What is the purpose of applying the Common Vulnerability Scoring System (CVSS) to a vulnerability detected by a penetration test?",
        "opcje": [
          "to determine the priority of the vulnerability",
          "to determine the attack vector that applies to the vulnerability",
          "to accurately record how the vulnerability was detected",
          "to calculate the severity of the vulnerability"
        ],
        "poprawna": "to calculate the severity of the vulnerability",
        "image": ""
      },
      {
        "pytanie": "A threat actor is looking at the IT and technical job postings of a target organization. What would be the most beneficial information to capture from these postings?",
        "opcje": [
          "the type of hardware and software used",
          "the salaries of the positions listed",
          "the hours of work required by the roles listed",
          "the employment benefits offered by the company"
        ],
        "poprawna": "the type of hardware and software used",
        "image": ""
      },
      {
        "pytanie": "How is open-source intelligence (OSINT) gathering typically implemented during a penetration test?",
        "opcje": [
          "by using public internet searches",
          "by installing and running the OSINT API",
          "by sending phishing emails",
          "by using nmap for web page and web application enumerations"
        ],
        "poprawna": "by using public internet searches",
        "image": ""
      },
      {
        "pytanie": "What initial information can be obtained when performing user enumeration in a penetration test?",
        "opcje": [
          "the IP addresses of the target hosts",
          "a valid list of users",
          "the credentials of a specified user",
          "access to the target internal network"
        ],
        "poprawna": "a valid list of users",
        "image": ""
      },
      {
        "pytanie": "What useful information can be obtained by running a network share enumeration scan during a penetration test?",
        "opcje": [
          "systems on a network that are sharing files, folders, and printers",
          "the usernames and password credentials of users on the network",
          "all vulnerable hosts on the network",
          "lists of the attack vectors that can exploit the network"
        ],
        "poprawna": "systems on a network that are sharing files, folders, and printers",
        "image": ""
      },
      {
        "pytanie": "A penetration tester must run a vulnerability scan against a target. What is the benefit of running an authenticated scan instead of an unauthenticated scan?",
        "opcje": [
          "Authenticated scans can provide a more detailed picture of the target attack surface.",
          "Authenticated scans are a form of passive reconnaissance that does not trigger target security alarms.",
          "Authenticated scans are performed without user credentials.",
          "Authenticated scans are less complex and are quicker than unauthenticated scans."
        ],
        "poprawna": "Authenticated scans can provide a more detailed picture of the target attack surface.",
        "image": ""
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
        ],
        "image": ""
      },
      {
        "pytanie": "When performing a vulnerability scan of a target, how can adverse impacts on traversed devices be minimized?",
        "opcje": [
          "Unauthenticated vulnerability scans should be performed.",
          "Only passive reconnaissance scans should be performed.",
          "The scan should be performed as close to the target as possible.",
          "Scanning policy options should include query throttling."
        ],
        "poprawna": "The scan should be performed as close to the target as possible.",
        "image": ""
      },
      {
        "pytanie": "A company hires a cybersecurity consultant to conduct a penetration test to assess vulnerabilities in network systems. The consultant is preparing the final report to send to the company. What is an important feature of a final penetration test report?",
        "opcje": [
          "It gives an accurate presentation of vulnerabilities.",
          "It follows expected report presentation standards and style.",
          "It is a summary of general information so non-technical managers can understand it.",
          "It is made publicly available to all interested parties."
        ],
        "poprawna": "It gives an accurate presentation of vulnerabilities.",
        "image": ""
      },
      {
        "pytanie": "What is the advantage of using the target Wi-Fi network for reconnaissance packet inspection?",
        "opcje": [
          "The packet scan takes less time wirelessly compared to using the target wired network.",
          "More information can be captured wirelessly compared to using the target wired network.",
          "Fewer false positive vulnerabilities are detected.",
          "Physical access to the building may not be required."
        ],
        "poprawna": "Physical access to the building may not be required.",
        "image": ""
      },
      {
        "pytanie": "What guidance does the NIST Cybersecurity Framework provide to help improve an organization\u2019s cybersecurity posture?",
        "opcje": [
          "The framework provides a global consolidation of cybersecurity tools and databases.",
          "The framework lists cyber attacks that have been seen in the real world.",
          "The framework provides a vulnerability scoring system.",
          "The framework outlines standards and industry best practices."
        ],
        "poprawna": "The framework outlines standards and industry best practices.",
        "image": ""
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
        "poprawna": "malvertising",
        "image": ""
      },
      {
        "pytanie": "What is a watering hole attack?",
        "opcje": [
          "an attack carried out in a phone conversation",
          "an attack targeted at high-profile business executives and key individuals in a company",
          "an attack that exploits a website that is commonly accessed by members of a targeted organization",
          "an attack performed by an unauthorized person who tags along with an authorized person to gain entry to a restricted area"
        ],
        "poprawna": "an attack that exploits a website that is commonly accessed by members of a targeted organization",
        "image": ""
      },
      {
        "pytanie": "What is the act of gaining knowledge or information from a victim without directly asking for that particular information?",
        "opcje": [
          "influence",
          "elicitation",
          "interrogation",
          "impersonation"
        ],
        "poprawna": "elicitation",
        "image": ""
      },
      {
        "pytanie": "A threat actor has altered the host file for a commonly accessed website on the computer of a victim. Now when the user clicks on the website link, they are redirected to a malicious website. What type of attack has the threat actor accomplished?",
        "opcje": [
          "phishing",
          "vishing",
          "pharming",
          "tailgating"
        ],
        "poprawna": "pharming",
        "image": ""
      },
      {
        "pytanie": "Why would a threat actor use the Social-Engineering Toolkit (SET)?",
        "opcje": [
          "to send a spear phishing email",
          "to spoof a phone number",
          "to manipulate users by leveraging XSS vulnerabilities",
          "to practice social engineering elicitation, interrogation, and pretexting skills"
        ],
        "poprawna": "to send a spear phishing email",
        "image": ""
      },
      {
        "pytanie": "Which option is a voice over IP management tool that can be used to impersonate caller ID?",
        "opcje": [
          "SpoofCard",
          "Asterisk",
          "SpoofApp",
          "Nikto"
        ],
        "poprawna": "Asterisk",
        "image": ""
      },
      {
        "pytanie": "A salesperson is attempting to convince a customer to buy a product because limited supplies are available. Which social engineering method of influence is being used by the salesperson?",
        "opcje": [
          "social proof",
          "authority",
          "likeness",
          "scarcity"
        ],
        "poprawna": "scarcity",
        "image": ""
      },
      {
        "pytanie": "What method of influence is characterized when a celebrity endorses a product on social media?",
        "opcje": [
          "social proof",
          "scarcity",
          "authority",
          "fear"
        ],
        "poprawna": "social proof",
        "image": ""
      },
      {
        "pytanie": "Apple is a company constantly working towards making its products and processes more environmentally friendly. Therefore, the Apple brand is associated with ideals and values that customers can relate to and support. What method of influence is being used by Apple?",
        "opcje": [
          "fear",
          "scarcity",
          "authority",
          "likeness"
        ],
        "poprawna": "likeness",
        "image": ""
      },
      {
        "pytanie": "A threat actor has sent a phishing email to a victim stating that suspicious activity has been detected on their bank account and that they must immediately click on a provided link to change their password. What method of influence is being used by the threat actor?",
        "opcje": [
          "social proof",
          "authority",
          "likeness",
          "urgency"
        ],
        "poprawna": "urgency",
        "image": ""
      },
      {
        "pytanie": "Which social engineering physical attack statement is correct?",
        "opcje": [
          "In the tailgating attack, an unauthorized person tags along with an authorized person to gain entry to a restricted area with the person\u2019s consent.",
          "In the piggybacking attack, an unauthorized person tags along with an authorized person to gain entry to a restricted area without the person\u2019s consent.",
          "Badge cloning attacks cannot be performed by software.",
          "Shoulder surfing can be prevented by using special screen filters for computer displays."
        ],
        "poprawna": "Shoulder surfing can be prevented by using special screen filters for computer displays.",
        "image": ""
      },
      {
        "pytanie": "Which tool provides a threat actor a web console to manipulate users who are victims of cross-site scripting (XSS) attacks?",
        "opcje": [
          "Asterisk",
          "SET",
          "BeEF",
          "Nikto"
        ],
        "poprawna": "BeEF",
        "image": ""
      },
      {
        "pytanie": "Which Apple iOS and Android tool can be used to spoof a phone number?",
        "opcje": [
          "SpoofApp",
          "Nessus",
          "Asterisk",
          "BeEF"
        ],
        "poprawna": "SpoofApp",
        "image": ""
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
        ],
        "image": ""
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
        ],
        "image": ""
      },
      {
        "pytanie": "Which resource would mitigate piggybacking and tailgating?",
        "opcje": [
          "security guard",
          "camera",
          "\u201cno trespassing\u201d warnings",
          "badge/card access"
        ],
        "poprawna": "security guard",
        "image": ""
      },
      {
        "pytanie": "Which tool can launch social engineering attacks and be integrated with third-party tools and frameworks such as Metasploit?",
        "opcje": [
          "BeEF",
          "Nessus",
          "SET",
          "Asterisk"
        ],
        "poprawna": "SET",
        "image": ""
      },
      {
        "pytanie": "Who is the target of a whaling attack?",
        "opcje": [
          "upper managers such as the CEO or key individuals in an organization",
          "ordinary users",
          "user groups of social networks such as Facebook and Twitter",
          "companies that use animals in product testing"
        ],
        "poprawna": "upper managers such as the CEO or key individuals in an organization",
        "image": ""
      },
      {
        "pytanie": "What is the purpose of a vishing attack?",
        "opcje": [
          "to create emails and web pages to collect sensitive information from a user",
          "to convince a victim on a phone call to disclose private or financial information",
          "to use text messages to send malware or malicious links to mobile devices of users",
          "to use USB sticks to compromise the systems of victims"
        ],
        "poprawna": "to convince a victim on a phone call to disclose private or financial information",
        "image": ""
      },
      {
        "pytanie": "Which Apple iOS and Android tools can spoof a phone number, record calls, and generate different background noises?",
        "opcje": [
          "Nessus",
          "Asterisk",
          "SpoofCard",
          "BeEF"
        ],
        "poprawna": "SpoofCard",
        "image": ""
      },
      {
        "pytanie": "A threat actor has sent a text message to a victim stating that they have won bitcoins in a bank contest. To claim their prize, the victim must click the provided link and enter their bank account information. What social engineering attack can be accomplished if the user enters their banking information?",
        "opcje": [
          "vishing",
          "SMS phishing",
          "whaling",
          "watering hole"
        ],
        "poprawna": "SMS phishing",
        "image": ""
      },
      {
        "pytanie": "Which tool permits post-exploitation activities, such as Windows reverse VNC DLL and reverse TCP shell?",
        "opcje": [
          "BeEF",
          "SET",
          "Nessus",
          "Nikto"
        ],
        "poprawna": "SET",
        "image": ""
      },
      {
        "pytanie": "Which tool can send fake notifications to the browser of a victim?",
        "opcje": [
          "Nexpose",
          "BeEF",
          "Nikto",
          "Asterisk"
        ],
        "poprawna": "BeEF",
        "image": ""
      },
      {
        "pytanie": "A new employee is celebrating their position with a large company by posting a picture of their access identification on social media. What kind of physical attack has the new employee unknowingly enabled?",
        "opcje": [
          "watering hole",
          "pivot",
          "badge cloning",
          "shoulder surfing"
        ],
        "poprawna": "badge cloning",
        "image": ""
      },
      {
        "pytanie": "A user has found a USB pen drive in the corporate parking lot. What should the user do with this pen drive?",
        "opcje": [
          "throw the pen drive away",
          "deliver the pen drive to the security sector of the company",
          "plug the pen drive into a computer of the company, try to delete all the files, and use the pen drive for personal use",
          "plug the pen drive into a computer of the company, try to access the files to identify who the pen drive belongs to"
        ],
        "poprawna": "deliver the pen drive to the security sector of the company",
        "image": ""
      }
    ]
  },
  {
    "id": "checkpoint5-7",
    "title": "Checkpoint 5-7",
    "questions": [
      {
        "pytanie": "Which privilege level is predefined for the privileged EXEC mode?",
        "opcje": [
          "level 0",
          "level 1",
          "level 15",
          "level 16"
        ],
        "poprawna": "level 15",
        "image": ""
      },
      {
        "pytanie": "What is a requirement to use the Secure Copy Protocol feature?",
        "opcje": [
          "At least one user with privilege level 1 has to be configured for local authentication.",
          "A command must be issued to enable the SCP server side functionality.",
          "A transfer can only originate from SCP clients that are routers.",
          "The Telnet protocol has to be configured on the SCP server side."
        ],
        "poprawna": "A command must be issued to enable the SCP server side functionality.",
        "image": ""
      },
      {
        "pytanie": "Which three items are prompted for a user response during interactive AutoSecure setup? (Choose three.)",
        "opcje": [
          "IP addresses of interfaces",
          "content of a security banner",
          "enable secret password",
          "services to disable",
          "enable password",
          "interfaces to enable"
        ],
        "poprawna": [
          "content of a security banner",
          "enable secret password",
          "enable password"
        ],
        "image": ""
      },
      {
        "pytanie": "Which syslog message type is accessible only to an administrator and only via the Cisco CLI?",
        "opcje": [
          "errors",
          "alerts",
          "debugging",
          "emergency"
        ],
        "poprawna": "debugging",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. What two statements describe the NTP status of the router? (Choose two.)",
        "opcje": [
          "The router is serving as an authoritative time source.",
          "The software clock for the router must be configured with the set clock command so that NTP will function properly.",
          "The router is attached to a stratum 2 device.",
          "The router is serving as a time source for the device at 192.168.1.1.",
          "The IP address of the time source for the router is 192.168.1.1."
        ],
        "poprawna": [
          "The router is attached to a stratum 2 device.",
          "The IP address of the time source for the router is 192.168.1.1."
        ],
        "image": ""
      },
      {
        "pytanie": "An administrator needs to create a user account with custom access to most privileged EXEC commands. Which privilege command is used to create this custom account?",
        "opcje": [
          "privilege exec level 15",
          "privilege exec level 0",
          "privilege exec level 1",
          "privilege exec level 2"
        ],
        "poprawna": "privilege exec level 2",
        "image": ""
      },
      {
        "pytanie": "A network administrator is analyzing the features supported by the multiple versions of SNMP. What are two features that are supported by SNMPv3 but not by SNMPv1 or SNMPv2c? (Choose two.)",
        "opcje": [
          "message encryption",
          "community-based security",
          "SNMP trap mechanism",
          "message source validation",
          "bulk retrieval of MIB information"
        ],
        "poprawna": [
          "message encryption",
          "message source validation"
        ],
        "image": ""
      },
      {
        "pytanie": "A network administrator is configuring an AAA server to manage TACACS+ authentication. What are two attributes of TACACS+ authentication? (Choose two.)",
        "opcje": [
          "TCP port 40",
          "encryption for all communication",
          "single process for authentication and authorization",
          "UDP port 1645",
          "encryption for only the password of a user",
          "separate processes for authentication and authorization"
        ],
        "poprawna": [
          "encryption for all communication",
          "separate processes for authentication and authorization"
        ],
        "image": ""
      },
      {
        "pytanie": "What are two characteristics of the RADIUS protocol? (Choose two.)",
        "opcje": [
          "encryption of the entire body of the packet",
          "encryption of the password only",
          "the use of UDP ports for authentication and accounting",
          "the separation of the authentication and authorization processes",
          "the use of TCP port 49"
        ],
        "poprawna": [
          "encryption of the password only",
          "the use of UDP ports for authentication and accounting"
        ],
        "image": ""
      },
      {
        "pytanie": "What is the one major difference between local AAA authentication and using the login local command when configuring device access authentication?",
        "opcje": [
          "The login local command requires the administrator to manually configure the usernames and passwords, but local AAA authentication does not.",
          "Local AAA authentication allows more than one user account to be configured, but login local does not.",
          "Local AAA authentication provides a way to configure backup methods of authentication, but login local does not.",
          "The login local command uses local usernames and passwords stored on the router, but local AAA authentication does not."
        ],
        "poprawna": "Local AAA authentication provides a way to configure backup methods of authentication, but login local does not.",
        "image": ""
      },
      {
        "pytanie": "Which two UDP port numbers may be used for server-based AAA RADIUS authentication? (Choose two.)",
        "opcje": [
          "1812",
          "1645",
          "1813",
          "1646",
          "49"
        ],
        "poprawna": [
          "1812",
          "1645"
        ],
        "image": ""
      },
      {
        "pytanie": "Which command will move the show access-lists command to privilege level 14?",
        "opcje": [
          "router(config)# privilege level 14 command show access-lists",
          "router(config)# privilege exec level 14 show access-lists",
          "router(config)# set privilege level 14 show access-lists",
          "router(config)# show access-lists privilege level 14"
        ],
        "poprawna": "router(config)# privilege exec level 14 show access-lists",
        "image": ""
      },
      {
        "pytanie": "Which authentication method stores usernames and passwords in the router and is ideal for small networks?",
        "opcje": [
          "server-based AAA over TACACS+",
          "local AAA over RADIUS",
          "server-based AAA",
          "local AAA over TACACS+",
          "local AAA",
          "server-based AAA over RADIUS"
        ],
        "poprawna": "local AAA",
        "image": ""
      },
      {
        "pytanie": "What are three characteristics of superviews in the Cisco role-based CLI access feature? (Choose three.)",
        "opcje": [
          "A user uses the command enable view superview-name to enter a superview.",
          "A user uses a superview to configure commands inside associated CLI views.",
          "Commands cannot be configured for a superview.",
          "Level 15 privilege access is used to configure a new superview.",
          "Deleting a superview does not delete the associated CLI views.",
          "A single CLI view can be shared within multiple superviews."
        ],
        "poprawna": [
          "Commands cannot be configured for a superview.",
          "Deleting a superview does not delete the associated CLI views.",
          "A single CLI view can be shared within multiple superviews."
        ],
        "image": ""
      },
      {
        "pytanie": "A student is learning about role-based views and role-based view configurations. The student enters the Router(config)# parser view TECH-view command. What is the purpose of this command?",
        "opcje": [
          "to create a CLI view named TECH-view",
          "to enter the superview named TECH-view",
          "to check the current setup of the CLI view named TECH-view",
          "to enter the CLI view named TECH-view"
        ],
        "poprawna": "to create a CLI view named TECH-view",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. A student uses the show parser view all command to see a summary of all views configured on router R1. What is indicated by the symbol * next to JR-ADMIN?",
        "opcje": [
          "It is a root view.",
          "It is a CLI view without a command configured.",
          "It is a superview.",
          "It is a CLI view."
        ],
        "poprawna": "It is a superview.",
        "image": ""
      },
      {
        "pytanie": "What are two characteristics of the Cisco IOS Resilient Configuration feature? (Choose two.)",
        "opcje": [
          "It maintains a mirror image of the configuration file in RAM.",
          "It sends a backup copy of the IOS image to a TFTP server.",
          "It saves a secure copy of the primary image and device configuration that cannot be removed by a user.",
          "It minimizes the downtime of a device that has had the image and configuration deleted.",
          "It is a universal feature that can be activated on all Cisco devices."
        ],
        "poprawna": [
          "It saves a secure copy of the primary image and device configuration that cannot be removed by a user.",
          "It minimizes the downtime of a device that has had the image and configuration deleted."
        ],
        "image": ""
      },
      {
        "pytanie": "What IOS privilege levels are available to assign for custom user-level privileges?",
        "opcje": [
          "levels 1 through 15",
          "levels 0, 1, and 15",
          "levels 2 through 14",
          "levels 0 and 1"
        ],
        "poprawna": "levels 2 through 14",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. What information in the syslog message identifies the facility?",
        "opcje": [
          "ADJCHG",
          "Loading Done",
          "OSPF",
          "level 5"
        ],
        "poprawna": "OSPF",
        "image": ""
      },
      {
        "pytanie": "What is the biggest issue with local implementation of AAA?",
        "opcje": [
          "Local implementation supports only TACACS+ servers.",
          "Local implementation cannot provide secure authentication.",
          "Local implementation does not scale well.",
          "Local implementation supports only RADIUS servers."
        ],
        "poprawna": "Local implementation does not scale well.",
        "image": ""
      },
      {
        "pytanie": "Which task is necessary to encrypt the transfer of data between the ACS server and the AAA-enabled router?",
        "opcje": [
          "Configure the key exactly the same way on the server and the router.",
          "Specify the single-connection keyword.",
          "Create a VPN tunnel between the server and the router.",
          "Use identical reserved ports on the server and the router."
        ],
        "poprawna": "Configure the key exactly the same way on the server and the router.",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. Based on the output of the show running-config command, which type of view is SUPPORT?",
        "opcje": [
          "CLI view, containing SHOWVIEW and VERIFYVIEW commands",
          "superview, containing SHOWVIEW and VERIFYVIEW views",
          "secret view, with a level 5 encrypted password",
          "root view, with a level 5 encrypted secret password"
        ],
        "poprawna": "superview, containing SHOWVIEW and VERIFYVIEW views",
        "image": ""
      },
      {
        "pytanie": "A student is learning role-based CLI access and CLI view configurations. The student opens Packet Tracer and adds a router. Which command should be used first for creating a CLI view named TECH-View?",
        "opcje": [
          "Router# enable view",
          "Router(config)# aaa new-model",
          "Router# enable view TECH-view",
          "Router(config)# parser view TECH-view"
        ],
        "poprawna": "Router(config)# aaa new-model",
        "image": ""
      },
      {
        "pytanie": "A network engineer is implementing security on all company routers. Which two commands must be issued to force authentication via the password 1A2b3C for all OSPF-enabled interfaces in the backbone area of the company network? (Choose two.)",
        "opcje": [
          "area 0 authentication message-digest",
          "ip ospf message-digest-key 1 md5 1A2b3C",
          "username OSPF password 1A2b3C",
          "enable password 1A2b3C",
          "area 1 authentication message-digest"
        ],
        "poprawna": [
          "area 0 authentication message-digest",
          "ip ospf message-digest-key 1 md5 1A2b3C"
        ],
        "image": ""
      },
      {
        "pytanie": "Because of implemented security controls, a user can only access a server with FTP. Which AAA component accomplishes this?",
        "opcje": [
          "accessibility",
          "accounting",
          "auditing",
          "authentication",
          "authorization"
        ],
        "poprawna": "authorization",
        "image": ""
      },
      {
        "pytanie": "Which AAA component can be established using token cards?",
        "opcje": [
          "accounting",
          "authorization",
          "auditing",
          "authentication"
        ],
        "poprawna": "authentication",
        "image": ""
      },
      {
        "pytanie": "What is the primary function of the aaa authorization command?",
        "opcje": [
          "permit AAA server access to AAA client services",
          "limit authenticated user access to AAA client services",
          "permit authenticated user access to AAA client services",
          "limit AAA server access to AAA client services"
        ],
        "poprawna": "limit authenticated user access to AAA client services",
        "image": ""
      }
    ]
  },
  {
    "id": "checkpoint8-10",
    "title": "Checkpoint 8-10",
    "questions": [
      {
        "pytanie": "When creating an ACL, which keyword should be used to document and interpret the purpose of the ACL statement on a Cisco device?",
        "opcje": [
          "remark",
          "description",
          "established",
          "eq"
        ],
        "poprawna": "remark",
        "image": ""
      },
      {
        "pytanie": "Which two pieces of information are required when creating a standard access control list? (Choose two.)",
        "opcje": [
          "access list number between 1 and 99",
          "source address and wildcard mask",
          "destination address and wildcard mask",
          "subnet mask and wildcard mask",
          "access list number between 100 and 199"
        ],
        "poprawna": [
          "access list number between 1 and 99",
          "source address and wildcard mask"
        ],
        "image": ""
      },
      {
        "pytanie": "What two steps provide the quickest way to completely remove an ACL from a router? (Choose two.)",
        "opcje": [
          "Removal of the ACEs is the only step required.",
          "Modify the number of the ACL so that it doesn\u2019t match the ACL associated with the interface.",
          "Copy the ACL into a text editor, add no before each ACE, then copy the ACL back into the router.",
          "Remove the inbound/outbound reference to the ACL from the interface.",
          "Use the no access-list command to remove the entire ACL.",
          "Use the no keyword and the sequence number of every ACE within the named ACL to be removed."
        ],
        "poprawna": [
          "Remove the inbound/outbound reference to the ACL from the interface.",
          "Use the no access-list command to remove the entire ACL."
        ],
        "image": ""
      },
      {
        "pytanie": "Which two types of addresses should be denied inbound on a router interface that attaches to the Internet? (Choose two.)",
        "opcje": [
          "private IP addresses",
          "any IP address that starts with the number 127",
          "any IP address that starts with the number 1",
          "NAT translated IP addresses",
          "public IP addresses"
        ],
        "poprawna": [
          "private IP addresses",
          "any IP address that starts with the number 127"
        ],
        "image": ""
      },
      {
        "pytanie": "In the creation of an IPv6 ACL, what is the purpose of the implicit final command entries, permit icmp any any nd-na and permit icmp any any nd-ns ?",
        "opcje": [
          "to allow forwarding of ICMPv6 packets",
          "to allow automatic address configuration",
          "to allow IPv6 to MAC address resolution",
          "to allow forwarding of IPv6 multicast packets"
        ],
        "poprawna": "to allow IPv6 to MAC address resolution",
        "image": ""
      },
      {
        "pytanie": "What two statements describe characteristics of IPv6 access control lists? (Choose two.)",
        "opcje": [
          "They permit ICMPv6 router advertisements by default.",
          "They can be named or numbered.",
          "They include two implicit permit statements by default.",
          "They are applied to an interface with the ip access-group command .",
          "They use prefix lengths to indicate how much of an address to match."
        ],
        "poprawna": [
          "They include two implicit permit statements by default.",
          "They use prefix lengths to indicate how much of an address to match."
        ],
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. A network administrator created an IPv6 ACL to block the Telnet traffic from the 2001:DB8:CAFE:10::/64 network to the 2001:DB8:CAFE:30::/64 network. What is a command the administrator could use to allow only a single host 2001:DB8:CAFE:10::A/64 to telnet to the 2001:DB8:CAFE:30::/64 network?",
        "opcje": [
          "permit tcp 2001:DB8:CAFE:10::A/64 2001:DB8:CAFE:30::/64 eq 23",
          "permit tcp 2001:DB8:CAFE:10::A/64 eq 23 2001:DB8:CAFE:30::/64",
          "permit tcp host 2001:DB8:CAFE:10::A eq 23 2001:DB8:CAFE:30::/64",
          "permit tcp host 2001:DB8:CAFE:10::A 2001:DB8:CAFE:30::/64 eq 23 sequence 5"
        ],
        "poprawna": "permit tcp host 2001:DB8:CAFE:10::A 2001:DB8:CAFE:30::/64 eq 23 sequence 5",
        "image": ""
      },
      {
        "pytanie": "When implementing components into an enterprise network, what is the purpose of a firewall?",
        "opcje": [
          "A firewall is a system that inspects network traffic and makes forwarding decisions based solely on Layer 2 Ethernet MAC addresses.",
          "A firewall is a system that is designed to secure, monitor, and manage mobile devices, including corporate-owned devices and employee-owned devices.",
          "A firewall is a system that stores vast quantities of sensitive and business-critical information.",
          "A firewall is a system that enforces an access control policy between internal corporate networks and external networks."
        ],
        "poprawna": "A firewall is a system that enforces an access control policy between internal corporate networks and external networks.",
        "image": ""
      },
      {
        "pytanie": "What are two possible limitations of using a firewall in a network? (Choose two.)",
        "opcje": [
          "It provides accessibility of applications and sensitive resources to external untrusted users.",
          "It increases security management complexity by requiring off-loading network access control to the device.",
          "A misconfigured firewall can create a single point of failure.",
          "Network performance can slow down.",
          "It cannot sanitize protocol flows."
        ],
        "poprawna": [
          "A misconfigured firewall can create a single point of failure.",
          "Network performance can slow down."
        ],
        "image": ""
      },
      {
        "pytanie": "Which type of firewall makes use of a proxy server to connect to remote servers on behalf of clients?",
        "opcje": [
          "stateful firewall",
          "stateless firewall",
          "packet filtering firewall",
          "application gateway firewall"
        ],
        "poprawna": "application gateway firewall",
        "image": ""
      },
      {
        "pytanie": "How does a firewall handle traffic when it is originating from the public network and traveling to the private network?",
        "opcje": [
          "Traffic that is originating from the public network is not inspected when traveling to the private network.",
          "Traffic that is originating from the public network is usually blocked when traveling to the private network.",
          "Traffic that is originating from the public network is usually permitted with little or no restrictions when traveling to the private network.",
          "Traffic that is originating from the public network is selectively permitted when traveling to the private network."
        ],
        "poprawna": "Traffic that is originating from the public network is usually blocked when traveling to the private network.",
        "image": ""
      },
      {
        "pytanie": "Which two statements describe the two configuration models for Cisco IOS firewalls? (Choose two.)",
        "opcje": [
          "ZPF must be enabled in the router configuration before enabling an IOS Classic Firewall.",
          "The IOS Classic Firewall and ZPF cannot be combined on a single interface.",
          "IOS Classic Firewalls and ZPF models can be enabled on a router concurrently.",
          "Both IOS Classic Firewall and ZPF models require ACLs to define traffic filtering policies.",
          "IOS Classic Firewalls must be enabled in the router configuration before enabling ZPF."
        ],
        "poprawna": [
          "The IOS Classic Firewall and ZPF cannot be combined on a single interface.",
          "IOS Classic Firewalls and ZPF models can be enabled on a router concurrently."
        ],
        "image": ""
      },
      {
        "pytanie": "Designing a ZPF requires several steps. Which step involves dictating the number of devices between most-secure and least-secure zones and determining redundant devices?",
        "opcje": [
          "determine the zones",
          "design the physical infrastructure",
          "establish policies between zones",
          "identify subsets within zones and merge traffic requirements"
        ],
        "poprawna": "design the physical infrastructure",
        "image": ""
      },
      {
        "pytanie": "When a Cisco IOS zone-based policy firewall is being configured, which three actions can be applied to a traffic class? (Choose three.)",
        "opcje": [
          "pass",
          "shape",
          "reroute",
          "queue",
          "inspect",
          "drop"
        ],
        "poprawna": [
          "pass",
          "inspect",
          "drop"
        ],
        "image": ""
      },
      {
        "pytanie": "When using Cisco IOS zone-based policy firewall, where is the inspection policy applied?",
        "opcje": [
          "to a global service policy",
          "to a zone",
          "to an interface",
          "to a zone pair"
        ],
        "poprawna": "to a zone pair",
        "image": ""
      },
      {
        "pytanie": "What is the first step in configuring a Cisco IOS zone-based policy firewall via the CLI?",
        "opcje": [
          "Define traffic classes.",
          "Assign router interfaces to zones.",
          "Define firewall policies.",
          "Assign policy maps to zone pairs.",
          "Create zones."
        ],
        "poprawna": "Create zones.",
        "image": ""
      },
      {
        "pytanie": "What is one benefit of using a stateful firewall instead of a proxy server?",
        "opcje": [
          "ability to perform user authentication",
          "better performance",
          "ability to perform packet filtering",
          "prevention of Layer 7 attacks"
        ],
        "poprawna": "better performance",
        "image": ""
      },
      {
        "pytanie": "Which statement describes a typical security policy for a DMZ firewall configuration?",
        "opcje": [
          "Traffic that originates from the DMZ interface is selectively permitted to the outside interface.",
          "Return traffic from the inside that is associated with traffic originating from the outside is permitted to traverse from the inside interface to the outside interface.",
          "Return traffic from the outside that is associated with traffic originating from the inside is permitted to traverse from the outside interface to the DMZ interface.",
          "Traffic that originates from the inside interface is generally blocked entirely or very selectively permitted to the outside interface.",
          "Traffic that originates from the outside interface is permitted to traverse the firewall to the inside interface with few or no restrictions."
        ],
        "poprawna": "Traffic that originates from the DMZ interface is selectively permitted to the outside interface.",
        "image": ""
      },
      {
        "pytanie": "What is one limitation of a stateful firewall?",
        "opcje": [
          "weak user authentication",
          "cannot filter unnecessary traffic",
          "not as effective with UDP- or ICMP-based traffic",
          "poor log information"
        ],
        "poprawna": "not as effective with UDP- or ICMP-based traffic",
        "image": ""
      },
      {
        "pytanie": "Which statement describes Cisco IOS Zone-Based Policy Firewall operation?",
        "opcje": [
          "The pass action works in only one direction.",
          "Router management interfaces must be manually assigned to the self zone.",
          "A router interface can belong to multiple zones.",
          "Service policies are applied in interface configuration mode."
        ],
        "poprawna": "The pass action works in only one direction.",
        "image": ""
      },
      {
        "pytanie": "What is the result in the self zone if a router is the source or destination of traffic?",
        "opcje": [
          "No traffic is permitted.",
          "All traffic is permitted.",
          "Only traffic that originates in the router is permitted.",
          "Only traffic that is destined for the router is permitted."
        ],
        "poprawna": "All traffic is permitted.",
        "image": ""
      },
      {
        "pytanie": "What are two characteristics of ACLs? (Choose two.)",
        "opcje": [
          "Extended ACLs can filter on destination TCP and UDP ports.",
          "Standard ACLs can filter on source TCP and UDP ports.",
          "Extended ACLs can filter on source and destination IP addresses.",
          "Standard ACLs can filter on source and destination IP addresses.",
          "Standard ACLs can filter on source and destination TCP and UDP ports."
        ],
        "poprawna": [
          "Extended ACLs can filter on destination TCP and UDP ports.",
          "Extended ACLs can filter on source and destination IP addresses."
        ],
        "image": ""
      },
      {
        "pytanie": "Which three statements describe ACL processing of packets? (Choose three.)",
        "opcje": [
          "An implicit deny any rejects any packet that does not match any ACE.",
          "A packet can either be rejected or forwarded as directed by the ACE that is matched.",
          "A packet that has been denied by one ACE can be permitted by a subsequent ACE.",
          "A packet that does not match the conditions of any ACE will be forwarded by default.",
          "Each statement is checked only until a match is detected or until the end of the ACE list.",
          "Each packet is compared to the conditions of every ACE in the ACL before a forwarding decision is made."
        ],
        "poprawna": [
          "An implicit deny any rejects any packet that does not match any ACE.",
          "A packet can either be rejected or forwarded as directed by the ACE that is matched.",
          "Each statement is checked only until a match is detected or until the end of the ACE list."
        ],
        "image": ""
      },
      {
        "pytanie": "A network administrator configures an ACL with the command R1(config)# access-list 1 permit 172.16.0.0 0.0.15.255. Which two IP addresses will match this ACL statement? (Choose two.)",
        "opcje": [
          "172.16.0.255",
          "172.16.15.36",
          "172.16.16.12",
          "172.16.31.24",
          "172.16.65.21"
        ],
        "poprawna": [
          "172.16.0.255",
          "172.16.15.36"
        ],
        "image": ""
      },
      {
        "pytanie": "What single access list statement matches all of the following networks?",
        "opcje": [
          "access-list 10 permit 192.168.16.0 0.0.3.255",
          "access-list 10 permit 192.168.16.0 0.0.0.255",
          "access-list 10 permit 192.168.16.0 0.0.15.255",
          "access-list 10 permit 192.168.0.0 0.0.15.255"
        ],
        "poprawna": "access-list 10 permit 192.168.16.0 0.0.3.255",
        "image": ""
      },
      {
        "pytanie": "Which two characteristics are shared by both standard and extended ACLs? (Choose two.)",
        "opcje": [
          "Both kinds of ACLs can filter based on protocol type.",
          "Both can permit or deny specific services by port number.",
          "Both include an implicit deny as a final statement.",
          "Both filter packets for a specific destination host IP address.",
          "Both can be created by using either a descriptive name or number."
        ],
        "poprawna": [
          "Both include an implicit deny as a final statement.",
          "Both can be created by using either a descriptive name or number."
        ],
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. What is the result of adding the established argument to the end of the ACE?",
        "opcje": [
          "Any traffic is allowed to reach the 192.168.254.0 255.255.254.0 network.",
          "Any IP traffic is allowed to reach the 192.168.254.0 255.255.254.0 network as long as it is in response to an originated request.",
          "192.168.254.0 /23 traffic is allowed to reach any network.",
          "Any TCP traffic is allowed to reach the 192.168.254.0 255.255.254.0 network if it is in response to an originated request."
        ],
        "poprawna": "Any TCP traffic is allowed to reach the 192.168.254.0 255.255.254.0 network if it is in response to an originated request.",
        "image": ""
      },
      {
        "pytanie": "Which two keywords can be used in an access control list to replace a wildcard mask or address and wildcard mask pair? (Choose two.)",
        "opcje": [
          "most",
          "host",
          "all",
          "any",
          "some",
          "gt"
        ],
        "poprawna": [
          "host",
          "any"
        ],
        "image": ""
      },
      {
        "pytanie": "If the provided ACEs are in the same ACL, which ACE should be listed first in the ACL according to best practice?",
        "opcje": [
          "permit ip any any",
          "permit udp 172.16.0.0 0.0.255.255 host 172.16.1.5 eq snmptrap",
          "permit tcp 172.16.0.0 0.0.3.255 any established",
          "permit udp any any range 10000 20000",
          "deny udp any host 172.16.1.5 eq snmptrap",
          "deny tcp any any eq telnet"
        ],
        "poprawna": "permit udp 172.16.0.0 0.0.255.255 host 172.16.1.5 eq snmptrap",
        "image": ""
      },
      {
        "pytanie": "To facilitate the troubleshooting process, which inbound ICMP message should be permitted on an outside interface?",
        "opcje": [
          "echo request",
          "echo reply",
          "time-stamp request",
          "time-stamp reply",
          "router advertisement"
        ],
        "poprawna": "echo reply",
        "image": ""
      },
      {
        "pytanie": "A security specialist designs an ACL to deny access to a web server from all sales staff. The sales staff are assigned addressing from the IPv6 subnet 2001:db8:48:2c::/64. The web server is assigned the address 2001:db8:48:1c::50/64. Configuring the WebFilter ACL on the LAN interface for the sales staff will require which three commands? (Choose three.)",
        "opcje": [
          "permit tcp any host 2001:db8:48:1c::50 eq 80",
          "deny tcp host 2001:db8:48:1c::50 any eq 80",
          "deny tcp any host 2001:db8:48:1c::50 eq 80",
          "permit ipv6 any any",
          "deny ipv6 any any",
          "ip access-group WebFilter in",
          "ipv6 traffic-filter WebFilter in"
        ],
        "poprawna": [
          "deny tcp any host 2001:db8:48:1c::50 eq 80",
          "permit ipv6 any any",
          "ipv6 traffic-filter WebFilter in"
        ],
        "image": ""
      },
      {
        "pytanie": "What are two characteristics of a stateful firewall? (Choose two.)",
        "opcje": [
          "uses static packet filtering techniques",
          "uses connection information maintained in a state table",
          "analyzes traffic at Layers 3, 4 and 5 of the OSI model",
          "uses complex ACLs which can be difficult to configure",
          "prevents Layer 7 attacks"
        ],
        "poprawna": [
          "uses connection information maintained in a state table",
          "analyzes traffic at Layers 3, 4 and 5 of the OSI model"
        ],
        "image": ""
      },
      {
        "pytanie": "What are two differences between stateful and stateless firewalls? (Choose two.)",
        "opcje": [
          "A stateless firewall is able to filter sessions that use dynamic port negotiations while a stateful firewall cannot.",
          "A stateless firewall will examine each packet individually while a stateful firewall observes the state of a connection.",
          "A stateless firewall will provide more logging information than a stateful firewall.",
          "A stateful firewall will prevent spoofing by determining whether packets belong to an existing connection or are from an unauthorized source.",
          "A stateless firewall provides more stringent control over security than a stateful firewall."
        ],
        "poprawna": [
          "A stateless firewall will examine each packet individually while a stateful firewall observes the state of a connection.",
          "A stateful firewall will prevent spoofing by determining whether packets belong to an existing connection or are from an unauthorized source."
        ],
        "image": ""
      },
      {
        "pytanie": "When implementing a ZPF, what is the default security setting when forwarding traffic between two interfaces in the same zone?",
        "opcje": [
          "Traffic between interfaces in the same zone is selectively forwarded based on Layer 3 information.",
          "Traffic between interfaces in the same zone is not subject to any policy and passes freely.",
          "Traffic between interfaces in the same zone is blocked.",
          "Traffic between interfaces in the same zone is selectively forwarded based on the default policy restrictions."
        ],
        "poprawna": "Traffic between interfaces in the same zone is not subject to any policy and passes freely.",
        "image": ""
      },
      {
        "pytanie": "Which two rules about interfaces are valid when implementing a Zone-Based Policy Firewall? (Choose two.)",
        "opcje": [
          "If neither interface is a zone member, then the action is to pass traffic.",
          "If one interface is a zone member, but the other is not, all traffic will be passed.",
          "If both interfaces belong to the same zone-pair and a policy exists, all traffic will be passed.",
          "If both interfaces are members of the same zone, all traffic will be passed.",
          "If one interface is a zone member and a zone-pair exists, all traffic will be passed."
        ],
        "poprawna": [
          "If neither interface is a zone member, then the action is to pass traffic.",
          "If both interfaces are members of the same zone, all traffic will be passed."
        ],
        "image": ""
      }
    ]
  },
  {
    "id": "checkpoint5-3-3",
    "title": "Checkpoint 5.3.3",
    "questions": [
      {
        "pytanie": "Which NetBIOS service is used for connection-oriented communication?",
        "opcje": [
          "NetBIOS-NS",
          "NetBIOS-DGM",
          "NetBIOS-SSN",
          "LLMNR"
        ],
        "poprawna": "NetBIOS-SSN",
        "image": ""
      },
      {
        "pytanie": "Match the port type and number with the respective NetBIOS protocol service.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_160101.jpg"
      },
      {
        "pytanie": "What two features are present on DNS servers using BIND 9.5.0 and higher that help mitigate DNS cache\n        poisoning attacks? (Choose two.)",
        "opcje": [
          "randomization of ports",
          "provision of cryptographically secure DNS transaction identifiers",
          "exclusion of any trust relationships between DNS servers",
          "secure DNS data authentication",
          "prevention of any recursive DNS queries"
        ],
        "poprawna": [
          "randomization of ports",
          "provision of cryptographically secure DNS transaction identifiers"
        ],
        "image": ""
      },
      {
        "pytanie": "What UDP port number is used by SNMP protocol?",
        "opcje": [
          "161",
          "182",
          "128",
          "176"
        ],
        "poprawna": "161",
        "image": ""
      },
      {
        "pytanie": "Which is a characteristic of a DNS poisoning attack?",
        "opcje": [
          "The DNS server forward lookup zone is cleared.",
          "The DNS server reverse lookup zone is cleared.",
          "The DNS resolver cache is manipulated.",
          "The DNS server IP address is changed."
        ],
        "poprawna": "The DNS resolver cache is manipulated.",
        "image": ""
      },
      {
        "pytanie": "Which Kali Linux tool or script can gather information on devices configured for SNMP?",
        "opcje": [
          "snmp-check",
          "nslookup",
          "snmp-brute.nse",
          "snmp-netstat.nse"
        ],
        "poprawna": "snmp-check",
        "image": ""
      },
      {
        "pytanie": "Match the SMTP command with the respective description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_160121.jpg"
      },
      {
        "pytanie": "Which two best practices would help mitigate FTP server abuse and attacks? (Choose two.)",
        "opcje": [
          "limit anonymous logins to a select group of people",
          "edit the hosts file to limit the number of authorized DNS servers",
          "use encryption at rest",
          "consolidate all back-end databases on the FTP server",
          "require re-authentication of inactive sessions"
        ],
        "poprawna": [
          "use encryption at rest",
          "require re-authentication of inactive sessions"
        ],
        "image": ""
      },
      {
        "pytanie": "Which is a characteristic of the pass-the-hash attack?",
        "opcje": [
          "capture of a password hash (as opposed to the password characters) and using the same\n        hashed value for authentication and lateral access to other networked systems",
          "reverse engineering of the captured hash password and using the unencrypted password for authentication and\n        lateral access to other networked systems",
          "compromise of a SAM file and extraction of the password characters to use for authentication and lateral access\n        to other networked systems",
          "capture of the Windows password before the Kerberos hashing function and use of the unencrypted password for\n        authentication and lateral access to other networked systems"
        ],
        "poprawna": "capture of a password hash (as opposed to the password characters) and using the same\n        hashed value for authentication and lateral access to other networked systems",
        "image": ""
      },
      {
        "pytanie": "What is a Kerberoasting attack?",
        "opcje": [
          "It is an attempt to steal the hash value of a user credential and use it to create a new user session on the\n        same network.",
          "It attempts to manipulate Kerberos tickets based on available hashes by compromising a vulnerable system and\n        obtaining the local user credentials and password hashes.",
          "It is a post-exploitation attempt that is used to extract service account credential\n        hashes from Active Directory for offline cracking.",
          "It attempts to manipulate data being transferred by performing data corruption or modification."
        ],
        "poprawna": "It is a post-exploitation attempt that is used to extract service account credential\n        hashes from Active Directory for offline cracking.",
        "image": ""
      },
      {
        "pytanie": "Match the attack type with the respective description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_160139.jpg"
      },
      {
        "pytanie": "Match the attack type with the respective description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_160159.jpg"
      },
      {
        "pytanie": "Which tool can be used to perform a Disassociation attack?",
        "opcje": [
          "Airmon-ng",
          "nmap",
          "POODLE",
          "EMPIRE"
        ],
        "poprawna": "Airmon-ng",
        "image": ""
      },
      {
        "pytanie": "Which is a characteristic of a Bluesnarfing attack?",
        "opcje": [
          "An attack that is launched using common social engineering attacks, such as phishing attacks, can be performed\n        by impersonating a wireless AP or a captive portal to convince a user to enter the user credentials.",
          "An attack that can be performed using Bluetooth with vulnerable devices in range. It is commonly performed as\n        spam over Bluetooth connections using the OBEX protocol.",
          "An attack that can be performed using Bluetooth with vulnerable devices in range. This\n        attack actually steals information from the device of the victim.",
          "An attack involves modifying BLE messages between systems that would lead them to believe that they are\n        communicating with legitimate systems."
        ],
        "poprawna": "An attack that can be performed using Bluetooth with vulnerable devices in range. This\n        attack actually steals information from the device of the victim.",
        "image": ""
      },
      {
        "pytanie": "Which Wi-Fi protocol is most vulnerable to a brute-force attack during a Wi-Fi network\n        deployment?",
        "opcje": [
          "WPA2-EAP",
          "WPS",
          "WPA3",
          "WPA2-TKIP"
        ],
        "poprawna": "WPS",
        "image": ""
      },
      {
        "pytanie": "What does the MFP feature in the 802.11w standard do to protect against wireless attacks?",
        "opcje": [
          "It uses a PNL to maintain a list of trusted or preferred wireless networks.",
          "It uses a captive portal for all wireless associations.",
          "It inserts the 802.1q tag to protect the wireless frame.",
          "It helps defend against deauthentication attacks."
        ],
        "poprawna": "It helps defend against deauthentication attacks.",
        "image": ""
      },
      {
        "pytanie": "What is a DNS resolver cache on a Windows system?",
        "opcje": [
          "It is a database of all WINS records.",
          "It is a static database entry of all forward and reverse lookup zones.",
          "It is a temporary database that contains records of all the recent visits and attempted\n        visits to websites and other internet domains.",
          "It is a collective database of all Domain Name Service records of static and cached entries."
        ],
        "poprawna": "It is a temporary database that contains records of all the recent visits and attempted\n        visits to websites and other internet domains.",
        "image": ""
      },
      {
        "pytanie": "Match the TCP port number with the respective email protocol that uses it.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_160219-768x355.jpg"
      },
      {
        "pytanie": "Which is the default TCP port used in SMTP for non-encrypted communications?",
        "opcje": [
          "25",
          "110",
          "143",
          "993"
        ],
        "poprawna": "25",
        "image": ""
      },
      {
        "pytanie": "What is a characteristic of a Kerberos silver ticket attack?",
        "opcje": [
          "It uses forged service tickets for a given service on a particular server.",
          "It mimics the authentication hash on a particular server.",
          "It acts as the LDAP directory for authentication on a target server.",
          "It coverts the hashed value to the unencrypted value for an authentication attack on a particular server."
        ],
        "poprawna": "It uses forged service tickets for a given service on a particular server.",
        "image": ""
      },
      {
        "pytanie": "Which attack is a post-exploitation activity that an attacker uses to extract service account credential\n        hashes from Active Directory for offline cracking?",
        "opcje": [
          "MITM",
          "On-Path attack",
          "MAC spoofing",
          "Kerberoasting"
        ],
        "poprawna": "Kerberoasting",
        "image": ""
      },
      {
        "pytanie": "Which four items are needed by an attacker to create a silver ticket for a Kerberos silver ticket attack?\n        (Choose four.)",
        "opcje": [
          "hash value",
          "system account",
          "SID",
          "FQDN",
          "target service",
          "DNS forward lookup zone",
          "DNS resolver cache",
          "DNS reverse lookup zone"
        ],
        "poprawna": [
          "system account",
          "SID",
          "FQDN",
          "target service"
        ],
        "image": ""
      },
      {
        "pytanie": "Which kind of attack is an IP spoofing attack?",
        "opcje": [
          "On-path",
          "DDoS",
          "Pass-the-Hash",
          "Evil-Twin"
        ],
        "poprawna": "On-path",
        "image": ""
      },
      {
        "pytanie": "What is a common mitigation practice for ARP cache poisoning attacks on switches to prevent spoofing of\n        Layer 2 addresses?",
        "opcje": [
          "DHCP snooping",
          "DNSSEC",
          "DAI",
          "BIND 9.5"
        ],
        "poprawna": "DAI",
        "image": ""
      },
      {
        "pytanie": "An attacker is launching a reflected DDoS attack in which the response traffic is made up of packets that\n        are much larger than those that the attacker initially sent. Which type of attack is this?",
        "opcje": [
          "downgrade",
          "amplification",
          "on-path",
          "DNS cache poisoning"
        ],
        "poprawna": "amplification",
        "image": ""
      }
    ]
  }
];
