const util = require('util');

module.exports = {
    info: (message, object) => {
        console.log(util.inspect( message, {showHidden: false, depth: null, colors: false}))
        if (typeof object !== 'undefined')
            console.log(util.inspect( object, {showHidden: false, depth: null, colors: true}))
    },
    error: (message) => {
        console.log(util.inspect(['error', message], {showHidden: false, depth: null, colors: true}))
    }
};