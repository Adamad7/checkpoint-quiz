const examsData = [
  // {
  //   "id": "test-exam",
  //   "title": "Test exam",
  //   "questions": [
  //     {
  //       "pytanie": "Which are two best practices used to secure APIs? (Choose two.)",
  //       "opcje": [
  //         "use reputable and standard libraries to create the APIs",
  //         "make internal API documentation mandatory",
  //         "discussing company API development (or any other application development) on public forums",
  //         "secure API services to provide HTTP endpoints only",
  //         "keep API implementation and API security into one tier allowing the API developer to work on both facets simultaneously"
  //       ],
  //       "poprawna": [
  //         "use reputable and standard libraries to create the APIs",
  //         "make internal API documentation mandatory"
  //       ],
  //       "explanation": "Using reputable and standard libraries helps ensure that well-tested security implementations are used. Making internal API documentation mandatory aids in consistent security practices and maintenance.",
  //       "image": ""
  //     }
  //   ]
  // },
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
        "explanation": "Using reputable and standard libraries helps ensure that well-tested security implementations are used. Making internal API documentation mandatory aids in consistent security practices and maintenance.",
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
      },

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
      },
      {
        "pytanie": "Refer to the exhibit. What is the advantage of setting up a penetration environment, as displayed in the exhibit?",
        "opcje": [
          "It is an open environment that permits packets to flow freely between devices",
          "It is a closed environment that routes the packets over a physical switch.",
          "It is a closed environment that allows you to perform different attacks and send IP packets between VMs without those packets leaving the physical system.",
          "It is an open environment that allows for deployment and recovery of devices being tested through quick backup recovery methods."
        ],
        "poprawna": "It is a closed environment that allows you to perform different attacks and send IP packets between VMs without those packets leaving the physical system.",
        "image": "https://infraexam.com/wp-content/uploads/2025/10/Ethical-Hacker-Course-Final-Exam-Answers-05.png"
      },

      {
        "pytanie": "What is a common security vulnerability of IoT Implementation?",
        "opcje": [
          "plaintext communication and data leakage",
          "certificate pinning",
          "spamming",
          "passcode vulnerabilities and biometrics integrations"
        ],
        "poprawna": "plaintext communication and data leakage",
        "image": ""
      },
      {
        "pytanie": "In what type of attack would a threat actor try to bypass different anti-DDoS mitigations by revealing the origin network or IP address of a content delivery network?",
        "opcje": [
          "direct-to-origin (D20)",
          "metadata services",
          "side-channel",
          "account-takeover"
        ],
        "poprawna": "direct-to-origin (D20)",
        "image": ""
      },
      {
        "pytanie": "Which tool uses precomputed tables to derive a password by looking at the hashed value?",
        "opcje": [
          "W3af",
          "DirBuster",
          "RainbowCrack",
          "CeWL"
        ],
        "poprawna": "RainbowCrack",
        "image": ""
      },
      {
        "pytanie": "The IT department of a company is developing a standard operating policy (SOP) for the IT asset inventory management that covers asset inventory process and maintenance. Which type of cybersecurity control is being applied?",
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
        "pytanie": "A penetration tester is asked to scan both secure and non-secure ports on a target web server. Which nmap command can be used to achieve the task?",
        "opcje": [
          "nmap -http s) [address]",
          "nmap -p 80,81 [address]",
          "nmap -p http [address]",
          "nmap -s 80,81 [address]"
        ],
        "poprawna": "nmap -p 80,81 [address]",
        "image": ""
      },
      {
        "pytanie": "A penetration tester has been hired to test the security posture of an organization. The organization has provided the penetration tester with some credentials but not full documentation of the network infrastructure. The aim is to circumvent security measures and gain unauthorized access to the data server. What kind of penetration test will the tester conduct?",
        "opcje": [
          "black-box",
          "white-box",
          "red-box",
          "gray-box"
        ],
        "poprawna": "gray-box",
        "image": ""
      },
      {
        "pytanie": "A cybercriminal mapped out all locations in an application where user input is used to reference objects directly. The cybercriminal found out that the application uses the value of the customerID parameter as an index... The cybercriminal then changes the value 1188 to another value and retrieves another customer record. What kind of vulnerability is being exploited?",
        "opcje": [
          "parameter pollution",
          "kerberos",
          "insecure direct object reference (IDOR)",
          "default credentials"
        ],
        "poprawna": "insecure direct object reference (IDOR)",
        "image": ""
      },
      {
        "pytanie": "An attacker exploits a common vulnerability in LLMNR by spoofing an authoritative source for name resolution on a victim system... Which two tools could be used to conduct this type of attack? (Choose two.)",
        "opcje": [
          "Metasploit",
          "Responder",
          "Burp Suite",
          "Kismet",
          "Pacu"
        ],
        "poprawna": [
          "Metasploit",
          "Responder"
        ],
        "image": ""
      },
      {
        "pytanie": "What are the three key elements that a penetration tester should pay attention to and verify during assessment to make sure the organization is PCI DSS compliant? (Choose three.)",
        "opcje": [
          "prior internal penetration conducted in the last three months",
          "prior external penetration test conducted in the last three months",
          "network isolation",
          "solid password management and configuration system",
          "data servers holding the credit card information located in the DMZ",
          "key management system compliant to NIST SP 800-57"
        ],
        "poprawna": [
          "network isolation",
          "solid password management and configuration system",
          "key management system compliant to NIST SP 800-57"
        ],
        "image": ""
      },
      {
        "pytanie": "Which metric group in the Common Vulnerability Scoring System (CVSS) catalog includes exploit code maturity, remediation level, and report confidence?",
        "opcje": [
          "Base metric group",
          "Impact metric group",
          "Temporal metric group",
          "Environmental metric group"
        ],
        "poprawna": "Temporal metric group",
        "image": ""
      },
      {
        "pytanie": "Which Linux distribution is based on Debian and focuses on penetration testing, digital forensics, and privacy protection?",
        "opcje": [
          "PowerShell",
          "Parrot OS",
          "BlackArch Linux",
          "WHoppiX"
        ],
        "poprawna": "Parrot OS",
        "image": ""
      },
      {
        "pytanie": "Which option is a government agency that provides guidance on how organizations should manage cryptographic keys in accordance with the federal key management policies?",
        "opcje": [
          "NIST",
          "CVE",
          "CWE",
          "US-CERT"
        ],
        "poprawna": "NIST",
        "image": ""
      },
      {
        "pytanie": "What is the main objective of a social engineering penetration test?",
        "opcje": [
          "to identify individuals who fail the test",
          "to test the network protocols in place",
          "to identify vulnerabilities in the physical access controls",
          "to assess the security awareness program for the purposes of enhancing it"
        ],
        "poprawna": "to assess the security awareness program for the purposes of enhancing it",
        "image": ""
      },
      {
        "pytanie": "Which interpreted programming language can be used to automate repetitive tasks and create sophisticated applications in penetration testing?",
        "opcje": [
          "C++",
          "Python",
          "Bash",
          "JSON"
        ],
        "poprawna": "Python",
        "image": ""
      },
      {
        "pytanie": "After a physical breach of the datacenter occurred, a company determines to enhance the secure access to the datacenter by preventing unauthorized persons from overlooking and learning passcode when employees enter the datacenter. What is the best solution to achieve the goal?",
        "opcje": [
          "biometric controls",
          "video surveillance",
          "access control vestibule",
          "multifactor authentication"
        ],
        "poprawna": "biometric controls",
        "image": ""
      },
      {
        "pytanie": "Which two tools are PowerShell-based post-exploitation frameworks? (Choose two.)",
        "opcje": [
          "Empire",
          "PowerSploit",
          "BloodHound",
          "Netcat",
          "Sysinternals"
        ],
        "poprawna": [
          "Empire",
          "PowerSploit"
        ],
        "image": ""
      },
      {
        "pytanie": "An attacker enters the following URL to exploit vulnerabilities in a web application: .../vulnerabilities/fi/?page=../../../../../etc/passwd. In addition to the directory traversal vulnerability, what other type of vulnerability did the attacker try to exploit?",
        "opcje": [
          "clickjacking",
          "local file inclusion (LFI)",
          "cookie manipulation",
          "remote file inclusion"
        ],
        "poprawna": "local file inclusion (LFI)",
        "image": ""
      },
      {
        "pytanie": "Database management is deploying a production web application system to reduce the impact of SQL injection attacks. What is a configuration consideration?",
        "opcje": [
          "Ensure that the web application is enabled by HTTPS.",
          "Stop the error messages sent by the database system.",
          "Control the error messages sent by the database system.",
          "Enable secure communications between the web application and the database system."
        ],
        "poprawna": "Control the error messages sent by the database system.",
        "image": ""
      },
      {
        "pytanie": "What kind of attack may be prevented by keeping software up to date, running regular anti-malware checks, and changing the default passwords in network infrastructure devices such as home routers?",
        "opcje": [
          "Vishing",
          "Pharming",
          "Piggybacking",
          "SMS phishing"
        ],
        "poprawna": "Pharming",
        "image": ""
      },
      {
        "pytanie": "A cybercriminal group successfully exfiltrated data from a large organization. They have now demanded that a large ransom be paid within 24 hours, or they will publicly release the sensitive information. What method of influence are these cybercriminals using?",
        "opcje": [
          "scarcity",
          "fear",
          "social proof",
          "authority"
        ],
        "poprawna": "fear",
        "image": ""
      },
      {
        "pytanie": "Match the key term defined by the Payment Card Industry Security Standards Council to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "img/eh_match_1.png"
      },
      {
        "pytanie": "A penetration tester wants to harvest user credentials on a Windows host target 192.168.1.1/24. Which of the following commands can do this using the tool nmap?",
        "opcje": [
          "nmap --script smb-enum-users.nse 192.168.1.1",
          "nmap -sn 192.168.1.1/24",
          "nmap -sP 192.168.1.1/24",
          "nmap -sV 192.168.1.1/24"
        ],
        "poprawna": "nmap --script smb-enum-users.nse 192.168.1.1",
        "image": ""
      },
      {
        "pytanie": "Which penetration testing methodology provides attack vectors and mitigation procedures for cross-site scripting (XSS), XML external entity (XXE) attacks, cross-site request forgery (CSRF), and SQL injection attacks?",
        "opcje": [
          "OWASP",
          "MITRE",
          "OSSTMM",
          "PTES"
        ],
        "poprawna": "OWASP",
        "image": ""
      },
      {
        "pytanie": "A tester is preparing to perform penetration testing requiring minimal client network operations disruption. Which two tools are considered passive reconnaissance tools? (Choose two.)",
        "opcje": [
          "Domain enumeration",
          "Host enumeration",
          "Recon-ng",
          "Network share enumeration",
          "Packet crafting"
        ],
        "poprawna": [
          "Domain enumeration",
          "Recon-ng"
        ],
        "image": ""
      },
      {
        "pytanie": "A penetration tester runs the nmap -sS 192.168.0.2 -T1 command. What is the desired effect of running this command?",
        "opcje": [
          "It launches attacks against host 192.168.0.2 while trying to trigger as few alarms and countermeasures as possible.",
          "It tries to enumerate all the services running on host 192.168.0.2.",
          "It tries to verify the operating system running on host 192.168.0.1 with a time out period of 1 minute.",
          "It tries to enumerate the operating system and services on host 192.168.0.2 with a time-out period of 1 minute."
        ],
        "poprawna": "It launches attacks against host 192.168.0.2 while trying to trigger as few alarms and countermeasures as possible.",
        "image": ""
      },
      {
        "pytanie": "An administrator checks a Windows 10 PC registry and notices that the key HKLM\\Software\\Policies\\Microsoft\\Windows NT\\DNSClient is set to DWORD zero (0). What type of attack is being mitigated by setting this value?",
        "opcje": [
          "LLMNR poisoning",
          "SMB attack",
          "DDOS",
          "DNS poisoning"
        ],
        "poprawna": "LLMNR poisoning",
        "image": ""
      },
      {
        "pytanie": "Match the programming logic constructs to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "img/eh4_match3.png"
      },
      {
        "pytanie": "Match the programming language data structures to the description.",
        "opcje": [
          "Next"
        ],
        "poprawna": "Next",
        "image": "img/eh4_match2.png"
      },
      {
        "pytanie": "A penetration tester is preparing the final report after completing tests. In which section of a typical final report should the tester document technical details about whether or how the system and related components, under testing, may be exploited based on each vulnerability found?",
        "opcje": [
          "Findings",
          "Methodology",
          "Scope details",
          "Executive summary"
        ],
        "poprawna": "Findings",
        "image": ""
      },
      {
        "pytanie": "Refer to the exhibit. A threat actor discovered that Paul and Steven are sharing materials... The threat actor impersonated Paul and sent Steven the email... When Steven opened the spreadsheet, malware was installed. What type of attack was perpetrated by this threat actor?",
        "opcje": [
          "pharming",
          "vishing",
          "spear phishing",
          "whaling"
        ],
        "poprawna": "spear phishing",
        "image": "img/eh4_match1.png"
      },
      {
        "pytanie": "A threat actor wants to create a QR code redirecting users to a malicious website and send it to a target victim host. What tool can be used to launch this type of attack?",
        "opcje": [
          "Hydra",
          "SET (Social-Engineer Toolkit)",
          "Maltego",
          "BeEF"
        ],
        "poprawna": "SET (Social-Engineer Toolkit)",
        "image": ""
      },
      {
        "pytanie": "What following three technical and/or none technical safeguards must be complied with in order for an entity to be HIPAA Security Rule compliant? (Choose three.)",
        "opcje": [
          "ensure the confidentiality, integrity, and availability of all e-PHI they create, receive, maintain or transmit",
          "identify and protect against reasonably anticipated threats to the security or integrity of the information",
          "apply HIPAA Security Rule to cover medical entities only and not business associates",
          "protect against all anticipated, unanticipated, impermissible uses or disclosures",
          "ensure compliance by their workforce"
        ],
        "poprawna": [
          "ensure the confidentiality, integrity, and availability of all e-PHI they create, receive, maintain or transmit",
          "identify and protect against reasonably anticipated threats to the security or integrity of the information",
          "ensure compliance by their workforce"
        ],
        "image": ""
      },
      {
        "pytanie": "A penetration tester discovers that a data server within the scope of the engagement has already been compromised. What is the first thing the penetration tester should do?",
        "opcje": [
          "inform the client immediately about the compromise",
          "document the breach",
          "setup tracking measures to identify the attacker",
          "isolate the data server from the network"
        ],
        "poprawna": "inform the client immediately about the compromise",
        "image": ""
      },
      {
        "pytanie": "Which statement describes an example of operational control in an organization?",
        "opcje": [
          "The organization reviews and adopts a hosted multifactor authentication solution.",
          "The IT department develops and implements a Wireless Access Policy for the organization.",
          "The IT department develops training material for the Acceptable Use Policy for all new employees.",
          "The organization adopts the new user credential policy that specifies the minimum length and complexity of passwords."
        ],
        "poprawna": "The IT department develops training material for the Acceptable Use Policy for all new employees.",
        "image": ""
      },
      {
        "pytanie": "A penetration tester is hired by a company to perform compliance tests. The tester is reviewing the assignment details. What situation would require the tester to immediately report the discovery to the stakeholder?",
        "opcje": [
          "scope change",
          "status report",
          "different tools used",
          "indicators of prior compromise"
        ],
        "poprawna": "indicators of prior compromise",
        "image": ""
      },
      {
        "pytanie": "The mobile device of a user keeps getting messages containing links from unknown sources. What type of attack is the device being subjected to?",
        "opcje": [
          "spamming",
          "DoS",
          "sandbox analysis",
          "account takeover"
        ],
        "poprawna": "spamming",
        "image": ""
      },
      {
        "pytanie": "Which term describes when threat actors use legitimate existing tools such as Windows PowerShell and Python to perform post-exploitation activities?",
        "opcje": [
          "living-off-the-land",
          "pivoting",
          "lateral movement",
          "backporting"
        ],
        "poprawna": "living-off-the-land",
        "image": ""
      },
      {
        "pytanie": "Which tool is a collection of PowerShell modules that can be used for post-exploitation and other phases of an assessment?",
        "opcje": [
          "PowerSploit",
          "PsFile",
          "PsExec",
          "Sysinternals"
        ],
        "poprawna": "PowerSploit",
        "image": ""
      }


    ]
  },
  {
    "id": "web-apps-exam",
    "title": "Web Apps Exam",
    "questions": [
      {
        "pytanie": "Why prepared statement helps to protect against SQL Injection attacks?",
        "opcje": [
          "It removes SQL tokens from data",
          "It implements black lists",
          "Sends query template and data in separate packages",
          "Contasins mechanisms of data filtering"
        ],
        "poprawna": "Sends query template and data in separate packages",
        "image": ""
      },
      {
        "pytanie": "Should each microservice control user privileges?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      },
      {
        "pytanie": "Wchich type of attack is the best choice to steal session identifier?",
        "opcje": [
          "SQL Injection",
          "XSS",
          "social engineering attack",
          "Brute force"
        ],
        "poprawna": "XSS",
        "image": ""
      },
      {
        "pytanie": "Is it possible to overhear a request sent by post method?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Prawda",
        "image": ""
      },
      {
        "pytanie": "In XSS attacks you can inject:",
        "opcje": [
          "PHP",
          "SQL",
          "Javascript",
          "HTML"
        ],
        "poprawna": [
          "Javascript",
          "HTML"
        ],
        "image": ""
      },
      {
        "pytanie": "Is a random enumeration of resources a method of protection against unauthorized access to data?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      },
      {
        "pytanie": "Which of the below are the types of SQL Injection attacks.",
        "opcje": [
          "Cross-band",
          "Inference",
          "In-band",
          "Direct",
          "Out-of-band"
        ],
        "poprawna": [
          "Inference",
          "In-band",
          "Out-of-band"
        ],
        "image": ""
      },
      {
        "pytanie": "Data filtering is a technique that can help to protect against:",
        "opcje": [
          "SQL Injection attackss",
          "Brute force attacks",
          "Unauthorised access to data",
          "XSS attacks",
          "Unauthorised access to functions"
        ],
        "poprawna": [
          "SQL Injection attackss",
          "XSS attacks"
        ],
        "image": ""
      },
      {
        "pytanie": "Lets assume that login form is susceptible to SQI attack. Can it be possible to verify what version of database is used in the application while attacking this form with SQLI? After login no data is displayed.",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Prawda",
        "image": ""
      },
      {
        "pytanie": "Data from forms can be sent with \"get\" or \"post\" method. Does the \"post\" method ensure higher level of security?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      },
      {
        "pytanie": "We are processing user passwords as hashes. Should we filter passwords taken from login form?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      },
      {
        "pytanie": "Is it possible to create a trap to catch a request sent with post method and modify request and an answer to this request?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Prawda",
        "image": ""
      },
      {
        "pytanie": "Which expression is a tautology?",
        "opcje": [
          "'7' between '4' and '9'",
          "7>5",
          "'taut'",
          "1=1",
          "curdate()=floor(2.3)"
        ],
        "poprawna": [
          "'7' between '4' and '9'",
          "7>5",
          "1=1"
        ],
        "image": ""
      },
      {
        "pytanie": "We have bcrypt hashing function having 14 rounds - its execution time is over 1 second. We are going to use this function to keep user passwords hashes in heavy duty system (about 100 logins per minute). Will we obtain a good level of security?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      },
      {
        "pytanie": "Which of the following assertions will you use to check if the object was not initialized?",
        "opcje": [
          "assertNull",
          "assertEmpty",
          "assertNotNull",
          "assertObjectNull",
          "AssertNotInitialized"
        ],
        "poprawna": "assertNull",
        "image": ""
      },
      {
        "pytanie": "What annotation should be placed before the JUnit test method to be run multiple times?",
        "opcje": [
          "@Repeat",
          "@Arguments",
          "@ExecuteMany",
          "@Arg",
          "@Parameters"
        ],
        "poprawna": "@Parameters",
        "image": ""
      },
      {
        "pytanie": "Which function is the most resistant to collisions?",
        "opcje": [
          "HMAC",
          "bcrypt",
          "MD5",
          "SHA512",
          "SHA256"
        ],
        "poprawna": "HMAC",
        "image": ""
      },
      {
        "pytanie": "To verify who shared copyrighted content to other users you can use:",
        "opcje": [
          "Public key cryptography",
          "Watermarking",
          "Steganography",
          "Fingerprinting"
        ],
        "poprawna": "Fingerprinting",
        "image": ""
      },
      {
        "pytanie": "Indicate the false sentence about TDD (Test driven Development)",
        "opcje": [
          "One of the main TDD steps is refactoring",
          "In this technique tests cannot be parameterized",
          "It is a software development technique that involves writing tests before code implementation",
          "The use of TDD is profitable in large projects"
        ],
        "poprawna": "In this technique tests cannot be parameterized",
        "image": ""
      },
      {
        "pytanie": "For a branch of the code to be considered checked during testing process:",
        "opcje": [
          "Mutation tests should be used",
          "If statements must be executed at least twice (once for true and once for false)",
          "Each if statement must be run at least once",
          "Tests should be run only for tested branch",
          "Each instruction has to be run at least twice"
        ],
        "poprawna": "If statements must be executed at least twice (once for true and once for false)",
        "image": ""
      },
      {
        "pytanie": "Can you be sure that the program code does not contain errors if you test it?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      },
      {
        "pytanie": "At which level user's privileges in IT system can be defined?",
        "opcje": [
          "User",
          "Role",
          "Basic",
          "Advanced",
          "Group"
        ],
        "poprawna": [
          "User",
          "Role",
          "Group"
        ],
        "image": ""
      },
      {
        "pytanie": "Which type of tests checks methods in isolation?",
        "opcje": [
          "Isolation tests",
          "Unit tests",
          "Acceptance tests",
          "Integration tests",
          "System tests"
        ],
        "poprawna": "Unit tests",
        "image": ""
      },
      {
        "pytanie": "To log in to some service you have to give some number. This number is displayed in a mobile application - but it changes every two minutes (it is periodically generated). What is the name of solution used?",
        "opcje": [
          "Hash",
          "Mobile token",
          "One time password",
          "Reversed HMAC"
        ],
        "poprawna": "One time password",
        "image": ""
      },
      {
        "pytanie": "An attacker tries to break into an IT system by guessing users passwords. He tries to log in to each user account only twice. He is using a program installed on his computer to automatically try to log in to various accounts. Which mechanism can block passwords guessing process?",
        "opcje": [
          "Granting users minimum privileges",
          "Two factor authorisation usage",
          "Blocking users accounts after working hours",
          "Blocking an IP address from which many unsuccessful login trials were proceeded"
        ],
        "poprawna": "Blocking an IP address from which many unsuccessful login trials were proceeded",
        "image": ""
      },
      {
        "pytanie": "Software testing is:",
        "opcje": [
          "Software quality assurance process",
          "All answers are correct",
          "A trial of software bugs detection",
          "A code execution for some combinations of input data and software states to detect errors",
          "Software validation and verification technique"
        ],
        "poprawna": "All answers are correct",
        "image": ""
      },
      {
        "pytanie": "What is the goal of testing?",
        "opcje": [
          "Comparing system behaviour with its project",
          "Production of reliable software",
          "Errors identification in a ready software",
          "Identification of all errors",
          "Obtaining a certain level of system reliability"
        ],
        "poprawna": "Obtaining a certain level of system reliability",
        "image": ""
      },
      {
        "pytanie": "Which annotation from the jUnit library ensures that the method marked with this annotation will be executed only once before performing class testing methods?",
        "opcje": [
          "@BeforeTest",
          "@Before",
          "@Test",
          "@BeforeClass",
          "@AfterClass"
        ],
        "poprawna": "@BeforeClass",
        "image": ""
      },
      {
        "pytanie": "What kind of test rely on rerunning existing tests after making changes to the code?",
        "opcje": [
          "Regression test",
          "Acceptance test",
          "Repetitive test",
          "Delayed test",
          "Recursive test"
        ],
        "poprawna": "Regression test",
        "image": ""
      },
      {
        "pytanie": "You need a functionality of temporary user account blockade. After third subsequent unsuccessful login trial you want to block account for 3 minutes. All user data is kept only in \"user\" table. Which fields in the \"user\" table are necessary to realize this functionality?",
        "opcje": [
          "email - user e-mail address to send password reset link",
          "blocked - if user is blocked or not",
          "blockade_time - the end of the blockade period",
          "unsuccessful_login_count - a number of subsequent unsuccessful logins since last correct login"
        ],
        "poprawna": [
          "blockade_time - the end of the blockade period",
          "unsuccessful_login_count - a number of subsequent unsuccessful logins since last correct login"
        ],
        "image": ""
      },
      {
        "pytanie": "You have to analyse a computer to protect digital evidence. Whose activities are important during this procedure?",
        "opcje": [
          "Duplicate investigated data",
          "Create a new folder on analysed disc and copy all evidence in one place",
          "Copy disc content using write blocker",
          "Check the present IP address",
          "Break user password"
        ],
        "poprawna": "Copy disc content using write blocker",
        "image": ""
      },
      {
        "pytanie": "How user can get one time password?",
        "opcje": [
          "It can be generated with public key usage",
          "From hardware token",
          "He can randomly generate it",
          "It can be generated with private key usage",
          "From public repository"
        ],
        "poprawna": "From hardware token",
        "image": ""
      },
      {
        "pytanie": "Testing can reveal the lack of errors",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      },
      {
        "pytanie": "Please mark all steps of TDD.",
        "opcje": [
          "Refactor code",
          "Write a piece of code that will let existing test to pass",
          "Write a method for which a test will be created",
          "Write a test that fails",
          "Use stubs"
        ],
        "poprawna": [
          "Write a test that fails",
          "Write a piece of code that will let existing test to pass",
          "Refactor code"
        ],
        "image": ""
      },
      {
        "pytanie": "If you want to send SQL querry template and data in separate packages to enable database server to clearly distinguish data from SQL command, you can use:",
        "opcje": [
          "Prepared Statement",
          "SQL Injection",
          "PDO",
          "filter_var()",
          "tautology"
        ],
        "poprawna": [
          "Prepared Statement",
          "PDO"
        ],
        "image": ""
      },
      {
        "pytanie": "What tests are done by client while he is assessing if a software meets his requirments and works properly?",
        "opcje": [
          "System tests",
          "Acceptance tests",
          "Unit tests",
          "Integration tests",
          "Client tests"
        ],
        "poprawna": "Acceptance tests",
        "image": ""
      },
      {
        "pytanie": "What solutions can be used to remove unwanted values from the data user can type in the form?",
        "opcje": [
          "White list",
          "Prepared statement",
          "filter_input()",
          "filter_var()",
          "Black list"
        ],
        "poprawna": [
          "filter_var()",
          "filter_input()",
          "Black list"
        ],
        "image": ""
      },
      {
        "pytanie": "What data do you have to give to the input of the function that calculate HMAC in PHP?",
        "opcje": [
          "Secret key, message, ipad, opad",
          "Only message",
          "Message, secret key, initialization vector",
          "Message, secret key and hashing algorithm name"
        ],
        "poprawna": "Message, secret key and hashing algorithm name",
        "image": ""
      },
      {
        "pytanie": "Where should you implement the code to verify user privileges to be sure that user will not be able to omit them?",
        "opcje": [
          "In GUI (user interface)",
          "In database",
          "Inside a function that gives an access to data",
          "Inside the session"
        ],
        "poprawna": "Inside a function that gives an access to data",
        "image": ""
      },
      {
        "pytanie": "Can software testing prove that tested software is free of errors?",
        "opcje": [
          "Prawda",
          "Fałsz"
        ],
        "poprawna": "Fałsz",
        "image": ""
      }
    ]
  },
  // {
  //   "id": "netsec-final-practise",
  //   "title": "Netsec Final Practise",
  //   "questions": [
  //     {
  //       "pytanie": "Which two statements are true about ASA standard ACLs? (Choose two.)​",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "They identify only the destination IP address.",
  //         "They are typically only used for OSPF routes."
  //       ],
  //       "opcje": [
  //         "They identify only the destination IP address.",
  //         "They are the most common type of ACL.",
  //         "They are applied to interfaces to control traffic.",
  //         "They specify both the source and destination MAC address.",
  //         "They are typically only used for OSPF routes."
  //       ],
  //       "explanation": "ASA standard ACLs are used to identify the destination IP addresses, unlike IOS\n        ACLs where a standard ACL identifies the source host/network. They are typically only used for OSPF routes and\n        can be used in a route map for OSPF redistribution. Standard access lists cannot be applied to interfaces to\n        control traffic."
  //     },
  //     {
  //       "pytanie": "When dynamic NAT on an ASA is being configured, what two parameters must be specified by network objects?\n        (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "a range of private addresses that will be translated",
  //         "the pool of public global addresses"
  //       ],
  //       "opcje": [
  //         "the inside NAT interface",
  //         "the interface security level",
  //         "the outside NAT interface",
  //         "a range of private addresses that will be translated",
  //         "the pool of public global addresses"
  //       ],
  //       "explanation": "On an ASA, both the pool of addresses that will be used as inside global address\n        and the range of internal private addresses that should be translated are configured through network objects."
  //     },
  //     {
  //       "pytanie": "Which protocol uses X.509 certificates to support mail protection performed by mail agents?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "S/MIME",
  //       "opcje": [
  //         "IPsec",
  //         "SSL",
  //         "S/MIME",
  //         "EAP-TLS"
  //       ],
  //       "explanation": "Many applications use the X.509 standard format of digital certificates to\n        authenticate websites, public key distribution, and end devices connected to switch ports. User email agents use\n        the S/MIME protocol to support email protection. S/MIME uses X.509 certificates."
  //     },
  //     {
  //       "pytanie": "What are two security features commonly found in a WAN design? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "firewalls protecting the main and remote sites",
  //         "VPNs used by mobile workers between sites"
  //       ],
  //       "opcje": [
  //         "WPA2 for data encryption of all data between sites",
  //         "firewalls protecting the main and remote sites",
  //         "outside perimeter security including continuous video surveillance",
  //         "port security on all user-facing ports",
  //         "VPNs used by mobile workers between sites"
  //       ],
  //       "explanation": "WANs span a wide area and commonly have connections from a main site to remote sites\n        including a branch office, regional site, SOHO sites, and mobile workers. WANs typically connect over a public\n        internet connection. Each site commonly has a firewall and VPNs used by remote workers between sites."
  //     },
  //     {
  //       "pytanie": "What is an appropriate use for class 5 digital certificates?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "used for private organizations or government security",
  //       "opcje": [
  //         "used for online business transactions between companies",
  //         "used for private organizations or government security",
  //         "used by organizations for which proof of identity is required",
  //         "used for testing in situations in which no checks have been performed"
  //       ],
  //       "explanation": "The CA class number determines how rigorous the procedure was that verified the\n        identity of the holder when the certificate was issued. The higher the class number, the more trusted the\n        certificate. Class numbers range from 0 to 5. A class 5 certificate is the most trusted, and class 0 the least\n        trusted. Class 5 is used for private organizations or government security."
  //     },
  //     {
  //       "pytanie": "Which two statements are characteristics of a virus? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "A virus typically requires end-user activation.",
  //         "A virus can be dormant and then activate at a specific time or\n                date."
  //       ],
  //       "opcje": [
  //         "A virus typically requires end-user activation.",
  //         "A virus has an enabling vulnerability, a propagation mechanism, and a payload.",
  //         "A virus replicates itself by independently exploiting vulnerabilities in networks.",
  //         "A virus provides the attacker with sensitive data, such as passwords.",
  //         "A virus can be dormant and then activate at a specific time or\n                date."
  //       ],
  //       "explanation": "The type of end user interaction required to launch a virus is typically opening an\n        application, opening a web page, or powering on the computer. Once activated, a virus may infect other files\n        located on the computer or other computers on the same network."
  //     },
  //     {
  //       "pytanie": "Match the information security component with the description.",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-10-28_101208.jpg",
  //       "type": "matching",
  //       "match_pairs": [],
  //       "opcje": [],
  //       "poprawna": [],
  //       "explanation": ""
  //     },
  //     {
  //       "pytanie": "Match the security policy with the description. (Not all options are used.)",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-10-28_101455.jpg",
  //       "type": "matching",
  //       "match_pairs": [
  //         {
  //           "left": "identifies network applications and uses that are acceptable to the organization",
  //           "right": "acceptable use policy (AUP)"
  //         },
  //         {
  //           "left": "identifies how remote users can access a network and what is accessible via remote connectivity",
  //           "right": "remote access policy"
  //         },
  //         {
  //           "left": "specifies authorized persons that can have access to network resources and identity verification\n                procedures",
  //           "right": "identification and authentication policy"
  //         },
  //         {
  //           "left": "specifies network device operating systems and end user application update procedures",
  //           "right": "network maintenance policy"
  //         }
  //       ],
  //       "opcje": [],
  //       "poprawna": [],
  //       "explanation": ""
  //     },
  //     {
  //       "pytanie": "How does the service password-encryption command enhance password security on Cisco routers and\n        switches?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "It encrypts passwords that are stored in router or switch configuration\n                files.",
  //       "opcje": [
  //         "It encrypts passwords as they are sent across the network.",
  //         "It encrypts passwords that are stored in router or switch configuration\n                files.",
  //         "It requires that a user type encrypted passwords to gain console access to a router or switch.",
  //         "It requires encrypted passwords to be used when connecting remotely to a router or switch with Telnet."
  //       ],
  //       "explanation": "The service password-encryption command encrypts plaintext passwords in the configuration\n        file so that they cannot be viewed by unauthorized users."
  //     },
  //     {
  //       "pytanie": "Which benefit does SSH offer over Telnet for remotely managing a router?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "encryption",
  //       "opcje": [
  //         "encryption",
  //         "TCP usage",
  //         "authorization",
  //         "connections via multiple VTY lines"
  //       ],
  //       "explanation": "SSH provides secure access to a network device for remote management. It uses a stronger\n        password authorization than Telnet does and encrypts any data that is transported during the session."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. Which statement about the JR-Admin account is true?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/Which-statement-about-the-JR-Admin-account-is-true.jpg",
  //       "type": "choice",
  //       "poprawna": "JR-Admin can issue ping and reload commands.",
  //       "opcje": [
  //         "JR-Admin can issue show , ping , and reload commands.",
  //         "JR-Admin can issue ping and reload commands.",
  //         "JR-Admin can issue only ping commands.",
  //         "JR-Admin can issue debug and reload commands.",
  //         "JR-Admin cannot issue any command because the privilege level does not match one of those defined."
  //       ],
  //       "explanation": "When the username name privilege 10 command is issued, access to commands with a privilege\n        level of 10 or less (0-10) is permitted to the user."
  //     },
  //     {
  //       "pytanie": "What protocol is used by SCP for secure transport?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "SSH",
  //       "opcje": [
  //         "IPSec",
  //         "HTTPS",
  //         "SSH",
  //         "Telnet",
  //         "TFTP"
  //       ],
  //       "explanation": "The Secure Copy (SCP) feature provides a secure and authenticated method for copying and\n        saving router configuration files by using SSH."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. What type of syslog message is displayed?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/Refer-to-the-exhibit.-What-type-of-syslog-message-is-displayed.png",
  //       "type": "choice",
  //       "poprawna": "notification",
  //       "opcje": [
  //         "warning",
  //         "notification",
  //         "informational",
  //         "debugging"
  //       ],
  //       "explanation": "The severity level is used to provide an explanation for the event or error that is occurring\n        within the Cisco IOS. The smaller the number of the severity level, the more critical the event. A Syslog\n        message with a level 5 is considered a notification message."
  //     },
  //     {
  //       "pytanie": "What command must be issued on a Cisco router that will serve as an authoritative NTP server?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "ntp master 1",
  //       "opcje": [
  //         "ntp master 1",
  //         "ntp server 172.16.0.1",
  //         "ntp broadcast client",
  //         "clock set 11:00:00 DEC 20 2010"
  //       ],
  //       "explanation": "Routers that will serve as NTP masters must be configured with the ntp master command. A\n        client is configured with the ntp server command so that the client can locate the NTP master. The ntp broadcast\n        client command allows NTP to use to broadcast messages. The clock set command is used to set the time on a\n        router."
  //     },
  //     {
  //       "pytanie": "A server log includes this entry: User student accessed host server ABC using Telnet yesterday for 10\n        minutes. What type of log entry is this?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "accounting",
  //       "opcje": [
  //         "authentication",
  //         "authorization",
  //         "accounting",
  //         "accessing"
  //       ],
  //       "explanation": "Accounting records what users do and when they do it, including what is accessed, the amount\n        of time the resource is accessed, and any changes that were made. Accounting keeps track of how network\n        resources are used."
  //     },
  //     {
  //       "pytanie": "Which three types of views are available when configuring the role-based CLI access feature? (Choose\n        three.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "root view",
  //         "superview",
  //         "CLI view"
  //       ],
  //       "opcje": [
  //         "superuser view",
  //         "root view",
  //         "superview",
  //         "CLI view",
  //         "admin view",
  //         "config view"
  //       ],
  //       "explanation": "There are three types of Role-based CLI views:\n        1) root view\n        2) CLI view\n        3) superview"
  //     },
  //     {
  //       "pytanie": "What is the purpose of using the ip ospf message-digest-key key md5 password command and the area area-id\n        authentication message-digest command on a router?​",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "to configure OSPF MD5 authentication globally on the\n                router​",
  //       "opcje": [
  //         "to encrypt OSPF routing updates​",
  //         "to enable OSPF MD5 authentication on a per-interface basis​",
  //         "to configure OSPF MD5 authentication globally on the\n                router​",
  //         "to facilitate the establishment of neighbor adjacencies"
  //       ],
  //       "explanation": "To configure OSPF MD5 authentication globally, the ip ospf message-digest-key key md5\n        password interface configuration command and the area area-id authentication message-digest router configuration\n        command are issued. To configure OSPF MD5 authentication per interface, the ip ospf message-digest-key key md5\n        password interface configuration command and the ip ospf authentication message-digest interface configuration\n        command are issued. Authentication does not encrypt OSPF routing updates. The requirements to establish OSPF\n        router neighbor adjacencies are separate from authentication.​"
  //     },
  //     {
  //       "pytanie": "What is indicated by the use of the local-case keyword in a local AAA authentication configuration\n        command sequence?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "that passwords and usernames are case-sensitive",
  //       "opcje": [
  //         "that user access is limited to vty terminal lines",
  //         "that passwords and usernames are case-sensitive",
  //         "that AAA is enabled globally on the router",
  //         "that a default local database AAA authentication is applied to all lines"
  //       ],
  //       "explanation": "The use of the local-case keyword means that the authentication is case-sensitive. It does\n        not enable or apply the AAA configuration to router interfaces or lines.​"
  //     },
  //     {
  //       "pytanie": "A network administrator is configuring an AAA server to manage RADIUS authentication. Which two features\n        are included in RADIUS authentication? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "hidden passwords during transmission",
  //         "single process for authentication and authorization"
  //       ],
  //       "opcje": [
  //         "encryption for all communication",
  //         "hidden passwords during transmission",
  //         "single process for authentication and authorization",
  //         "separate processes for authentication and authorization",
  //         "encryption for only the data"
  //       ],
  //       "explanation": "RADIUS authentication supports the following features:RADIUS authentication and authorization\n        as one process\n        Encrypts only the password\n        Utilizes UDP\n        Supports remote-access technologies, 802.1X, and Session Initiation Protocol (SIP)"
  //     },
  //     {
  //       "pytanie": "A network administrator is explaining to a junior colleague the use of the lt and gt keywords when\n        filtering packets using an extended ACL. Where would the lt or gt keywords be used?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "in an IPv4 extended ACL that allows packets from a range of TCP ports\n                destined for a specific network device",
  //       "opcje": [
  //         "in an IPv6 extended ACL that stops packets going to one specific destination VLAN",
  //         "in an IPv4 named standard ACL that has specific UDP protocols that are allowed to be used on a specific server",
  //         "in an IPv6 named ACL that permits FTP traffic from one particular LAN getting to another LAN",
  //         "in an IPv4 extended ACL that allows packets from a range of TCP ports\n                destined for a specific network device"
  //       ],
  //       "explanation": "The lt and gt keywords are used for defining a range of port numbers that are less than a\n        particular port number or greater than a particular port number."
  //     },
  //     {
  //       "pytanie": "Which feature is unique to IPv6 ACLs when compared to those of IPv4 ACLs?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "an implicit permit of neighbor discovery packets",
  //       "opcje": [
  //         "the use of wildcard masks",
  //         "an implicit deny any any statement",
  //         "the use of named ACL statements",
  //         "an implicit permit of neighbor discovery packets"
  //       ],
  //       "explanation": "One of the major differences between IPv6 and IPv4 ACLs are two implicit permit statements at\n        the end of any IPv6 ACL. These two permit statements allow neighbor discovery operations to function on the\n        router interface."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. An extended access list has been created to prevent human resource users from\n        gaining access to the accounting server. All other network traffic is to be permitted. When following the ACL\n        configuration guidelines, on which router, interface, and direction should the access list be\n        applied?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/01/2021-01-06_214355.jpg",
  //       "type": "choice",
  //       "poprawna": "router R1, interface Gi0/0/0, inbound",
  //       "opcje": [
  //         "router R1, interface S0/1/0, outbound",
  //         "router R2, interface Gi0/0/1, outbound",
  //         "router R2, interface Gi0/0/1, inbound",
  //         "router R1, interface Gi0/0/0, inbound",
  //         "router R2, interface S0/1/1, inbound",
  //         "router R1, interface Gi0/0/0, outbound"
  //       ],
  //       "explanation": "The ACL configuration guidelines recommend placing extended access control lists as close to\n        the source of network traffic as possible and placing standard access control lists as close to the destination\n        of network traffic as possible."
  //     },
  //     {
  //       "pytanie": "Which statement describes the characteristics of packet-filtering and stateful firewalls as they relate\n        to the OSI model?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "A packet-filtering firewall typically can filter up to the transport\n                layer, whereas a stateful firewall can filter up to the session layer.",
  //       "opcje": [
  //         "Both stateful and packet-filtering firewalls can filter at the application layer.",
  //         "A stateful firewall can filter application layer information, whereas a packet-filtering firewall cannot filter\n        beyond the network layer.",
  //         "A packet-filtering firewall typically can filter up to the transport\n                layer, whereas a stateful firewall can filter up to the session layer.",
  //         "A packet-filtering firewall uses session layer information to track the state of a connection, whereas a\n        stateful firewall uses application layer information to track the state of a connection."
  //       ],
  //       "explanation": "Packet filtering firewalls can always filter Layer 3 content and sometimes TCP and UDP-based\n        content. Stateful firewalls monitor connections and thus have to be able to support up to the session layer of\n        the OSI model."
  //     },
  //     {
  //       "pytanie": "Which special hardware module, when integrated into ASA, provides advanced IPS features?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "Advanced Inspection and Prevention (AIP)",
  //       "opcje": [
  //         "Content Security and Control (CSC)",
  //         "Advanced Inspection and Prevention (AIP)",
  //         "Advanced Inspection and Prevention Security Services Card (AIP-SSC)",
  //         "Advanced Inspection and Prevention Security Services Module (AIP-SSM)"
  //       ],
  //       "explanation": "The advanced threat control and containment services of an ASA firewall are provided by\n        integrating special hardware modules with the ASA architecture. These special modules include:\n        Advanced Inspection and Prevention (AIP) module – supports advanced IPS capability.\n        Content Security and Control (CSC) module – supports antimalware capabilities.\n        Cisco Advanced Inspection and Prevention Security Services Module (AIP-SSM) and Cisco Advanced Inspection and\n        Prevention Security Services Card (AIP-SSC) – support protection against tens of thousands of known exploits."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. A network administrator is configuring the security level for the ASA. What is a\n        best practice for assigning the security level on the three interfaces?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2016/02/ccnasec4.png",
  //       "type": "choice",
  //       "poprawna": "Outside 0, Inside 100, DMZ 50",
  //       "opcje": [
  //         "Outside 0, Inside 35, DMZ 90",
  //         "Outside 40, Inside 100, DMZ 0",
  //         "Outside 0, Inside 100, DMZ 50",
  //         "Outside 100, Inside 10, DMZ 40"
  //       ],
  //       "explanation": "The Cisco ASA assigns security levels to distinguish among different networks it connects.\n        Security levels define the level of trustworthiness of an interface. The higher the level, the more trusted the\n        interface. The security level numbers range between 0 (untrustworthy) to 100 (very trustworthy). Therefore, the\n        interface connecting to the Internet should be assigned the lowest level. The interface connecting to the\n        internal network should be assigned the highest level. The interface connecting to the DMZ network should be\n        assigned a level between them."
  //     },
  //     {
  //       "pytanie": "What is an advantage in using a packet filtering firewall versus a high-end firewall appliance?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "Packet filters perform almost all the tasks of a high-end firewall at a\n                fraction of the cost.",
  //       "opcje": [
  //         "Packet filters perform almost all the tasks of a high-end firewall at a\n                fraction of the cost.",
  //         "Packet filters represent a complete firewall solution.",
  //         "Packet filters are not susceptible to IP spoofing.",
  //         "Packet filters provide an initial degree of security at the data-link and network layer."
  //       ],
  //       "explanation": "There are several advantages of using a packet filtering firewall:\n        – ​allows for implementing simple permit or deny rule sets.\n        – has a low impact on network performance\n        – is easy to implement, and is supported by most routers\n        – provides an initial degree of security at the network layer\n        – performs almost all the tasks of a high-end firewall at a much lower cost"
  //     },
  //     {
  //       "pytanie": "Which type of firewall is commonly part of a router firewall and allows or blocks traffic based on Layer\n        3 and Layer 4 information?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "stateless firewall",
  //       "opcje": [
  //         "stateless firewall",
  //         "stateful firewall",
  //         "proxy firewall",
  //         "application gateway firewall"
  //       ],
  //       "explanation": "A stateless firewall uses a simple policy table look-up that filters traffic based on\n        specific criteria. These firewalls are usually part of a router firewall. They permit or deny traffic based on\n        Layer 3 and Layer 4 information."
  //     },
  //     {
  //       "pytanie": "A company is deploying a new network design in which the border router has three interfaces. Interface\n        Serial0/0/0 connects to the ISP, GigabitEthernet0/0 connects to the DMZ, and GigabitEthernet/01 connects to the\n        internal private network. Which type of traffic would receive the least amount of inspection (have the most\n        freedom of travel)?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "traffic that is going from the private network to the DMZ",
  //       "opcje": [
  //         "traffic that is going from the private network to the DMZ",
  //         "traffic that originates from the public network and that is destined for the DMZ",
  //         "traffic that is returning from the DMZ after originating from the private network",
  //         "traffic that is returning from the public network after originating from the private network"
  //       ],
  //       "explanation": "Most traffic within an organization originates from a private IP address. The amount of\n        inspection done to that traffic depends on its destination or whether traffic that is going to that private IP\n        address originated the connection. The demilitarized zone typically holds servers. Traffic that is destined to\n        those servers is filtered based on what services are being provided by the server (HTTP, HTTPS, DNS, etc.)."
  //     },
  //     {
  //       "pytanie": "What are two benefits offered by a zone-based policy firewall on a Cisco router? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "Policies are applied to unidirectional traffic between zones.",
  //         "Policies provide scalability because they are easy to read and\n                troubleshoot."
  //       ],
  //       "opcje": [
  //         "Policies are defined exclusively with ACLs.",
  //         "Policies are applied to unidirectional traffic between zones.",
  //         "Policies provide scalability because they are easy to read and\n                troubleshoot.",
  //         "Any interface can be configured with both a ZPF and an IOS Classic Firewall.",
  //         "Virtual and physical interfaces are put in different zones to enhance security."
  //       ],
  //       "explanation": "There are several benefits of a ZPF:\n        It is not dependent on ACLs.\n        The router security posture is to block unless explicitly allowed.\n        Policies are easy to read and troubleshoot. This provides scalability because one policy affects any given\n        traffic, instead of needing multiple ACLs and inspection actions for different types of traffic.\n        Virtual and physical interfaces can be grouped into zones.\n        Policies are applied to unidirectional traffic between zones.\n        Both IOS Classic Firewalls and ZPFs can be enabled concurrently on a Cisco router. However, the models cannot be\n        combined on a single interface."
  //     },
  //     {
  //       "pytanie": "When a Cisco IOS Zone-Based Policy Firewall is being configured via CLI, which step must be taken after\n        zones have been created?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "Establish policies between zones.",
  //       "opcje": [
  //         "Design the physical infrastructure.",
  //         "Establish policies between zones.",
  //         "Identify subsets within zones.",
  //         "Assign interfaces to zones."
  //       ],
  //       "explanation": "The steps for configuring zones in a Zone-Based Policy Firewall are as follows:\n        – Step 1. Determine the zones.\n        – Step 2. Establish policies between zones.\n        – Step 3. Design the physical infrastructure.\n        – Step 4. Identify subsets within zones and merge traffic requirements.​"
  //     },
  //     {
  //       "pytanie": "What are two shared characteristics of the IDS and the IPS? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "Both are deployed as sensors.",
  //         "Both use signatures to detect malicious traffic."
  //       ],
  //       "opcje": [
  //         "Both are deployed as sensors.",
  //         "Both analyze copies of network traffic.",
  //         "Both use signatures to detect malicious traffic.",
  //         "Both have minimal impact on network performance.​",
  //         "Both rely on an additional network device to respond to malicious traffic."
  //       ],
  //       "explanation": "Both the IDS and the IPS are deployed as sensors and use signatures to detect malicious\n        traffic. The IDS analyzes copies of network traffic, which results in minimal impact on network performance. The\n        IDS also relies on an IPS to stop malicious traffic. ​​"
  //     },
  //     {
  //       "pytanie": "When a Cisco IOS Zone-Based Policy Firewall is being configured, which two actions can be applied to a\n        traffic class? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "drop",
  //         "inspect"
  //       ],
  //       "opcje": [
  //         "log",
  //         "hold",
  //         "drop",
  //         "inspect",
  //         "copy",
  //         "forward"
  //       ],
  //       "explanation": "The three actions that can be applied are inspect, drop,and pass.​\n        Inspect – This action offers state-based traffic control.\n        Drop – This is the default action for all traffic. Similar to the implicit deny any at the end of every ACL,\n        there is an explicit drop applied by the IOS to the end of every policy map.\n        Pass – This action allows the router to forward traffic from one zone to another."
  //     },
  //     {
  //       "pytanie": "Match the network security device type with the description.",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2020/09/Match-the-network-security-device-type-with-the-description.jpg",
  //       "type": "matching",
  //       "match_pairs": [],
  //       "opcje": [],
  //       "poprawna": [],
  //       "explanation": ""
  //     },
  //     {
  //       "pytanie": "What is a characteristic of an IPS atomic signature?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "it is the simplest type of signature",
  //       "opcje": [
  //         "it can be slow and inefficient to analyze traffic",
  //         "it requires several pieces of data to match an attack",
  //         "it is a stateful signature",
  //         "it is the simplest type of signature"
  //       ],
  //       "explanation": "There are two types of IPS signatures:\n        Atomic – This is the simplest type of signature because it does not require the IPS to maintain state\n        information and it can identify an attack with a single packet, activity, or event.\n        Composite – This is a stateful type of signature. It requires that the IPS maintain state information to match\n        an attack signature."
  //     },
  //     {
  //       "pytanie": "A company is concerned about data theft if any of the corporate laptops are stolen. Which Windows tool\n        would the company use to protect the data on the laptops?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "BitLocker",
  //       "opcje": [
  //         "AMP",
  //         "802.1X",
  //         "RADIUS",
  //         "BitLocker"
  //       ],
  //       "explanation": "Storage devices can be encrypted to protect data from unauthorized access. Windows BitLocker\n        provides drive encryption."
  //     },
  //     {
  //       "pytanie": "What protocol is used to encapsulate the EAP data between the authenticator and authentication server\n        performing 802.1X authentication?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "RADIUS",
  //       "opcje": [
  //         "RADIUS",
  //         "TACACS+",
  //         "SSH",
  //         "MD5"
  //       ],
  //       "explanation": "Encapsulation of EAP data between the authenticator and the authentication server is\n        performed using RADIUS."
  //     },
  //     {
  //       "pytanie": "A company requires the use of 802.1X security. What type of traffic can be sent if the authentication\n        port-control auto command is configured, but the client has not yet been authenticated?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "EAPOL",
  //       "opcje": [
  //         "SNMP",
  //         "EAPOL",
  //         "broadcasts such as ARP",
  //         "any data encrypted with 3DES or AES"
  //       ],
  //       "explanation": "802.1X prevents unauthorized devices from gaining access to the network. The authentication\n        port-control auto command turns on 802.1X access control. Until the client is authenticated, 802.1X only allows\n        Extensible Authentication Protocol over LAN (EAPOL), Cisco Discovery Protocol (CDP), and Spanning Tree Protocol\n        (STP) traffic to pass through the port. EAPOL messages are sent between the client and the authenticator such as\n        a switch. If authentication is successful, normal traffic can be sent and received through the port."
  //     },
  //     {
  //       "pytanie": "Which two security features can cause a switch port to become error-disabled? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "PortFast with BPDU guard enabled",
  //         "port security with the shutdown violation mode"
  //       ],
  //       "opcje": [
  //         "root guard",
  //         "PortFast with BPDU guard enabled",
  //         "protected ports",
  //         "storm control with the trap option",
  //         "port security with the shutdown violation mode"
  //       ],
  //       "explanation": "Error-disabled mode is a way for a switch to automatically shut down a port that is causing\n        problems, and usually requires manual intervention from an administrator to restore the port. When port security\n        is configured to use the shutdown violation mode, it will put the port into the error-disabled mode when the\n        maximum number of MAC addresses is exceeded. Likewise, BPDU guard will put the port into error-disabled mode if\n        a BPDU arrives on a PortFast enabled interface. Storm control will only put the port into the error-disabled\n        mode when configured with the shutdown option. The trap option will simply create an SNMP log message."
  //     },
  //     {
  //       "pytanie": "What are three techniques for mitigating VLAN hopping attacks? (Choose three.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "Disable DTP.",
  //         "Enable trunking manually.",
  //         "Set the native VLAN to an unused VLAN."
  //       ],
  //       "opcje": [
  //         "Disable DTP.",
  //         "Enable trunking manually.",
  //         "Set the native VLAN to an unused VLAN.",
  //         "Enable BPDU guard.",
  //         "Enable Source Guard.",
  //         "Use private VLANs."
  //       ],
  //       "explanation": "Mitigating a VLAN hopping attack can be done by disabling Dynamic Trunking Protocol (DTP),\n        manually setting ports to trunking mode, and by setting the native VLAN of trunk links to VLANs not in use."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. A network administrator is configuring DAI on switch SW1. What is the result of\n        entering the exhibited commands?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2020/06/What-is-the-result-of-entering-the-exhibited-commands.jpg",
  //       "type": "choice",
  //       "poprawna": "DAI will validate only the destination MAC addresses.",
  //       "opcje": [
  //         "DAI will validate both source and destination MAC addresses as well as the IP addresses in the order specified.\n        If all parameters are valid then the ARP packet is allowed to pass.",
  //         "DAI will validate both source and destination MAC addresses as well as the IP addresses in the order specified.\n        When one set of parameters are valid, the ARP packet is allowed to pass.",
  //         "DAI will validate only the destination MAC addresses.",
  //         "DAI will validate only the IP addresses."
  //       ],
  //       "explanation": "DAI can be configured to check for destination MAC, source MAC, and IP addresses. However,\n        only one ip arp inspection validate command can be configured. Entering multiple ip arp inspection validate\n        commands overwrites the previous command."
  //     },
  //     {
  //       "pytanie": "During a recent pandemic, employees from ABC company were allowed to work from home. What security\n        technology should be implemented to ensure that data communications between the employees and the ABC Head\n        Office network remain confidential?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "a symmetric or asymmetric encryption algorithm such as AES or\n                PKI",
  //       "opcje": [
  //         "a symmetric or asymmetric encryption algorithm such as AES or\n                PKI",
  //         "a hashing algorithm such as MD5",
  //         "a hash message authentication code such as HMAC",
  //         "a hash-generating algorithm such as SHA"
  //       ],
  //       "explanation": "MD5 and SHA are hash-generating algorithms that guarantee that no one intercepted the message\n        and altered it. Advanced Encryption Standard (AES) is a popular symmetric encryption algorithm where each\n        communicating party needs to know the pre-shared key. Public key infrastructure (PKI) is an asymmetric\n        encryption algorithm based on the assumption that the two communicating parties have not previously shared a\n        secret key. HMAC is a hash message authentication code that guarantees that the message is not a forgery and\n        actually comes from the authentic source."
  //     },
  //     {
  //       "pytanie": "Which cipher played a significant role in World War II?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "Enigma",
  //       "opcje": [
  //         "RC4",
  //         "Caesar",
  //         "Enigma",
  //         "One-time pad"
  //       ],
  //       "explanation": "The Enigma machine was an electromechanical encryption device that created the Enigma cipher\n        and was developed during World War II. The device depended on the distribution of pre-shared keys that were used\n        to encrypt and decrypt messages."
  //     },
  //     {
  //       "pytanie": "One method used by Cryptanalysts to crack codes is based on the fact that some letters of the English\n        language are used more often than others. Which term is used to describe this method?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "frequency analysis",
  //       "opcje": [
  //         "cybertext",
  //         "meet-in-the-middle",
  //         "frequency analysis",
  //         "known-plaintext"
  //       ],
  //       "explanation": "Frequency analysis uses the fact that some characters in the English alphabet are used more\n        often than others. The letters E, T, and A are the most popular letters and J, Q, X, and Z are the least\n        popular."
  //     },
  //     {
  //       "pytanie": "Why are DES keys considered weak keys?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "They produce identical subkeys.",
  //       "opcje": [
  //         "They are more resource intensive.",
  //         "DES weak keys are difficult to manage.",
  //         "They produce identical subkeys.",
  //         "DES weak keys use very long key sizes."
  //       ],
  //       "explanation": "Weak keys, whether part of an existing encryption algorithm or manually generated, reveal\n        regularities in encryption. This creates a shortcut by which a hacker can break the encryption. DES has four\n        keys for which encryption is identical to decryption."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. A network administrator is configuring an object group on an ASA device. Which\n        configuration keyword should be used after the object group name SERVICE1 ?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/A-network-administrator-is-configuring-an-object-group-on-an-ASA-device.jpg",
  //       "type": "choice",
  //       "poprawna": "tcp",
  //       "opcje": [
  //         "ip",
  //         "tcp",
  //         "udp",
  //         "icmp"
  //       ],
  //       "explanation": "Because this is a service object group, the keyword should indicate which protocol is used.\n        The options are tcp, udp, tcp-udp, icmp, and icmpv6. The subsequent commands indicate that the services in the\n        group are WWW, FTP, and SMTP. Because all of these protocols use TCP, the keyword in the service object group\n        should be tcp ."
  //     },
  //     {
  //       "pytanie": "In the implementation of network security, how does the deployment of a Cisco ASA firewall differ from a\n        Cisco IOS router?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "ASA devices support interface security levels.",
  //       "opcje": [
  //         "ASA devices use ACLs that are always numbered.",
  //         "ASA devices do not support an implicit deny within ACLs.",
  //         "ASA devices support interface security levels.",
  //         "ASA devices use ACLs configured with a wildcard mask."
  //       ],
  //       "explanation": "The differences between ASA devices and Cisco IOS routers include the following:\n        An ASA device configured with ACLs is configured with a subnet mask.\n        An ASA device supports interface security levels.\n        An ASA device configured with an ACL is always named.\nASA devices and Cisco IOS routers are similar in that they both support an implicit deny within an ACL."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. A network administrator is configuring PAT on an ASA device to enable internal\n        workstations to access the Internet. Which configuration command should be used next?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/Which-configuration-command-should-be-used-next.jpg",
  //       "type": "choice",
  //       "poprawna": "nat (inside,outside) dynamic interface",
  //       "opcje": [
  //         "nat (inside,outside) dynamic NET1",
  //         "nat (outside,inside) dynamic NET1",
  //         "nat (inside,outside) dynamic interface",
  //         "nat (outside,inside) dynamic interface"
  //       ],
  //       "explanation": "The nat (inside,outside) dynamic interface command indicates that inside hosts are\n        overloading the outside address of the mapped interface."
  //     },
  //     {
  //       "pytanie": "What type of network security test uses simulated attacks to determine the feasibility of an attack as\n        well as the possible consequences if the attack occurs?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "penetration testing",
  //       "opcje": [
  //         "penetration testing",
  //         "network scanning",
  //         "integrity checking",
  //         "vulnerability scanning"
  //       ],
  //       "explanation": "There are many tests that are used by security specialists to assess the status of a system.\n        They include the following:\n        penetration testing to determine the feasibility of attacks\n        network scanning to scan for and identify open TCP ports\n        integrity checking to check for changes that have occurred in the system\n        vulnerability scanning to detect potential weaknesses in systems"
  //     },
  //     {
  //       "pytanie": "What three tasks can a network administrator accomplish with the Nmap and Zenmap security testing tools?\n        (Choose three.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "operating system fingerprinting",
  //         "assessment of Layer 3 protocol support on hosts",
  //         "open UDP and TCP port detection"
  //       ],
  //       "opcje": [
  //         "operating system fingerprinting",
  //         "assessment of Layer 3 protocol support on hosts",
  //         "open UDP and TCP port detection",
  //         "security event analysis and reporting",
  //         "password recovery",
  //         "development of IDS signatures"
  //       ],
  //       "explanation": "Nmap is a low-level network scanner that is available to the public and that has the ability\n        to perform port scanning, to identify open TCP and UDP ports, and which can also perform system identification.\n        It can also be used to identify Layer 3 protocols that are running on a system. Zenmap is the GUI version of\n        Nmap."
  //     },
  //     {
  //       "pytanie": "Match the network security testing tool with the correct function. (Not all options are used.)",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-10-28_100937.jpg",
  //       "type": "matching",
  //       "match_pairs": [],
  //       "opcje": [],
  //       "poprawna": [],
  //       "explanation": ""
  //     },
  //     {
  //       "pytanie": "Which two means can be used to try to bypass the management of mobile devices? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "rooting",
  //         "jailbreaking"
  //       ],
  //       "opcje": [
  //         "using a fuzzer",
  //         "rooting",
  //         "jailbreaking",
  //         "packet sniffing",
  //         "using a Trojan Horse"
  //       ],
  //       "explanation": "Jailbreaking is a term used when breaking into an Apple iOS device, whereas rooting is the\n        term used for doing the same to an Android device. Both must be concerns in the corporate environment where so\n        many people bring their own devices and access the corporate networks."
  //     },
  //     {
  //       "pytanie": "Match the type of cyberattackers to the description. (Not all options are used.)",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-10-28_102053.jpg",
  //       "type": "matching",
  //       "match_pairs": [],
  //       "opcje": [],
  //       "poprawna": [],
  //       "explanation": ""
  //     },
  //     {
  //       "pytanie": "What is a benefit of having users or remote employees use a VPN to connect to the existing network rather\n        than growing the network infrastructure?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "scalability",
  //       "opcje": [
  //         "security",
  //         "scalability",
  //         "cost savings",
  //         "compatibility"
  //       ],
  //       "explanation": "A benefit of VPNs is scalability because organizations can use the Internet and easily add\n        new users without adding significant infrastructure. Security is provided by using encryption and authentication\n        protocols to protect data. Another benefit is compatibility because VPNs can be implemented across a wide\n        variety of WAN connections. Organizations also benefit from cost savings because VPNs reduce connectivity costs\n        while simultaneously increasing remote connection bandwidth."
  //     },
  //     {
  //       "pytanie": "What is a difference between symmetric and asymmetric encryption algorithms?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "Symmetric encryption algorithms use pre-shared keys. Asymmetric encryption\n                algorithms use different keys to encrypt and decrypt data.",
  //       "opcje": [
  //         "Symmetric algorithms are typically hundreds to thousands of times slower than asymmetric algorithms.",
  //         "Symmetric encryption algorithms are used to authenticate secure communications. Asymmetric encryption algorithms\n        are used to repudiate messages.",
  //         "Symmetric encryption algorithms are used to encrypt data. Asymmetric encryption algorithms are used to decrypt\n        data.",
  //         "Symmetric encryption algorithms use pre-shared keys. Asymmetric encryption\n                algorithms use different keys to encrypt and decrypt data."
  //       ],
  //       "explanation": "Asymmetric algorithms can use very long key lengths in order to avoid being hacked. This\n        results in the use of significantly increased resources and time compared to symmetric algorithms."
  //     },
  //     {
  //       "pytanie": "What technology allows users to verify the identity of a website and to trust code that is downloaded\n        from the Internet?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "digital signature",
  //       "opcje": [
  //         "asymmetric key algorithm",
  //         "digital signature",
  //         "encryption",
  //         "hash algorithm"
  //       ],
  //       "explanation": "Digital signatures provide assurance of the authenticity and integrity of software codes.\n        They provide the ability to trust code that is downloaded from the Internet."
  //     },
  //     {
  //       "pytanie": "Which two statements correctly describe certificate classes used in the PKI? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "A class 0 certificate is for testing purposes.",
  //         "A class 4 certificate is for online business transactions between\n                companies."
  //       ],
  //       "opcje": [
  //         "A class 0 certificate is for testing purposes.",
  //         "A class 0 certificate is more trusted than a class 1 certificate.",
  //         "The lower the class number, the more trusted the certificate.",
  //         "A class 5 certificate is for users with a focus on verification of email.",
  //         "A class 4 certificate is for online business transactions between\n                companies."
  //       ],
  //       "explanation": "A digital certificate class is identified by a number. The higher the number, the more\n        trusted the certificate. The classes include the following:Class 0 is for testing purposes in which no checks\n        have been performed.\n        Class 1 is for individuals with a focus on verification of email.\n        Class 2 is for organizations for which proof of identity is required.\n        Class 3 is for servers and software signing for which independent verification and checking of identity and\n        authority is done by the issuing certificate authority.\n        Class 4 is for online business transactions between companies.\n        Class 5 is for private organizations or governmental security."
  //     },
  //     {
  //       "pytanie": "What is the standard for a public key infrastructure to manage digital certificates?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "x.509",
  //       "opcje": [
  //         "PKI",
  //         "NIST-SP800",
  //         "x.503",
  //         "x.509"
  //       ],
  //       "explanation": "The x.509 standard is for a PKI infrastructure and x.500 if for directory structures.​"
  //     },
  //     {
  //       "pytanie": "Which two statements describe remote access VPNs? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "Client software is usually required to be able to access the network.",
  //         "Remote access VPNs support the needs of telecommuters and mobile\n                users."
  //       ],
  //       "opcje": [
  //         "Remote access VPNs are used to connect entire networks, such as a branch office to headquarters.",
  //         "End users are not aware that VPNs exists.",
  //         "A leased line is required to implement remote access VPNs.",
  //         "Client software is usually required to be able to access the network.",
  //         "Remote access VPNs support the needs of telecommuters and mobile\n                users."
  //       ],
  //       "explanation": "Remote access VPNs are designed to provide for the needs of telecommuters and mobile users\n        through the use of software that is installed on the client to encrypt and encapsulate the data. Remote access\n        VPNs can be used across a variety of WAN connections. Users must access the client software to initiate the VPN\n        connection."
  //     },
  //     {
  //       "pytanie": "What are two hashing algorithms used with IPsec AH to guarantee authenticity? (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "MD5",
  //         "SHA"
  //       ],
  //       "opcje": [
  //         "MD5",
  //         "SHA",
  //         "AES",
  //         "DH",
  //         "RSA"
  //       ],
  //       "explanation": "The IPsec framework uses various protocols and algorithms to provide data confidentiality,\n        data integrity, authentication, and secure key exchange. Two popular algorithms used to ensure that data is not\n        intercepted and modified (data integrity and authenticity) are MD5 and SHA."
  //     },
  //     {
  //       "pytanie": "What is the purpose of configuring multiple crypto ACLs when building a VPN connection between remote\n        sites?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "When multiple combinations of IPsec protection are being chosen, multiple\n                crypto ACLs can define different traffic types.",
  //       "opcje": [
  //         "By applying the ACL on a public interface, multiple crypto ACLs can be built to prevent public users from\n        connecting to the VPN-enabled router.",
  //         "Multiple crypto ACLs can be configured to deny specific network traffic from crossing a VPN.",
  //         "When multiple combinations of IPsec protection are being chosen, multiple\n                crypto ACLs can define different traffic types.",
  //         "Multiple crypto ACLs can define multiple remote peers for connecting with a VPN-enabled router across the\n        Internet or network."
  //       ],
  //       "explanation": "A crypto ACL can define “interesting traffic” that is used to build a VPN, and forward that\n        “interesting traffic” across the VPN to another VPN-enabled router. Multiple crypto ACLs are used to define\n        multiple different types of traffic and utilize different IPsec protection corresponding to the different types\n        of traffic."
  //     },
  //     {
  //       "pytanie": "Refer to the exhibit. An administrator creates three zones (A, B, and C) in an ASA that filters traffic.\n        Traffic originating from Zone A going to Zone C is denied, and traffic originating from Zone B going to Zone C\n        is denied. What is a possible scenario for Zones A, B, and C?",
  //       "image": "https://itexamanswers.net/wp-content/uploads/2016/02/CCNA-Security-Chapter-9-2.png",
  //       "type": "choice",
  //       "poprawna": "A – DMZ, B – Outside, C – Inside",
  //       "opcje": [
  //         "A – DMZ, B – Inside, C – Outside",
  //         "A – Inside, B – DMZ, C – Outside",
  //         "A – Outside, B – Inside, C – DMZ",
  //         "A – DMZ, B – Outside, C – Inside"
  //       ],
  //       "explanation": "ASA protects Network/Zone C (Inside) from unauthorized access by users on a Network/Zone B\n        (Outside). It also denies traffic from Network/Zone A (DMZ) to access the Network/Zone C (Inside)."
  //     },
  //     {
  //       "pytanie": "What are two monitoring tools that capture network traffic and forward it to network monitoring devices?\n        (Choose two.)",
  //       "image": "",
  //       "type": "multi-choice",
  //       "poprawna": [
  //         "SPAN",
  //         "network tap"
  //       ],
  //       "opcje": [
  //         "SIEM",
  //         "Wireshark",
  //         "SNMP",
  //         "SPAN",
  //         "network tap"
  //       ],
  //       "explanation": "A network tap is used to capture traffic for monitoring the network. The tap is typically a\n        passive splitting device implemented inline on the network and forwards all traffic including physical layer\n        errors to an analysis device. SPAN is a port mirroring technology supported on Cisco switches that enables the\n        switch to copy frames and forward them to an analysis device."
  //     },
  //     {
  //       "pytanie": "What is the IPS detection engine that is included in the SEC license for 4000 Series ISRs?",
  //       "image": "",
  //       "type": "choice",
  //       "poprawna": "Snort",
  //       "opcje": [
  //         "Security Onion",
  //         "Snort",
  //         "ASDM",
  //         "AMP"
  //       ],
  //       "explanation": "Snort is the IPS detection and enforcement engine that is included in the SEC license for\n        4000 Series ISRs."
  //     }
  //   ]
  // }
  // ,
  {
    "id": "netsec-final",
    "title": "Network Security Final",
    "questions": [
      {
        "pytanie": "Match the type of ASA ACLs to the description. (Not all options are used.)",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-05-29_000945.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "left": "extended access lists",
            "right": "used to specify source and destination addresses and protocol, ports, or the ICMP type"
          },
          {
            "left": "webtype access lists",
            "right": "used to support filtering for clientless SSL VPN"
          },
          {
            "left": "standard access lists",
            "right": "used to identify the destination IP addresses only"
          },
          {
            "left": "EtherType access lists",
            "right": "used only if the security appliance is running in transparent mode"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": ""
      },
      {
        "pytanie": "Which statement describes a difference between the Cisco ASA IOS CLI feature and the router IOS CLI\n        feature?",
        "image": "",
        "type": "choice",
        "poprawna": "To use a show command in a general configuration mode, ASA can use the command directly\n        whereas a router will need to enter the do command before issuing the show command.",
        "opcje": [
          "ASA uses the ? command whereas a router uses the help command to receive help on a brief description and the\n        syntax of a command.",
          "To use a show command in a general configuration mode, ASA can use the command directly\n        whereas a router will need to enter the do command before issuing the show command.",
          "To complete a partially typed command, ASA uses the Ctrl+Tab key combination whereas a router uses the Tab key.",
          "To indicate the CLI EXEC mode, ASA uses the % symbol whereas a router uses the # symbol."
        ],
        "explanation": "The ASA CLI is a proprietary OS which has a similar look and feel to the Cisco\n        router IOS. Although it shares some common features with the router IOS, it has its unique features. For\n        example, an ASA CLI command can be executed regardless of the current configuration mode prompt. The IOS do\n        command is not required or recognized. Both the ASA CLI and the router CLI use the # symbol to indicate the EXEC\n        mode. Both CLIs use the Tab key to complete a partially typed command. Different from the router IOS, the ASA\n        provides a help command that provides a brief command description and syntax for certain commands."
      },
      {
        "pytanie": "Refer to the exhibit. A network administrator is configuring AAA implementation on an ASA device. What\n        does the option link3 indicate?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/i272198v1n1_272198.png",
        "type": "choice",
        "poprawna": "the interface name",
        "opcje": [
          "the network name where the AAA server resides",
          "the specific AAA server name",
          "the sequence of servers in the AAA server group",
          "the interface name"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What provides both secure segmentation and threat defense in a Secure Data Center solution?",
        "image": "",
        "type": "choice",
        "poprawna": "Adaptive Security Appliance",
        "opcje": [
          "Cisco Security Manager software",
          "AAA server",
          "Adaptive Security Appliance",
          "intrusion prevention system"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What are the three core components of the Cisco Secure Data Center solution? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "secure segmentation",
          "visibility",
          "threat defense"
        ],
        "opcje": [
          "mesh network",
          "secure segmentation",
          "visibility",
          "threat defense",
          "servers",
          "infrastructure"
        ],
        "explanation": "Secure segmentation is used when managing and organizing data in a data center.\n        Threat defense includes a firewall and intrusion prevention system (IPS). Data center visibility is designed to\n        simplify operations and compliance reporting by providing consistent security policy enforcement."
      },
      {
        "pytanie": "What are three characteristics of ASA transparent mode? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "This mode does not support VPNs, QoS, or DHCP Relay.",
          "This mode is referred to as a \u201cbump in the wire.\u201d",
          "In this mode the ASA is invisible to an attacker."
        ],
        "opcje": [
          "This mode does not support VPNs, QoS, or DHCP Relay.",
          "It is the traditional firewall deployment mode.",
          "This mode is referred to as a \u201cbump in the wire.\u201d",
          "NAT can be implemented between connected networks.",
          "In this mode the ASA is invisible to an attacker.",
          "The interfaces of the ASA separate Layer 3 networks and require IP addresses in different subnets."
        ],
        "explanation": ""
      },
      {
        "pytanie": "What is needed to allow specific traffic that is sourced on the outside network of an ASA firewall to\n        reach an internal network?",
        "image": "",
        "type": "choice",
        "poprawna": "ACL",
        "opcje": [
          "ACL",
          "NAT",
          "dynamic routing protocols",
          "outside security zone level 0"
        ],
        "explanation": "In order to explicitly permit traffic from an interface with a lower security level\n        to an interface with a higher security level, an ACL must be configured. By default, traffic will only flow from\n        a higher security level to a lower."
      },
      {
        "pytanie": "What will be the result of failed login attempts if the following command is entered into a\n        router? login block-for 150 attempts 4 within 90",
        "image": "",
        "type": "choice",
        "poprawna": "All login attempts will be blocked for 150 seconds if there are 4 failed attempts within\n        90 seconds.",
        "opcje": [
          "All login attempts will be blocked for 150 seconds if there are 4 failed attempts within\n        90 seconds.",
          "All login attempts will be blocked for 90 seconds if there are 4 failed attempts within 150 seconds.",
          "All login attempts will be blocked for 1.5 hours if there are 4 failed attempts within 150 seconds.",
          "All login attempts will be blocked for 4 hours if there are 90 failed attempts within 150 seconds."
        ],
        "explanation": "The components of the login block-for 150 attempts 4 within 90 command are as\n        follows:\n        The expression block-for 150 is the time in seconds that logins will be blocked.\n        The expression attempts 4 is the number of failed attempts that will trigger the blocking of login\n        requests.\n        The expression within 90 is the time in seconds in which the 4 failed attempts must occur."
      },
      {
        "pytanie": "Which two tasks are associated with router hardening? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "disabling unused ports and interfaces",
          "securing administrative access"
        ],
        "opcje": [
          "placing the router in a secure room",
          "disabling unused ports and interfaces",
          "installing the maximum amount of memory possible",
          "securing administrative access",
          "using uninterruptible power supplies"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which threat protection capability is provided by Cisco ESA?",
        "image": "",
        "type": "choice",
        "poprawna": "spam protection",
        "opcje": [
          "web filtering",
          "cloud access security",
          "spam protection",
          "Layer 4 traffic monitoring"
        ],
        "explanation": "Email is a top attack vector for security breaches. Cisco ESA includes many threat\n        protection capabilities for email such as spam protection, forged email detection, and Cisco advanced phishing\n        protection."
      },
      {
        "pytanie": "What are two security measures used to protect endpoints in the borderless network? (Choose\n        two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "denylisting",
          "DLP"
        ],
        "opcje": [
          "denylisting",
          "Snort IPS",
          "DLP",
          "DMZ",
          "rootkit"
        ],
        "explanation": "Measure\nPurpose\n\n\n\n\nantimalware software\nProtect endpoints from malware.\n\n\nspam filtering\nPrevent spam emails from reaching endpoints.\n\n\nblocklisting\nPrevent endpoints from connecting to websites with bad reputations by immediately blocking\n                    connections based on the latest reputation intelligence.\n\n\ndata loss prevention (DLP)\nPrevent sensitive information from being lost or stolen."
      },
      {
        "pytanie": "Which three types of traffic are allowed when the authentication port-control auto command has been\n        issued and the client has not yet been authenticated? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "CDP",
          "STP",
          "EAPOL"
        ],
        "opcje": [
          "CDP",
          "802.1Q",
          "IPsec",
          "TACACS+",
          "STP",
          "EAPOL"
        ],
        "explanation": "Until the workstation is authenticated, 802.1X access control enables only\n        Extensible Authentication Protocol over LAN (EAPOL), Cisco Discovery Protocol (CDP), and Spanning Tree Protocol\n        (STP) traffic through the port to which the workstation is connected. After authentication succeeds, normal\n        traffic can pass through the port."
      },
      {
        "pytanie": "Which statement describes a characteristic of the IKE protocol?",
        "image": "",
        "type": "choice",
        "poprawna": "It uses UDP port 500 to exchange IKE information between the security gateways.",
        "opcje": [
          "It uses UDP port 500 to exchange IKE information between the security gateways.",
          "IKE Phase 1 can be implemented in three different modes: main, aggressive, or quick.",
          "It allows for the transmission of keys directly across a network.",
          "The purpose of IKE Phase 2 is to negotiate a security association between two IKE peers."
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which action do IPsec peers take during the IKE Phase 2 exchange?",
        "image": "",
        "type": "choice",
        "poprawna": "negotiation of IPsec policy",
        "opcje": [
          "exchange of DH keys",
          "negotiation of IPsec policy",
          "negotiation of IKE policy sets",
          "verification of peer identity"
        ],
        "explanation": "The IKE protocol executes in two phases. During Phase 1 the two sides negotiate IKE\n        policy sets, authenticate each other, and set up a secure channel. During the second phase IKE negotiates\n        security associations between the peers."
      },
      {
        "pytanie": "What are two hashing algorithms used with IPsec AH to guarantee authenticity? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "SHA",
          "MD5"
        ],
        "opcje": [
          "SHA",
          "RSA",
          "DH",
          "MD5",
          "AES"
        ],
        "explanation": "The IPsec framework uses various protocols and algorithms to provide data\n        confidentiality, data integrity, authentication, and secure key exchange. Two popular algorithms used to ensure\n        that data is not intercepted and modified (data integrity and authenticity) are MD5 and SHA."
      },
      {
        "pytanie": "Which command raises the privilege level of the ping command to 7?",
        "image": "",
        "type": "choice",
        "poprawna": "privilege exec level 7 ping",
        "opcje": [
          "user exec ping level 7",
          "authorization exec ping level 7",
          "accounting exec level 7 ping",
          "privilege exec level 7 ping"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What is a characteristic of a role-based CLI view of router configuration?",
        "image": "",
        "type": "choice",
        "poprawna": "A single CLI view can be shared within multiple superviews.",
        "opcje": [
          "A CLI view has a command hierarchy, with higher and lower views.",
          "When a superview is deleted, the associated CLI views are deleted.\u200b",
          "A single CLI view can be shared within multiple superviews.",
          "Only a superview user can configure a new view and add or remove commands from the existing views.\u200b"
        ],
        "explanation": "A CLI view has no command hierarchy, and therefore, no higher or lower views.\n        Deleting a superview does not delete the associated CLI views. Only a root view user can configure a new view\n        and add or remove commands from the existing views.\u200b"
      },
      {
        "pytanie": "What is a limitation to using OOB management on a large enterprise network?",
        "image": "",
        "type": "choice",
        "poprawna": "All devices appear to be attached to a single management network.",
        "opcje": [
          "Production traffic shares the network with management traffic.",
          "Terminal servers can have direct console connections to user devices needing management.",
          "OOB management requires the creation of VPNs.",
          "All devices appear to be attached to a single management network."
        ],
        "explanation": "OOB management provides a dedicated management network without production traffic.\n        Devices within that network, such as terminal servers, have direct console access for management purposes.\n        Because in-band management runs over the production network, secure tunnels or VPNs may be needed. Failures on\n        the production network may not be communicated to the OOB network administrator because the OOB management\n        network may not be affected"
      },
      {
        "pytanie": "Refer to the exhibit. A corporate network is using NTP to synchronize the time across devices. What can\n        be determined from the displayed output?",
        "image": "https://itexamanswers.net/wp-content/uploads/2020/08/2020-08-16_233818.jpg",
        "type": "choice",
        "poprawna": "Router03 is a stratum 2 device that can provide NTP service to other devices in the\n        network.",
        "opcje": [
          "Router03 is a stratum 2 device that can provide NTP service to other devices in the\n        network.",
          "The time on Router03 may not be reliable because it is offset by more than 7 seconds to the time server.",
          "The interface on Router03 that connects to the time sever has the IPv4 address 209.165.200.225.",
          "Router03 time is synchronized to a stratum 2 time server."
        ],
        "explanation": "The show ntp status command displays that Router03 is now a stratum 2 device\n        synchronized with the NTP server at 209.165.220.225 and can provide NTP service to other devices in the network.\n        The clock offset is only 7.0883 milliseconds, not 7.0883 seconds."
      },
      {
        "pytanie": "Refer to the exhibit. Which two conclusions can be drawn from the syslog message that was generated by\n        the router? (Choose two.)",
        "image": "https://itexamanswers.net/wp-content/uploads/2017/03/2017-03-11_115728.jpg",
        "type": "multi-choice",
        "poprawna": [
          "This message indicates that service timestamps have been configured.",
          "This message is a level 5 notification message."
        ],
        "opcje": [
          "This message resulted from an unusual error requiring reconfiguration of the interface.",
          "This message indicates that service timestamps have been configured.",
          "This message indicates that the interface changed state five times.",
          "This message is a level 5 notification message.",
          "This message indicates that the interface should be replaced."
        ],
        "explanation": "The message is a level 5 notification message as shown in the %LINEPROTO-5 section\n        of the output. Messages reporting the link status are common and do not require replacing the interface or\n        reconfiguring the interface. The date and time displayed at the beginning of the message indicates that service\n        timestamps have been configured on the router."
      },
      {
        "pytanie": "Which two types of hackers are typically classified as grey hat hackers? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "hacktivists",
          "vulnerability brokers"
        ],
        "opcje": [
          "hacktivists",
          "cyber criminals",
          "vulnerability brokers",
          "script kiddies",
          "state-sponsored hackers"
        ],
        "explanation": "Grey hat hackers may do unethical or illegal things, but not for personal gain or\n        to cause damage. Hacktivists use their hacking as a form of political or social protest, and vulnerability\n        brokers hack to uncover weaknesses and report them to vendors. Depending on the perspective one possesses,\n        state-sponsored hackers are either white hat or black hat operators. Script kiddies create hacking scripts to\n        cause damage or disruption. Cyber criminals use hacking to obtain financial gain by illegal means."
      },
      {
        "pytanie": "When describing malware, what is a difference between a virus and a worm?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-09-28_224807.jpg",
        "type": "choice",
        "poprawna": "A virus replicates itself by attaching to another file, whereas a worm can replicate\n        itself independently.",
        "opcje": [
          "A virus focuses on gaining privileged access to a device, whereas a worm does not.",
          "A virus replicates itself by attaching to another file, whereas a worm can replicate\n        itself independently.",
          "A virus can be used to launch a DoS attack (but not a DDoS), but a worm can be used to launch both DoS and DDoS\n        attacks.",
          "A virus can be used to deliver advertisements without user consent, whereas a worm cannot."
        ],
        "explanation": "Malware can be classified as follows:\n        Virus (self-replicates by attaching to another program or file)\n        Worm (replicates independently of another program)\n        Trojan horse (masquerades as a legitimate file or program)\n        Rootkit (gains privileged access to a machine while concealing itself)\n        Spyware (collects information from a target system)\n        Adware (delivers advertisements with or without consent)\n        Bot (waits for commands from the hacker)\n        Ransomware (holds a computer system or data captive until payment isreceived)"
      },
      {
        "pytanie": "Which type of packet is unable to be filtered by an outbound ACL?",
        "image": "",
        "type": "choice",
        "poprawna": "router-generated packet",
        "opcje": [
          "multicast packet",
          "ICMP packet",
          "broadcast packet",
          "router-generated packet"
        ],
        "explanation": "Traffic that originates within a router such as pings from a command prompt, remote\n        access from a router to another device, or routing updates are not affected by outbound access lists. The\n        traffic must flow through the router in order for the router to apply the ACEs."
      },
      {
        "pytanie": "Consider the access list command applied outbound on a router serial interface. access-list 100 deny icmp 192.168.10.0 0.0.0.255 any echo reply What is the effect of applying this access list command?",
        "image": "",
        "type": "choice",
        "poprawna": "No traffic will be allowed outbound on the serial interface.",
        "opcje": [
          "The only traffic denied is echo-replies sourced from the 192.168.10.0/24 network. All other traffic is allowed.",
          "The only traffic denied is ICMP-based traffic. All other traffic is allowed.",
          "No traffic will be allowed outbound on the serial interface.",
          "Users on the 192.168.10.0/24 network are not allowed to transmit traffic to any other destination."
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which command is used to activate an IPv6 ACL named ENG_ACL on an interface so that the router filters\n        traffic prior to accessing the routing table?",
        "image": "",
        "type": "choice",
        "poprawna": "ipv6 traffic-filter ENG_ACL in",
        "opcje": [
          "ipv6 access-class ENG_ACL in",
          "ipv6 traffic-filter ENG_ACL out",
          "ipv6 traffic-filter ENG_ACL in",
          "ipv6 access-class ENG_ACL out"
        ],
        "explanation": "For the purpose of applying an access list to a particular interface, the ipv6\n        traffic-filter IPv6 command is equivalent to the access-group IPv4 command. The direction in which the traffic\n        is examined (in or out) is also required."
      },
      {
        "pytanie": "What technology has a function of using trusted third-party protocols to issue credentials that are\n        accepted as an authoritative identity?",
        "image": "",
        "type": "choice",
        "poprawna": "PKI certificates",
        "opcje": [
          "digital signatures",
          "hashing algorithms",
          "PKI certificates",
          "symmetric keys"
        ],
        "explanation": "Digital certificates are used to prove the authenticity and integrity of PKI\n        certificates, but a PKI Certificate Authority is a trusted third-party entity that issues PKI certificates. PKI\n        certificates are public information and are used to provide authenticity, confidentiality, integrity, and\n        nonrepudiation services that can scale to large requirements."
      },
      {
        "pytanie": "What are two methods to maintain certificate revocation status? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "OCSP",
          "CRL"
        ],
        "opcje": [
          "subordinate CA",
          "OCSP",
          "DNS",
          "LDAP",
          "CRL"
        ],
        "explanation": "A digital certificate might need to be revoked if its key is compromised or it is\n        no longer needed. The certificate revocation list (CRL) and Online Certificate Status Protocol (OCSP), are two\n        common methods to check a certificate revocation status."
      },
      {
        "pytanie": "Which protocol is an IETF standard that defines the PKI digital certificate format?",
        "image": "",
        "type": "choice",
        "poprawna": "X.509",
        "opcje": [
          "SSL/TLS",
          "X.500",
          "LDAP",
          "X.509"
        ],
        "explanation": "To address the interoperability of different PKI vendors, IETF published the\n        Internet X.509 Public Key Infrastructure Certificate Policy and Certification Practices Framework (RFC 2527).\n        The standard defines the format of a digital certificate."
      },
      {
        "pytanie": "A network administrator is configuring DAI on a switch. Which command should be used on the uplink\n        interface that connects to a router?",
        "image": "",
        "type": "choice",
        "poprawna": "ip arp inspection trust",
        "opcje": [
          "ip arp inspection trust",
          "ip dhcp snooping",
          "ip arp inspection vlan",
          "spanning-tree portfast"
        ],
        "explanation": "In general, a router serves as the default gateway for the LAN or VLAN on the\n        switch. Therefore, the uplink interface that connects to a router should be a trusted port for forwarding ARP\n        requests."
      },
      {
        "pytanie": "What is the best way to prevent a VLAN hopping attack?",
        "image": "",
        "type": "choice",
        "poprawna": "Disable trunk negotiation for trunk ports and statically set nontrunk ports as access\n        ports.",
        "opcje": [
          "Disable trunk negotiation for trunk ports and statically set nontrunk ports as access\n        ports.",
          "Disable STP on all nontrunk ports.",
          "Use VLAN 1 as the native VLAN on trunk ports.",
          "Use ISL encapsulation on all trunk links."
        ],
        "explanation": "VLAN hopping attacks rely on the attacker being able to create a trunk link with a\n        switch. Disabling DTP and configuring user-facing ports as static access ports can help prevent these types of\n        attacks. Disabling the Spanning Tree Protocol (STP) will not eliminate VLAN hopping attacks."
      },
      {
        "pytanie": "What would be the primary reason an attacker would launch a MAC address overflow attack?",
        "image": "",
        "type": "choice",
        "poprawna": "so that the attacker can see frames that are destined for other hosts",
        "opcje": [
          "so that the switch stops forwarding traffic",
          "so that legitimate hosts cannot obtain a MAC address",
          "so that the attacker can see frames that are destined for other hosts",
          "so that the attacker can execute arbitrary code on the switch"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What is the main difference between the implementation of IDS and IPS devices?",
        "image": "",
        "type": "choice",
        "poprawna": "An IDS would allow malicious traffic to pass before it is addressed, whereas an IPS stops\n        it immediately.",
        "opcje": [
          "An IDS can negatively impact the packet flow, whereas an IPS can not.",
          "An IDS needs to be deployed together with a firewall device, whereas an IPS can replace a firewall.",
          "An IDS would allow malicious traffic to pass before it is addressed, whereas an IPS stops\n        it immediately.",
          "An IDS uses signature-based technology to detect malicious packets, whereas an IPS uses profile-based\n        technology."
        ],
        "explanation": "An IPS is deployed in inline mode and will not allow malicious traffic to enter the\n        internal network without first analyzing it. An advantage of this is that it can stop an attack immediately. An\n        IDS is deployed in promiscuous mode. It copies the traffic patterns and analyzes them offline, thus it cannot\n        stop the attack immediately and it relies on another device to take further actions once it detects an attack.\n        Being deployed in inline mode, an IPS can negatively impact the traffic flow. Both IDS and IPS can use\n        signature-based technology to detect malicious packets. An IPS cannot replace other security devices, such as\n        firewalls, because they perform different tasks."
      },
      {
        "pytanie": "Which attack is defined as an attempt to exploit software vulnerabilities that are unknown or undisclosed\n        by the vendor?",
        "image": "",
        "type": "choice",
        "poprawna": "zero-day",
        "opcje": [
          "zero-day",
          "Trojan horse",
          "brute-force",
          "man-in-the-middle"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Match the network monitoring technology with the description.\n\n    Place the options in the following order:",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-05-29_004542.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "left": "IDS",
            "right": "passively monitors network traffic"
          },
          {
            "left": "RSPAN",
            "right": "uses VLANs to monitor traffic on remote switches"
          },
          {
            "left": "TAP",
            "right": "a passive traffic splitting device implemented inline between a device of interest and the network"
          },
          {
            "left": "IPS",
            "right": "can perform a packet drop to stop the trigger packets"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": ""
      },
      {
        "pytanie": "What are the three signature levels provided by Snort IPS on the 4000 Series ISR? (Choose\n        three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "security",
          "connectivity",
          "balanced"
        ],
        "opcje": [
          "security",
          "drop",
          "reject",
          "connectivity",
          "inspect",
          "balanced"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What are three attributes of IPS signatures? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "action",
          "trigger",
          "type"
        ],
        "opcje": [
          "action",
          "length",
          "trigger",
          "type",
          "depth",
          "function"
        ],
        "explanation": "IPS signatures have three distinctive attributes:\n\ntype\ntrigger (alarm)\naction"
      },
      {
        "pytanie": "Match each IPS signature trigger category with the description.",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/Match-each-IPS-signature-trigger-category-with-the-description.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "left": "pattern-based detection",
            "right": "simplest triggering mechanism which searches for a specific and pre-defined atomic or composite pattern"
          },
          {
            "left": "anomaly-based detection",
            "right": "involves first defining a profile of what is considered normal network or host activity"
          },
          {
            "left": "honey pot-based detection",
            "right": "uses a decoy server to divert attacks away from production devices"
          }
        ],
        "poprawna": null,
        "opcje": [],
        "explanation": ""
      },
      {
        "pytanie": "Which two features are included by both TACACS+ and RADIUS protocols? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "password encryption",
          "utilization of transport layer protocols"
        ],
        "opcje": [
          "SIP support",
          "password encryption",
          "802.1X support",
          "separate authentication and authorization processes",
          "utilization of transport layer protocols"
        ],
        "explanation": "Both TACACS+ and RADIUS support password encryption (TACACS+ encrypts all\n        communication) and use Layer 4 protocol (TACACS+ uses TCP and RADIUS uses UDP). TACACS+ supports separation of\n        authentication and authorization processes, while RADIUS combines authentication and authorization as one\n        process. RADIUS supports remote access technology, such as 802.1x and SIP; TACACS+ does not."
      },
      {
        "pytanie": "What function is provided by the RADIUS protocol?",
        "image": "",
        "type": "choice",
        "poprawna": "RADIUS provides separate ports for authorization and accounting.",
        "opcje": [
          "RADIUS provides encryption of the complete packet during transfer.",
          "RADIUS provides separate AAA services.",
          "RADIUS provides separate ports for authorization and accounting.",
          "RADIUS provides secure communication using TCP port 49."
        ],
        "explanation": "When an AAA user is authenticated, RADIUS uses UDP port 1645 or 1812 for\n        authentication and UDP port 1646 or 1813 for accounting. TACACS provides separate authorization and accounting\n        services. When a RADIUS client is authenticated, it is also authorized. TACACS provides secure connectivity\n        using TCP port 49. RADIUS hides passwords during transmission and does not encrypt the complete packet."
      },
      {
        "pytanie": "What are three characteristics of the RADIUS protocol? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "uses UDP ports for authentication and accounting",
          "supports 802.1X and SIP",
          "is an open RFC standard AAA protocol"
        ],
        "opcje": [
          "utilizes TCP port 49",
          "uses UDP ports for authentication and accounting",
          "supports 802.1X and SIP",
          "separates the authentication and authorization processes",
          "encrypts the entire body of the packet",
          "is an open RFC standard AAA protocol"
        ],
        "explanation": "RADIUS is an open-standard AAA protocol using UDP port 1645 or 1812 for\n        authentication and UDP port 1646 or 1813 for accounting. It combines authentication and authorization into one\n        process; thus, a password is encrypted for transmission while the rest of the packet will be sent in plain text.\n        RADIUS offers the expedited service and more comprehensive accounting desired by remote-access providers but\n        provides lower security and less potential for customization than TACACS+."
      },
      {
        "pytanie": "Which zone-based policy firewall zone is system-defined and applies to traffic destined for the router or\n        originating from the router?",
        "image": "",
        "type": "choice",
        "poprawna": "self zone",
        "opcje": [
          "local zone",
          "inside zone",
          "self zone",
          "system zone",
          "outside zone"
        ],
        "explanation": "Zone-based policy firewalls typically have the private (internal or trusted) zone, the public\n        (external or untrusted) zone, and the default self zone, which does not require any interfaces. The private or\n        internal zone is commonly used for internal LANs. The public zone would include the interfaces that connect to\n        an external (outside the business) interface."
      },
      {
        "pytanie": "What are two benefits of using a ZPF rather than a Classic Firewall? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "The ZPF is not dependent on ACLs.",
          "ZPF policies are easy to read and troubleshoot."
        ],
        "opcje": [
          "ZPF allows interfaces to be placed into zones for IP inspection.",
          "The ZPF is not dependent on ACLs.",
          "Multiple inspection actions are used with ZPF.",
          "ZPF policies are easy to read and troubleshoot.",
          "With ZPF, the router will allow packets unless they are explicitly blocked."
        ],
        "explanation": "There are several benefits of a ZPF:\n        \u2013 It is not dependent on ACLs.\n        \u2013 The router security posture is to block unless explicitly allowed.\n        \u2013 Policies are easy to read and troubleshoot with C3PL.\n        \u2013 One policy affects any given traffic, instead of needing multiple ACLs and inspection actions."
      },
      {
        "pytanie": "Place the steps for configuring zone-based policy (ZPF) firewalls in order from first to last. (Not all\n        options are used.)\n\n    Place the options in the following order:",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-05-29_005110.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "left": "Define traffic classes.",
            "right": "2nd"
          },
          {
            "left": "Create zones.",
            "right": "1st"
          },
          {
            "left": "Apply policies.",
            "right": "4th"
          },
          {
            "left": "Assign zones to interfaces.",
            "right": "5th"
          },
          {
            "left": "Create policies.",
            "right": "3rd"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": ""
      },
      {
        "pytanie": "How does a firewall handle traffic when it is originating from the private network and traveling to the\n        DMZ network?",
        "image": "",
        "type": "choice",
        "poprawna": "The traffic is usually permitted with little or no restrictions.",
        "opcje": [
          "The traffic is selectively denied based on service requirements.",
          "The traffic is usually permitted with little or no restrictions.",
          "The traffic is selectively permitted and inspected.",
          "The traffic is usually blocked."
        ],
        "explanation": "Traffic originating from the private network is inspected as it travels toward the\n        public or DMZ network. This traffic is permitted with little or no restriction. Inspected traffic returning from\n        the DMZ or public network to the private network is permitted."
      },
      {
        "pytanie": "Which two protocols generate connection information within a state table and are supported for stateful\n        filtering? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "TCP",
          "HTTP"
        ],
        "opcje": [
          "ICMP",
          "UDP",
          "DHCP",
          "TCP",
          "HTTP"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which type of firewall is supported by most routers and is the easiest to implement?",
        "image": "",
        "type": "choice",
        "poprawna": "stateless firewall",
        "opcje": [
          "next generation firewall",
          "stateless firewall",
          "stateful firewall",
          "proxy firewall"
        ],
        "explanation": "Packet Filtering (Stateless) Firewall uses a simple policy table look-up that\n        filters traffic based on specific criteria and is considered the easiest firewall to implement."
      },
      {
        "pytanie": "What network testing tool would an administrator use to assess and validate system configurations against\n        security policies and compliance standards?",
        "image": "",
        "type": "choice",
        "poprawna": "Tripwire",
        "opcje": [
          "Tripwire",
          "L0phtcrack",
          "Nessus",
          "Metasploit"
        ],
        "explanation": "Tripwire \u2013 This tool assesses and validates IT configurations against\n        internal policies, compliance standards, and security best practices."
      },
      {
        "pytanie": "What type of network security test can detect and report changes made to network systems?",
        "image": "",
        "type": "choice",
        "poprawna": "integrity checking",
        "opcje": [
          "vulnerability scanning",
          "network scanning",
          "integrity checking",
          "penetration testing"
        ],
        "explanation": "Integrity checking is used to detect and report changes made to systems.\n        Vulnerability scanning is used to find weaknesses and misconfigurations on network systems. Network scanning is\n        used to discover available resources on the network."
      },
      {
        "pytanie": "What network security testing tool has the ability to provide details on the source of suspicious network\n        activity?",
        "image": "",
        "type": "choice",
        "poprawna": "SIEM",
        "opcje": [
          "SIEM",
          "SuperScan",
          "Zenmap",
          "Tripwire"
        ],
        "explanation": "There are various network security tools available for network security testing and\n        evaluation. SuperScan is a Microsoft port scanning software that detects open TCP and UDP ports on systems. Nmap\n        and Zenmap are low-level network scanners available to the public. Tripwire is used to assess if network devices\n        are compliant with network security policies. SIEM is used to provide real-time reporting of security events on\n        the network."
      },
      {
        "pytanie": "How do modern cryptographers defend against brute-force attacks?",
        "image": "",
        "type": "choice",
        "poprawna": "Use a keyspace large enough that it takes too much money and too much time to conduct a\n        successful attack.",
        "opcje": [
          "Use statistical analysis to eliminate the most common encryption keys.",
          "Use a keyspace large enough that it takes too much money and too much time to conduct a\n        successful attack.",
          "Use an algorithm that requires the attacker to have both ciphertext and plaintext to conduct a successful\n        attack.",
          "Use frequency analysis to ensure that the most popular letters used in the language are not used in the cipher\n        message."
        ],
        "explanation": "In a brute-force attack, an attacker tries every possible key with the decryption\n        algorithm knowing that eventually one of them will work. To defend against the brute-force attacks, modern\n        cryptographers have as an objective to have a keyspace (a set of all possible keys) large enough so that it\n        takes too much money and too much time to accomplish a brute-force attack. A security policy requiring passwords\n        to be changed in a predefined interval further defend against the brute-force attacks. The idea is that\n        passwords will have been changed before an attacker exhausts the keyspace."
      },
      {
        "pytanie": "How does a Caesar cipher work on a message?",
        "image": "",
        "type": "choice",
        "poprawna": "Letters of the message are replaced by another letter that is a set number of places away\n        in the alphabet.",
        "opcje": [
          "Letters of the message are replaced by another letter that is a set number of places away\n        in the alphabet.",
          "Letters of the message are rearranged randomly.",
          "Letters of the message are rearranged based on a predetermined pattern.",
          "Words of the message are substituted based on a predetermined pattern."
        ],
        "explanation": ""
      },
      {
        "pytanie": "What is the main factor that ensures the security of encryption of modern algorithms?",
        "image": "",
        "type": "choice",
        "poprawna": "secrecy of the keys",
        "opcje": [
          "complexity of the hashing algorithm",
          "the use of 3DES over AES",
          "secrecy of the keys",
          "secrecy of the algorithm"
        ],
        "explanation": "With most modern algorithms, successful decryption requires knowledge of the\n        appropriate cryptographic keys. This means that the security of encryption lies in the secrecy of the keys, not\n        the algorithm."
      },
      {
        "pytanie": "What is the next step in the establishment of an IPsec VPN after IKE Phase 1 is complete?",
        "image": "",
        "type": "choice",
        "poprawna": "negotiation of the IPsec SA policy",
        "opcje": [
          "negotiation of the ISAKMP policy",
          "negotiation of the IPsec SA policy",
          "detection of interesting traffic",
          "authentication of peers"
        ],
        "explanation": "Establishing an IPsec tunnel involves five steps:\n        detection of interesting traffic defined by an ACL\n        IKE Phase 1 in which peers negotiate ISAKMP SA policy\n        IKE Phase 2 in which peers negotiate IPsec SA policy\n        Creation of the IPsec tunnel\n        Termination of the IPsec tunnel"
      },
      {
        "pytanie": "Refer to the exhibit. What algorithm will be used for providing confidentiality?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2022-07-11_090617.jpg",
        "type": "choice",
        "poprawna": "AES",
        "opcje": [
          "RSA",
          "Diffie-Hellman",
          "DES",
          "AES"
        ],
        "explanation": "The IPsec framework uses various protocols and algorithms to provide data\n        confidentiality, data integrity, authentication, and secure key exchange. Two popular algorithms that are used\n        to ensure that data is not intercepted and modified (data integrity) are MD5 and SHA. AES is an encryption\n        protocol and provides data confidentiality. DH (Diffie-Hellman) is an algorithm that is used for key exchange.\n        RSA is an algorithm used for authentication."
      },
      {
        "pytanie": "After issuing a show run command, an analyst notices the following command: crypto ipsec transform-set MYSET esp-aes 256 esp-md5-hmac. What is the purpose of this command?",
        "image": "",
        "type": "choice",
        "poprawna": "It establishes the set of encryption and hashing algorithms used to secure the data sent\n        through an IPsec tunnel.",
        "opcje": [
          "It establishes the set of encryption and hashing algorithms used to secure the data sent\n        through an IPsec tunnel.",
          "It defines the default ISAKMP policy list used to establish the IKE Phase 1 tunnel.",
          "It establishes the criteria to force the IKE Phase 1 negotiations to begin.",
          "It indicates that IKE will be used to establish the IPsec tunnel for protecting the traffic."
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which algorithm can ensure data integrity?",
        "image": "",
        "type": "choice",
        "poprawna": "MD5",
        "opcje": [
          "RSA",
          "AES",
          "MD5",
          "PKI"
        ],
        "explanation": "Data integrity guarantees that the message was not altered in transit. Integrity is\n        ensured by implementing either of the Secure Hash Algorithms (SHA-2 or SHA-3). The MD5 message digest algorithm\n        is still widely in use."
      },
      {
        "pytanie": "A company implements a security policy that ensures that a file sent from the headquarters office to the\n        branch office can only be opened with a predetermined code. This code is changed every day. Which two algorithms\n        can be used to achieve this task? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "3DES",
          "AES"
        ],
        "opcje": [
          "HMAC",
          "MD5",
          "3DES",
          "SHA-1",
          "AES"
        ],
        "explanation": "The task to ensure that only authorized personnel can open a file is data\n        confidentiality, which can be implemented with encryption. AES and 3DES are two encryption algorithms. HMAC can\n        be used for ensuring origin authentication. MD5 and SHA-1 can be used to ensure data integrity."
      },
      {
        "pytanie": "A network technician has been asked to design a virtual private network between two branch routers. Which\n        type of cryptographic key should be used in this scenario?",
        "image": "",
        "type": "choice",
        "poprawna": "symmetric key",
        "opcje": [
          "hash key",
          "symmetric key",
          "asymmetric key",
          "digital signature"
        ],
        "explanation": "A symmetric key requires that both routers have access to the secret key that is\n        used to encrypt and decrypt exchanged data."
      },
      {
        "pytanie": "Which two options can limit the information discovered from port scanning? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "intrusion prevention system",
          "firewall"
        ],
        "opcje": [
          "intrusion prevention system",
          "firewall",
          "authentication",
          "passwords",
          "encryption"
        ],
        "explanation": "Using an intrusion prevention system (IPS) and firewall can limit the information\n        that can be discovered with a port scanner. Authentication, encryption, and passwords provide no protection from\n        loss of information from port scanning."
      },
      {
        "pytanie": "An administrator discovers that a user is accessing a newly established website that may be detrimental\n        to company security. What action should the administrator take first in terms of the security policy?",
        "image": "",
        "type": "choice",
        "poprawna": "Revise the AUP immediately and get all users to sign the updated AUP.",
        "opcje": [
          "Ask the user to stop immediately and inform the user that this constitutes grounds for dismissal.",
          "Create a firewall rule blocking the respective website.",
          "Revise the AUP immediately and get all users to sign the updated AUP.",
          "Immediately suspend the network privileges of the user."
        ],
        "explanation": ""
      },
      {
        "pytanie": "If AAA is already enabled, which three CLI steps are required to configure a router with a specific view?\n        (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "Create a view using the parser viewcommand.",
          "Assign a secret password to the view.",
          "Assign commands to the view."
        ],
        "opcje": [
          "Create a superview using the parser view view-name command.",
          "Associate the view with the root view.",
          "Assign users who can use the view.",
          "Create a view using the parser viewcommand.",
          "Assign a secret password to the view.",
          "Assign commands to the view."
        ],
        "explanation": "There are five steps involved to create a view on a Cisco router.\n        1) AAA must be enabled.\n        2) the view must be created.\n        3) a secret password must be assigned to the view.\n        4) commands must be assigned to the view.\n        5) view configuration mode must be exited."
      },
      {
        "pytanie": "Refer to the exhibit. A network administrator configures a named ACL on the router. Why is there no\n        output displayed when the show command is issued?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/i209866v1n2_209866.png",
        "type": "choice",
        "poprawna": "The ACL name is case sensitive.",
        "opcje": [
          "The ACL is not activated.",
          "The ACL name is case sensitive.",
          "The ACL has not been applied to an interface.",
          "No packets have matched the ACL statements yet."
        ],
        "explanation": ""
      },
      {
        "pytanie": "ACLs are used primarily to filter traffic. What are two additional uses of ACLs? (Choose two.):",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "specifying internal hosts for NAT",
          "identifying traffic for QoS"
        ],
        "opcje": [
          "specifying internal hosts for NAT",
          "identifying traffic for QoS",
          "specifying source addresses for authentication",
          "reorganizing traffic into VLANs",
          "filtering VTP packets"
        ],
        "explanation": "ACLs are used to filter traffic to determine which packets will be permitted or\n        denied through the router and which packets will be subject to policy-based routing. ACLs can also be used to\n        identify traffic that requires NAT and QoS services. Prefix lists are used to control which routes will be\n        redistributed or advertised to other routers."
      },
      {
        "pytanie": "What two features are added in SNMPv3 to address the weaknesses of previous versions of SNMP? (Choose\n        two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "authentication",
          "encryption"
        ],
        "opcje": [
          "authentication",
          "authorization with community string priority",
          "bulk MIB objects retrieval",
          "ACL management filtering",
          "encryption"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What network testing tool is used for password auditing and recovery?",
        "image": "",
        "type": "choice",
        "poprawna": "L0phtcrack",
        "opcje": [
          "Nessus",
          "Metasploit",
          "L0phtcrack",
          "SuperScan"
        ],
        "explanation": "The Nesus tool provides remote vulnerability scanning that focuses on remote access, password\n        misconfiguration, and DoS against the TCP/IP stack. L0phtcrack provides password auditing and recovery.\n        Metasploit provides information about vulnerabilities and aids in penetration testing and IDS signature\n        development."
      },
      {
        "pytanie": "Which type of firewall makes use of a server to connect to destination devices on behalf of\n        clients?",
        "image": "",
        "type": "choice",
        "poprawna": "proxy firewall",
        "opcje": [
          "packet filtering firewall",
          "proxy firewall",
          "stateless firewall",
          "stateful firewall"
        ],
        "explanation": "An application gateway firewall, also called a proxy firewall, filters information\n        at Layers 3, 4, 5, and 7 of the OSI model. It uses a proxy server to connect to remote servers on behalf of\n        clients. Remote servers will see only a connection from the proxy server, not from the individual clients."
      },
      {
        "pytanie": "Refer to the exhibit. What will be displayed in the output of the show running-config object command\n        after the exhibited configuration commands are entered on an ASA 5506-X?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/Network-Security-Final-Exam-Answers.jpg",
        "type": "choice",
        "poprawna": "range 192.168.1.10 192.168.1.20",
        "opcje": [
          "host 192.168.1.4",
          "range 192.168.1.10 192.168.1.20",
          "host 192.168.1.3, host 192.168.1.4, and range 192.168.1.10 192.168.1.20",
          "host 192.168.1.3",
          "host 192.168.1.3 and host 192.168.1.4",
          "host 192.168.1.4 and range 192.168.1.10 192.168.1.20"
        ],
        "explanation": "The show running-config object command is used to display or verify the IP\n        address/mask pair within the object. There can only be one statement in the network object. Entering a second IP\n        address/mask pair will replace the existing configuration."
      },
      {
        "pytanie": "Refer to the exhibit. According to the command output, which three statements are true about the DHCP\n        options entered on the ASA? (Choose three.)",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/Network-Security-Final-Version-1-Network-Security-1.jpg",
        "type": "multi-choice",
        "poprawna": [
          "The dhcpd address [ start-of-pool ]-[ end-of-pool ] inside command was issued to enable\n        the DHCP server.",
          "The dhcpd enable inside command was issued to enable the DHCP server.",
          "The dhcpd auto-config outside command was issued to enable the DHCP client."
        ],
        "opcje": [
          "The dhcpd address [ start-of-pool ]-[ end-of-pool ] inside command was issued to enable\n        the DHCP server.",
          "The dhcpd address [ start-of-pool ]-[ end-of-pool ] inside command was issued to enable the DHCP client.",
          "The dhcpd enable inside command was issued to enable the DHCP server.",
          "The dhcpd auto-config outside command was issued to enable the DHCP client.",
          "The dhcpd auto-config outside command was issued to enable the DHCP server.",
          "The dhcpd enable inside command was issued to enable the DHCP client."
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which two statements describe the characteristics of symmetric algorithms? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "They are commonly used with VPN traffic.",
          "They are referred to as a pre-shared key or secret key."
        ],
        "opcje": [
          "They are commonly used with VPN traffic.",
          "They use a pair of a public key and a private key.",
          "They are commonly implemented in the SSL and SSH protocols.",
          "They provide confidentiality, integrity, and availability.",
          "They are referred to as a pre-shared key or secret key."
        ],
        "explanation": "Symmetric encryption algorithms use the same key (also called shared secret) to\n        encrypt and decrypt the data. In contrast, asymmetric encryption algorithms use a pair of keys, one for\n        encryption and another for decryption."
      },
      {
        "pytanie": "A web server administrator is configuring access settings to require users to authenticate first before\n        accessing certain web pages. Which requirement of information security is addressed through the\n        configuration?",
        "image": "",
        "type": "choice",
        "poprawna": "confidentiality",
        "opcje": [
          "availability",
          "integrity",
          "scalability",
          "confidentiality"
        ],
        "explanation": "Confidentiality ensures that data is accessed only by authorized individuals.\n        Authentication will help verify the identity of the individuals."
      },
      {
        "pytanie": "The use of 3DES within the IPsec framework is an example of which of the five IPsec building\n        blocks?",
        "image": "",
        "type": "choice",
        "poprawna": "confidentiality",
        "opcje": [
          "authentication",
          "nonrepudiation",
          "integrity",
          "Diffie-Hellman",
          "confidentiality"
        ],
        "explanation": "The IPsec framework consists of five building blocks. Each building block performs\n        a specific securty function via specific protocols. The function of providing confidentiality is provided by\n        protocols such as DES, 3DES, and AES."
      },
      {
        "pytanie": "What function is provided by Snort as part of the Security Onion?",
        "image": "",
        "type": "choice",
        "poprawna": "to generate network intrusion alerts by the use of rules and signatures",
        "opcje": [
          "to generate network intrusion alerts by the use of rules and signatures",
          "to normalize logs from various NSM data logs so they can be represented, stored, and accessed through a common\n        schema",
          "to display full-packet captures for analysis",
          "to view pcap transcripts generated by intrusion detection tools"
        ],
        "explanation": "Snort is a NIDS integrated into Security Onion. It is an important source of the\n        alert data that is indexed in the Sguil analysis tool. Snort uses rules and signatures to generate alerts."
      },
      {
        "pytanie": "What are two drawbacks to using HIPS? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "With HIPS, the network administrator must verify support for all the different operating\n        systems used in the network.",
          "HIPS has difficulty constructing an accurate network picture or coordinating events that\n        occur across the entire network."
        ],
        "opcje": [
          "With HIPS, the success or failure of an attack cannot be readily determined.",
          "With HIPS, the network administrator must verify support for all the different operating\n        systems used in the network.",
          "HIPS has difficulty constructing an accurate network picture or coordinating events that\n        occur across the entire network.",
          "If the network traffic stream is encrypted, HIPS is unable to access unencrypted forms of the traffic.",
          "HIPS installations are vulnerable to fragmentation attacks or variable TTL attacks."
        ],
        "explanation": "Two disadvantages of deploying HIPS are (1) that it cannot create a complete view of the\n        network or have knowledge of events that might be occurring beyond an individual host and (2) every host\n        operating system within the organization must be supported. However, an advantage of using HIPS is that it can\n        monitor and protect the operating system as well as critical system processes on each network host."
      },
      {
        "pytanie": "In an AAA-enabled network, a user issues the configure terminal command from the privileged executive\n        mode of operation. What AAA function is at work if this command is rejected?",
        "image": "",
        "type": "choice",
        "poprawna": "authorization",
        "opcje": [
          "authorization",
          "authentication",
          "auditing",
          "accounting"
        ],
        "explanation": "Authentication must ensure that devices or end users are legitimate. Authorization\n        is concerned with allowing and disallowing authenticated users access to certain areas and programs on the\n        network. The configure terminal command is rejected because the user is not authorized to execute the command."
      },
      {
        "pytanie": "A company has a file server that shares a folder named Public. The network security policy specifies that\n        the Public folder is assigned Read-Only rights to anyone who can log into the server while the Edit rights are\n        assigned only to the network admin group. Which component is addressed in the AAA network service\n        framework?",
        "image": "",
        "type": "choice",
        "poprawna": "authorization",
        "opcje": [
          "automation",
          "accounting",
          "authentication",
          "authorization"
        ],
        "explanation": "After a user is successfully authenticated (logged into the server), the\n        authorization is the process of determining what network resources the user can access and what operations (such\n        as read or edit) the user can perform."
      },
      {
        "pytanie": "What is a characteristic of a DMZ zone?",
        "image": "",
        "type": "choice",
        "poprawna": "Traffic originating from the outside network going to the DMZ network is selectively\n        permitted.",
        "opcje": [
          "Traffic originating from the inside network going to the DMZ network is not permitted.",
          "Traffic originating from the outside network going to the DMZ network is selectively\n        permitted.",
          "Traffic originating from the DMZ network going to the inside network is permitted.",
          "Traffic originating from the inside network going to the DMZ network is selectively permitted."
        ],
        "explanation": "The characteristics of a DMZ zone are as follows:\n        \u200bTraffic originating from the inside network going to the DMZ network is permitted.\n        \u200bTraffic originating from the outside network going to the DMZ network is selectively permitted.\n        Traffic originating from the DMZ network going to the inside network is denied."
      },
      {
        "pytanie": "Which measure can a security analyst take to perform effective security monitoring against network\n        traffic encrypted by SSL technology?",
        "image": "",
        "type": "choice",
        "poprawna": "Deploy a Cisco SSL Appliance.",
        "opcje": [
          "Use a Syslog server to capture network traffic.",
          "Deploy a Cisco SSL Appliance.",
          "Require remote access connections through IPsec VPN.",
          "Deploy a Cisco ASA."
        ],
        "explanation": "Deploy a Cisco SSL Appliance to decrypt SSL traffic and send it to intrusion prevention\n        system (IPS) appliances to identify risks normally hidden by SSL."
      },
      {
        "pytanie": "Refer to the exhibit. Port security has been configured on the Fa 0/12 interface of switch S1. What\n        action will occur when PC1 is attached to switch S1 with the applied configuration?",
        "image": "https://itexamanswers.net/wp-content/uploads/2019/12/i235949v1n1_updated94485.png",
        "type": "choice",
        "poprawna": "Frames from PC1 will cause the interface to shut down immediately, and a log entry will\n        be made.",
        "opcje": [
          "Frames from PC1 will be forwarded since the switchport port-security violation command is missing.",
          "Frames from PC1 will be forwarded to its destination, and a log entry will be created.",
          "Frames from PC1 will be forwarded to its destination, but a log entry will not be created.",
          "Frames from PC1 will cause the interface to shut down immediately, and a log entry will\n        be made.",
          "Frames from PC1 will be dropped, and there will be no log of the violation.",
          "Frames from PC1 will be dropped, and a log message will be created."
        ],
        "explanation": "Manual configuration of the single allowed MAC address has been entered for port\n        fa0/12. PC1 has a different MAC address and when attached will cause the port to shut down (the default action),\n        a log message to be automatically created, and the violation counter to increment. The default action of\n        shutdown is recommended because the restrict option might fail if an attack is underway."
      },
      {
        "pytanie": "What security countermeasure is effective for preventing CAM table overflow attacks?",
        "image": "",
        "type": "choice",
        "poprawna": "port security",
        "opcje": [
          "DHCP snooping",
          "Dynamic ARP Inspection",
          "IP source guard",
          "port security"
        ],
        "explanation": "Port security is the most effective method for preventing CAM table overflow\n        attacks. Port security gives an administrator the ability to manually specify what MAC addresses should be seen\n        on given switch ports. It provides a method for limiting the number of MAC addresses that can be dynamically\n        learned over a switch port."
      },
      {
        "pytanie": "What are two examples of DoS attacks? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "ping of death",
          "buffer overflow"
        ],
        "opcje": [
          "port scanning",
          "SQL injection",
          "ping of death",
          "phishing",
          "buffer overflow"
        ],
        "explanation": "The buffer overflow and ping of death DoS attacks exploit system memory-related\n        flaws on a server by sending an unexpected amount of data or malformed data to the server."
      },
      {
        "pytanie": "Which method is used to identify interesting traffic needed to create an IKE phase 1 tunnel?",
        "image": "",
        "type": "choice",
        "poprawna": "a permit access list entry",
        "opcje": [
          "transform sets",
          "a permit access list entry",
          "hashing algorithms",
          "a security association"
        ],
        "explanation": ""
      },
      {
        "pytanie": "When the CLI is used to configure an ISR for a site-to-site VPN connection, which two items must be\n        specified to enable a crypto map policy? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "the peer",
          "a valid access list"
        ],
        "opcje": [
          "the hash",
          "the peer",
          "encryption",
          "the ISAKMP policy",
          "a valid access list",
          "IP addresses on all active interfaces",
          "the IKE Phase 1 policy"
        ],
        "explanation": "After the crypto map command in global configuration mode has been issued, the new\n        crypto map will remain disabled until a peer and a valid access list have been configured."
      },
      {
        "pytanie": "How does a firewall handle traffic when it is originating from the public network and traveling to the\n        DMZ network?",
        "image": "",
        "type": "choice",
        "poprawna": "Traffic that is originating from the public network is inspected and selectively\n        permitted when traveling to the DMZ network.",
        "opcje": [
          "Traffic that is originating from the public network is inspected and selectively\n        permitted when traveling to the DMZ network.",
          "Traffic that is originating from the public network is usually permitted with little or no restriction when\n        traveling to the DMZ network.",
          "Traffic that is originating from the public network is usually forwarded without inspection when traveling to\n        the DMZ network.",
          "Traffic that is originating from the public network is usually blocked when traveling to the DMZ network."
        ],
        "explanation": "Traffic originating from the public network and traveling toward the DMZ is\n        selectively permitted and inspected. This type of traffic is typically email, DNS, HTTP, or HTTPS traffic.\n        Return traffic from the DMZ to the public network is dynamically permitted."
      },
      {
        "pytanie": "A client connects to a Web server. Which component of this HTTP connection is not examined by a stateful\n        firewall?",
        "image": "",
        "type": "choice",
        "poprawna": "the actual contents of the HTTP connection",
        "opcje": [
          "the source IP address of the client traffic",
          "the destination port number of the client traffic",
          "the actual contents of the HTTP connection",
          "the source port number of the client traffic"
        ],
        "explanation": "Stateful firewalls cannot prevent application layer attacks because they do not\n        examine the actual contents of the HTTP connection."
      },
      {
        "pytanie": "Which network monitoring technology uses VLANs to monitor traffic on remote switches?",
        "image": "",
        "type": "choice",
        "poprawna": "RSPAN",
        "opcje": [
          "IPS",
          "IDS",
          "TAP",
          "RSPAN"
        ],
        "explanation": "Remote SPAN (RSPAN) enables a network administrator to use the flexibility of VLANs\n        to monitor traffic on remote switches."
      },
      {
        "pytanie": "Which rule action will cause Snort IPS to block and log a packet?",
        "image": "",
        "type": "choice",
        "poprawna": "drop",
        "opcje": [
          "log",
          "drop",
          "alert",
          "Sdrop"
        ],
        "explanation": "Snort IPS mode can perform all the IDS actions plus the following:\n        \u2013 Drop \u2013 Block and log the packet.\n        \u2013 Reject \u2013 Block the packet, log it, and then send a TCP reset if the protocol is TCP or an ICMP\n        port unreachable message if the protocol is UDP.\n        \u2013 Sdrop \u2013 Block the packet but do not log it."
      },
      {
        "pytanie": "What is typically used to create a security trap in the data center facility?",
        "image": "",
        "type": "choice",
        "poprawna": "IDs, biometrics, and two access doors",
        "opcje": [
          "IDs, biometrics, and two access doors",
          "high resolution monitors",
          "redundant authentication servers",
          "a server without all security patches applied"
        ],
        "explanation": "Security traps provide access to the data halls where data center data is stored.\n        As shown in the figure below, a security trap is similar to an air lock. A person must first enter the security\n        trap using their badge ID proximity card. After the person is inside the security trap, facial recognition,\n        fingerprints, or other biometric verifications are used to open the second door. The user must repeat the\n        process to exit the data hall."
      },
      {
        "pytanie": "A company is concerned with leaked and stolen corporate data on hard copies. Which data loss mitigation\n        technique could help with this situation?",
        "image": "",
        "type": "choice",
        "poprawna": "shredding",
        "opcje": [
          "strong PC security settings",
          "strong passwords",
          "shredding",
          "encryption"
        ],
        "explanation": "Confidential data should be shredded when no longer required. Otherwise, a thief\n        could retrieve discarded reports and gain valuable information."
      },
      {
        "pytanie": "Upon completion of a network security course, a student decides to pursue a career in cryptanalysis. What\n        job would the student be doing as a cryptanalyst?",
        "image": "",
        "type": "choice",
        "poprawna": "cracking code without access to the shared secret key",
        "opcje": [
          "cracking code without access to the shared secret key",
          "creating hashing codes to authenticate data",
          "making and breaking secret codes",
          "creating transposition and substitution ciphers"
        ],
        "explanation": "Cryptanalysis is the practice and study of determining the meaning of encrypted information\n        (cracking the code), without access to the shared secret key. This is also known as codebreaking."
      },
      {
        "pytanie": "What command is used on a switch to set the port access entity type so the interface acts only as an\n        authenticator and will not respond to any messages meant for a supplicant?",
        "image": "",
        "type": "choice",
        "poprawna": "dot1x pae authenticator",
        "opcje": [
          "dot1x pae authenticator",
          "authentication port-control auto",
          "aaa authentication dot1x default group radius",
          "dot1x system-auth-control"
        ],
        "explanation": "Sets the Port Access Entity (PAE) type.\n        dot1x pae [supplicant | authenticator | both]\n\nsupplicant\u2014The interface acts only as a supplicant and does not respond to messages that are meant for an\n            authenticator.\nauthenticator-\u2014The interface acts only as an authenticator and does not respond to any messages meant for a\n            supplicant.\nboth\u2014The interface behaves both as a supplicant and as an authenticator and thus does respond to all dot1x\n            messages."
      },
      {
        "pytanie": "What are two disadvantages of using an IDS? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "The IDS does not stop malicious traffic.",
          "The IDS requires other devices to respond to attacks."
        ],
        "opcje": [
          "The IDS does not stop malicious traffic.",
          "The IDS works offline using copies of network traffic.",
          "The IDS has no impact on traffic.",
          "The IDS analyzes actual forwarded packets.",
          "The IDS requires other devices to respond to attacks."
        ],
        "explanation": "The disadvantage of operating with mirrored traffic is that the IDS cannot stop\n        malicious single-packet attacks from reaching the target before responding to the attack. Also, an IDS often\n        requires assistance from other networking devices, such as routers and firewalls, to respond to an attack. An\n        advantage of an IDS is that by working offline using mirrored traffic, it has no impact on traffic flow."
      },
      {
        "pytanie": "Refer to the exhibit. The ip verify source command is applied on untrusted interfaces. Which type of\n        attack is mitigated by using this configuration?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2022-07-11_113131.jpg",
        "type": "choice",
        "poprawna": "MAC and IP address spoofing",
        "opcje": [
          "DHCP spoofing",
          "DHCP starvation",
          "STP manipulation",
          "MAC and IP address spoofing"
        ],
        "explanation": "To protect against MAC and IP address spoofing, apply the IP Source Guard security\n        feature, using the ip verify source command, on untrusted ports."
      },
      {
        "pytanie": "What ports can receive forwarded traffic from an isolated port that is part of a PVLAN?",
        "image": "",
        "type": "choice",
        "poprawna": "only promiscuous ports",
        "opcje": [
          "other isolated ports and community ports",
          "only promiscuous ports",
          "all other ports within the same community",
          "only isolated ports"
        ],
        "explanation": "PVLANs are used to provide Layer 2 isolation between ports within the same\n        broadcast domain. The level of isolation can be specified\n        with three types of PVLAN ports:\n        \u2013 Promiscuous ports that can forward traffic to all other ports\n        \u2013 Isolated ports that can only forward traffic to promiscuous ports\n        \u2013 Community ports that can forward traffic to other community ports and promiscuous ports"
      },
      {
        "pytanie": "A user complains about being locked out of a device after too many unsuccessful AAA login attempts. What\n        could be used by the network administrator to provide a secure authentication access method without locking a\n        user out of a device?",
        "image": "",
        "type": "choice",
        "poprawna": "Use the login delay command for authentication attempts.",
        "opcje": [
          "Use the login delay command for authentication attempts.",
          "Use the login local command for authenticating user access.",
          "Use the aaa local authentication attempts max-fail global configuration mode command with a higher number of\n        acceptable failures.",
          "Use the none keyword when configuring the authentication method list."
        ],
        "explanation": "The login delay command introduces a delay between failed login attempts without\n        locking the account\u200b. This provides a user with unlimited attempts at accessing a device without causing the\n        user account to become locked and thus requiring administrator intervention."
      },
      {
        "pytanie": "What are two drawbacks in assigning user privilege levels on a Cisco router? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "Assigning a command with multiple keywords allows access to all commands using those\n        keywords.",
          "Commands from a lower level are always executable at a higher level."
        ],
        "opcje": [
          "Only a root user can add or remove commands.",
          "Privilege levels must be set to permit access control to specific device interfaces, ports, or slots.",
          "Assigning a command with multiple keywords allows access to all commands using those\n        keywords.",
          "Commands from a lower level are always executable at a higher level.",
          "AAA must be enabled."
        ],
        "explanation": "Privilege levels may not provide desired flexibility and specificity because higher\n        levels always inherit commands from lower levels, and commands with multiple keywords give the user access to\n        all commands available for each keyword. Privilege levels cannot specify access control to interfaces, ports, or\n        slots. AAA is not required to set privilege levels, but is required in order to create role-based views. The\n        role of root user does not exist in privilege levels."
      },
      {
        "pytanie": "Refer to the exhibit. Which conclusion can be made from the show crypto map command output that is shown\n        on R1?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-06-05_155448.jpg",
        "type": "choice",
        "poprawna": "The crypto map has not yet been applied to an interface.",
        "opcje": [
          "The crypto map has not yet been applied to an interface.",
          "The current peer IP address should be 172.30.2.1.",
          "There is a mismatch between the transform sets.",
          "The tunnel configuration was established and can be tested with extended pings."
        ],
        "explanation": "According to the show crypto map command output, all required SAs\n        are in place, but no interface is currently using the crypto map. To complete the tunnel configuration, the\n        crypto map has to be applied to the outbound interface of each router."
      },
      {
        "pytanie": "What are two reasons to enable OSPF routing protocol authentication on a network? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "to prevent data traffic from being redirected and then discarded",
          "to prevent redirection of data traffic to an insecure link"
        ],
        "opcje": [
          "to prevent data traffic from being redirected and then discarded",
          "to ensure faster network convergence",
          "to provide data security through encryption",
          "to prevent redirection of data traffic to an insecure link",
          "to ensure more efficient routing"
        ],
        "explanation": "The reason to configure OSPF authentication is to mitigate against routing protocol\n        attacks like redirection of data traffic to an insecure link, and redirection of data traffic to discard it.\n        OSPF authentication does not provide faster network convergence, more efficient routing, or encryption of data\n        traffic."
      },
      {
        "pytanie": "Which three functions are provided by the syslog logging service? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "gathering logging information",
          "specifying where captured information is stored",
          "distinguishing between information to be captured and information to be ignored"
        ],
        "opcje": [
          "gathering logging information",
          "authenticating and encrypting data sent over the network",
          "retaining captured messages on the router when a router is rebooted",
          "specifying where captured information is stored",
          "distinguishing between information to be captured and information to be ignored",
          "setting the size of the logging buffer"
        ],
        "explanation": "Syslog operations include gathering information, selecting which type of\n        information to capture, and directing the captured information to a storage location. The logging service stores\n        messages in a logging buffer that is time-limited, and cannot retain the information when a router is rebooted.\n        Syslog does not authenticate or encrypt messages."
      },
      {
        "pytanie": "What two ICMPv6 message types must be permitted through IPv6 access control lists to allow resolution of\n        Layer 3 addresses to Layer 2 MAC addresses? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "neighbor solicitations",
          "neighbor advertisements"
        ],
        "opcje": [
          "neighbor solicitations",
          "echo requests",
          "neighbor advertisements",
          "echo replies",
          "router solicitations",
          "router advertisements"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which three services are provided through digital signatures? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "authenticity",
          "nonrepudiation",
          "integrity"
        ],
        "opcje": [
          "accounting",
          "authenticity",
          "compression",
          "nonrepudiation",
          "integrity",
          "encryption"
        ],
        "explanation": "Digital signatures use a mathematical technique to provide three basic security\n        services:Integrity; Authenticity; Nonrepudiation"
      },
      {
        "pytanie": "A technician is to document the current configurations of all network devices in a college, including\n        those in off-site buildings. Which protocol would be best to use to securely access the network\n        devices?",
        "image": "",
        "type": "choice",
        "poprawna": "SSH",
        "opcje": [
          "FTP",
          "HTTP",
          "SSH",
          "Telnet"
        ],
        "explanation": "Telnet sends passwords and other information in clear text, while SSH encrypts its\n        data. FTP and HTTP do not provide remote device access for configuration purposes."
      },
      {
        "pytanie": "An administrator is trying to develop a BYOD security policy for employees that are bringing a wide\n        range of devices to connect to the company network. Which three objectives must the BYOD security policy\n        address? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "Rights and activities permitted on the corporate network must be defined.",
          "Safeguards must be put in place for any personal device being compromised.",
          "The level of access of employees when connecting to the corporate network must be\n        defined."
        ],
        "opcje": [
          "All devices must be insured against liability if used to compromise the corporate network.",
          "All devices must have open authentication with the corporate network.",
          "Rights and activities permitted on the corporate network must be defined.",
          "Safeguards must be put in place for any personal device being compromised.",
          "The level of access of employees when connecting to the corporate network must be\n        defined.",
          "All devices should be allowed to attach to the corporate network flawlessly."
        ],
        "explanation": ""
      },
      {
        "pytanie": "What is the function of the pass action on a Cisco IOS Zone-Based Policy Firewall?",
        "image": "",
        "type": "choice",
        "poprawna": "forwarding traffic from one zone to another",
        "opcje": [
          "logging of rejected or dropped packets",
          "inspecting traffic between zones for traffic control",
          "tracking the state of connections between zones",
          "forwarding traffic from one zone to another"
        ],
        "explanation": "The pass action performed by Cisco IOS ZPF permits forwarding of traffic in a\n        manner similar to the permit statement in an access control list."
      },
      {
        "pytanie": "Refer to the exhibit. Based on the security levels of the interfaces on ASA1, what traffic will be\n        allowed on the interfaces?",
        "image": "https://itexamanswers.net/wp-content/uploads/2016/02/CCNA-Security-Chapter-9-Exam-Answer-v2-007-1.png",
        "type": "choice",
        "poprawna": "Traffic from the LAN and DMZ can access the Internet.",
        "opcje": [
          "Traffic from the Internet and DMZ can access the LAN.",
          "Traffic from the Internet and LAN can access the DMZ.",
          "Traffic from the Internet can access both the DMZ and the LAN.",
          "Traffic from the LAN and DMZ can access the Internet."
        ],
        "explanation": "ASA devices have security levels assigned to each interface that are not part of a\n        configured ACL. These security levels allow traffic from more secure interfaces, such as security level 100, to\n        access less secure interfaces, such as level 0. By default, they allow traffic from more secure interfaces\n        (higher security level) to access less secure interfaces (lower security level). Traffic from the less secure\n        interfaces is blocked from accessing more secure interfaces."
      },
      {
        "pytanie": "What network testing tool can be used to identify network layer protocols running on a host?",
        "image": "",
        "type": "choice",
        "poprawna": "Nmap",
        "opcje": [
          "SIEM",
          "Nmap",
          "L0phtcrack",
          "Tripwire"
        ],
        "explanation": ""
      },
      {
        "pytanie": "In the implementation of security on multiple devices, how do ASA ACLs differ from Cisco IOS\n        ACLs?",
        "image": "",
        "type": "choice",
        "poprawna": "Cisco IOS ACLs are configured with a wildcard mask and Cisco ASA ACLs are configured with\n        a subnet mask.",
        "opcje": [
          "Cisco IOS routers utilize both named and numbered ACLs and Cisco ASA devices utilize only numbered ACLs.",
          "Cisco IOS ACLs are configured with a wildcard mask and Cisco ASA ACLs are configured with\n        a subnet mask.",
          "Cisco IOS ACLs are processed sequentially from the top down and Cisco ASA ACLs are not processed sequentially.",
          "Cisco IOS ACLs utilize an implicit deny all and Cisco ASA ACLs end with an implicit permit all."
        ],
        "explanation": "The Cisco IOS ACLs are configured with a wildcard mask and the Cisco ASA ACLs are\n        configured with a subnet mask. Both devices use an implicit deny, top down sequential processing, and named or\n        numbered ACLs."
      },
      {
        "pytanie": "Which statement describes an important characteristic of a site-to-site VPN?",
        "image": "",
        "type": "choice",
        "poprawna": "It must be statically set up.",
        "opcje": [
          "It must be statically set up.",
          "It is ideally suited for use by mobile workers.",
          "It requires using a VPN client on the host PC.",
          "After the initial connection is established, it can dynamically change connection information.",
          "It is commonly implemented over dialup and cable modem networks."
        ],
        "explanation": "A site-to-site VPN is created between the network devices of two separate networks.\n        The VPN is static and stays established. The internal hosts of the two networks have no knowledge of the VPN."
      },
      {
        "pytanie": "Which two options are security best practices that help mitigate BYOD risks? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "Keep the device OS and software updated.",
          "Only turn on Wi-Fi when using the wireless network."
        ],
        "opcje": [
          "Use paint that reflects wireless signals and glass that prevents the signals from going outside the building.",
          "Keep the device OS and software updated.",
          "Only allow devices that have been approved by the corporate IT team.",
          "Only turn on Wi-Fi when using the wireless network.",
          "Decrease the wireless antenna gain level.",
          "Use wireless MAC address filtering."
        ],
        "explanation": "Many companies now support employees and visitors attaching and using wireless\n        devices that connect to and use the corporate wireless network. This practice is known as a\n        bring-your-own-device policy or BYOD. Commonly, BYOD security practices are included in the security policy.\n        Some best practices that mitigate BYOD risks include the following:\n        Use unique passwords for each device and account.\n        Turn off Wi-Fi and Bluetooth connectivity when not being used. Only connect to trusted networks.\n        Keep the device OS and other software updated.\n        Backup any data stored on the device.\n        Subscribe to a device locator service with a remote wipe feature.\n        Provide antivirus software for approved BYODs.\n        Use Mobile Device Management (MDM) software that allows IT teams to track the device and implement security\n        settings and software controls."
      },
      {
        "pytanie": "Refer to the exhibit. A network administrator configures AAA authentication on R1. Which statement\n        describes the effect of the keyword single-connection in the configuration?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/06/2021-06-05_145856.jpg",
        "type": "choice",
        "poprawna": "The authentication performance is enhanced by keeping the connection to the TACACS+\n        server open.",
        "opcje": [
          "R1 will open a separate connection to the TACACS+ server for each user authentication session.",
          "The authentication performance is enhanced by keeping the connection to the TACACS+\n        server open.",
          "The TACACS+ server only accepts one successful try for a user to authenticate with it.",
          "R1 will open a separate connection to the TACACS server on a per source IP address basis for each authentication\n        session."
        ],
        "explanation": "The single-connection keyword enhances TCP performance with TACACS+ by maintaining\n        a single TCP connection for the life of the session. Without the single-connection keyword, a TCP connection is\n        opened and closed per session."
      },
      {
        "pytanie": "A recently created ACL is not working as expected. The admin determined that the ACL had been applied\n        inbound on the interface and that was the incorrect direction. How should the admin fix this issue?",
        "image": "",
        "type": "choice",
        "poprawna": "Delete the original ACL and create a new ACL, applying it outbound on the interface.",
        "opcje": [
          "Delete the original ACL and create a new ACL, applying it outbound on the interface.",
          "Add an association of the ACL outbound on the same interface.",
          "Fix the ACE statements so that it works as desired inbound on the interface.",
          "Remove the inbound association of the ACL on the interface and reapply it outbound."
        ],
        "explanation": ""
      },
      {
        "pytanie": "What characteristic of the Snort term-based subscriptions is true for both the community and the\n        subscriber rule sets?",
        "image": "",
        "type": "choice",
        "poprawna": "Both offer threat protection against security threats.",
        "opcje": [
          "Both have a 30-day delayed access to updated signatures.",
          "Both use Cisco Talos to provide coverage in advance of exploits.",
          "Both are fully supported by Cisco and include Cisco customer support.",
          "Both offer threat protection against security threats."
        ],
        "explanation": "There are two types of term-based subscriptions:\n\u2013 Community Rule Set \u2013 Available for free, this subscription offers limited coverage against threats.\n        The community rule set focuses on reactive response to security threats versus proactive research work. There is\n        also a 30-day delayed access to updated signatures meaning that newest rule will be a minimum of 30 days old. In\n        addition, there is no Cisco customer support available.\n        \u2013 Subscriber Rule Set \u2013 Available for a fee, this service provides the best protection against\n        threats. It includes coverage of advance exploits by using the research work of the Cisco Talos security\n        experts. The Subscriber Rule Set also provides the fastest access to updated signatures in response to a\n        security incident or the proactive discovery of a new threat. This subscription is fully supported by Cisco."
      },
      {
        "pytanie": "A security analyst is configuring Snort IPS. The analyst has just downloaded and installed the Snort OVA\n        file. What is the next step?",
        "image": "",
        "type": "choice",
        "poprawna": "Configure Virtual Port Group interfaces.",
        "opcje": [
          "Verify Snort IPS.",
          "Configure Virtual Port Group interfaces.",
          "Enable IPS globally or on desired interfaces.",
          "Activate the virtual services."
        ],
        "explanation": "To deploy Snort IPS on supported devices, perform the following steps:\n        \u2013 Step 1. Download the Snort OVA file.\n        \u2013 Step 2. Install the OVA file.\n        \u2013 Step 3. Configure Virtual Port Group interfaces.\n        \u2013 Step 4. Activate the virtual services.\n        \u2013 Step 5. Configure Snort specifics.\n        \u2013 Step 6. Enable IPS globally or on desired interfaces.\n        \u2013 Step 7. Verify Snort IPS."
      },
      {
        "pytanie": "The security policy in a company specifies that employee workstations can initiate HTTP and HTTPS\n        connections to outside websites and the return traffic is allowed. However, connections initiated from outside\n        hosts are not allowed. Which parameter can be used in extended ACLs to meet this requirement?",
        "image": "",
        "type": "choice",
        "poprawna": "established",
        "opcje": [
          "dscp",
          "precedence",
          "eq",
          "established"
        ],
        "explanation": ""
      },
      {
        "pytanie": "A researcher is comparing the differences between a stateless firewall and a proxy firewall. Which two\n        additional layers of the OSI model are inspected by a proxy firewall? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "Layer 5",
          "Layer 7"
        ],
        "opcje": [
          "Layer 3",
          "Layer 4",
          "Layer 5",
          "Layer 6",
          "Layer 7"
        ],
        "explanation": "Packet filtering firewalls are usually part of a router firewall, which permits or\n        denies traffic based on Layer 3 and Layer 4 information.\n        An application gateway firewall (proxy firewall), as shown in the figure, filters information at Layers 3, 4, 5,\n        and 7 of the OSI reference model."
      },
      {
        "pytanie": "Refer to the exhibit. A network administrator is configuring a VPN between routers R1 and R2. Which commands would correctly configure a pre-shared key for the two routers?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/06/2021-06-05_161700.jpg",
        "type": "choice",
        "poprawna": "R1(config)# crypto isakmp key 5tayout! address 64.100.0.2\n R2(config)# crypto isakmp key 5tayout! address 64.100.0.1",
        "opcje": [
          "R1(config)# username R2 password 5tayout!\n R2(config)# username R1 password 5tayout!",
          "R1(config)# crypto isakmp key 5tayout! address 64.100.0.2\n R2(config)# crypto isakmp key 5tayout! address 64.100.0.1",
          "R1(config)# crypto isakmp key 5tayout! hostname R1\n R2(config)# crypto isakmp key 5tayout! hostname R2",
          "R1(config-if)# ppp pap sent-username R1 password 5tayout!\n R2(config-if)# ppp pap sent-username R2 password 5tayout!"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Refer to the exhibit. Which statement is true about the effect of this Cisco IOS zone-based policy\n        firewall configuration?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/06/2021-06-05_162253.jpg",
        "type": "choice",
        "poprawna": "The firewall will automatically allow HTTP, HTTPS, and FTP traffic from g0/0 to s0/0/0\n        and will track the connections. Tracking the connection allows only return traffic to be permitted through the\n        firewall in the opposite direction.",
        "opcje": [
          "The firewall will automatically drop all HTTP, HTTPS, and FTP traffic.",
          "The firewall will automatically allow HTTP, HTTPS, and FTP traffic from s0/0/0 to g0/0 and will track the\n        connections. Tracking the connection allows only return traffic to be permitted through the firewall in the\n        opposite direction.",
          "The firewall will automatically allow HTTP, HTTPS, and FTP traffic from s0/0/0 to g0/0, but will not track the\n        state of connections. A corresponding policy must be applied to allow return traffic to be permitted through the\n        firewall in the opposite direction.",
          "The firewall will automatically allow HTTP, HTTPS, and FTP traffic from g0/0 to s0/0/0\n        and will track the connections. Tracking the connection allows only return traffic to be permitted through the\n        firewall in the opposite direction.",
          "return traffic to be permitted through the firewall in the opposite direction.",
          "The firewall will automatically allow HTTP, HTTPS, and FTP traffic from g0/0 to s0/0/0, but will not track the\n        state of connections. A corresponding policy must be applied to allow return traffic to be permitted through the\n        firewall in the opposite direction."
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which privilege level has the most access to the Cisco IOS?",
        "image": "",
        "type": "choice",
        "poprawna": "level 15",
        "opcje": [
          "level 0",
          "level 15",
          "level 7",
          "level 16",
          "level 1"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Refer to the exhibit. A network administrator has configured NAT on an ASA device. What type of NAT is\n        used?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-06-05_151306.jpg",
        "type": "choice",
        "poprawna": "inside NAT",
        "opcje": [
          "inside NAT",
          "static NAT",
          "bidirectional NAT",
          "outside NAT"
        ],
        "explanation": "NAT can be deployed on an ASA using one of these methods:\n        inside NAT \u2013 when a host from a higher-security interface has traffic destined for a lower-security\n        interface and the ASA translates the internal host address to a global address\n        outside NAT \u2013 when traffic from a lower-security interface destined for a host on the higher-security\n        interface is translated\n        bidirectional NAT \u2013 when both inside NAT and outside NAT are used together\n        Because the nat command is applied so that the inside interface is mapped to the outside interface, the NAT type\n        is inside. Also, the dynamic keyword in the nat command indicates that it is a dynamic mapping."
      },
      {
        "pytanie": "A network analyst is configuring a site-to-site IPsec VPN. The analyst has configured both the ISAKMP\n        and IPsec policies. What is the next step?",
        "image": "",
        "type": "choice",
        "poprawna": "Apply the crypto map to the appropriate outbound interfaces.",
        "opcje": [
          "Configure the hash as SHA and the authentication as pre-shared.",
          "Apply the crypto map to the appropriate outbound interfaces.",
          "Issue the show crypto ipsec sa command to verify the tunnel.",
          "Verify that the security feature is enabled in the IOS."
        ],
        "explanation": ""
      },
      {
        "pytanie": "When an inbound Internet-traffic ACL is being implemented, what should be included to prevent the\n        spoofing of internal networks?",
        "image": "",
        "type": "choice",
        "poprawna": "ACEs to prevent traffic from private address spaces",
        "opcje": [
          "ACEs to prevent traffic from private address spaces",
          "ACEs to prevent broadcast address traffic",
          "ACEs to prevent ICMP traffic",
          "ACEs to prevent HTTP traffic",
          "ACEs to prevent SNMP traffic"
        ],
        "explanation": "Common ACEs to assist with antispoofing include blocking packets that have a source address\n        in the 127.0.0.0/8 range, any private address, or any multicast addresses. Furthermore, the administrator should\n        not allow any outbound packets with a source address other than a valid address that is used in the internal\n        networks of the organization."
      },
      {
        "pytanie": "Match the security term to the appropriate description. (Not all options are used.)",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/07/Capturar2-1625854230.7607.png",
        "type": "matching",
        "match_pairs": [
          {
            "right": "a weakness in the design of a system that can be exploited by a threat",
            "left": "vulnerability"
          },
          {
            "right": "a mechanism that takes advantage of a vulnerability",
            "left": "exploit"
          },
          {
            "right": "the network equipment and confidential data owned by the organization",
            "left": "assets"
          },
          {
            "right": "a potential danger to the data and network functionality of a company",
            "left": "threat"
          },
          {
            "right": "the counter-measure to reduce the severity of a potential threat",
            "left": "mitigation"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": ""
      },
      {
        "pytanie": "Which two types of attacks are examples of reconnaissance attacks? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "port scan",
          "ping sweep"
        ],
        "opcje": [
          "brute force",
          "port scan",
          "ping sweep",
          "man-in-the-middle",
          "SYN flood"
        ],
        "explanation": "Reconnaissance attacks attempt to gather information about the targets. Ping sweeps will\n        indicate which hosts are up and responding to pings, whereas port scans will indicate on which TCP and UDP ports\n        the target is listening for incoming connections. Man-in-the-middle and brute force attacks are both examples of\n        access attacks, and a SYN flood is an example of a denial of service (DoS) attack."
      },
      {
        "pytanie": "Which Cisco solution helps prevent ARP spoofing and ARP poisoning attacks?",
        "image": "",
        "type": "choice",
        "poprawna": "Dynamic ARP Inspection",
        "opcje": [
          "Dynamic ARP Inspection",
          "IP Source Guard",
          "DHCP Snooping",
          "Port Security"
        ],
        "explanation": ""
      },
      {
        "pytanie": "When the Cisco NAC appliance evaluates an incoming connection from a remote device against the defined\n        network policies, what feature is being used?",
        "image": "",
        "type": "choice",
        "poprawna": "posture assessment",
        "opcje": [
          "posture assessment",
          "remediation of noncompliant systems",
          "authentication and authorization",
          "quarantining of noncompliant systems"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which two steps are required before SSH can be enabled on a Cisco router? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "Give the router a host name and domain name.",
          "Generate a set of secret keys to be used for encryption and decryption."
        ],
        "opcje": [
          "Give the router a host name and domain name.",
          "Create a banner that will be displayed to users when they connect.",
          "Generate a set of secret keys to be used for encryption and decryption.",
          "Set up an authentication server to handle incoming connection requests.",
          "Enable SSH on the physical interfaces where the incoming connection requests will be received."
        ],
        "explanation": "There are four steps to configure SSH on a Cisco router. First, set the host name and domain\n        name. Second, generate a set of RSA keys to be used for encrypting and decrypting the traffic. Third, create the\n        user IDs and passwords of the users who will be connecting. Lastly, enable SSH on the vty lines on the router.\n        SSH does not need to be set up on any physical interfaces, nor does an external authentication server need to be\n        used. While it is a good idea to configure a banner to display legal information for connecting users, it is not\n        required to enable SSH.\u200b"
      },
      {
        "pytanie": "The network administrator for an e-commerce website requires a service that prevents customers from\n        claiming that legitimate orders are fake. What service provides this type of guarantee?",
        "image": "",
        "type": "choice",
        "poprawna": "nonrepudiation",
        "opcje": [
          "confidentiality",
          "authentication",
          "integrity",
          "nonrepudiation"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Match the security technology with the description.",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/aCapturar-1625852899.846.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "right": "used to assure the authenticity and integrity of software code",
            "left": "digital certificates"
          },
          {
            "right": "used to authenticate and verify that a user who is sending a message is who they claim to be",
            "left": "digital signatures"
          },
          {
            "right": "used to support large-scale distribution and identification of public encryption keys",
            "left": "PKI"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": ""
      },
      {
        "pytanie": "What functionality is provided by Cisco SPAN in a switched network?",
        "image": "",
        "type": "choice",
        "poprawna": "It mirrors traffic that passes through a switch port or VLAN to another port for traffic\n        analysis.",
        "opcje": [
          "It mirrors traffic that passes through a switch port or VLAN to another port for traffic\n        analysis.",
          "It prevents traffic on a LAN from being disrupted by a broadcast storm.",
          "It protects the switched network from receiving BPDUs on ports that should not be receiving them.",
          "It copies traffic that passes through a switch interface and sends the data directly to a syslog or SNMP server\n        for analysis.",
          "It inspects voice protocols to ensure that SIP, SCCP, H.323, and MGCP requests conform to voice standards.",
          "It mitigates MAC address overflow attacks."
        ],
        "explanation": "SPAN is a Cisco technology used by network administrators to monitor suspicious traffic or to\n        capture traffic to be analyzed."
      },
      {
        "pytanie": "Which three statements are generally considered to be best practices in the placement of ACLs? (Choose\n        three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "Filter unwanted traffic before it travels onto a low-bandwidth link.",
          "Place standard ACLs close to the destination IP address of the traffic.",
          "Place extended ACLs close to the source IP address of the traffic."
        ],
        "opcje": [
          "Filter unwanted traffic before it travels onto a low-bandwidth link.",
          "Place standard ACLs close to the destination IP address of the traffic.",
          "Place standard ACLs close to the source IP address of the traffic.",
          "Place extended ACLs close to the destination IP address of the traffic.",
          "Place extended ACLs close to the source IP address of the traffic.",
          "For every inbound ACL placed on an interface, there should be a matching outbound ACL."
        ],
        "explanation": "Extended ACLs should be placed as close as possible to the source IP address, so that traffic\n        that needs to be filtered does not cross the network and use network resources. Because standard ACLs do not\n        specify a destination address, they should be placed as close to the destination as possible. Placing a standard\n        ACL close to the source may have the effect of filtering all traffic, and limiting services to other hosts.\n        Filtering unwanted traffic before it enters low-bandwidth links preserves bandwidth and supports network\n        functionality. Decisions on placing ACLs inbound or outbound are dependent on the requirements to be met."
      },
      {
        "pytanie": "What function is performed by the class maps configuration object in the Cisco modular policy\n        framework?",
        "image": "",
        "type": "choice",
        "poprawna": "identifying interesting traffic",
        "opcje": [
          "identifying interesting traffic",
          "applying a policy to an interface",
          "applying a policy to interesting traffic",
          "restricting traffic through an interface"
        ],
        "explanation": "There are three configuration objects in the MPF; class maps, policy maps, and service\n        policy. The class maps configuration object uses match criteria to identify interesting traffic."
      },
      {
        "pytanie": "In an attempt to prevent network attacks, cyber analysts share unique identifiable attributes of known\n        attacks with colleagues. What three types of attributes or indicators of compromise are helpful to share?\n        (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "IP addresses of attack servers",
          "changes made to end system software",
          "features of malware files"
        ],
        "opcje": [
          "IP addresses of attack servers",
          "changes made to end system software",
          "netbios names of compromised firewalls",
          "features of malware files",
          "BIOS of attacking systems",
          "system ID of compromised systems"
        ],
        "explanation": "Many network attacks can be prevented by sharing information about indicators of compromise\n        (IOC). Each attack has unique identifiable attributes. Indicators of compromise are the evidence that an attack\n        has occurred. IOCs can be identifying features of malware files, IP addresses of servers that are used in the\n        attack, filenames, and characteristic changes made to end system software."
      },
      {
        "pytanie": "What two assurances does digital signing provide about code that is downloaded from the Internet?\n        (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "The code is authentic and is actually sourced by the publisher.",
          "The code has not been modified since it left the software publisher."
        ],
        "opcje": [
          "The code is authentic and is actually sourced by the publisher.",
          "The code contains no errors.",
          "The code has not been modified since it left the software publisher.",
          "The code contains no viruses.",
          "The code was encrypted with both a private and public key."
        ],
        "explanation": "Digitally signing code provides several assurances about the code:\n        The code is authentic and is actually sourced by the publisher.\n        The code has not been modified since it left the software publisher.\n        The publisher undeniably published the code. This provides nonrepudiation of the act of publishing."
      },
      {
        "pytanie": "Refer to the exhibit. What algorithm is being used to provide public key exchange?",
        "image": "https://itexamanswers.net/wp-content/uploads/2020/12/i272205v1n1_item.jpg",
        "type": "choice",
        "poprawna": "Diffie-Hellman",
        "opcje": [
          "SHA",
          "RSA",
          "Diffie-Hellman",
          "AES"
        ],
        "explanation": "The IPsec framework uses various protocols and algorithms to provide data confidentiality,\n        data integrity, authentication, and secure key exchange. DH (Diffie-Hellman) is an algorithm used for key\n        exchange. DH is a public key exchange method and allows two IPsec peers to establish a shared secret key over an\n        insecure channel."
      },
      {
        "pytanie": "Which two statements describe the use of asymmetric algorithms? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "If a private key is used to encrypt the data, a public key must be used to decrypt the\n        data.",
          "If a public key is used to encrypt the data, a private key must be used to decrypt the\n        data."
        ],
        "opcje": [
          "Public and private keys may be used interchangeably.",
          "If a public key is used to encrypt the data, a public key must be used to decrypt the data.",
          "If a private key is used to encrypt the data, a public key must be used to decrypt the\n        data.",
          "If a public key is used to encrypt the data, a private key must be used to decrypt the\n        data.",
          "If a private key is used to encrypt the data, a private key must be used to decrypt the data."
        ],
        "explanation": "Asymmetric algorithms use two keys: a public key and a private key. Both keys are capable of\n        the encryption process, but the complementary matched key is required for decryption. If a public key encrypts\n        the data, the matching private key decrypts the data. The opposite is also true. If a private key encrypts the\n        data, the corresponding public key decrypts the data."
      },
      {
        "pytanie": "Which statement is a feature of HMAC?",
        "image": "",
        "type": "choice",
        "poprawna": "HMAC uses a secret key as input to the hash function, adding authentication to integrity\n        assurance.",
        "opcje": [
          "HMAC uses a secret key that is only known to the sender and defeats man-in-the-middle attacks.",
          "HMAC uses protocols such as SSL or TLS to provide session layer confidentiality.",
          "HMAC uses a secret key as input to the hash function, adding authentication to integrity\n        assurance.",
          "HMAC is based on the RSA hash function."
        ],
        "explanation": "A keyed-hash message authentication code (HMAC or KHMAC) is a type of message authentication\n        code (MAC). HMACs use an additional secret key as input to the hash function, adding authentication to data\n        integrity assurance."
      },
      {
        "pytanie": "What is the purpose of the webtype ACLs in an ASA?",
        "image": "",
        "type": "choice",
        "poprawna": "to filter traffic for clientless SSL VPN users",
        "opcje": [
          "to inspect outbound traffic headed towards certain web sites",
          "to restrict traffic that is destined to an ASDM",
          "to monitor return traffic that is in response to web server requests that are initiated from the inside\n        interface",
          "to filter traffic for clientless SSL VPN users"
        ],
        "explanation": "The webtype ACLs are used in a configuration that supports filtering for clientless SSL VPN\n        users."
      },
      {
        "pytanie": "Which two statements describe the effect of the access control list wildcard mask 0.0.0.15? (Choose\n        two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "The first 28 bits of a supplied IP address will be matched.",
          "The last four bits of a supplied IP address will be ignored."
        ],
        "opcje": [
          "The first 28 bits of a supplied IP address will be matched.",
          "The last four bits of a supplied IP address will be matched.",
          "The first 28 bits of a supplied IP address will be ignored.",
          "The last four bits of a supplied IP address will be ignored.",
          "The last five bits of a supplied IP address will be ignored.",
          "The first 32 bits of a supplied IP address will be matched."
        ],
        "explanation": "A wildcard mask uses 0s to indicate that bits must match. 0s in the first three octets\n        represent 24 bits and four more zeros in the last octet, represent a total of 28 bits that must match. The four\n        1s represented by the decimal value of 15 represents the four bits to ignore."
      },
      {
        "pytanie": "Which type of firewall is the most common and allows or blocks traffic based on Layer 3, Layer 4, and\n        Layer 5 information?",
        "image": "",
        "type": "choice",
        "poprawna": "stateful firewall",
        "opcje": [
          "stateless firewall",
          "packet filtering firewall",
          "next generation firewall",
          "stateful firewall"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Which protocol or measure should be used to mitigate the vulnerability of using FTP to transfer\n        documents between a teleworker and the company file server?",
        "image": "",
        "type": "choice",
        "poprawna": "SCP",
        "opcje": [
          "SCP",
          "TFTP",
          "ACLs on the file server",
          "out-of-band communication channel"
        ],
        "explanation": "File transfer using FTP is transmitted in plain text. The username and password would be\n        easily captured if the data transmission is intercepted. Secure Copy Protocol (SCP) conducts the authentication\n        and file transfer under SSH, thus the communication is encrypted. Like FTP, TFTP transfers files unencrypted.\n        ACLs provide network traffic filtering but not encryption. Using an out-of-band communication channel (OOB)\n        either requires physical access to the file server or, if done through the internet, does not necessarily\n        encrypt the communication."
      },
      {
        "pytanie": "Refer to the exhibit. The IPv6 access list LIMITED_ACCESS is applied on the S0/0/0 interface of R1 in\n        the inbound direction. Which IPv6 packets from the ISP will be dropped by the ACL on R1?",
        "image": "https://itexamanswers.net/wp-content/uploads/2016/02/i209796v1n1_209796-2.png",
        "type": "choice",
        "poprawna": "ICMPv6 packets that are destined to PC1",
        "opcje": [
          "HTTPS packets to PC1",
          "ICMPv6 packets that are destined to PC1",
          "packets that are destined to PC1 on port 80",
          "neighbor advertisements that are received from the ISP router"
        ],
        "explanation": "The access list LIMITED_ACCESS will block ICMPv6 packets from the ISP. Both port 80, HTTP\n        traffic, and port 443, HTTPS traffic, are explicitly permitted by the ACL. The neighbor advertisements from the\n        ISP router are implicitly permitted by the implicit permit icmp any any nd-na statement at the end of all IPv6\n        ACLs."
      },
      {
        "pytanie": "What tool is available through the Cisco IOS CLI to initiate security audits and to make recommended\n        configuration changes with or without administrator input?",
        "image": "",
        "type": "choice",
        "poprawna": "Cisco AutoSecure",
        "opcje": [
          "Control Plane Policing",
          "Cisco AutoSecure",
          "Cisco ACS",
          "Simple Network Management Protocol"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Refer to the exhibit. Which pair of crypto isakmp key commands would correctly configure PSK on the two\n        routers?",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2024-11-18_211110.jpg",
        "type": "choice",
        "poprawna": "R1(config)# crypto isakmp key cisco123 address 209.165.200.227\n        R2(config)# crypto isakmp key cisco123 address 209.165.200.226",
        "opcje": [
          "R1(config)# crypto isakmp key cisco123 address 209.165.200.227\n        R2(config)# crypto isakmp key cisco123 address 209.165.200.226",
          "R1(config)# crypto isakmp key cisco123 address 209.165.200.226\n        R2(config)# crypto isakmp key cisco123 address 209.165.200.227",
          "R1(config)# crypto isakmp key cisco123 hostname R1\n        R2(config)# crypto isakmp key cisco123 hostname R2",
          "R1(config)# crypto isakmp key cisco123 address 209.165.200.226\n        R2(config)# crypto isakmp key secure address 209.165.200.227"
        ],
        "explanation": "The correct syntax of the crypto isakmp key command is as follows:\n        crypto isakmp key keystring address peer-address\n        or\n        crypto isakmp keykeystring hostname peer-hostnameSo, the correct answer would be the following:\n        R1(config)# crypto isakmp key cisco123 address 209.165.200.227\n        R2(config)# crypto isakmp key cisco123 address 209.165.200.226"
      },
      {
        "pytanie": "Which two technologies provide enterprise-managed VPN solutions? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "site-to-site VPN",
          "remote access VPN"
        ],
        "opcje": [
          "Layer 3 MPLS VPN",
          "Frame Relay",
          "site-to-site VPN",
          "Layer 2 MPLS VPN",
          "remote access VPN"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What are the three components of an STP bridge ID? (Choose three.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "the MAC address of the switch",
          "the extended system ID",
          "the bridge priority value"
        ],
        "opcje": [
          "the date and time that the switch was brought online",
          "the hostname of the switch",
          "the MAC address of the switch",
          "the extended system ID",
          "the bridge priority value",
          "the IP address of the management VLAN"
        ],
        "explanation": ""
      },
      {
        "pytanie": "What are two differences between stateful and packet filtering firewalls? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "A stateful firewall provides more stringent control over security than a packet filtering\n        firewall.",
          "A stateful firewall will provide more logging information than a packet filtering\n        firewall."
        ],
        "opcje": [
          "A packet filtering firewall will prevent spoofing by determining whether packets belong to an existing\n        connection while a stateful firewall follows pre-configured rule sets.",
          "A stateful firewall provides more stringent control over security than a packet filtering\n        firewall.",
          "A packet filtering firewall is able to filter sessions that use dynamic port negotiations while a stateful\n        firewall cannot.",
          "A stateful firewall will provide more logging information than a packet filtering\n        firewall.",
          "A statefull firewall will examine each packet individually while a packet filtering firewall observes the state\n        of a connection."
        ],
        "explanation": "There are many differences between a stateless and stateful firewall.\nStateless firewalls (packet filtering firewalls):\n        \u2013 are susceptible to IP spoofing\n        \u2013 do not reliably filter fragmented packets\n        \u2013 use complex ACLs, which can be difficult to implement and maintain\n        \u2013 cannot dynamically filter certain services\n        \u2013 examine each packet individually rather than in the context of the state of a connection\n    \nStateful firewalls:\n        \u2013 are often used as a primary means of defense by filtering unwanted, unnecessary, or undesirable\n        traffic\n        \u2013 strengthen packet filtering by providing more stringent control over security\n        \u2013 improve performance over packet filters or proxy servers\n        \u2013 defend against spoofing and DoS attacks by determining whether packets belong to an existing connection\n        or are from an unauthorized source\n        \u2013 provide more log information than a packet filtering firewall"
      },
      {
        "pytanie": "Which portion of the Snort IPS rule header identifies the destination port?\n alert tcp $HOME_NET any -> $EXTERNAL_NET $HTTP_PORTS",
        "image": "",
        "type": "choice",
        "poprawna": "$HTTP_PORTS",
        "opcje": [
          "any",
          "$HTTP_PORTS",
          "$HOME_NET",
          "tcp"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Match each SNMP operation to the corresponding description. (Not all options are used.)\n\n    Place the options in the following order:",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2024-11-19_144216.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "left": "set-request",
            "right": "storing a value in a specific variable"
          },
          {
            "left": "get-bulk-request",
            "right": "retrieving multiple rows in a table in a single transmission"
          },
          {
            "left": "get-next-request",
            "right": "sequentially searching tables to retrieve a value from a variable"
          },
          {
            "left": "get-response",
            "right": "replying to GET request and SET request messages that are sent by an NMS"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": ""
      },
      {
        "pytanie": "What port state is used by 802.1X if a workstation fails authorization?",
        "image": "",
        "type": "choice",
        "poprawna": "unauthorized",
        "opcje": [
          "disabled",
          "down",
          "unauthorized",
          "blocking"
        ],
        "explanation": ""
      },
      {
        "pytanie": "Match the ASA special hardware modules to the description.",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-09-28_224607.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "right": "support advanced IPS capability",
            "left": "Advanced Inspection and Prevention (AIP)"
          },
          {
            "right": "support antimalware capabilities",
            "left": "Content Security and Control (CSC)"
          },
          {
            "right": "support protection against tens of thousands of known exploits",
            "left": "Cisco Advanced Inspection and Prevention Security Services Module (AIP-SSM)"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": "The advanced threat control and containment services of an ASA firewall are provided by integrating special hardware modules with the ASA architecture. These special modules include: – Advanced Inspection and Prevention (AIP) module – supports advanced IPS capability. \n– Content Security and Control (CSC) module – supports antimalware capabilities. \n– Cisco Advanced Inspection and Prevention Security Services Module (AIP-SSM) and Cisco Advanced Inspection and Prevention Security Services Card (AIP-SSC) – support protection against tens of thousands of known exploits."
      },
      {
        "pytanie": "Refer to the exhibit. Which two ACLs, if applied to the G0/1 interface of R2, would permit only the two\n        LAN networks attached to R1 to access the network that connects to R2 G0/1 interface? (Choose two.)",
        "image": "https://itexamanswers.net/wp-content/uploads/2021/05/2021-09-28_225548.jpg",
        "type": "multi-choice",
        "poprawna": [
          "access-list 1 permit 192.168.10.0 0.0.0.127",
          "access-list 5 permit 192.168.10.0 0.0.0.63\n        access-list 5 permit 192.168.10.64 0.0.0.63"
        ],
        "opcje": [
          "access-list 3 permit 192.168.10.128 0.0.0.63",
          "access-list 1 permit 192.168.10.0 0.0.0.127",
          "access-list 4 permit 192.168.10.0 0.0.0.255",
          "access-list 2 permit host 192.168.10.9\n        access-list 2 permit host 192.168.10.69",
          "access-list 5 permit 192.168.10.0 0.0.0.63\n        access-list 5 permit 192.168.10.64 0.0.0.63"
        ],
        "explanation": "The permit 192.168.10.0 0.0.0.127 command ignores bit positions 1 through 7, which means that\n        addresses 192.168.10.0 through 192.168.10.127 are allowed through. The two ACEs of permit 192.168.10.0 0.0.0.63\n        and permit 192.168.10.64 0.0.0.63 allow the same address range through the router."
      },
      {
        "pytanie": "Which two characteristics apply to role-based CLI access superviews? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "A specific superview cannot have commands added to it directly.",
          "Users logged in to a superview can access all commands specified within the associated\n        CLI views."
        ],
        "opcje": [
          "A specific superview cannot have commands added to it directly.",
          "CLI views have passwords, but superviews do not have passwords.",
          "A single superview can be shared among multiple CLI views.",
          "Deleting a superview deletes all associated CLI views.",
          "Users logged in to a superview can access all commands specified within the associated\n        CLI views."
        ],
        "explanation": "By using a superview an administrator can assign users or groups of users to CLI views which\n        contain a specific set of commands those users can access. Commands cannot be added directly to a superview but\n        rather must be added to a CLI view and the CLI view added to the superview."
      },
      {
        "pytanie": "Match the IPS alarm type to the description.\n\n    Place the options in the following order:",
        "image": "https://itexamanswers.net/wp-content/uploads/2022/03/final_exam_question-1638263775.9834.jpg",
        "type": "matching",
        "match_pairs": [
          {
            "left": "true negative",
            "right": "normal user traffic is not generating an alarm"
          },
          {
            "left": "false positive",
            "right": "normal user traffic is generating an alarm"
          },
          {
            "left": "true positive",
            "right": "verified attack traffic is generating an alarm"
          },
          {
            "left": "false negative",
            "right": "attack traffic is not generating an alarm"
          }
        ],
        "opcje": [],
        "poprawna": [],
        "explanation": ""
      },
      {
        "pytanie": "What are two security features commonly found in a WAN design? (Choose two.)",
        "image": "",
        "type": "multi-choice",
        "poprawna": [
          "firewalls protecting the main and remote sites",
          "VPNs used by mobile workers between sites"
        ],
        "opcje": [
          "WPA2 for data encryption of all data between sites",
          "firewalls protecting the main and remote sites",
          "outside perimeter security including continuous video surveillance",
          "port security on all user-facing ports",
          "VPNs used by mobile workers between sites"
        ],
        "explanation": "WANs span a wide area and commonly have connections from a main site to remote sites\n        including a branch office, regional site, SOHO sites, and mobile workers. WANs typically connect over a public\n        internet connection. Each site commonly has a firewall and VPNs used by remote workers between sites."
      }
    ]
  }
]