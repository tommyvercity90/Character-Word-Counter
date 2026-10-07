# 📝 Character & Word Counter

A simple and responsive **Character, Word & Sentence Counter** built using **HTML5, CSS3, and JavaScript**.

This tool updates the character, word, and sentence counts **instantly as the user types**. It is designed as a beginner-friendly project to practice JavaScript input events, string methods, and live DOM manipulation.

---

## 🚀 Features

* 🔤 **Live Character Count**
* 📝 **Live Word Count**
* 📄 **Live Sentence Count**
* ⚡ Real-time updates while typing
* 🧹 Clear button to reset the text and counters
* 📱 Fully responsive design
* 🎨 Clean and modern user interface
* 📋 Supports typing and pasting text

---

## 📂 Project Structure

```text
character-word-counter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🛠️ Technologies Used

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| HTML5      | Page structure                 |
| CSS3       | Styling and responsive design  |
| JavaScript | Counting logic and DOM updates |

---

## 🎯 Objective

The main objective of this project is to practice:

* JavaScript `input` events
* String manipulation
* `trim()` method
* `split()` method
* Regular expressions
* DOM selection and manipulation
* Live UI updates
* Event listeners

---

## 📌 How It Works

### Character Count

The project uses JavaScript's `.length` property:

```javascript
const text = textInput.value;

charCount.textContent = text.length;
```

This counts every character, including spaces.

---

### Word Count

First, the text is trimmed:

```javascript
const trimmedText = text.trim();
```

Then the text is split using whitespace:

```javascript
const words = trimmedText.split(/\s+/);
```

The number of words is then displayed:

```javascript
wordCount.textContent = words.length;
```

The `\s+` pattern allows the counter to correctly handle multiple spaces, tabs, and line breaks.

---

### Sentence Count

Sentences are separated using `.`, `!`, and `?`:

```javascript
const sentences = trimmedText
    .split(/[.!?]+/)
    .filter(sentence => sentence.trim() !== "");
```

The resulting number of sentences is displayed on the page.

---

## ⚡ Live Counting

The project listens for the `input` event:

```javascript
textInput.addEventListener("input", updateCounters);
```

This means the counters update automatically whenever the user:

* Types
* Deletes text
* Pastes text
* Modifies the textarea

---

## 🧹 Clear Button

The **Clear** button removes all text and resets the counters:

```javascript
clearBtn.addEventListener("click", function () {
    textInput.value = "";
    updateCounters();
});
```

---

## 🎨 UI Preview

### Main Interface

> Add a screenshot of your project here.

```text
📸 Screenshot
```

You can replace the placeholder with:

```markdown
![Character & Word Counter Screenshot](screenshots/preview.png)
```

---

## 💻 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/character-word-counter.git
```

### 2. Open the project folder

```bash
cd character-word-counter
```

### 3. Open `index.html`

You can simply double-click:

```text
index.html
```

Or open it using **Live Server** in VS Code.

No additional dependencies or installations are required.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

CSS media queries are used to make the interface responsive.

---

## 📚 Learning Resources

* [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [MDN Input Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)
* [MDN String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
* [MDN String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

---

## 🔮 Future Improvements

Some features that could be added in future versions:

* 🔢 Character count excluding spaces
* ⏱️ Reading time estimation
* 📊 Text statistics
* 🔠 Paragraph count
* 📋 Copy text button
* 🌙 Dark mode
* 💾 Save text using Local Storage
* 📥 Export text as `.txt`
* 🎯 Character limit indicator

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

