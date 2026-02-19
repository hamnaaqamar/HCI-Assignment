const words = [
    "Apple", "Aura", "Amity", "Arcane", "Aster", "Atlas", "Abode", "Alchemy", "Anchor", "Azure",
    "Bliss", "Bloom", "Breeze", "Beacon", "Bonsai", "Bellows", "Brocade", "Butter", "Bamboo", "Button",
    "Cloud", "Cozy", "Cedar", "Chime", "Cider", "Canvas", "Candle", "Cactus", "Clover", "Copper",
    "Dew", "Dream", "Dusk", "Dahlia", "Dawn", "Drift", "Dapple", "Delight", "Daisy", "Dune",
    "Echo", "Ember", "Elm", "Ether", "Enamel", "Easel", "Earth", "Elder", "Epoch", "Evergreen",
    "Fern", "Flame", "Fable", "Flute", "Flora", "Finch", "Fleck", "Frost", "Forest", "Fawn",
    "Glow", "Gully", "Glint", "Garden", "Gable", "Gentle", "Ginger", "Glade", "Gourd", "Gaze",
    "Hazel", "Hearth", "Haven", "Honey", "Humming", "Hollow", "Haze", "Heather", "Harvest", "Hyacinth",
    "Iris", "Ivory", "Ink", "Island", "Icon", "Indigo", "Igloo", "Ideal", "Idyll", "Image",
    "Jade", "Jute", "Juniper", "Joy", "Jasper", "Jolly", "Journal", "Jaunt", "Jewel", "Jangle"
];

const searchInput = document.getElementById('searchInput');
const wordList = document.getElementById('wordList');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');

function updateDisplay(filteredWords) {
    wordList.innerHTML = filteredWords
        .sort()
        .map(word => `<li>${word}</li>`)
        .join('');

    // HCI Feedback: Real-time counter
    resultCount.textContent = `${filteredWords.length} items to explore`;

    // Toggle Empty State
    if (filteredWords.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

// Search interaction
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const matches = words.filter(w => w.toLowerCase().includes(term));
    updateDisplay(matches);
});

// Initial Load
updateDisplay(words);