console.log('loaded')

document.addEventListener('DOMContentLoaded', () => {
    const textDisplay = document.getElementById('text-display');
    const difficultySelect = document.getElementById('difficultySelect');

    function generateText(difficulty) {
        console.log(difficulty);
        const easyWords = ["the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog"];
        const mediumWords = ["example", "sentence", "contains", "every", "letter", "alphabet", "perfect", "typing"];
        const hardWords = ["repeatedly", "improve", "accuracy", "maintaining", "steady", "rhythm", "correct", "placement"];

        let words;
        switch (difficulty) {
            case 'medium':
                words = mediumWords;
                break;
            case 'difficult':
                words = hardWords;
                break;
            case 'easy':
            default:
                words = easyWords;
                break;
        }

        let text = "";
        for (let i = 0; i < 100; i++) {
            text += words[Math.floor(Math.random() * words.length)] + " ";
        }
        return text.trim();
    }

    function updateText() {
        const difficulty = difficultySelect.value;
        const newText = generateText(difficulty);
        textDisplay.textContent = newText;
        console.log('updateText()')
    }

    difficultySelect.addEventListener('change', updateText);

    // Generate initial text on page load
    updateText();
  });