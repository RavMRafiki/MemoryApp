class MatrixGenerator {
    letters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z']
    /**
     * @type {(string | number)[]}
     */
    cards = []
    /**
     * @param {string} type
     * @param {number} amount
     */
    generateCards(type, amount) {
        this.cards = []
        switch (type) {
            case 'number':
                this.generateCardsNumbers(amount)
                break;
            case 'letter':
                this.generateCardsLetters(amount)
                break;
            default:
                this.generateCardsNumbers(amount)
                break;
        }
        return this.cards
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
}

export default new MatrixGenerator()