'use strict';

export function getScore(game) {

    const maxFrameScore = 10;

    var getValue = (array, index, recursive) => {
        if (index >= array.length) {
            return 0;
        }

        var value = array[index];
        var callback = functions[value];

        if (callback) {
            return callback(array, index, recursive)
        }

        return parseInt(value, 10);
    };

    var functions = {
        "X": (array, index, recursive) => {
            var value = maxFrameScore;

            if (recursive && index < 9) {
                value += getValue(array, index + 1, false) + getValue(array, index + 2, false);
            }

            return value;
        },
        "/": (array, index, recursive) => {
            var value = maxFrameScore - getValue(array, index - 1, false);

            if (recursive) {
                value += getValue(array, index + 1, false);
            }

            return value;
        },
        "-": () =>{
            return 0;
        }
    };

    return game
        .split(/\|\||\||/)
        .map((value, index, array) => {
            return getValue(array, index, true);
        })
        .reduce((previous, current) => {
            return previous + current;
        });
}