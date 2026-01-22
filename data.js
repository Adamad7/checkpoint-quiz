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
  ,
  {
    "id": "Endpoint Security Final Exam",
    "title": "endpoint_security_final_exam",
    "questions": [
      {
        "pytanie": "Which two commands could be used to check if DNS name resolution is working properly on a Windows PC? (Choose two.)",
        "opcje": [
          "ping cisco.com",
          "net cisco.com",
          "ipconfig /flushdns",
          "nslookup cisco.com",
          "nbtstat cisco.com"
        ],
        "poprawna": [
          "ping cisco.com",
          "nslookup cisco.com"
        ],
        "image": ""
      },
      {
        "pytanie": "A technician notices that an application is not responding to commands and that the computer seems to respond slowly when applications are opened. What is the best administrative tool to force the release of system resources from the unresponsive application?",
        "opcje": [
          "Event Viewer",
          "Add or Remove Programs",
          "System Restore",
          "Task Manager"
        ],
        "poprawna": "Task Manager",
        "image": ""
      },
      {
        "pytanie": "What is required in order to connect a Wi-Fi enabled laptop to a WPA secured wireless network?",
        "opcje": [
          "a MAC address",
          "a username and password",
          "a security encryption key",
          "an updated wireless driver"
        ],
        "poprawna": "a security encryption key",
        "image": ""
      },
      {
        "pytanie": "Why would an attacker want to spoof a MAC address?",
        "opcje": [
          "so that the attacker can launch another type of attack in order to gain access to the switch",
          "so that the attacker can capture traffic from multiple VLANs rather than from just the VLAN that is assigned to the port to which the attacker device is attached",
          "so that a switch on the LAN will start forwarding frames to the attacker instead of to the legitimate host",
          "so that a switch on the LAN will start forwarding all frames toward the device that is under control of the attacker (that can then capture the LAN traffic)"
        ],
        "poprawna": "so that a switch on the LAN will start forwarding frames to the attacker instead of to the legitimate host",
        "image": ""
      },
      {
        "pytanie": "What is a wireless security mode that requires a RADIUS server to authenticate wireless users?",
        "opcje": [
          "personal",
          "enterprise",
          "shared key",
          "WEP"
        ],
        "poprawna": "enterprise",
        "image": ""
      },
      {
        "pytanie": "What are three functions provided by the syslog service? (Choose three.)",
        "opcje": [
          "to select the type of logging information that is captured",
          "to provide traffic analysis",
          "to specify the destinations of captured messages",
          "to provide statistics on packets that are flowing through a Cisco device",
          "to gather logging information for monitoring and troubleshooting",
          "to periodically poll agents for data"
        ],
        "poprawna": [
          "to select the type of logging information that is captured",
          "to specify the destinations of captured messages",
          "to gather logging information for monitoring and troubleshooting"
        ],
        "image": ""
      },
      {
        "pytanie": "A network administrator is checking the system logs and notices unusual connectivity tests to multiple well-known ports on a server. What kind of potential network attack could this indicate?",
        "opcje": [
          "access",
          "denial of service",
          "reconnaissance",
          "information theft"
        ],
        "poprawna": "reconnaissance",
        "image": ""
      },
      {
        "pytanie": "A technician has installed a third party utility that is used to manage a Windows 7 computer. However, the utility does not automatically start whenever the computer is started. What can the technician do to resolve this problem?",
        "opcje": [
          "Set the application registry key value to one.",
          "Use the Add or Remove Programs utility to set program access and defaults.",
          "Change the startup type for the utility to Automatic in Services.",
          "Uninstall the program and then choose Add New Programs in the Add or Remove Programs utility to install the application."
        ],
        "poprawna": "Change the startup type for the utility to Automatic in Services.",
        "image": ""
      },
      {
        "pytanie": "What is the motivation of a white hat attacker?",
        "opcje": [
          "discovering weaknesses of networks and systems to improve the security level of these systems",
          "studying operating systems of various platforms to develop a new system",
          "fine tuning network devices to improve their performance and efficiency",
          "taking advantage of any vulnerability for illegal personal gain"
        ],
        "poprawna": "discovering weaknesses of networks and systems to improve the security level of these systems",
        "image": ""
      },
      {
        "pytanie": "Which two types of hackers are typically classified as grey hat hackers? (Choose two.)",
        "opcje": [
          "hacktivists",
          "cyber criminals",
          "state-sponsored hackers",
          "script kiddies",
          "vulnerability brokers"
        ],
        "poprawna": [
          "hacktivists",
          "vulnerability brokers"
        ],
        "image": ""
      },
      {
        "pytanie": "What are two shared characteristics of the IDS and the IPS? (Choose two.)",
        "opcje": [
          "Both have minimal impact on network performance.",
          "Both analyze copies of network traffic.",
          "Both are deployed as sensors.",
          "Both rely on an additional network device to respond to malicious traffic.",
          "Both use signatures to detect malicious traffic."
        ],
        "poprawna": [
          "Both are deployed as sensors.",
          "Both use signatures to detect malicious traffic."
        ],
        "image": ""
      },
      {
        "pytanie": "An attacker is sitting in front of a store and wirelessly copies emails and contact lists from nearby unsuspecting user devices. What type of attack is this?",
        "opcje": [
          "bluejacking",
          "RF jamming",
          "bluesnarfing",
          "smishing"
        ],
        "poprawna": "bluesnarfing",
        "image": ""
      },
      {
        "pytanie": "An organization allows employees to work from home two days a week. Which technology should be implemented to ensure data confidentiality as data is transmitted?",
        "opcje": [
          "SHS",
          "VLANS",
          "RAID",
          "VPN"
        ],
        "poprawna": "VPN",
        "image": ""
      },
      {
        "pytanie": "A new PC is taken out of the box, started up and connected to the Internet. Patches were downloaded and installed. Antivirus was updated. In order to further harden the operating system what can be done?",
        "opcje": [
          "Turn off the firewall.",
          "Remove unnecessary programs and services.",
          "Disconnect the computer from the network.",
          "Give the computer a nonroutable address.",
          "Install a hardware firewall.",
          "Remove the administrator account."
        ],
        "poprawna": "Remove unnecessary programs and services.",
        "image": ""
      },
      {
        "pytanie": "Which type of networks poses increasing challenges to cybersecurity specialists due to the growth of BYOD on campus?",
        "opcje": [
          "wired networks",
          "virtual networks",
          "wireless networks",
          "sneaker net"
        ],
        "poprawna": "wireless networks",
        "image": ""
      },
      {
        "pytanie": "What are two types of attacks used on DNS open resolvers? (Choose two.)",
        "opcje": [
          "ARP poisoning",
          "resource utilization",
          "cushioning",
          "amplification and reflection",
          "fast flux"
        ],
        "poprawna": [
          "resource utilization",
          "amplification and reflection"
        ],
        "image": ""
      },
      {
        "pytanie": "What would be the target of an SQL injection attack?",
        "opcje": [
          "database",
          "email",
          "DHCP",
          "DNS"
        ],
        "poprawna": "database",
        "image": ""
      },
      {
        "pytanie": "A security specialist is asked for advice on a security measure to prevent unauthorized hosts from accessing the home network of employees. Which measure would be most effective?",
        "opcje": [
          "Implement a VLAN.",
          "Implement intrusion detection systems.",
          "Implement RAID.",
          "Implement a firewall."
        ],
        "poprawna": "Implement a firewall.",
        "image": ""
      },
      {
        "pytanie": "Match the network service with the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2022/07/2024-09-26_104808-768x282.jpg"
      },
      {
        "pytanie": "Which method can be used to harden a device?",
        "opcje": [
          "allow USB auto-detection",
          "use SSH and disable the root account access over SSH",
          "allow default services to remain enabled",
          "maintain use of the same passwords"
        ],
        "poprawna": "use SSH and disable the root account access over SSH",
        "image": ""
      },
      {
        "pytanie": "Which user can override file permissions on a Linux computer?",
        "opcje": [
          "root user",
          "any user that has \u2018group\u2019 permission to the file",
          "only the creator of the file",
          "any user that has \u2018other\u2019 permission to the file"
        ],
        "poprawna": "root user",
        "image": ""
      },
      {
        "pytanie": "Which wireless parameter is used by an access point to broadcast frames that include the SSID?",
        "opcje": [
          "passive mode",
          "channel setting",
          "active mode",
          "security mode"
        ],
        "poprawna": "passive mode",
        "image": ""
      },
      {
        "pytanie": "What is the outcome when a Linux administrator enters the man man command?",
        "opcje": [
          "The man man command provides documentation about the man command",
          "The man man command provides a list of commands available at the current prompt",
          "The man man command opens the most recent log file",
          "The man man command configures the network interface with a manual address"
        ],
        "poprawna": "The man man command provides documentation about the man command",
        "image": ""
      },
      {
        "pytanie": "Which technique could be used by security personnel to analyze a suspicious file in a safe environment?",
        "opcje": [
          "whitelisting",
          "baselining",
          "blacklisting",
          "sandboxing"
        ],
        "poprawna": "sandboxing",
        "image": ""
      },
      {
        "pytanie": "What are three benefits of using symbolic links over hard links in Linux? (Choose three.)",
        "opcje": [
          "Symbolic links can be exported.",
          "They can be compressed.",
          "They can link to a file in a different file system.",
          "They can link to a directory.",
          "They can be encrypted.",
          "They can show the location of the original file."
        ],
        "poprawna": [
          "They can link to a file in a different file system.",
          "They can link to a directory.",
          "They can show the location of the original file."
        ],
        "image": ""
      },
      {
        "pytanie": "Which field in the IPv6 header points to optional network layer information that is carried in the IPv6 packet?",
        "opcje": [
          "traffic class",
          "version",
          "flow label",
          "next header"
        ],
        "poprawna": "next header",
        "image": ""
      },
      {
        "pytanie": "What is the term used when a malicious party sends a fraudulent email disguised as being from a legitimate, trusted source?",
        "opcje": [
          "phishing",
          "backdoor",
          "Trojan",
          "vishing"
        ],
        "poprawna": "phishing",
        "image": ""
      },
      {
        "pytanie": "Which technology is used by Cisco Advanced Malware Protection (AMP) in defending and protecting against known and emerging threats?",
        "opcje": [
          "website filtering and blacklisting",
          "threat intelligence",
          "network admission control",
          "network profiling"
        ],
        "poprawna": "threat intelligence",
        "image": ""
      },
      {
        "pytanie": "After host A receives a web page from server B, host A terminates the connection with server B. Match each option to its correct step in the normal termination proccess for a TCP connection.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2024/09/2024-09-26_150333-768x226.jpg"
      },
      {
        "pytanie": "A flood of packets with invalid source IP addresses requests a connection on the network. The server busily tries to respond, resulting in valid requests being ignored. What type of attack has occurred?",
        "opcje": [
          "TCP session hijacking",
          "TCP reset",
          "TCP SYN flood",
          "UDP flood"
        ],
        "poprawna": "TCP SYN flood",
        "image": ""
      },
      {
        "pytanie": "Which Windows tool can be used by a cybersecurity administrator to secure stand-alone computers that are not part of an active directory domain?",
        "opcje": [
          "Windows Defender",
          "Local Security Policy",
          "Windows Firewall",
          "PowerShell"
        ],
        "poprawna": "Local Security Policy",
        "image": ""
      },
      {
        "pytanie": "Match the correct sequence of steps typically taken by a threat actor carrying out a domain shadowing attack.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2022/07/2024-09-26_111311-768x331.jpg"
      },
      {
        "pytanie": "What is a feature of distributed firewalls?",
        "opcje": [
          "They combine the feature of host-based firewalls with centralized management.",
          "They all use an open sharing standard platform.",
          "They use only TCP wrappers to configure rule-based access control and logging systems.",
          "They use only iptables to configure network rules."
        ],
        "poprawna": "They combine the feature of host-based firewalls with centralized management.",
        "image": ""
      },
      {
        "pytanie": "What does the telemetry function provide in host-based security software?",
        "opcje": [
          "It updates the heuristic antivirus signature database.",
          "It enables host-based security programs to have comprehensive logging functions.",
          "It blocks the passage of zero-day attacks.",
          "It enables updates of malware signatures."
        ],
        "poprawna": "It enables host-based security programs to have comprehensive logging functions.",
        "image": ""
      },
      {
        "pytanie": "What is an attack vector as it relates to network security?",
        "opcje": [
          "a path by which a threat actor can gain access to an internal network device",
          "a defense-in-depth approach to security",
          "a particular section of a network design where security is applied",
          "a method of reverse engineering binary files"
        ],
        "poprawna": "a path by which a threat actor can gain access to an internal network device",
        "image": ""
      },
      {
        "pytanie": "What occurs when a rogue access point is added to a WLAN?",
        "opcje": [
          "Authorized access points can transmit excess traffic to rogue access points to help alleviate congestion.",
          "Unauthorized users can gain access to internal servers, thus causing a security hole.",
          "All traffic that uses the same channel as the rogue access point will be encrypted.",
          "All traffic that uses the same channel as the rogue access point will be required to authenticate."
        ],
        "poprawna": "Unauthorized users can gain access to internal servers, thus causing a security hole.",
        "image": ""
      },
      {
        "pytanie": "What is the reason for disabling SSID broadcasting and changing the default SSID on a wireless access point?",
        "opcje": [
          "The access point stops broadcasting its own MAC address, thus preventing unauthorized wireless clients from connecting to the network.",
          "Anyone with the default SSID can gain access to the access point and change the configuration.",
          "Disabling SSID broadcasting frees up radio frequency bandwidth and increases the data throughput of the access point.",
          "Wireless clients must then have the SSID manually configured to connect to the wireless network."
        ],
        "poprawna": "Wireless clients must then have the SSID manually configured to connect to the wireless network.",
        "image": ""
      },
      {
        "pytanie": "Which two options can limit the information discovered from port scanning? (Choose two.)",
        "opcje": [
          "encryption",
          "firewall",
          "authentication",
          "intrusion prevention system",
          "passwords"
        ],
        "poprawna": [
          "firewall",
          "intrusion prevention system"
        ],
        "image": ""
      },
      {
        "pytanie": "What does a rootkit modify?",
        "opcje": [
          "Microsoft Word",
          "operating system",
          "programs",
          "Notepad",
          "screen savers"
        ],
        "poprawna": "operating system",
        "image": ""
      },
      {
        "pytanie": "What is a nontechnical method that a cybercriminal would use to gather sensitive information from an organization?",
        "opcje": [
          "pharming",
          "man-in-the-middle",
          "social engineering",
          "ransomeware"
        ],
        "poprawna": "social engineering",
        "image": ""
      },
      {
        "pytanie": "Match the commonly used ports on a Linux server with the corresponding service.\n\nExplanation: Place the options in the following order:\n\n\n\nSMTP\n25\n\n\nDNS\n53\n\n\nHTTPS\n443\n\n\nTelnet\n23",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2022/07/2024-04-12_105814-768x271.jpg"
      },
      {
        "pytanie": "Which statement describes the anomaly-based intrusion detection approach?",
        "opcje": [
          "It compares the antivirus definition file to a cloud based repository for latest updates.",
          "It compares the signatures of incoming traffic to a known intrusion database.",
          "It compares the operations of a host against a well-defined security policy.",
          "It compares the behavior of a host to an established baseline to identify potential intrusions."
        ],
        "poprawna": "It compares the behavior of a host to an established baseline to identify potential intrusions.",
        "image": ""
      },
      {
        "pytanie": "Match the security service with the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2022/07/2025-05-26_154330-768x455.jpg"
      },
      {
        "pytanie": "What is an example of a local exploit?",
        "opcje": [
          "A threat actor tries to gain the user password of a remote host by using a keyboard capture software installed on it by a Trojan.",
          "A buffer overflow attack is launched against an online shopping website and causes the server crash.",
          "Port scanning is used to determine if the Telnet service is running on a remote server.",
          "A threat actor performs a brute force attack on an enterprise edge router to gain illegal access."
        ],
        "poprawna": "A threat actor tries to gain the user password of a remote host by using a keyboard capture software installed on it by a Trojan.",
        "image": ""
      },
      {
        "pytanie": "Match the tabs of the Windows 10 Task Manager to their functions.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2022/07/2024-09-26_105716-768x281.jpg"
      },
      {
        "pytanie": "In an attempt to prevent network attacks, cyber analysts share unique identifiable attributes of known attacks with colleagues. What three types of attributes or indicators of compromise are helpful to share? (Choose three.)",
        "opcje": [
          "netbios names of compromised firewalls",
          "BIOS of attacking systems",
          "features of malware files",
          "IP addresses of attack servers",
          "changes made to end system software",
          "system ID of compromised systems"
        ],
        "poprawna": [
          "features of malware files",
          "IP addresses of attack servers",
          "changes made to end system software"
        ],
        "image": ""
      },
      {
        "pytanie": "Which data state is maintained in NAS and SAN services?",
        "opcje": [
          "data in-process",
          "stored data",
          "data in-transit",
          "encrypted data"
        ],
        "poprawna": "stored data",
        "image": ""
      },
      {
        "pytanie": "What is the result of a passive ARP poisoning attack?",
        "opcje": [
          "Network clients experience a denial of service.",
          "Multiple subdomains are created.",
          "Data is modified in transit or malicious data is inserted in transit.",
          "Confidential information is stolen."
        ],
        "poprawna": "Confidential information is stolen.",
        "image": ""
      },
      {
        "pytanie": "The entrepreneur is concerned about company employees having uninterrupted access to important resources and data. Which of the CIA triad components would address the concern?",
        "opcje": [
          "integrity",
          "availability",
          "authentication",
          "confidentiality"
        ],
        "poprawna": "availability",
        "image": ""
      },
      {
        "pytanie": "Users report that a database file on the main server cannot be accessed. A database administrator verifies the issue and notices that the database file is now encrypted. The organization receives a threatening email demanding payment for the decryption of the database file. What type of attack has the organization experienced?",
        "opcje": [
          "Trojan horse",
          "ransomware",
          "DoS attack",
          "man-in-the-middle attack"
        ],
        "poprawna": "ransomware",
        "image": ""
      },
      {
        "pytanie": "Which is a Windows 10 feature that encrypts removable drives?",
        "opcje": [
          "BitLocker To Go",
          "MRT",
          "LeafPad",
          "XProtect"
        ],
        "poprawna": "BitLocker To Go",
        "image": ""
      },
      {
        "pytanie": "What is the function provided by the Burpsuite tool in Kali Linux?",
        "opcje": [
          "managing",
          "logging",
          "scanning",
          "penetration test"
        ],
        "poprawna": "penetration test",
        "image": ""
      },
      {
        "pytanie": "Which file system is for MAC OS X computers, and Windows users may use third-party software to open and save files from this file system?",
        "opcje": [
          "EXT",
          "exFAT",
          "HFS+",
          "NTFS"
        ],
        "poprawna": "HFS+",
        "image": ""
      },
      {
        "pytanie": "A student is learning about authentication protocols and how they are used to communicate with AAA servers. Which statement describes a characteristic of such protocols?",
        "opcje": [
          "TACACS+ is a standard mostly Cisco equipment support, while RADIUS is an open standard.",
          "TACACS+ combines authentication and authorization, while RADIUS separates AAA according to the AAA architecture.",
          "RADIUS is considered the more secure protocol because all RADIUS protocol exchanges are encrypted.",
          "RADIUS uses a bidirectional challenge and response (CHAP), while TACACS+ uses a unidirectional challenge."
        ],
        "poprawna": "TACACS+ is a standard mostly Cisco equipment support, while RADIUS is an open standard.",
        "image": ""
      },
      {
        "pytanie": "Which statement describes a characteristic on WLANs?",
        "opcje": [
          "IEEE 802.11 prescribes CSMA/CD for media access to proactively avoid collisions within the media.",
          "An attacker may not have to physically enter the workplace to gain access to a WLAN.",
          "Tethering is a variation of infrastructure mode",
          "The 5GHz band is more prone to interference than the 2.4 GHz."
        ],
        "poprawna": "An attacker may not have to physically enter the workplace to gain access to a WLAN.",
        "image": ""
      },
      {
        "pytanie": "What kind of attack is performed by a threat actor that places non-DNS traffic in DNS records?",
        "opcje": [
          "DNS resource utilization",
          "DNS cache poisoning",
          "DNS tunneling",
          "DNS amplification and reflection"
        ],
        "poprawna": "DNS tunneling",
        "image": ""
      },
      {
        "pytanie": "What are the characteristics of IPv4 and IPv6 protocols?",
        "opcje": [
          "IPv6 packets are not fragmented by routers, unlike IPv4 packets",
          "Both IP versions use the same checksum calculation",
          "Only IPv4 has a counter field to limit the lifetime of a packet on a network",
          "Both IP versions have the same size of header, but with different fields"
        ],
        "poprawna": "IPv6 packets are not fragmented by routers, unlike IPv4 packets",
        "image": ""
      },
      {
        "pytanie": "Which type of cyber threat would cause electrical power outages?",
        "opcje": [
          "Utility interruption",
          "Human error",
          "Sabotage",
          "Hardware failure"
        ],
        "poprawna": "Sabotage",
        "image": ""
      },
      {
        "pytanie": "Which statement describes a DNS stealth attack using threat actors’ double IP flux technique?",
        "opcje": ["They gather domain account credentials to silently create multiple sub-domains to be used during the attacks.",
          "They use it in malware to randomly generate domain names that can then be used as rendezvous points to command and control servers.",
          "They rapidly change the hostname to IP address mappings and to also change the authoritative name server to be difficult to identify the source of the attack.",
          "They hide phishing and malware delivery sites behind a quickly-changing network of compromised DNS hosts."
        ],
        "poprawna": "They rapidly change the hostname to IP address mappings and to also change the authoritative name server to be difficult to identify the source of the attack.",
        "image": ""
      },
      {
        "pytanie": "Which type of device provides an Internet connection through the use of a phone jack?",
        "opcje": ["cable modem", "Wi-Fi AP", "satellite modem", "DSL modem"],
        "poprawna": "DSL modem",
        "image": ""
      },
      {
        "pytanie": "Which three steps must be completed to manually connect an Android or IOS device to a secured wireless network? (Choose three.)",
        "opcje": ["Change the MAC address.",
          "Choose the correct security type.",
          "Activate the Bluetooth antenna.",
          "Input the authentication password.",
          "Set the IP address.",
          "Enter the network SSID."
        ],
        "poprawna": [
          "Choose the correct security type.",
          "Input the authentication password.",
          "Enter the network SSID."
        ],
        "image": ""
      },
      {
        "pytanie": "A network technician attempts to ping http://www.example.net from a customer computer, but the ping fails. Access to mapped network drives and a shared printer are working correctly. What are two potential causes for this problem? (Choose two.)",
        "opcje": ["The HTTP protocol is not working properly on the target server.",
          "The target web server is down.",
          "The computer has been assigned a static IP address.",
          "The Windows domain or workgroup name that is configured on the computer is incorrect.",
          "DNS service is unavailable on the customer network."
        ],
        "poprawna": [
          "The target web server is down.",
          "DNS service is unavailable on the customer network."
        ],
        "image": ""
      },
      {
        "pytanie": "What layer is responsible for routing messages through an internetwork in the TCP/IP model?",
        "opcje": ["session", "internet", "network access", "transport"],
        "poprawna": "internet",
        "image": ""
      },
      {
        "pytanie": "An employee is having connectivity issues. Why might a network technician try to ping the default gateway from the employee laptop?",
        "opcje": ["to verify that the SVI interface on the switch is configured correctly",
          "to determine if the laptop address is included in the DNS server",
          "to verify that an IP address was provided by the DHCP server",
          "to verify connectivity with the device that provides access to remote networks"
        ],
        "poprawna": "to verify connectivity with the device that provides access to remote networks",
        "image": ""
      }
    ]
  }
  ,
  {
    "id": "ethical-hacker-quiz-7",
    "title": "Ethical Hacker Quiz 7",
    "questions": [
      {
        "pytanie": "Which term is an essential characteristic of cloud computing as defined in NIST SP 800-145?",
        "opcje": [
          "centralized storage",
          "resource pooling",
          "reduced bandwidth requirements",
          "slow elasticity"
        ],
        "poprawna": "resource pooling",
        "image": ""
      },
      {
        "pytanie": "Which cloud technology attack method involves breaching the infrastructure to gather and steal information such as valid usernames, passwords, tokens, and PINs?",
        "opcje": [
          "account takeover",
          "credential harvesting",
          "privilege escalation",
          "side-channel attacks"
        ],
        "poprawna": "credential harvesting",
        "image": ""
      },
      {
        "pytanie": "Which cloud technology attack method could exploit a bug in a software application to gain access to resources that normally would not be accessible to a user?",
        "opcje": [
          "account takeover",
          "credential harvesting",
          "privilege escalation",
          "side-channel attacks"
        ],
        "poprawna": "privilege escalation",
        "image": ""
      },
      {
        "pytanie": "Which term describes when a lower-privileged user accesses functions reserved for higher-privileged users?",
        "opcje": [
          "vertical privilege escalation",
          "horizontal privilege escalation",
          "credential harvesting",
          "metadata service attacks"
        ],
        "poprawna": "vertical privilege escalation",
        "image": ""
      },
      {
        "pytanie": "Which cloud technology attack method could a threat actor use to access a user or application account that allows access to more accounts and information?",
        "opcje": [
          "account takeover",
          "metadata service attacks",
          "resource exhaustion and DoS attacks",
          "side-channel attacks"
        ],
        "poprawna": "account takeover",
        "image": ""
      },
      {
        "pytanie": "Which tool could be used to find vulnerabilities that could lead to metadata service attacks?",
        "opcje": [
          "Nimbostratus",
          "Clair",
          "Falco",
          "Dagda"
        ],
        "poprawna": "Nimbostratus",
        "image": ""
      },
      {
        "pytanie": "Which cloud technology attack method could generate crafted packets to cause a cloud application to crash?",
        "opcje": [
          "resource exhaustion attack",
          "account takeover",
          "metadata service attack",
          "side-channel attack"
        ],
        "poprawna": "resource exhaustion attack",
        "image": ""
      },
      {
        "pytanie": "Which cloud technology attack method would require the threat actor to create a malicious application and install it into a SaaS, PaaS, or IaaS environment?",
        "opcje": [
          "resource exhaustion attack",
          "account takeover",
          "metadata service attack",
          "cloud malware injection attack"
        ],
        "poprawna": "cloud malware injection attack",
        "image": ""
      },
      {
        "pytanie": "What is a common cause of data breaches in attacks against misconfigured cloud assets?",
        "opcje": [
          "using insecure permission configurations for cloud object storage services",
          "using hard-coded credentials to access different services",
          "implementing metadata service to get a set of temporary access credentials",
          "adding sensitive information in user startup scripts"
        ],
        "poprawna": "using insecure permission configurations for cloud object storage services",
        "image": ""
      },
      {
        "pytanie": "A threat actor has compromised a VM in a cloud environment that shares the same physical hardware as non-compromised VMs. Which cloud technology attack method could now be used to exfiltrate credentials, cryptographic keys, and other sensitive information?",
        "opcje": [
          "side-channel attack",
          "cloud malware injection attack",
          "resource exhaustion attack",
          "account takeover"
        ],
        "poprawna": "side-channel attack",
        "image": ""
      },
      {
        "pytanie": "Which tool helps software developers and cloud consumers deploy applications in the cloud and use the resources that the cloud provider offers?",
        "opcje": [
          "Software development kits (SDKs)",
          "Cloud development kits (CDKs)",
          "Identity and access management (IAM)",
          "Nimbostratus"
        ],
        "poprawna": "Cloud development kits (CDKs)",
        "image": ""
      },
      {
        "pytanie": "Which mobile device vulnerability is targeted when a threat actor reverse engineers a mobile app to see how it creates and stores keys in the iOS Keychain?",
        "opcje": [
          "insecure storage",
          "passcode vulnerabilities and biometric integrations",
          "certificate pinning",
          "using known vulnerable components"
        ],
        "poprawna": "insecure storage",
        "image": ""
      },
      {
        "pytanie": "Which tool is an open-source framework used to test the security of iOS applications?",
        "opcje": [
          "Needle",
          "Drozer",
          "APK Studio",
          "ApkX"
        ],
        "poprawna": "Needle",
        "image": ""
      },
      {
        "pytanie": "Match the Bluetooth Low Energy (BLE) phase to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_143930-768x161.jpg"
      },
      {
        "pytanie": "Which option is a security vulnerability that affects IoT implementations?",
        "opcje": [
          "plaintext communication and data leakage",
          "VM escape vulnerabilities",
          "certificate pinning",
          "hyperjacking"
        ],
        "poprawna": "plaintext communication and data leakage",
        "image": ""
      },
      {
        "pytanie": "Which two IoT systems should never be exposed to the Internet? (Choose two.)",
        "opcje": [
          "turbines in a power plant",
          "robots in a factory",
          "refrigerators in a restaurant",
          "thermostat in a home",
          "carbon monoxide detectors in a home"
        ],
        "poprawna": [
          "turbines in a power plant",
          "robots in a factory"
        ],
        "image": ""
      },
      {
        "pytanie": "Which option is a collection of compute interface specifications designed to offer management and monitoring capabilities independently of the CPU, firmware, and operating system of the host?",
        "opcje": [
          "Intelligent Platform Management Interface (IPMI)",
          "Shodan",
          "Supervisory control and data acquisition (SCADA)",
          "Mobile Security Framework (MobSF)"
        ],
        "poprawna": "Intelligent Platform Management Interface (IPMI)",
        "image": ""
      },
      {
        "pytanie": "A threat actor uploaded a VM with malicious software to the VMware Marketplace. When an organization deploys the VM, the threat actor can manipulate the systems, applications, and user data. What type of VM vulnerability has been enabled?",
        "opcje": [
          "VM repository vulnerability",
          "Hypervisor vulnerability",
          "Hyperjacking",
          "VM escape vulnerability"
        ],
        "poprawna": "VM repository vulnerability",
        "image": ""
      },
      {
        "pytanie": "Which tool is a set of open-source analysis tools that uses the ClamAV antivirus engine to help detect vulnerabilities, Trojans, backdoors, and malware in Docker images and containers?",
        "opcje": [
          "Anchore\u2019s Grype",
          "Clair",
          "Dagda",
          "Falco"
        ],
        "poprawna": "Dagda",
        "image": ""
      },
      {
        "pytanie": "Which credential harvesting tool could be used to send a spear phishing email with a link to a malicious site to a target victim?",
        "opcje": [
          "Social-Engineer Toolkit (SET)",
          "Searchsploit",
          "Drozer",
          "Dagda"
        ],
        "poprawna": "Social-Engineer Toolkit (SET)",
        "image": ""
      },
      {
        "pytanie": "Why do cloud architectures help minimize the impact of DoS or DDoS attacks compared to hosting services on-premise?",
        "opcje": [
          "cloud providers use a distributed architecture",
          "cloud providers provide sandbox analysis",
          "cloud providers limit network exposure to the internet",
          "cloud providers use Intelligent Platform Management Interfaces (IPMI)"
        ],
        "poprawna": "cloud providers use a distributed architecture",
        "image": ""
      },
      {
        "pytanie": "Which option is a characteristic of a VM hypervisor?",
        "opcje": [
          "Type 1 hypervisors are also known as native or bare-metal hypervisors.",
          "Type 1 hypervisors run on top of other operating systems.",
          "Type 2 hypervisors include VMware ESXi and Microsoft Hyper-V.",
          "Type 2 hypervisors run directly on the physical (bare-metal) system."
        ],
        "poprawna": "Type 1 hypervisors are also known as native or bare-metal hypervisors.",
        "image": ""
      },
      {
        "pytanie": "A threat actor has compromised a VM in a data center and discovered a vulnerability that provides access to data in another VM. What type of VM vulnerability has been discovered?",
        "opcje": [
          "VM escape vulnerability",
          "VM repository vulnerability",
          "Hypervisor vulnerability",
          "Hyperjacking"
        ],
        "poprawna": "VM escape vulnerability",
        "image": ""
      },
      {
        "pytanie": "Which tool can be used to perform on-path attacks in BLE implementations?",
        "opcje": [
          "GATTacker",
          "Social-Engineer Toolkit (SET)",
          "Nimbostratus",
          "Dagda"
        ],
        "poprawna": "GATTacker",
        "image": ""
      },
      {
        "pytanie": "Which tool is an open-source container vulnerability scanner that can be used to find vulnerabilities in a Docker image?",
        "opcje": [
          "Anchore\u2019s Grype",
          "GATTacker",
          "Social-Engineer Toolkit (SET)",
          "Nimbostratus"
        ],
        "poprawna": "Anchore\u2019s Grype",
        "image": ""
      }
    ]
  }
  ,
  {
    "id": "ethical-hacker-quiz-9",
    "title": "Ethical Hacker Quiz 9",
    "questions": [
      {
        "pytanie": "Which industry-standard method has created a catalog of known vulnerabilities that provides a score indicating the severity of a vulnerability?",
        "opcje": [
          "CVSS",
          "CVE",
          "OWASP WSTG",
          "NIST SP 800-115"
        ],
        "poprawna": "CVSS",
        "image": ""
      },
      {
        "pytanie": "Which vulnerability catalog creates a list of publicly known vulnerabilities, each assigned an ID number, description, and reference?",
        "opcje": [
          "CVE",
          "CVSS",
          "OWASP WSTG",
          "NIST SP 800-115"
        ],
        "poprawna": "CVE",
        "image": ""
      },
      {
        "pytanie": "Match the CVSS metric group with the respective information.",
        "opcje": [
          "Next"
        ],
        "poprawna": [
          "Next"
        ],
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_101852-768x186.jpg"
      },
      {
        "pytanie": "Which three items are included in the base metric group used by CVSS? (Choose three.)",
        "opcje": [
          "attack complexity",
          "integrity impact",
          "modified base metrics",
          "user interaction",
          "availability requirements",
          "remediation level"
        ],
        "poprawna": [
          "attack complexity",
          "integrity impact",
          "user interaction"
        ],
        "image": ""
      },
      {
        "pytanie": "Which item is included in the environmental metric group used by CVSS?",
        "opcje": [
          "privileges required",
          "confidentiality requirements",
          "report confidence",
          "availability impact"
        ],
        "poprawna": "confidentiality requirements",
        "image": ""
      },
      {
        "pytanie": "Which item is included in the temporal metric group used by CVSS?",
        "opcje": [
          "exploit code maturity",
          "integrity impact",
          "modified base metrics",
          "attack vector"
        ],
        "poprawna": "exploit code maturity",
        "image": ""
      },
      {
        "pytanie": "Which tool can ingest the results from many penetration testing tools a cybersecurity analyst uses and help this professional produce reports in formats such as CSV, HTML, and PDF?",
        "opcje": [
          "Dradis",
          "Mimikatz",
          "Nessus",
          "PowerSploit"
        ],
        "poprawna": "Dradis",
        "image": ""
      },
      {
        "pytanie": "Match the description to the respective control category.",
        "opcje": [
          "Next"
        ],
        "poprawna": [
          "Next"
        ],
        "image": "img/ethical-hacker-quiz-9-img-1.png"
      },
      {
        "pytanie": "Which two items are examples of technical controls that can be recommended as mitigations and remediation of the vulnerabilities found during a pen test? (Choose two.)",
        "opcje": [
          "multifactor authentication",
          "certificate management",
          "RBAC",
          "mandatory vacations",
          "access control vestibule"
        ],
        "poprawna": [
          "multifactor authentication",
          "certificate management"
        ],
        "image": ""
      },
      {
        "pytanie": "A recent pen-test results in a cybersecurity analyst report, including information on process-level remediation, patch management, and secrets management solutions. Which control category is represented by this example?",
        "opcje": [
          "technical",
          "administrative",
          "operational",
          "physical"
        ],
        "poprawna": "technical",
        "image": ""
      },
      {
        "pytanie": "Which document provides several cheat sheets and detailed guidance on preventing vulnerabilities such as cross-site scripting, SQL injection, and command injection?",
        "opcje": [
          "OWASP",
          "CVE",
          "GDPR",
          "CVSS"
        ],
        "poprawna": "OWASP",
        "image": ""
      },
      {
        "pytanie": "A cybersecurity analyst report should contain minimum password requirements and policies and procedures. These are examples that are included in which control category?",
        "opcje": [
          "technical",
          "administrative",
          "operational",
          "physical"
        ],
        "poprawna": "administrative",
        "image": ""
      },
      {
        "pytanie": "Which control category includes information on mandatory vacations and user training in the cybersecurity analyst report?",
        "opcje": [
          "technical",
          "administrative",
          "operational",
          "physical"
        ],
        "poprawna": "operational",
        "image": ""
      },
      {
        "pytanie": "When creating a cybersecurity analyst report, which control category includes information concerning the access control vestibule?",
        "opcje": [
          "technical",
          "administrative",
          "operational",
          "physical"
        ],
        "poprawna": "physical",
        "image": ""
      },
      {
        "pytanie": "Match the term to the respective description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-10_102008-768x272.jpg"
      },
      {
        "pytanie": "Which kind of event is also called a \u201cbenign trigger\u201d?",
        "opcje": [
          "false positive",
          "false negative",
          "true positive",
          "true negative"
        ],
        "poprawna": "false positive",
        "image": ""
      },
      {
        "pytanie": "What kind of events diminishes the value and urgency of real alerts?",
        "opcje": [
          "false positives",
          "false negatives",
          "true negatives",
          "true positives"
        ],
        "poprawna": "false positives",
        "image": ""
      },
      {
        "pytanie": "Which kinds of events are malicious activities not detected by a network security device?",
        "opcje": [
          "false positives",
          "false negatives",
          "true negatives",
          "true positives"
        ],
        "poprawna": "false negatives",
        "image": ""
      },
      {
        "pytanie": "Which kind of event occurs when an intrusion detection device identifies an activity as acceptable behavior and the activity is acceptable?",
        "opcje": [
          "false positives",
          "false negatives",
          "true negatives",
          "true positives"
        ],
        "poprawna": "true negatives",
        "image": ""
      },
      {
        "pytanie": "Which kind of event is a successful identification of a security attack?",
        "opcje": [
          "false negative",
          "false positive",
          "true positive",
          "true negative"
        ],
        "poprawna": "true positive",
        "image": ""
      },
      {
        "pytanie": "Which example of technical control is recommended to mitigate and prevent vulnerabilities such as cross-site scripting, cross-site request forgery, SQL injection, and command injection?",
        "opcje": [
          "user input sanitization",
          "process-level remediation",
          "secrets management solution",
          "certificate management"
        ],
        "poprawna": "user input sanitization",
        "image": ""
      },
      {
        "pytanie": "Which example of administrative controls enables administrators to control what users can do at both broad and granular levels?",
        "opcje": [
          "RBAC",
          "secure software development life cycle",
          "policies and procedures",
          "minimum password requirements"
        ],
        "poprawna": "RBAC",
        "image": ""
      },
      {
        "pytanie": "A document entitled \u201cBuilding an Information Technology Security Awareness and Training Program\u201d succinctly defines why security education and training are so important for users. The document defines ways to improve the security operations of an organization. Which document is being described?",
        "opcje": [
          "NIST SP 800-50",
          "NIST SP 800-115",
          "OWASP WSTG",
          "CVSS"
        ],
        "poprawna": "NIST SP 800-50",
        "image": ""
      },
      {
        "pytanie": "How is the score that CVSS provides interpreted?",
        "opcje": [
          "scores are rated from 0 to 100, with 100 being the most severe",
          "scores are rated from 0 to 100, with 0 being the most severe",
          "scores are rated from 0 to 10, with 10 being the most severe",
          "scores are rated from 0 to 10, with 0 being the most severe"
        ],
        "poprawna": "scores are rated from 0 to 10, with 10 being the most severe",
        "image": ""
      },
      {
        "pytanie": "What control category does system hardening belong to?",
        "opcje": [
          "technical",
          "administrative",
          "operational",
          "physical"
        ],
        "poprawna": "technical",
        "image": ""
      }
    ]
  }
  ,
  {
    "id": "ethical-hacker-final",
    "title": "Ethical Hacker Final",
    "questions": [
      {
        "pytanie": "Which are two best practices used to secure APIs? (Choose two.)",
        "opcje": [
          "use reputable and standard libraries to create the APIs",
          "make internal API documentation mandatory",
          "discussing company API development (or any other application development) on public forums",
          "secure API services to provide HTTP endpoints only",
          "keep API implementation and API security into one tier allowing the API developer to work on both facets simultaneously"
        ],
        "poprawna": [
          "use reputable and standard libraries to create the APIs",
          "make internal API documentation mandatory"
        ],
        "image": ""
      },
      {
        "pytanie": "Which type of threat actors use cybercrime attacks to promote what they believe in?",
        "opcje": [
          "state-sponsored",
          "hacktivists",
          "organized crime",
          "insider threats"
        ],
        "poprawna": "hacktivists",
        "image": ""
      },
      {
        "pytanie": "A company conducted a penetration test 6 months ago. However, they have acquired new firewalls and servers to strengthen the network and increase capacity. Why would an administrator request a new penetration test?",
        "opcje": [
          "The attack surface has changed with the new equipment added.",
          "The servers require independent performance evaluation.",
          "The core data has been moved to the cloud infrastructure.",
          "New cloud-based applications have been implemented."
        ],
        "poprawna": "The attack surface has changed with the new equipment added.",
        "image": ""
      },
      {
        "pytanie": "A network administrator performs a penetration test for a company that sells computer parts through an online storefront. The first step is to discover who owns the domain name that the company is using. Which penetration testing tool can be used to do this?",
        "opcje": [
          "h8mail",
          "Maltego",
          "WHOIS",
          "Exif"
        ],
        "poprawna": "WHOIS",
        "image": ""
      },
      {
        "pytanie": "A penetration tester wants to quickly discover all the live hosts on the 192.168.0.0/24 network. Which command can do the ping sweep using the nmap tool?",
        "opcje": [
          "nmap 192.168.1.0/24 -open",
          "nmap -sP 192.168.0.0/24",
          "nmap -sV 192.168.0.255",
          "nmap -sn 192.168.0.0/24",
          "nmap -p 1-65535 localhost"
        ],
        "poprawna": "nmap -sn 192.168.0.0/24",
        "image": ""
      },
      {
        "pytanie": "A penetration tester runs the command nmap -sF -p 80 192.168.1.1 against a Windows host and receives a response RST packet. What conclusion can be drawn on the status of port 80?",
        "opcje": [
          "undetermined as this is a default response on a Windows system",
          "port 80 is open",
          "port 80 is closed",
          "port 80 is open/filtered"
        ],
        "poprawna": "undetermined as this is a default response on a Windows system",
        "image": ""
      },
      {
        "pytanie": "Which common tool is used by penetration testers to craft packets?",
        "opcje": [
          "h8mail",
          "pip3",
          "nmap",
          "Recon-ng",
          "scapy"
        ],
        "poprawna": "scapy",
        "image": ""
      },
      {
        "pytanie": "Why should a tester use query throttling techniques when running an authorized penetration test on a live network?",
        "opcje": [
          "to limit bandwidth on resource heavy applications",
          "to reduce the number of attack threads that are being sent to the target at the same time",
          "to limit bandwidth on real-time antivirus and malware scanners",
          "to create a larger attack surface on the target"
        ],
        "poprawna": "to reduce the number of attack threads that are being sent to the target at the same time",
        "image": ""
      },
      {
        "pytanie": "Why would an organization hire a red team?",
        "opcje": [
          "to install equipment to protect against physical intrusion",
          "to play the role of a threat actor by exposing vulnerabilities regarding technology",
          "to defend the organization against cybersecurity threats",
          "to evaluate the work of the security team of the organization"
        ],
        "poprawna": "to play the role of a threat actor by exposing vulnerabilities regarding technology",
        "image": ""
      },
      {
        "pytanie": "Match the healthcare sector term to the respective description.",
        "opcje": [
          "Next"
        ],
        "poprawna": [
          "Next"
        ],
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-09_172138-768x270.jpg"
      },
      {
        "pytanie": "Which two elements are typically on the front of a credit card? (Choose two.)",
        "opcje": [
          "date of birth",
          "embedded microchip",
          "magnetic stripe",
          "primary account number",
          "card security code"
        ],
        "poprawna": [
          "embedded microchip",
          "primary account number"
        ],
        "image": ""
      },
      {
        "pytanie": "What can be used to document the testing timeline in a rules of engagement document?",
        "opcje": [
          "OWASP ZAP",
          "Gantt charts and work breakdown structures",
          "Recon-ng",
          "Burp Suite"
        ],
        "poprawna": "Gantt charts and work breakdown structures",
        "image": ""
      },
      {
        "pytanie": "A cybersecurity firm has been hired by an organization to perform penetration tests. The tests require a secure method of transferring data over a network. Which two protocols could be used to accomplish this task? (Choose two.)",
        "opcje": [
          "SFTP",
          "PGP",
          "SCP",
          "S/MIME",
          "HTTPS"
        ],
        "poprawna": [
          "SFTP",
          "SCP"
        ],
        "image": ""
      },
      {
        "pytanie": "Match penetration testing methodology and standard with the respective description.",
        "opcje": [
          "Next"
        ],
        "poprawna": [
          "Next"
        ],
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-09_172207-768x449.jpg"
      },
      {
        "pytanie": "Which three practices are commonly adopted when setting up a penetration testing lab environment? (Choose three.)",
        "opcje": [
          "use a honeypot for all tests run from the physical attack platforms",
          "ensure that when something crashes, it can be determined how and why it happened",
          "create the penetration testing environment using virtual machines and virtual switches",
          "use an open environment to allow for free passage of attack packets to the target machines",
          "create the penetration testing environment using physical equipment and switches in order to route the packets freely",
          "use a closed environment for all testing purposes"
        ],
        "poprawna": [
          "ensure that when something crashes, it can be determined how and why it happened",
          "create the penetration testing environment using virtual machines and virtual switches",
          "use a closed environment for all testing purposes"
        ],
        "image": ""
      },
      {
        "pytanie": "An organization wants to test its vulnerability to an employee with network privileges accessing the network maliciously. Which type of penetration test should be used to test this vulnerability?",
        "opcje": [
          "white-box",
          "black-box",
          "blue-box",
          "gray-box"
        ],
        "poprawna": "gray-box",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. A penetration is being prepared to run the EternalBlue exploit using Metasploit against a target with an IP address of 10.0.0.1/8 from the source PC with an IP address of 10.0.0.111/8. What two commands must be entered before the exploit command can be run? (Choose two.)",
        "opcje": [
          "set LHOST 10.0.0.1",
          "set TARGET 10.0.0.111",
          "set LHOST 10.0.0.111",
          "set RHOST 10.0.0.1",
          "set RHOST 10.0.0.111",
          "set TARGET 10.0.0.1"
        ],
        "poprawna": [
          "set LHOST 10.0.0.111",
          "set RHOST 10.0.0.1"
        ],
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/i414207v2n1_exploit.png"
      },
      {
        "pytanie": "A penetration tester runs the Nmap NSE script nmap \u2013script smtp-open-relay.nse 10.0.0.1 command on a Kali Linux PC. What is the purpose of running this script?",
        "opcje": [
          "to check whether the smtp authentication is compromised on the target server",
          "to check open relay configurations on the target server",
          "to compromise any snmp community strings on the target PC",
          "to compromise any open relays on the target server"
        ],
        "poprawna": "to check open relay configurations on the target server",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. What is the penetration tester trying to achieve by running this exploit?",
        "opcje": [
          "to enumerate FTP login on the target system",
          "to check if the target system will allow FTP anonymous login",
          "to compromise the target system for a remote session",
          "to launch 220 packets of fragmented data to the FTP port on the target system"
        ],
        "poprawna": "to check if the target system will allow FTP anonymous login",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/i414214v2n1_exploit1.png"
      },
      {
        "pytanie": "A penetration tester deploys a rogue AP in the target wireless infrastructure. What is the first step that has to be taken to force wireless clients to connect to the rogue AP?",
        "opcje": [
          "send out false DNS beacons",
          "spoof the MAC address of the rogue AP",
          "set the PSK key to match the clients",
          "send de-authentication frames to the clients"
        ],
        "poprawna": "send de-authentication frames to the clients",
        "image": ""
      },
      {
        "pytanie": "A cybersecurity student is learning about the Social-Engineer Toolkit (SET), and the student has discovered that this tool can be used to launch various social engineering attacks. Which two social engineering attacks can be launched using SET?",
        "opcje": [
          "Create a payload and listener",
          "Google phishing",
          "Simple hijacker",
          "Fake flash update",
          "Infectious media generator"
        ],
        "poprawna": [
          "Create a payload and listener",
          "Infectious media generator"
        ],
        "image": ""
      },
      {
        "pytanie": "A threat actor spoofed the phone number of the director of HR and called the IT help desk with a login problem. The threat actor claims to be the director and wants the help desk to change the password. What method of influence is this cybercriminal using?",
        "opcje": [
          "scarcity",
          "social proof",
          "fear",
          "authority"
        ],
        "poprawna": "authority",
        "image": ""
      },
      {
        "pytanie": "Which statement correctly describes a type of physical social engineering attack?",
        "opcje": [
          "Dumpster phishing refers to a threat actor who scavenges for victims\u2019 private information in garbage and recycling containers.",
          "Social engineering techniques, software, and hardware can perform badge cloning attacks.",
          "Tailgating and piggybacking attacks can only be defeated through the use of control vestibules in conjunction with multifactor authentication.",
          "Shoulder surfing attacks are performed only by a short distance between the threat actor and the victim."
        ],
        "poprawna": "Social engineering techniques, software, and hardware can perform badge cloning attacks.",
        "image": ""
      },
      {
        "pytanie": "What is a characteristic of a pharming attack?",
        "opcje": [
          "a threat actor redirects a victim from a valid website to a malicious legitimate looking site",
          "a type of attack in which a social engineer impersonates another person to have physical access to systems in an organization",
          "a social engineering attack carried out in a phone conversation",
          "a type of attack where the threat actor obtains confidential data of the victim using binoculars or even a telescope"
        ],
        "poprawna": "a threat actor redirects a victim from a valid website to a malicious legitimate looking site",
        "image": ""
      },
      {
        "pytanie": "What kind of social engineering attack can be prevented by developing policies such as updating anti-malware applications regularly and using secure virtual browsers with little connectivity to the rest of the system and the rest of the network?",
        "opcje": [
          "tailgating",
          "watering hole",
          "vishing",
          "SMS phishing"
        ],
        "poprawna": "watering hole",
        "image": ""
      },
      {
        "pytanie": "An attacker enters the string \u2018John\u2019 or \u20181=1\u2019 on a web form that is connected to a back-end SQL server causing the server to display all records in the database table. Which type of SQL injection attack was used in this scenario?",
        "opcje": [
          "error-based SQL injection",
          "inferential SQL injection",
          "boolean SQL injection",
          "out-of-band SQL injection"
        ],
        "poprawna": "boolean SQL injection",
        "image": ""
      },
      {
        "pytanie": "What are two examples of immutable queries that should be used as mitigation for SQL injection vulnerabilities? (Choose two.)",
        "opcje": [
          "static queries",
          "time-delay queries",
          "parameterized queries",
          "in-band queries",
          "stacked queries"
        ],
        "poprawna": [
          "static queries",
          "parameterized queries"
        ],
        "image": ""
      },
      {
        "pytanie": "An attacker enters the string 192.168.78.6;cat /etc/httpd/httpd.conf on a web application hosted on a Linux server. Which type of attack occurred?",
        "opcje": [
          "session hijacking",
          "redirect attack",
          "SQL injection",
          "command injection"
        ],
        "poprawna": "command injection",
        "image": ""
      },
      {
        "pytanie": "Which two misconfigured cloud authentication methods could leverage a cloud asset? (Choose two.)",
        "opcje": [
          "federated authentication",
          "biometric authentication",
          "identity and access management (IAM) implementations",
          "Intelligent Platform Management Interface (IPMI)",
          "local authentication"
        ],
        "poprawna": [
          "federated authentication",
          "identity and access management (IAM) implementations"
        ],
        "image": ""
      },
      {
        "pytanie": "Match the cloud attack to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-09_172246-768x255.jpg"
      },
      {
        "pytanie": "What is the purpose of using the smtp-user-enum -M VRFY -u snp -t 10.0.0.1 command in Kali Linux?",
        "opcje": [
          "to initiate an SMTP conversation with an email server 10.0.0.1",
          "to start a Transport Layer Security (TLS) connection to an email server 10.0.0.1",
          "to verify if a certain user exists on the SMTP server 10.0.0.1",
          "to compromise SMTP open relay server 10.0.0.1"
        ],
        "poprawna": "to verify if a certain user exists on the SMTP server 10.0.0.1",
        "image": ""
      },
      {
        "pytanie": "Match the mobile device security testing tool to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-09_172311-768x283.jpg"
      },
      {
        "pytanie": "Match the mobile device attack to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-09_172327-768x255.jpg"
      },
      {
        "pytanie": "Which two Bluetooth Low Energy (BLE) statements are true? (Choose two.)",
        "opcje": [
          "All BLE-enabled devices implement cryptographic functions.",
          "BLE involves a five-phase process to establish a connection.",
          "Threat actors can listen to BLE advertisements and leverage misconfigurations.",
          "BLE advertisement can be intercepted using specialized antennas and equipment.",
          "BLE pairing is done by mobile apps."
        ],
        "poprawna": [
          "Threat actors can listen to BLE advertisements and leverage misconfigurations.",
          "BLE advertisement can be intercepted using specialized antennas and equipment."
        ],
        "image": ""
      },
      {
        "pytanie": "Match the insecure code practice to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-09_172403-768x323.jpg"
      },
      {
        "pytanie": "Which C2 utility can be used to create multiple reverse shells?",
        "opcje": [
          "WMImplant",
          "TrevorC2",
          "Socat",
          "Wsc2"
        ],
        "poprawna": "Socat",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. The attacking system has a listener (port open), and the victim initiates a connection back to the attacking system. Which two resources can create this type of malicious activity? (Choose two.)",
        "opcje": [
          "Empire",
          "Sysinternals",
          "BloodHound",
          "Steghide",
          "Netcat"
        ],
        "poprawna": [
          "Empire",
          "Netcat"
        ],
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/i414391v5n1_Image-Final-EH-Chapter8-414391-768x227.png"
      },
      {
        "pytanie": "Match the PowerSploit module/script to the respective description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/2023-10-09_172431-768x340.jpg"
      },
      {
        "pytanie": "Which two tools can create a remote connection with a compromised system? (Choose two.)",
        "opcje": [
          "Nmap",
          "Mimikatz",
          "Metasploit",
          "BloodHound",
          "Sysinternals"
        ],
        "poprawna": [
          "Metasploit",
          "Sysinternals"
        ],
        "image": ""
      },
      {
        "pytanie": "Which two options are PowerSploit modules/scripts? (Choose two.)",
        "opcje": [
          "Get-ChildItem",
          "Get-Keystrokes",
          "Get-HotFix",
          "Get-Process",
          "Get-SecurityPackages"
        ],
        "poprawna": [
          "Get-Keystrokes",
          "Get-SecurityPackages"
        ],
        "image": ""
      },
      {
        "pytanie": "Why is it important to use Common Vulnerability Scoring System (CVSS) to reference the ratings of vulnerabilities identified when preparing the final penetration testing report?",
        "opcje": [
          "It is authorized by governments around the world.",
          "It is an international standard for listing publicly known vulnerabilities.",
          "It is easy to use.",
          "It has been adopted by many tools, vendors, and organizations."
        ],
        "poprawna": "It has been adopted by many tools, vendors, and organizations.",
        "image": ""
      },
      {
        "pytanie": "A company hires a professional to perform penetration testing. The tester has identified and verified that one web application is vulnerable to SQL injection and cross-site scripting attacks. Which technical control measure should the tester recommend to the company?",
        "opcje": [
          "process-level remediation",
          "role-based access control (RBAC)",
          "multifactor authentication",
          "user input sanitization"
        ],
        "poprawna": "user input sanitization",
        "image": ""
      },
      {
        "pytanie": "The IT security department of a company has developed an access policy for the datacenter. The policy specifies that the datacenter is locked between 5:30 pm through 7:45 am daily except for emergency access approved by the IT manager. What is the operational control implemented?",
        "opcje": [
          "mandatory vacations",
          "job rotation",
          "time-of-day restrictions",
          "user training"
        ],
        "poprawna": "time-of-day restrictions",
        "image": ""
      },
      {
        "pytanie": "A security audit for a company recommends that the company implement multifactor authentication for the datacenter access. Which solution would achieve the goal?",
        "opcje": [
          "access control vestibule",
          "biometric controls",
          "video surveillance",
          "minimum password requirements"
        ],
        "poprawna": "biometric controls",
        "image": ""
      },
      {
        "pytanie": "What are three examples of the items a penetration tester must clean from systems as part of the post-engagement cleanup process? (Choose three.)",
        "opcje": [
          "given passwords",
          "network diagrams",
          "shells",
          "tools",
          "system patches",
          "tester-created credentials"
        ],
        "poprawna": [
          "shells",
          "tools",
          "tester-created credentials"
        ],
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. Which Python data structure is used?",
        "opcje": [
          "dictionary",
          "array",
          "list",
          "tree"
        ],
        "poprawna": "dictionary",
        "image": "https://itexamanswers.net/wp-content/uploads/2023/10/Which_Python_data_structure_is_used.png"
      },
      {
        "pytanie": "Which statement describes the concept of Bash shell in operating systems?",
        "opcje": [
          "Bash shell is a command shell that supports interactive command execution only.",
          "Bash shell is a Linux GUI.",
          "Bash shell is a GUI that can be used in operating systems.",
          "Bash shell is a command shell and language interpreter for an operating system."
        ],
        "poprawna": "Bash shell is a command shell and language interpreter for an operating system.",
        "image": ""
      },
      {
        "pytanie": "Which three tools can be used to perform passive reconnaissance? (Choose three.)",
        "opcje": [
          "Nmap",
          "Dig",
          "Enum4linux",
          "Zenmap",
          "Host",
          "Nslookup"
        ],
        "poprawna": [
          "Dig",
          "Host",
          "Nslookup"
        ],
        "image": ""
      },
      {
        "pytanie": "An attacker uses John the Ripper to crack a password file. The attacker issued the ~$ john \u2013list=formats command in Kali Linux. Which information is the attacker trying to find?",
        "opcje": [
          "the command line format to crack a password file",
          "the password file format",
          "the ciphertext formats supported by the current version",
          "the output format supported by the current version"
        ],
        "poprawna": "the ciphertext formats supported by the current version",
        "image": ""
      },
      {
        "pytanie": "What are two exploitation frameworks? (Choose two.)",
        "opcje": [
          "BeEF",
          "Proxychains",
          "Tor",
          "Metasploit",
          "Encryption"
        ],
        "poprawna": [
          "BeEF",
          "Metasploit"
        ],
        "image": ""
      }
    ]
  }
  ,
  {
    "id": "ethical-hacker-final-new",
    "title": "Ethical Hacker Final (Nowe)",
    "questions": [
      {
        "pytanie": "A customer uses Infrastructure as a Service (IaaS) as a cloud implementation. Therefore, the cloud customer is\n        responsible for data, applications, runtime, middleware, virtual machines (VMs), containers, and operating\n        systems\n        in VMs hosted in the cloud. What should the cloud customer do before testing the security of the hosted cloud\n        services?",
        "opcje": [
          "run the penetration test in off-peak hours and report the results to the cloud provider",
          "run the stress test prior to the penetration test and report the results to the cloud provider",
          "obtain detailed guidelines on how to perform security assessments and\n                penetration\n                testing from the cloud provider",
          "disable end-to-end encryption in order to conduct the penetration test"
        ],
        "poprawna": "obtain detailed guidelines on how to perform security assessments and\n                penetration\n                testing from the cloud provider",
        "image": ""
      },
      {
        "pytanie": "A penetration tester wants to stealthily scan a firewall for open ports. Which two nmap commands are the best\n        approaches for the task? (Choose two.)",
        "opcje": [
          "nmap 192.168.1.1 -f",
          "nmap 192.168.1.1 -O",
          "nmap 192.168.1.1 -A",
          "nmap 192.168.1.1 -F",
          "nmap 192.168.1.1 -n",
          "nmap 192.168.1.1 mtu 32"
        ],
        "poprawna": [
          "nmap 192.168.1.1 -f",
          "nmap 192.168.1.1 mtu 32"
        ],
        "image": ""
      },
      {
        "pytanie": "Risk management involves risk appetite and tolerance, risk assessment, risk acceptance, and risk mitigation.\n        Which statement correctly describes the risk management term?",
        "opcje": [
          "Risk appetite and tolerance is the calculation of the current risk level.",
          "Risk acceptance is the risk level that an organization is willing to take.",
          "Risk assessment includes the steps to reduce the risk.",
          "Risk mitigation is the process of determining an acceptable risk level."
        ],
        "poprawna": "Risk acceptance is the risk level that an organization is willing to take.",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. What is the penetration tester trying to achieve?",
        "opcje": [
          "to steal the hash value of a user credential and use it to create a new user session on the same network",
          "to manipulate the data being transferred by performing data corruption or data modification",
          "to spoof an authorized MAC address and bypass a NAC configuration",
          "to manipulate Kerberos tickets based on available hashes by compromising a\n                vulnerable system and obtaining the local user credentials and password hashes"
        ],
        "poprawna": "to manipulate Kerberos tickets based on available hashes by compromising a\n                vulnerable system and obtaining the local user credentials and password hashes",
        "image": "https://infraexam.com/wp-content/uploads/2025/10/Ethical-Hacker-Course-Final-Exam-Answers-06.png"
      },
      {
        "pytanie": "A black-box penetration testing is being performed on the network of a client. The penetration tester does not\n        have physical access to the client network but is parked outside. Which Kali Linux tool can the penetration\n        tester use to compromise the Wi-Fi network and break the encryption keys?",
        "opcje": [
          "aircrack-ng",
          "scapy",
          "wireshark",
          "nmap"
        ],
        "poprawna": "aircrack-ng",
        "image": ""
      },
      {
        "pytanie": "Which three tools can be used in a vishing attack? (Choose three.)",
        "opcje": [
          "BeEF",
          "Asterisk",
          "Nikto",
          "SET",
          "SpoofApp",
          "Nessus",
          "SpoofCard"
        ],
        "poprawna": [
          "Asterisk",
          "SpoofApp",
          "SpoofCard"
        ],
        "image": ""
      },
      {
        "pytanie": "Which method of influence is a psychological phenomenon in which an individual cannot determine the appropriate\n        mode of behavior?",
        "opcje": [
          "likeness",
          "authority",
          "fear",
          "social proof"
        ],
        "poprawna": "social proof",
        "image": ""
      },
      {
        "pytanie": "Why is it important to validate and filter out invalid session ID values in a web application?",
        "opcje": [
          "to prevent on-path attacks",
          "to prevent session sniffing by attackers",
          "to prevent predicting session IDs by attackers",
          "to prevent further exploitation of other web application\n                vulnerabilities"
        ],
        "poprawna": "to prevent further exploitation of other web application\n                vulnerabilities",
        "image": ""
      },
      {
        "pytanie": "Which two items can be investigated to help detect a cloud account takeover attack? (Choose two.)",
        "opcje": [
          "login location",
          "failed login attempts",
          "user emails",
          "normal file sharing patterns",
          "incoming VPN connections"
        ],
        "poprawna": [
          "login location",
          "failed login attempts"
        ],
        "image": ""
      },
      {
        "pytanie": "Which C2 utility is Python-based and uses WebSockets?",
        "opcje": [
          "WMImplant",
          "Socat",
          "Wsc2",
          "Twittor"
        ],
        "poprawna": "Wsc2",
        "image": ""
      },
      {
        "pytanie": "Which two options are PowerShell commands? (Choose two.)",
        "opcje": [
          "Get-Location",
          "Get-Service",
          "Get-TimedScreenshot",
          "Get-GPPPassword",
          "Get-VolumeShadowCopy"
        ],
        "poprawna": [
          "Get-Location",
          "Get-Service"
        ],
        "image": ""
      },
      {
        "pytanie": "What Windows-based command-line interface suite of tools can run commands to reveal information about running\n        processes and kill or stop services?",
        "opcje": [
          "Sysinternals",
          "BloodHound",
          "Empire",
          "WinRM"
        ],
        "poprawna": "Sysinternals",
        "image": ""
      },
      {
        "pytanie": "Which tool can be used to enumerate SMB shares and vulnerable Samba implementations?",
        "opcje": [
          "Dig",
          "Censys",
          "Recon-ng",
          "Enum4linux"
        ],
        "poprawna": "Enum4linux",
        "image": ""
      },
      {
        "pytanie": "A cybercriminal uses a valid user account and launches an attack to extract service account credential hashes\n        without sending additional IP packets to the victim and without having domain admin credentials. Which\n        post-exploit attack is being launched?",
        "opcje": [
          "On-path",
          "MAC spoofing",
          "Kerberoasting",
          "ARP cache poisoning"
        ],
        "poprawna": "Kerberoasting",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. A Reflected XSS attack is being conducted by an attacker on a vulnerable server. Each\n        colored arrow is a step of this attack. What color order represents this attack in progress?",
        "opcje": [
          "green, black, yellow, blue, red",
          "red, black, yellow, blue, green",
          "blue, red, black, yellow, green",
          "green, blue, red, black, yellow"
        ],
        "poprawna": "green, blue, red, black, yellow",
        "image": "https://infraexam.com/wp-content/uploads/2025/10/Ethical-Hacker-Course-Final-Exam-Answers-07.png"
      },
      {
        "pytanie": "A security management system is preparing to push a new configuration to a firewall that involves rebuilding\n        access control lists and security rules. An attacker has a very small time window to bypass the firewall\n        security controls until the new firewall rules take effect. What kind of vulnerability is being exploited by the\n        attacker?",
        "opcje": [
          "hard-coded credentials",
          "improper error handling",
          "remote file inclusion",
          "race condition"
        ],
        "poprawna": "race condition",
        "image": ""
      },
      {
        "pytanie": "Which two social engineering attacks can be launched using BeEF? (Choose two.)",
        "opcje": [
          "Fake notification bar",
          "Arduino-based attack vector",
          "Create a payload and listener",
          "Powershell attack vectors",
          "Google phishing"
        ],
        "poprawna": [
          "Fake notification bar",
          "Google phishing"
        ],
        "image": ""
      },
      {
        "pytanie": "A penetration tester is preparing the final report after the tests are completed. One remediation recommended by\n        the tester is to close unnecessary open ports and services, remove unnecessary software, and disable unused\n        ports. Which type of cybersecurity control is being recommended?",
        "opcje": [
          "physical control",
          "technical control",
          "operational control",
          "administrative control"
        ],
        "poprawna": "technical control",
        "image": ""
      },
      {
        "pytanie": "A penetration tester is hired by a company to evaluate the security posture of the IT service department. In the\n        final report, the tester recommends that the company implement role-based access control for the data center\n        systems. Which type of control is recommended?",
        "opcje": [
          "physical",
          "operational",
          "technical",
          "administrative"
        ],
        "poprawna": "administrative",
        "image": ""
      },
      {
        "pytanie": "A penetration tester is hired by a company to perform web application vulnerability assessment. The tester has\n        completed the required tests and cleaned the target systems. What next step should be done before closing the\n        assignment?",
        "opcje": [
          "Disable all testing tools.",
          "Remove shells spawned on exploited systems.",
          "Remove any user accounts that were created during tests.",
          "Ask the company personnel to validate that the cleanup efforts are\n                sufficient."
        ],
        "poprawna": "Ask the company personnel to validate that the cleanup efforts are\n                sufficient.",
        "image": ""
      },
      {
        "pytanie": "Which three applications are used for cracking passwords? (Choose three.)",
        "opcje": [
          "Recon-ng",
          "Cain",
          "Shodan",
          "CeWL",
          "Hashcat",
          "John the Ripper"
        ],
        "poprawna": [
          "Cain",
          "Hashcat",
          "John the Ripper"
        ],
        "image": ""
      },
      {
        "pytanie": "A penetration tester is conducting a gray box penetration test for an organization. The tester wishes to assess\n        vulnerabilities of an IoT device by sending an invalid packet to a proprietary service listening on TCP port\n        2984. What tool can the tester use in order to send a packet with customized fields to observe the response from\n        the IoT device?",
        "opcje": [
          "Scapy",
          "Recon-NG",
          "Shodan",
          "Nmap"
        ],
        "poprawna": "Scapy",
        "image": ""
      },
      {
        "pytanie": "A penetration tester is searching for a framework that provides a matrix of common tactics and techniques used\n        by attackers, along with recommended mitigations. Which framework will be best suited to provide the requisite\n        information?",
        "opcje": [
          "MITRE",
          "OWASP WSTG",
          "NIST SP 800-15",
          "ISSAF"
        ],
        "poprawna": "MITRE",
        "image": ""
      },
      {
        "pytanie": "A threat actor has stolen an iPhone and is attempting to jailbreak it to gain access to resources that normally\n        would have been protected. Which type of attack is the threat actor performing?",
        "opcje": [
          "privilege escalation",
          "metadata service attacks",
          "side-channel attacks",
          "credential harvesting"
        ],
        "poprawna": "privilege escalation",
        "image": ""
      },
      {
        "pytanie": "Which misconfiguration in IoT would allow threat actors to obtain sensitive information from the system and\n        underlying network on IoT devices?",
        "opcje": [
          "error messages and debug handling",
          "digital certificates",
          "misconfigured metadata service",
          "side-channels"
        ],
        "poprawna": "error messages and debug handling",
        "image": ""
      }
    ]
  }
]