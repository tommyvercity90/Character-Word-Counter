const textInput = document.getElementById("textInput");

const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");

const clearBtn = document.getElementById("clearBtn");

// Update counters whenever the user types
textInput.addEventListener("input", updateCounters);

function updateCounters() {
    const text = textInput.value;

    // Character count
    charCount.textContent = text.length;

    // Word count
    const trimmedText = text.trim();

    if (trimmedText === "") {
        wordCount.textContent = 0;
    } else {
        const words = trimmedText.split(/\s+/);
        wordCount.textContent = words.length;
    }

    // Sentence count
    if (trimmedText === "") {
        sentenceCount.textContent = 0;
    } else {
        const sentences = trimmedText
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim() !== "");

        sentenceCount.textContent = sentences.length;
    }
}

// Clear textarea and reset counters
clearBtn.addEventListener("click", function () {
    textInput.value = "";
    updateCounters();
});