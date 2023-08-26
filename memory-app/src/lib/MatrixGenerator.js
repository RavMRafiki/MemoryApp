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
  catsDir = "./cats/";
  cats = [
    "cat (1).jpg",
    "cat (10).jpg",
    "cat (11).jpg",
    "cat (12).jpg",
    "cat (13).jpg",
    "cat (14).jpg",
    "cat (15).jpg",
    "cat (16).jpg",
    "cat (17).jpg",
    "cat (18).jpg",
    "cat (19).jpg",
    "cat (2).jpg",
    "cat (20).jpg",
    "cat (21).jpg",
    "cat (22).jpg",
    "cat (23).jpg",
    "cat (24).jpg",
    "cat (25).jpg",
    "cat (26).jpg",
    "cat (27).jpg",
    "cat (28).jpg",
    "cat (29).jpg",
    "cat (3).jpg",
    "cat (30).jpg",
    "cat (31).jpg",
    "cat (32).jpg",
    "cat (33).jpg",
    "cat (34).jpg",
    "cat (35).jpg",
    "cat (36).jpg",
    "cat (37).jpg",
    "cat (38).jpg",
    "cat (39).jpg",
    "cat (4).jpg",
    "cat (40).jpg",
    "cat (41).jpg",
    "cat (42).jpg",
    "cat (43).jpg",
    "cat (44).jpg",
    "cat (45).jpg",
    "cat (46).jpg",
    "cat (47).jpg",
    "cat (48).jpg",
    "cat (49).jpg",
    "cat (5).jpg",
    "cat (50).jpg",
    "cat (51).jpg",
    "cat (6).jpg",
    "cat (7).jpg",
    "cat (8).jpg",
    "cat (9).jpg",
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
      case "cat":
        this.generateCardsCats(amount);
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
  generateCardsCats(amount) {
    this.cats.sort(() => (Math.random() > 0.5 ? 1 : -1));
    for (let i = 0; i < amount; i++) {
      this.cards.push(this.catsDir + this.cats[i]);
      this.cards.push(this.catsDir + this.cats[i]);
    }
  }
}

export default new MatrixGenerator();
