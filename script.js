// A subset of the 100-word list (Add more to reach 100)
const dictionary = [
    "Abstract", "Acoustic", "Apple", "Archive", "Atlas", "Algorithm", "Apollo", "Azure",
    "Beacon", "Bionic", "Breeze", "Binary", "Browser", "Backup", "Balance", "Brave",
    "Canvas", "Cloud", "Cipher", "Code", "Cobalt", "Cursor", "Chrome", "Crystal",
    "Data", "Default", "Design", "Device", "Digital", "Domain", "Driver", "Dynamic",
    "Echo", "Eclipse", "Editor", "Element", "Email", "Engine", "Entity", "Ethernet",
    "Filter", "Flow", "Folder", "Font", "Format", "Frame", "Function", "Future",
    "Gateway", "Global", "Graph", "Grid", "Guideline", "Glow", "Gear", "Generic",
    "Header", "History", "Host", "Hybrid", "Hyperlink", "Haptic", "Hardware", "Height",
    "Icon", "Image", "Index", "Input", "Install", "Interface", "Internal", "Iterate",
    "Java", "JSON", "Joystick", "Junction", "Kernel", "Keyboard", "Keyword", "Kinetics"
    // ... continue to 100 words
];

const searchInput = document.getElementById('searchInput');
const wordList = document.getElementById('wordList');
const resultCount = document.getElementById('resultCount');
const clearBtn = document.getElementById('clearBtn');
const noResults = document.getElementById('noResults');
const statusDot = document.getElementById('statusDot');

function render(list) {
    wordList.innerHTML = list.sort().map(w => `<li>${w}</li>`).join('');
    
    // Feedback Logic (Norman's Model)
    resultCount.textContent = `${list.length} items found`;
    clearBtn.style.display = searchInput.value ? 'block' : 'none';
    
    if (list.length === 0) {
        noResults.classList.remove('hidden');
        statusDot.style.background = '#ef4444'; // Red for error/no results
    } else {
        noResults.classList.add('hidden');
        statusDot.style.background = '#10b981'; // Green for success
    }
}

// Initial Load
render(dictionary);

// Search Event
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = dictionary.filter(w => w.toLowerCase().includes(term));
    render(filtered);
});

// Clear Button logic
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    render(dictionary);
    searchInput.focus();
});