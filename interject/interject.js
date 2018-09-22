const definitions = require.main.require('./interject/lib/definition');
const sentences = require.main.require('./interject/lib/sentence');
const more = require.main.require('./interject/lib/more');
const log = require.main.require('./helper/log');

const self = {
    getRandom: () => {
        const allInterjections = self.getAll();
        const luckyKey = Math.floor(Math.random() * allInterjections.length);
        return allInterjections[luckyKey];
    },

    getAll: () => {
        return self.getDefinitions()
            .concat(self.getMore());
    },

    getDefinitions: () => {
        return definitions.items().map(item => item.value);
    },

    getSentences: () => {
        return sentences.items().map(item => item.value);
    },

    getMore: () => {
        return more.items().map(item => item.value);
    }
};

module.exports = self;