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
    mainMenu.style.display = 'grid';
    document.getElementById('subpage').style.display = 'none';
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

    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('subpage').style.display = 'block';

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
    content.innerHTML = resources.map(res => `
        <a href="${res.url}" target="_blank" 
           style="color: var(--retro-green); 
                  display: block; 
                  margin: 10px 0;
                  text-decoration: none;">
            ➜ ${res.name}
        </a>
    `).join('');
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('resource-modal').style.display = 'none';
}

window.onload = init;

window.onclick = function(event) {
    const modal = document.getElementById('resource-modal');
    if (event.target === modal) {
        closeModal();
    }
};