'use strict';

import * as bowlingGame from './bowling-game'

describe('Bowling game', () => {
    it('with all zero frames, score should be zero', () => {

        var game = bowlingGame.getScore('0|0|0|0|0|0|0|0|0|0');

        expect(game).toBe(0);
    });

    it('with 5 pins each frame, score should be 50', () => {

        var game = bowlingGame.getScore('5-|5-|5-|5-|5-|5-|5-|5-|5-|5-');

        expect(game).toBe(50);
    });

    it('with spare in first frame, score of the next ball should be doubled', () => {

        var game = bowlingGame.getScore('5-|5/|5-|5-|5-|5-|5-|5-|5-|5-');

        expect(game).toBe(60);
    });

    it('with string in first frame, score of the next two ball should be doubled', () => {

        var game = bowlingGame.getScore('5-|X|55|5-|5-|5-|5-|5-|5-|5-');

        expect(game).toBe(70);
    });

    it('with all strikes, score should be 300', () => {

        var game = bowlingGame.getScore('X|X|X|X|X|X|X|X|X|X||XX');

        expect(game).toBe(300);
    });
});