const categories = [
    {
        key: "Hacker Tools",
        name: "Hacker Tools",
        topics: [
            {
                key: "My Creations",
                name: "My Creations",
                resources: [
                    { name: "Discord Grabify", url: "https://github.com/TrulyItzIcyGaming/imageGrabify" },
                    { name: "UwUntended Consequences", url: "https://github.com/TrulyItzIcyGaming/UwUntended-Consequences" },
                    { name: "LockByte", url: "https://github.com/TrulyItzIcyGaming/LockByte" },
                    { name: "VisualVomit.exe", url: "https://github.com/TrulyItzIcyGaming/VisualVomit.exe" },
                ]
            },
            {
                key: "Operating Systems",
                name: "Operating Systems",
                resources: [
                    { name: "Kali Linux", url: "https://www.kali.org/" },
                    { name: "Parrot Os", url: "https://parrotsec.org/" },
                    { name: "BlackBox Linux", url: "https://www.backbox.org/" },
                    { name: "Fedora Security Lab", url: "https://fedoraproject.org/labs/security" },
                    { name: "BlackArch Linux", url: "https://blackarch.org/" },
                    { name: "Cyborg Hawk", url: "https://sourceforge.net/projects/cyborghawk1/" },
                    { name: "Pentoo", url: "https://www.pentoo.ch/" },
                    { name: "Cain", url: "https://www.caine-live.net/" },
                    { name: "REMnux", url: "https://remnux.org/" },
                    { name: "Network Security Toolkit (NST)", url: "https://www.networksecuritytoolkit.org/nst/index.html" },
                ]
            },
            {
                key: "Others Creations",
                name: "Others Creations",
                resources: [
                    { name: "DiscordChatExporter", url: "https://github.com/Tyrrrz/DiscordChatExporter" },
                    { name: "MetaSploit", url: "https://www.metasploit.com/" },
                    { name: "NMap", url: "https://nmap.org/" },
                    { name: "Snort", url: "https://www.snort.org/" },
                    { name: "GitGot", url: "https://github.com/BishopFox/GitGot" },
                    { name: "Bettercap", url: "Bettercap" },
                    { name: "Wacker", url: "https://github.com/Tyrrrz/DiscordChatExporter" },
                    { name: "MemProcFS-Analyzer", url: "https://github.com/LETHAL-FORENSICS/MemProcFS-Analyzer" },
                    { name: "XSRFProbe", url: "https://github.com/0xInfection/XSRFProbe" },
                    { name: "Blind XSS Scanner", url: "https://github.com/s0md3v/XSStrike" },
                ]
            }
        ]
    },

    {
        key: "Documents",
        name: "Documents",
        topics: [
            {
                key: "USASOC Identity Management: General",
                name: "USASOC Identity Management: General",
                resources: [
                    { name: "Identity and Privacy: An Owner's Guide", url: "/resources/IdentityAndPrivacyAnOwnersGuide.pdf" },
                    { name: "Identity Theft", url: "/resources/Identity_Theft.pdf" },
                    { name: "Identity Threats", url: "/resources/Identity_Threats.pdf" },

                    { name: "Online Registry", url: "/resources/Online_Registration.pdf" },
                    { name: "Safe Travel Smartphone", url: "/resources/Safe_Travel_Smartphone.pdf" },
                    { name: "Self Assessment", url: "/resources/Self_Assessment.pdf" },

                    { name: "Child Online Safety", url: "/resources/Children_Online_Safety.pdf" },
                    { name: "Additional Resources", url: "/resources/Additional_Resources.pdf" },
                    { name: "Credit Reports", url: "/resources/Credit_Report.pdf" },
                ]
            },
            {
                key: "USASOC Identity Management: Social Media",
                name: "USASOC Identity Management: Social Media",
                resources: [
                    { name: "Facebook Smart Card", url: "/resources/Facebook.pdf" },
                    { name: "Off Facebook", url: "/resources/OffFacebook.pdf" },
                    { name: "Instagram Smart Card", url: "/resources/Instagram.pdf" },
                    { name: "Snapchat Smart Card", url: "/resources/SnapChat.pdf" },
                    { name: "X/Twitter Smart Card", url: "/resources/x-twitter.pdf" },

                    { name: "Youtube Smart Card", url: "/resources/YouTube.pdf" },
                    { name: "LinkedIn Smart Card", url: "/resources/LinkedIn.pdf" },
                    { name: "Dating Sites/Apps Best Practices", url: "/resources/Dating_Sites.pdf" },
                    { name: "Fitness Apps", url: "/resources/Fitness_Apps.pdf" },
                    { name: "Pinterest Smart Card", url: "/resources/Pinterest.pdf" },

                    { name: "Photo Sharing Services", url: "/resources/Photo_Sharing_Sites.pdf" },
                    { name: "Zoom Smart Card", url: "/resources/Zoom.pdf" },
                    { name: "TikTok Smart Card", url: "/resources/tikTok.pdf" },
                    { name: "Discord Smart Card", url: "/resources/Discord.pdf" },
                    { name: "WhatsApp Smart Card", url: "/resources/WhatsApp.pdf" },

                    { name: "Signal Smart Card", url: "/resources/Signal.pdf" },
                    { name: "Telegram Smart Card", url: "/resources/Telegram.pdf" },
                    { name: "Twitch Smart Card", url: "/resources/Twitch.pdf" },
                    { name: "Reddit Smart Card", url: "/resources/Reddit.pdf" },
                    { name: "Hinge Smart Card", url: "/resources/Hinge.pdf" },

                    { name: "Tinder Smart Card", url: "/resources/Tinder.pdf" },
                    { name: "Bumble Smart Card", url: "/resources/Bumble.pdf" },
                    { name: "Fitbit Smart Card", url: "/resources/Fitbit.pdf" },
                    { name: "Garmin Smart Card", url: "/resources/Garmin.pdf" },
                    { name: "Nike Run Club Smart Card", url: "/resources/Nike-Run-Club.pdf" },
                ]
            },
            {
                key: "USASOC Identity Management: Online Privacy",
                name: "USASOC Identity Management: Online Privacy",
                resources: [
                    { name: "Secure Amazon", url: "/resources/Secure_Amazon.pdf" },
                    { name: "Google Alerts", url: "/resources/Google_Alerts.pdf" },
                    { name: "Anonymous Communication", url: "/resources/Anonymous_Email.pdf" },
                    { name: "Delete Browser Artifacts", url: "/resources/Delete_Browser_Artifacts.pdf" },
                    { name: "Hidden Apps SmartCard", url: "/resources/Hidden_Apps_SmartCard.pdf" },

                    { name: "Password Managers", url: "/resources/Password-Managers.pdf" },
                    { name: "Securing Payment Applications", url: "/resources/Pay_Apps.pdf" },
                    { name: "Coinbase", url: "/resources/Coinbase.pdf" },
                    { name: "Google Data Removal", url: "/resources/google-data-removal.pdf" },
                    { name: "TEMU Smart Card", url: "/resources/TEMU.pdf" },

                    { name: "Nord Vpn", url: "/resources/nord-vpn.pdf" },
                    { name: "Proton Vpn", url: "/resources/proton-vpn.pdf" },
                    { name: "Surfshark vpn", url: "/resources/surfshark-vpn.pdf" },
                    { name: "Phishing Scams", url: "/resources/phishing-scams.pdf" },
                ]
            },
            {
                key: "USASOC Identity Management: Phones and Hardware",
                name: "USASOC Identity Management: Phones and Hardware",
                resources: [
                    { name: "Android Privacy Settings", url: "/resources/Android_OS.pdf" },
                    { name: "iOS Privacy Settings", url: "/resources/iOS.pdf" },
                    { name: "Securing Your Wifi", url: "/resources/Wi-Fi_Security.pdf" },
                    { name: "Lock Down Your Laptop", url: "/resources/Laptop_Lockdown.pdf" },
                    { name: "EXIF Removal", url: "/resources/EXIF_Removal.pdf" },

                    { name: "Playstation Smart Card", url: "/resources/Playstation.pdf" },
                    { name: "NINTENDO Switch Smart Card", url: "/resources/switch.pdf" },
                    { name: "Xbox Smart Card", url: "/resources/Xbox.pdf" },
                    { name: "Anti-virus Smart Card", url: "/resources/antivirus.pdf" },
                    { name: "Oura Ring Smart Card", url: "/resources/oura-ring.pdf" },

                    { name: "Apple Intelligence", url: "/resources/apple-intelligence.pdf" },
                    { name: "Unplugged Phone", url: "/resources/unplugged-phone.pdf" },
                    { name: "Red Note Smart Card", url: "/resources/Red_Note.pdf" },
                    { name: "Deep Seek Smart Card", url: "/resources/DeepSeek.pdf" },
                    { name: "Apple Enhance Visul Search", url: "/resources/Apple_Enhanced_Visual_Search.pdf" },
                ]
            },
            {
                key: "USASOC Identity Management: Data Aggregators",
                name: "USASOC Identity Management: Data Aggregators",
                resources: [
                    { name: "DATA AGGREGATOR OPT-OUT", url: "/resources/Aggregator_Opt-out.pdf" },
                    { name: "PEOPLE SEARCH OPT-OUT", url: "/resources/People_Search_Opt-out.pdf" },
                ]
            },
        ]
    },
];



function init() {
    window.addEventListener('popstate', handleNavigation);
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        showCategory(categoryParam, false);
    } else {
        showMainMenu(false);
    }
}

function handleNavigation(event) {
    if (event.state?.page === 'category') {
        showCategory(event.state.category, false);
    } else {
        showMainMenu(false);
    }
}

function showMainMenu(pushState = true) {
    const mainMenu = document.getElementById('main-menu');
    const legalDisclaimer = document.getElementById('legal-disclaimer'); // Get the legal disclaimer element
    mainMenu.style.display = 'grid';
    document.getElementById('subpage').style.display = 'none';
    legalDisclaimer.style.display = 'block'; // Show the legal disclaimer
    mainMenu.innerHTML = '';

    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<h3>${category.name}</h3>`;
        card.onclick = () => showCategory(category.key);
        mainMenu.appendChild(card);
    });

    if (pushState) {
        history.pushState({ page: 'main' }, '', window.location.pathname);
    }
}

function showCategory(categoryKey, pushState = true) {
    const category = categories.find(cat => cat.key === categoryKey);
    if (!category) return;

    const legalDisclaimer = document.getElementById('legal-disclaimer'); // Get the legal disclaimer element
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('subpage').style.display = 'block';
    legalDisclaimer.style.display = 'none'; // Hide the legal disclaimer

    const buttonGrid = document.getElementById('resource-buttons');
    buttonGrid.innerHTML = '';

    category.topics.forEach(topic => {
        const button = document.createElement('button');
        button.className = 'retro-button';
        button.textContent = topic.name;
        button.onclick = () => showResources(topic.resources);
        buttonGrid.appendChild(button);
    });

    if (pushState) {
        history.pushState(
            { page: 'category', category: categoryKey },
            '',
            `?category=${categoryKey}`
        );
    }
}

function showResources(resources) {
    const modal = document.getElementById('resource-modal');
    const content = document.getElementById('modal-content');
    content.innerHTML = ''; // Clear existing content

    resources.forEach(resource => {
        const resourceContainer = document.createElement('div');
        resourceContainer.style.marginBottom = '20px';

        // Display content based on the resource type
        if (resource.type === 'text') {
            const textContent = document.createElement('p');
            textContent.textContent = resource.content;
            textContent.style.whiteSpace = 'pre-wrap'; // Preserve formatting
            resourceContainer.appendChild(textContent);
        } else if (resource.type === 'image') {
            const image = document.createElement('img');
            image.src = resource.content;
            image.alt = resource.name;
            image.style.maxWidth = '100%';
            image.style.border = '1px solid var(--retro-green)';
            resourceContainer.appendChild(image);
        } else if (resource.type === 'video') {
            const video = document.createElement('video');
            video.src = resource.content;
            video.controls = true;
            video.style.maxWidth = '100%';
            resourceContainer.appendChild(video);
        } else if (resource.type === 'pdf') {
            const pdfLink = document.createElement('a');
            pdfLink.href = resource.content;
            pdfLink.target = '_blank';
            pdfLink.textContent = 'Open PDF';
            pdfLink.style.color = 'var(--retro-green)';
            pdfLink.style.textDecoration = 'underline';
            resourceContainer.appendChild(pdfLink);
        } else {
            // Default to a clickable link for unknown types
            const link = document.createElement('a');
            link.href = resource.url;
            link.target = '_blank';
            link.textContent = `➜ ${resource.name}`;
            link.style.color = 'var(--retro-green)';
            link.style.textDecoration = 'none';
            resourceContainer.appendChild(link);
        }

        content.appendChild(resourceContainer);
    });

    modal.style.display = 'block'; // Show the modal
}

function closeModal() {
    document.getElementById('resource-modal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('resource-modal');
    if (event.target === modal) {
        closeModal();
    }
};

window.onload = init;

document.addEventListener('DOMContentLoaded', () => {
    const futurePlansContainer = document.getElementById('futurePlansContainer');
    const interactiveContainer = document.getElementById('interactiveContainer');
    const terminal = document.getElementById('terminal');
    const commandInput = document.getElementById('commandInput');
    const futurePlansList = document.getElementById('futurePlansList');

    // List of future plans
    const futurePlans = [
        "Search Bar",
        "Youtube Channel",
        "Chat Application",
    ];

    // List of supported commands
    const supportedCommands = [
        "ls", "cd", "pwd", "mkdir", "rm", "cp", "mv", "touch", "cat", "echo", "clear", "exit",
        "chmod", "whoami", "ping", "curl", "wget", "nano", "vim", "date", "cal", "shutdown",
        "man", "alias", "history", "df", "top", "ps", "kill", "reboot", "uptime", "env",
        "export", "grep", "find", "locate", "head", "tail", "sort", "uniq", "wc", "awk", "sed",
        "fortune", "cowsay", "sl", "yes", "rev", "toilet", "figlet", "lolcat", "neofetch",
        "cmatrix", "tree", "htop", "banner", "motd", "cat commands"
    ];

    // Populate the future plans list
    futurePlans.forEach(plan => {
        const listItem = document.createElement('li');
        listItem.textContent = plan;
        futurePlansList.appendChild(listItem);
    });

    // Function to open the interactive terminal
    function openTerminal() {
        futurePlansContainer.style.display = 'none'; // Hide future plans
        interactiveContainer.style.display = 'block'; // Show the terminal
        commandInput.focus(); // Focus on the terminal input
    }

    // Function to show the future plans
    function showFuturePlans() {
        futurePlansContainer.style.display = 'block'; // Show future plans
        interactiveContainer.style.display = 'none'; // Hide the terminal
    }

    // Listen for the "x" key to open the terminal (but not close it)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'x' && futurePlansContainer.style.display === 'block') {
            openTerminal();
        }
    });

    // Function to append output to the terminal
    function appendToTerminal(content) {
        const output = document.createElement('div');
        output.classList.add('output');
        output.innerHTML = content;
        terminal.appendChild(output);
        terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom
    }

    // Handle command input
    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();

            // Ignore empty commands
            if (!command) {
                commandInput.value = ''; // Clear the input field
                return;
            }

            // Display the entered command
            appendToTerminal(`<span class="prompt">$</span> ${command}`);

            // Recognize and handle commands
            let response = ""; // Prepare the response
            switch (command) {
                case "ls":
                    response = `<span class="success">bash: ls: You see a list of imaginary files. Too bad they don't exist.</span>`;
                    break;
                case "cd":
                    response = `<span class="success">bash: cd: Where do you think you're going? Maybe try "cd /".</span>`;
                    break;
                case "pwd":
                    response = `<span class="success">bash: pwd: You're exactly where you need to be. Don't get lost.</span>`;
                    break;
                case "mkdir":
                    response = `<span class="success">bash: mkdir: A new imaginary directory has been created. Too bad it's not real.</span>`;
                    break;
                case "rm":
                    response = `<span class="success">bash: rm: You just deleted... nothing. Congrats!</span>`;
                    break;
                case "cp":
                    response = `<span class="success">bash: cp: Copying files? Sure, but only in your dreams.</span>`;
                    break;
                case "mv":
                    response = `<span class="success">bash: mv: Moving files? Not today, my friend.</span>`;
                    break;
                case "touch":
                    response = `<span class="success">bash: touch: You touched a file. It felt... nonexistent.</span>`;
                    break;
                case "cat":
                    response = `<span class="success">bash: cat: Meow! The cat approves of your command.</span>`;
                    break;
                case "echo":
                    response = `<span class="success">bash: echo: Echo... echo... echo... (It's lonely here.)</span>`;
                    break;
                case "clear":
                    terminal.innerHTML = ""; // Clear the terminal output
                    response = `<span class="success">bash: clear: Terminal cleared.</span>`;
                    break;
                case "chmod":
                    response = `<span class="success">bash: chmod: Permissions changed! Just kidding, nothing happened.</span>`;
                    break;
                case "whoami":
                    response = `<span class="success">bash: whoami: You're the chosen one. Or just a user.</span>`;
                    break;
                case "ping":
                    response = `<span class="success">bash: ping: Pong! The server is ignoring you.</span>`;
                    break;
                case "curl":
                    response = `<span class="success">bash: curl: Curling up with some data? Too bad it's not real.</span>`;
                    break;
                case "wget":
                    response = `<span class="success">bash: wget: Downloading... nothing. Enjoy your empty file.</span>`;
                    break;
                case "nano":
                    response = `<span class="success">bash: nano: Opening the world's tiniest text editor. Too bad it's imaginary.</span>`;
                    break;
                case "vim":
                    response = `<span class="success">bash: vim: Welcome to Vim! Press 'q' to quit. Oh wait, you can't.</span>`;
                    break;
                case "date":
                    response = `<span class="success">bash: date: It's always today. Time is an illusion.</span>`;
                    break;
                case "cal":
                    response = `<span class="success">bash: cal: Here's your calendar: [Insert imaginary dates here].</span>`;
                    break;
                case "shutdown":
                    response = `<span class="success">bash: shutdown: Shutting down... just kidding, I'm still here.</span>`;
                    break;
                case "man":
                    response = `<span class="success">bash: man: Manual not found. You're on your own!</span>`;
                    break;
                case "alias":
                    response = `<span class="success">bash: alias: Aliases are for the weak. Type it out!</span>`;
                    break;
                case "history":
                    response = `<span class="success">bash: history: Your past commands are lost to time.</span>`;
                    break;
                case "df":
                    response = `<span class="success">bash: df: Disk space? Infinite. You're in a simulation.</span>`;
                    break;
                case "top":
                    response = `<span class="success">bash: top: You're the only process running. Congrats!</span>`;
                    break;
                case "ps":
                    response = `<span class="success">bash: ps: No processes found. Are you even alive?</span>`;
                    break;
                case "kill":
                    response = `<span class="success">bash: kill: You can't kill what's already dead.</span>`;
                    break;
                case "reboot":
                    response = `<span class="success">bash: reboot: Rebooting... just kidding, you're stuck here.</span>`;
                    break;
                case "uptime":
                    response = `<span class="success">bash: uptime: You've been here forever. Time is meaningless.</span>`;
                    break;
                case "env":
                    response = `<span class="success">bash: env: Your environment is perfect. Don't change it.</span>`;
                    break;
                case "export":
                    response = `<span class="success">bash: export: Exporting... nothing. Enjoy your empty file.</span>`;
                    break;
                case "grep":
                    response = `<span class="success">bash: grep: Searching for meaning in a meaningless world.</span>`;
                    break;
                case "find":
                    response = `<span class="success">bash: find: You found... nothing. Keep looking!</span>`;
                    break;
                case "locate":
                    response = `<span class="success">bash: locate: Location services are off. Try again later.</span>`;
                    break;
                case "head":
                    response = `<span class="success">bash: head: Here's the top of the file: [Nothing].</span>`;
                    break;
                case "tail":
                    response = `<span class="success">bash: tail: Here's the end of the file: [Still nothing].</span>`;
                    break;
                case "sort":
                    response = `<span class="success">bash: sort: Sorting... Done! But there's nothing to sort.</span>`;
                    break;
                case "uniq":
                    response = `<span class="success">bash: uniq: Everything is unique here. No duplicates found.</span>`;
                    break;
                case "wc":
                    response = `<span class="success">bash: wc: Word count: 0. Character count: 0. Line count: 0.</span>`;
                    break;
                case "awk":
                    response = `<span class="success">bash: awk: Awkward... there's nothing to process.</span>`;
                    break;
                case "sed":
                    response = `<span class="success">bash: sed: Sedly, there's nothing to replace.</span>`;
                    break;
                case "fortune":
                    response = `<span class="success">bash: fortune: You will write amazing code today!</span>`;
                    break;
                case "cowsay":
                    response = `<span class="success">bash: cowsay: Moo! The cow approves of your commands.</span>`;
                    break;
                case "sl":
                    response = `<span class="success">bash: sl: A train just passed by. Did you see it?</span>`;
                    break;
                case "yes":
                    response = `<span class="success">bash: yes: Yes. Yes. Yes. Yes. Yes...</span>`;
                    break;
                case "rev":
                    response = `<span class="success">bash: rev: !dlroW ,olleH</span>`;
                    break;
                case "toilet":
                    response = `<span class="success">bash: toilet: Flushing your imaginary output.</span>`;
                    break;
                case "figlet":
                    response = `<span class="success">bash: figlet: ASCII art is too cool for this terminal.</span>`;
                    break;
                case "lolcat":
                    response = `<span class="success">bash: lolcat: Rainbows everywhere! Too bad you can't see them.</span>`;
                    break;
                case "neofetch":
                    response = `<span class="success">bash: neofetch: Your system is too cool for this terminal.</span>`;
                    break;
                case "cmatrix":
                    response = `<span class="success">bash: cmatrix: Welcome to the Matrix.</span>`;
                    break;
                case "tree":
                    response = `<span class="success">bash: tree: Your directory tree is empty. Plant some files!</span>`;
                    break;
                case "htop":
                    response = `<span class="success">bash: htop: You're the only process running. Congrats!</span>`;
                    break;
                case "banner":
                    response = `<span class="success">bash: banner: Welcome to the coolest terminal ever!</span>`;
                    break;
                case "motd":
                    response = `<span class="success">bash: motd: Message of the day: Keep hacking!</span>`;
                    break;
                case "cat commands":
                    response = `<span class="success">Available Commands:</span><br>${supportedCommands.join(", ")}`;
                    break;
                case "exit":
                    response = `<span class="success">bash: exit: Closing the terminal... Returning to Future Plans.</span>`;
                    appendToTerminal(response);
                    showFuturePlans(); // Close the terminal and show Future Plans
                    return; // Exit the function to avoid clearing the input field after closing
                case "cd /":
                    response = `<span class="success">bash: cd /: Navigating to the root (home page)...</span>`;
                    appendToTerminal(response);
                    setTimeout(() => {
                        window.location.href = "index.html"; // Redirect to index.html
                    }, 1000); // Add a slight delay for the message to appear
                    break;
                default:
                    response = `<span class="error">bash: ${command}: Command not recognized. Try 'cat commands' to see a list of available commands.</span>`;
            }

            // Display the response below the command
            appendToTerminal(response);

            // Clear the input field
            commandInput.value = '';
        }
    });

    // Show future plans on page load
    showFuturePlans();
});
