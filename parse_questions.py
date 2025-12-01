from bs4 import BeautifulSoup
import json

html_content = """
<p><strong>1. Which privilege level is predefined for the privileged EXEC mode?</strong></p>
<ul>
<li>level 0</li>
<li>level 1</li>
<li><span style="color: #ff0000;"><strong>level 15</strong></span></li>
<li>level 16</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Privileged EXEC mode (privilege level 15) is reserved for the enable mode privileges (all enable-level commands). Users can change configurations and view configuration files.</p></div>
<p><strong>2. What is a requirement to use the Secure Copy Protocol feature?</strong></p><div class="92f2483bb651eed307c93e619d752c78" data-index="2" style="float: none; margin:10px 0 10px 0; text-align:center;">
<div id="adngin-incontent_auto_large-0"></div>
</div>

<ul>
<li>At least one user with privilege level 1 has to be configured for local authentication.</li>
<li><span style="color: red;"><strong>A command must be issued to enable the SCP server side functionality.</strong></span></li>
<li>A transfer can only originate from SCP clients that are routers.</li>
<li>The Telnet protocol has to be configured on the SCP server side.</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The Secure Copy Protocol feature relies on SSH and requires that AAA authentication and authorization be configured so that the router can determine whether the user has the correct privilege level. For local authentication, at least one user with privilege level 15 has to be configured. Transfers can originate from any SCP client whether that client is another router, switch, or workstation. The ip scp server enable command has to be issued to enable the SCP server side functionality.</p></div>
<p><strong>3. Which three items are prompted for a user response during interactive AutoSecure setup? (Choose three.)</strong></p>
<ul style="content-visibility: auto;contain-intrinsic-size: auto 156px;">
<li>IP addresses of interfaces</li>
<li><span style="color: red;"><strong>content of a security banner</strong></span></li>
<li><span style="color: red;"><strong>enable secret password</strong></span></li>
<li>services to disable</li>
<li><span style="color: red;"><strong>enable password</strong></span></li>
<li>interfaces to enable</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> During AutoSecure setup, the following steps occur:<br />
&#8211; The auto secure command is entered.<br />
&#8211; The wizard gathers information about the outside interfaces.<br />
&#8211; AutoSecure secures the management place by disabling unnecessary services.<br />
&#8211; AutoSecure prompts for a security banner.<br />
&#8211; AutoSecure prompts for passwords and enables password and login features.<br />
&#8211; Interfaces are secured.<br />
&#8211; The forwarding plane is secured.</p></div>
<p><strong>4. Which syslog message type is accessible only to an administrator and only via the Cisco CLI?</strong></p>
<ul>
<li>errors</li>
<li>alerts</li>
<li><span style="color: #ff0000;"><strong>debugging</strong></span></li>
<li>emergency</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Syslog messages can be sent to the logging buffer, the console line, the terminal line, or to a syslog server. However, debug-level messages are only forwarded to the internal buffer and only accessible through the Cisco CLI.</p></div>
<p><strong>5. Refer to the exhibit. What two statements describe the NTP status of the router? (Choose two.)</strong><br />
<img fetchpriority="low" decoding="async" class="aligncenter size-full wp-image-62777" src="https://itexamanswers.net/wp-content/uploads/2020/12/i279211v1n1_ntp-assoc3.jpg" alt="" width="675" height="150" srcset="https://itexamanswers.net/wp-content/uploads/2020/12/i279211v1n1_ntp-assoc3.jpg 675w, https://itexamanswers.net/wp-content/uploads/2020/12/i279211v1n1_ntp-assoc3-300x67.jpg 300w" sizes="auto"  loading="lazy"/></p>
<ul>
<li>The router is serving as an authoritative time source.</li>
<li>The software clock for the router must be configured with the set clock command so that NTP will function properly.</li>
<li><span style="color: #ff0000;"><strong>The router is attached to a stratum 2 device.</strong></span></li>
<li>The router is serving as a time source for the device at 192.168.1.1.</li>
<li><span style="color: #ff0000;"><strong>The IP address of the time source for the router is 192.168.1.1.</strong></span></li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The show ntp status command displays information about how NTP is operating on the device. The output shows that the router clock is synchronized with the NTP server with the address of 192.168.1.1. NTP is hierarchical. The router is a stratum 3 device, therefore it&#8217;s time source is a stratum 2 device. Authoritative time sources in the NTP system are located at stratum 0.</p></div>
<p><strong>6. An administrator needs to create a user account with custom access to most privileged EXEC commands. Which privilege command is used to create this custom account?</strong></p>
<ul>
<li>privilege exec level 15</li>
<li>privilege exec level 0</li>
<li>privilege exec level 1</li>
<li><span style="color: #ff0000;"><strong>privilege exec level 2</strong></span></li>
</ul>
<div class="message_box success"><p style="content-visibility: auto;contain-intrinsic-size: auto 234px;"><b>Explanation:</b> In Cisco IOS software, there are 16 privilege levels:<br />
<b>Level 0</b> : Predefined for user-level access privileges.<br />
<b>Level 1</b> : The default level for login with the router prompt Router&gt;.<br />
<b>Levels 2 -14</b> : May be customized for user-level privileges. Commands from lower levels may be moved up to another higher level, or commands from higher levels may be moved down to a lower level.<br />
<b>Level 15</b> : Reserved for the enable mode privileges (enable command).<br />
To configure a privilege level with specific commands for a customized user level, use the <b>privilege exec level</b> level <i>[ command ]</i>, where level could be between 2 to 14.</p></div>
<p><strong>7. A network administrator is analyzing the features supported by the multiple versions of SNMP. What are two features that are supported by SNMPv3 but not by SNMPv1 or SNMPv2c? (Choose two.)</strong></p>
<ul>
<li><span style="color: red;"><strong>message encryption</strong></span></li>
<li>community-based security</li>
<li>SNMP trap mechanism</li>
<li><span style="color: red;"><strong>message source validation</strong></span></li>
<li>bulk retrieval of MIB information</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> SNMPv3 provides message integrity to ensure that a packet was not tampered with and authentication to determine if the message is from a valid source. SNMPv3 also supports message encryption. SNMPv1 and SNMPv2 do not support message encryption, but do support community strings. SNMPv2c supports bulk retrieval operation. All SNMP versions support the SNMP trap mechanism.</p></div>
<p><b>8. A network administrator is configuring an AAA server to manage TACACS+ authentication. What are two attributes of TACACS+ authentication? (Choose two.)</b></p>
<ul style="content-visibility: auto;contain-intrinsic-size: auto 156px;">
<li>TCP port 40</li>
<li><span style="color: #ff0000;"><strong>encryption for all communication</strong></span></li>
<li>single process for authentication and authorization</li>
<li>UDP port 1645</li>
<li>encryption for only the password of a user</li>
<li><span style="color: #ff0000;"><strong>separate processes for authentication and authorization</strong></span></li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> TACACS+ authentication includes the following attributes:<br />
Separates authentication and authorization processes<br />
Encrypts all communication, not just passwords<br />
Utilizes TCP port 49</p></div>
<p><b>9. What are two characteristics of the RADIUS protocol? (Choose two.)</b></p>
<ul>
<li>encryption of the entire body of the packet</li>
<li><span style="color: #ff0000;"><strong>encryption of the password only</strong></span></li>
<li><span style="color: #ff0000;"><strong>the use of UDP ports for authentication and accounting</strong></span></li>
<li>the separation of the authentication and authorization processes</li>
<li>the use of TCP port 49</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> RADIUS is an open-standard AAA protocol using UDP port 1645 or 1812 for authentication and UDP port 1646 or 1813 for accounting. It combines authentication and authorization into one process.</p></div>
<p><strong>10. What is the one major difference between local AAA authentication and using the login local command when configuring device access authentication?</strong></p>
<ul>
<li>The login local command requires the administrator to manually configure the usernames and passwords, but local AAA authentication does not.</li>
<li>Local AAA authentication allows more than one user account to be configured, but login local does not.</li>
<li><span style="color: #ff0000;"><strong>Local AAA authentication provides a way to configure backup methods of authentication, but login local does not.</strong></span></li>
<li>The login local command uses local usernames and passwords stored on the router, but local AAA authentication does not.</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Local AAA authentication works very similar to the login local command, except that it allows you to specify backup authentication methods as well. Both methods require that local usernames and passwords be manually configured on the router.</p></div>
<p><strong>11. Which two UDP port numbers may be used for server-based AAA RADIUS authentication? (Choose two.)</strong></p>
<ul>
<li><span style="color: red;"><strong>1812</strong></span></li>
<li><span style="color: red;"><strong>1645</strong></span></li>
<li>1813</li>
<li>1646</li>
<li>49</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> RADIUS authentication and accounting utilize the following UDP port numbers:<br />
UDP port 1645 or 1812 for authentication<br />
UDP port 1646 or 1813 for accounting<br />
TACACS+ uses TCP port 49.</p></div>
<p><strong>12. Which command will move the show access-lists command to privilege level 14?</strong></p>
<ul>
<li>router(config)# privilege level 14 command show access-lists</li>
<li><span style="color: #ff0000;"><strong>router(config)# privilege exec level 14 show access-lists</strong></span></li>
<li>router(config)# set privilege level 14 show access-lists</li>
<li>router(config)# show access-lists privilege level 14</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> To configure a privilege level with specific commands, use the <b>privilege exec level</b> <i>level [ command ]</i>.</p></div>
<p><strong>13. Which authentication method stores usernames and passwords in the router and is ideal for small networks?</strong></p>
<ul>
<li>server-based AAA over TACACS+</li>
<li>local AAA over RADIUS</li>
<li>server-based AAA</li>
<li>local AAA over TACACS+</li>
<li><span style="color: #ff0000;">local AAA</span></li>
<li>server-based AAA over RADIUS</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> In a small network with a few network devices, AAA authentication can be implemented with the local database and with usernames and passwords stored on the network devices. Authentication using the TACACS+ or RADIUS protocol will require dedicated ACS servers although this authentication solution scales well in a large network.</p></div>
<p><strong>14. What are three characteristics of superviews in the Cisco role-based CLI access feature? (Choose three.)</strong></p><div class="92f2483bb651eed307c93e619d752c78" data-index="1" style="float: none; margin:10px 0 10px 0; text-align:center;">
<div id="adngin-incontent_auto-0"></div>
</div>

<ul style="content-visibility: auto;contain-intrinsic-size: auto 156px;">
<li>A user uses the command enable view superview-name to enter a superview.</li>
<li>A user uses a superview to configure commands inside associated CLI views.</li>
<li><span style="color: #ff0000;"><strong>Commands cannot be configured for a superview.</strong></span></li>
<li>Level 15 privilege access is used to configure a new superview.</li>
<li><span style="color: #ff0000;"><strong>Deleting a superview does not delete the associated CLI views.</strong></span></li>
<li><span style="color: #ff0000;"><strong>A single CLI view can be shared within multiple superviews.</strong></span></li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Cisco role-based Superviews have several specific characteristics:<br />
&#8211; A single CLI view can be shared within multiple superviews.<br />
&#8211; Commands cannot be configured for a superview. An administrator must add commands to the CLI view and add that CLI view to the superview.<br />
&#8211; Users who are logged into a superview can access all the commands that are configured for any of the CLI views that are part of the superview.<br />
&#8211; Each superview has a password that is used to switch between superviews or from a CLI view to a superview.<br />
&#8211; Deleting a superview does not delete the associated CLI views. The CLI views remain available to be assigned to another superview.<br />
&#8211; Only a root view user can configure a new view and add or remove commands from the existing views.</p></div>
<p><strong>15. A student is learning about role-based views and role-based view configurations. The student enters the Router(config)# parser view TECH-view command. What is the purpose of this command?</strong></p>
<ul>
<li><span style="color: #ff0000;"><strong>to create a CLI view named TECH-view</strong></span></li>
<li>to enter the superview named TECH-view</li>
<li>to check the current setup of the CLI view named TECH-view</li>
<li>to enter the CLI view named TECH-view</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The command Router(config)# <b>parser view</b> <i>[ view-name ]</i> is used to create a new CLI view. The command Router(config)# <b>parser view</b> <i>[ view-name ]</i> <b>superview</b> is used to create a new superview view.</p></div>
<p><strong>16. Refer to the exhibit. A student uses the show parser view all command to see a summary of all views configured on router R1. What is indicated by the symbol * next to JR-ADMIN?</strong><br />
<img decoding="async" class="aligncenter size-full wp-image-67219" src="https://itexamanswers.net/wp-content/uploads/2021/05/i390520v1n1_390520.jpg" alt="" width="403" height="287" srcset="https://itexamanswers.net/wp-content/uploads/2021/05/i390520v1n1_390520.jpg 403w, https://itexamanswers.net/wp-content/uploads/2021/05/i390520v1n1_390520-300x214.jpg 300w" sizes="auto"  loading="lazy" fetchpriority="low"/></p>
<ul>
<li>It is a root view.</li>
<li>It is a CLI view without a command configured.</li>
<li><span style="color: #ff0000;"><strong>It is a superview.</strong></span></li>
<li>It is a CLI view.</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> From the root view, a network administrator can see a summary of all role-based views by using the <b>show parser view all</b> command. An asterisk identifies a superview.</p></div>
<p><strong>17. What are two characteristics of the Cisco IOS Resilient Configuration feature? (Choose two.)</strong></p>
<ul>
<li>It maintains a mirror image of the configuration file in RAM.</li>
<li>It sends a backup copy of the IOS image to a TFTP server.</li>
<li><span style="color: #ff0000;"><strong>It saves a secure copy of the primary image and device configuration that cannot be removed by a user.</strong></span></li>
<li><span style="color: #ff0000;"><strong>It minimizes the downtime of a device that has had the image and configuration deleted.</strong></span></li>
<li>It is a universal feature that can be activated on all Cisco devices.</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The Cisco IOS Resilient Configuration stores a secure copy of the primary image file and device configuration. These secure files cannot be removed by a user. Its main function is to speed up the recovery time if a device has been compromised and the image file and the device configuration have been deleted. This feature is only available on platforms that support a PCMCIA ATA disk with enough storage space.</p></div>
<p><strong>18. What IOS privilege levels are available to assign for custom user-level privileges?</strong></p>
<ul>
<li>levels 1 through 15</li>
<li>levels 0, 1, and 15</li>
<li><span style="color: #ff0000;">levels 2 through 14</span></li>
<li>levels 0 and 1</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> There are 16 privilege levels that can be applied to user accounts. Levels 0, 1, and 15 have predefined settings. This leaves levels 2 through 14 available for creating custom levels of access.</p></div>
<p><strong>19. Refer to the exhibit. What information in the syslog message identifies the facility?</strong><br />
<img decoding="async" class="aligncenter size-full wp-image-67220" src="https://itexamanswers.net/wp-content/uploads/2021/05/i269651v1n1_Syslog-Graphic.jpg" alt="" width="550" height="52" srcset="https://itexamanswers.net/wp-content/uploads/2021/05/i269651v1n1_Syslog-Graphic.jpg 550w, https://itexamanswers.net/wp-content/uploads/2021/05/i269651v1n1_Syslog-Graphic-300x28.jpg 300w" sizes="auto"  loading="lazy" fetchpriority="low"/></p>
<ul>
<li>ADJCHG</li>
<li>Loading Done</li>
<li><span style="color: #ff0000;"><strong>OSPF</strong></span></li>
<li>level 5</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The facility is a service identifier used to categorize and identify the messages being generated by a device using syslog. The facility of OSPF identifies this syslog message as being from the OSPF protocol. Level 5 is the severity level of this message. ADJCHG is the mnemonic to describe the action occurring. Loading Done is part of the description of the event that occurred.​</p></div>
<p><strong>20. What is the biggest issue with local implementation of AAA?</strong></p>
<ul>
<li>Local implementation supports only TACACS+ servers.</li>
<li>Local implementation cannot provide secure authentication.</li>
<li><span style="color: #ff0000;"><strong>Local implementation does not scale well.</strong></span></li>
<li>Local implementation supports only RADIUS servers.</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> One of the purposes of AAA is to provide secure authentication to network devices. Local implementation does not use RADIUS or TACACS+ servers. It relies on a local database to authenticate all users. This can be a problem in a network that has many devices with hundreds of users or more. </p></div>
<p><strong>21. Which task is necessary to encrypt the transfer of data between the ACS server and the AAA-enabled router?</strong></p>
<ul>
<li><span style="color: #ff0000;"><strong>Configure the key exactly the same way on the server and the router.</strong></span></li>
<li>Specify the single-connection keyword.</li>
<li>Create a VPN tunnel between the server and the router.</li>
<li>Use identical reserved ports on the server and the router.</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The <b>key</b> command is used to configure the shared secret key that is used for encryption. The key must be configured the exact same way on the router and on the ACS server. The creation of a VPN tunnel is unnecessary. Neither the configuration of ports nor the use of the <b>single-connection</b> command has any effect on encryption.</p></div>
<p><strong>22. Refer to the exhibit. Based on the output of the show running-config command, which type of view is SUPPORT?</strong><br />
<img loading="lazy" decoding="async" class="aligncenter size-full wp-image-2851" src="https://itexamanswers.net/wp-content/uploads/2017/08/CCNA-Security-Chapter-2-Exam-Answer-v2-002.jpg" alt="" width="357" height="151"  fetchpriority="low" srcset="https://itexamanswers.net/wp-content/uploads/2017/08/CCNA-Security-Chapter-2-Exam-Answer-v2-002.jpg 357w, https://itexamanswers.net/wp-content/uploads/2017/08/CCNA-Security-Chapter-2-Exam-Answer-v2-002-300x127.jpg 300w" sizes="auto"/></p>
<ul>
<li>CLI view, containing SHOWVIEW and VERIFYVIEW commands</li>
<li><span style="color: red;"><strong>superview, containing SHOWVIEW and VERIFYVIEW views</strong></span></li>
<li>secret view, with a level 5 encrypted password</li>
<li>root view, with a level 5 encrypted secret password</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The superview role-based CLI view named SUPPORT has been configured on the router. The SUPPORT suerview consists of two CLI views called SHOWVIEW and VERIFYVIEW.</p></div>
<p><strong>23. A student is learning role-based CLI access and CLI view configurations. The student opens Packet Tracer and adds a router. Which command should be used first for creating a CLI view named TECH-View?</strong></p>
<ul>
<li>Router# enable view</li>
<li><span style="color: #ff0000;"><strong>Router(config)# aaa new-model</strong></span></li>
<li>Router# enable view TECH-view</li>
<li>Router(config)# parser view TECH-view</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> Before an administrator can create a view for role-based CLI access, AAA must be enabled using the aaa new-model command.</p></div>
<p><strong>24. A network engineer is implementing security on all company routers. Which two commands must be issued to force authentication via the password 1A2b3C for all OSPF-enabled interfaces in the backbone area of the company network? (Choose two.)</strong></p>
<ul>
<li><span style="color: red;"><strong>area 0 authentication message-digest</strong></span></li>
<li><span style="color: red;"><strong>ip ospf message-digest-key 1 md5 1A2b3C</strong></span></li>
<li>username OSPF password 1A2b3C</li>
<li>enable password 1A2b3C</li>
<li>area 1 authentication message-digest</li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The two commands that are necessary to configure authentication via the password 1A2b3C for all OSPF-enabled interfaces in the backbone area (Area 0) of the company network would be ip ospf message-digest-key 1 md5 1A2b3C and area 0 authentication message-digest. The option area 1 authentication message-digest is incorrect because it refers to Area 1, not Area 0. The option enable password 1A2b3C is incorrect because it would set the privileged EXEC mode password instead of the OSPF authentication password. The option username OSPF password 1A2b3C is required to create a username database in a router, which is not required with OSPF authentication.</p></div>
<p><strong>25. Because of implemented security controls, a user can only access a server with FTP. Which AAA component accomplishes this?</strong></p>
<ul>
<li>accessibility</li>
<li>accounting</li>
<li>auditing</li>
<li>authentication</li>
<li><span style="color: #ff0000;"><strong>authorization</strong></span></li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> One of the components in AAA is authorization. After a user is authenticated through AAA, authorization services determine which resources the user can access and which operations the user is allowed to perform.</p></div>
<p><strong>26. Which AAA component can be established using token cards?</strong></p>
<ul>
<li>accounting</li>
<li>authorization</li>
<li>auditing</li>
<li><span style="color: #ff0000;"><strong>authentication</strong></span></li>
</ul>
<div class="message_box success"><p><b>Explanation:</b> The authentication component of AAA is established using username and password combinations, challenge and response questions, and token cards. The authorization component of AAA determines which resources the user can access and which operations the user is allowed to perform. The accounting and auditing component of AAA keeps track of how network resources are used.</p></div>
<p><strong>27. What is the primary function of the aaa authorization command?</strong></p>
<ul>
<li>permit AAA server access to AAA client services</li>
<li><span style="color: #ff0000;"><strong>limit authenticated user access to AAA client services</strong></span></li>
<li>permit authenticated user access to AAA client services</li>
<li>limit AAA server access to AAA client services</li>
</ul>
"""

soup = BeautifulSoup(html_content, 'html.parser')

questions = []
for p in soup.find_all('p'):
    question_node = p.find('strong') or p.find('b')
    if question_node:
        question_text = p.get_text().strip()
        # Remove the leading number (e.g., "1. ")
        if question_text[0].isdigit():
             parts = question_text.split('.', 1)
             if len(parts) > 1:
                 question_text = parts[1].strip()
        
        ul = p.find_next_sibling('ul')
        
        # Look for the UL that contains options (indicated by correct answer styling)
        # This handles cases where there are multiple ULs (e.g. one for context, one for options)
        candidate_uls = []
        curr = ul
        while curr and curr.name == 'ul':
            candidate_uls.append(curr)
            curr = curr.find_next_sibling()
            if curr and curr.name != 'ul':
                break
        
        target_ul = None
        for cand in candidate_uls:
             # Check for correct answer indicators
             if any(li.find('span', style=lambda s: s and ('color: #ff0000' in s or 'color: red' in s)) for li in cand.find_all('li')):
                 target_ul = cand
                 break
        
        # Fallback: if no answers found, use the last UL (likely options) or the first one if only one exists
        if not target_ul and candidate_uls:
            target_ul = candidate_uls[-1]
            
        ul = target_ul

        if ul:
            options = []
            correct_answers = []
            for li in ul.find_all('li'):
                option_text = li.get_text().strip()
                options.append(option_text)
                
                # Check for correct answer based on style attribute of a span
                span = li.find('span')
                if span and ('color: #ff0000' in span.get('style', '') or 'color: red' in span.get('style', '')):
                    correct_answers.append(option_text)
                # Fallback for class-based (if mixed, or if style is not present)
                elif 'correct_answer' in li.get('class', []):
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
