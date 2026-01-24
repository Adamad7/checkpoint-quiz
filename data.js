const examsData = [
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
  }
]