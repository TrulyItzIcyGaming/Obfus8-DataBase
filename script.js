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