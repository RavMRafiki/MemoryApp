class MatrixGenerator {
  letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Q",
    "P",
    "R",
    "S",
    "T",
    "U",
    "W",
    "X",
    "Y",
    "Z",
  ];
  koreanLetters = [
    "ㄱ",
    "ㄴ",
    "ㄷ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅅ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
    "ㅏ",
    "ㅑ",
    "ㅓ",
    "ㅕ",
    "ㅗ",
    "ㅛ",
    "ㅜ",
    "ㅠ",
    "ㅡ",
    "ㅣ",
  ];

  /**
   * @type {(string | number)[]}
   */
  cards = [];
  /**
   * @param {string} type
   * @param {number} amount
   */
  generateCards(type, amount) {
    this.cards = [];
    switch (type) {
      case "number":
        this.generateCardsNumbers(amount);
        break;
      case "letter":
        this.generateCardsLetters(amount);
        break;
      case "korean-letter":
        this.generateCardsKoreanLetters(amount);
        break;
      default:
        this.generateCardsNumbers(amount);
        break;
    }
    return this.cards;
  }

  /**
   * @param {number} amount
   */
  generateCardsNumbers(amount) {
    for (let i = 1; i <= amount; i++) {
      this.cards.push(i);
      this.cards.push(i);
    }
  }
  /**
   * @param {number} amount
   */
  generateCardsLetters(amount) {
    for (let i = 0; i < amount; i++) {
      this.cards.push(this.letters[i]);
      this.cards.push(this.letters[i]);
    }
  }
  generateCardsKoreanLetters(amount) {
    for (let i = 0; i < amount; i++) {
      this.cards.push(this.koreanLetters[i]);
      this.cards.push(this.koreanLetters[i]);
    }
  }
}

export default new MatrixGenerator();
