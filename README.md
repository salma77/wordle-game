# 🎮 Wordle Game

> A modern implementation of the addictive word-guessing game. Challenge yourself daily with a fresh word puzzle!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()

## 📖 About

This is a fully functional Wordle game implementation that brings the classic word puzzle experience to your browser. Guess the word in 6 tries, with helpful color-coded feedback after each guess.

- 🎯 **Smart Feedback System**: Green (correct position), Yellow (wrong position), Gray (not in word)
- 📊 **Game Statistics**: Track your wins, streaks, and guess distribution
- 🌙 **Dark Mode Support**: Easy on the eyes, any time of day
- ♿ **Accessible Design**: Built with accessibility in mind
- 📱 **Fully Responsive**: Play on desktop, tablet, or mobile

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/salma77/wordle-game.git
cd wordle-game

# Install dependencies
npm install

# Start the development server
npm start
```

The game will open in your browser at `http://localhost:3000`

## 🎮 How to Play

1. **Guess a Word**: Type any valid 5-letter word and press Enter
2. **Read the Feedback**: 
   - 🟩 **Green**: Letter is correct and in the right position
   - 🟨 **Yellow**: Letter is in the word but wrong position
   - ⬜ **Gray**: Letter is not in the word
3. **Keep Guessing**: You have 6 attempts to find the word
4. **Daily Challenge**: A new word drops every 24 hours

### Tips & Tricks
- Start with common vowels (A, E, I, O, U)
- Try words with frequent consonants (R, S, T, N, L)
- Use the feedback from previous guesses to narrow down possibilities
- Remember: The word is the same for all players each day!

## 📁 Project Structure

```
wordle-game/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Game.jsx
│   │   ├── Keyboard.jsx
│   │   ├── GuessGrid.jsx
│   │   └── Modal.jsx
│   ├── utils/
│   │   ├── wordList.js
│   │   ├── validWords.js
│   │   └── gameLogic.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Game.css
│   │   └── variables.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run code linter
npm run lint
```

### Technologies Used

- **React** - UI library
- **JavaScript** - Game logic
- **CSS3** - Styling & animations
- **Local Storage** - Game state persistence

## 🎨 Features

### Core Gameplay
- ✅ 6 attempts to guess the daily word
- ✅ Keyboard input (physical & on-screen)
- ✅ Real-time feedback with animations
- ✅ Word validation against dictionary

### User Experience
- ✅ Win/Lose modals with stats
- ✅ Persistent game state (resume games)
- ✅ Share results (emojis only, no spoilers!)
- ✅ Keyboard shortcuts for accessibility
- ✅ Responsive design for all devices

### Statistics
- ✅ Games played counter
- ✅ Win percentage
- ✅ Current/max streak
- ✅ Guess distribution graph

## 🐛 Known Issues & Roadmap

### Current Version
- [x] Core gameplay mechanics
- [x] Responsive design
- [x] Statistics tracking

### Future Enhancements
- [ ] Difficulty levels (easy, hard)
- [ ] Custom word lists
- [ ] Multiplayer mode
- [ ] Sound effects & haptic feedback
- [ ] Themes & customization
- [ ] Language support

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

Please ensure your code follows the project's style guide and includes tests for new features.

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the original [Wordle](https://www.nytimes.com/games/wordle/) by Josh Wardle
- Word list sourced from SCOWL (Spell Checker Oriented Word Lists)
- Special thanks to the open-source community

## 📞 Support & Contact

Found a bug? Have a suggestion? Let me know!

- **GitHub Issues**: [Report a bug](https://github.com/salma77/wordle-game/issues)
- **Email**: salmaabdelfatah77@gmail.com

---

**Play Wordle** | [Start Playing](https://wordle-game-salma.netlify.app/) | [View Source](https://github.com/salma77/wordle-game)

<p align="center">
  Made with ❤️ by <a href="https://github.com/salma77">Salma</a>
</p>
