let sentenceIndex = 0;
const opts = {
    get strings() {
        const sentences = [
            ['Happy', 'Birthday'],
            ['Brendha', 'Mel'],
            ['Deus', 'Abençõe'],
            ['Te', 'Amo ♥'],
        ];

        const currentSentence = sentences[sentenceIndex];
        sentenceIndex = (sentenceIndex + 1) % sentences.length;

        return currentSentence;
    },
};
