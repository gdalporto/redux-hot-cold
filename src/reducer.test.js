import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame,MAKE_GUESS, makeGuess} from './actions'
import reducer from './reducer'


describe('reducer', ()=>{
    let guess1 = 45;
    let guess2 = 55;
    let guess3 = 51;
    let guess4 = 1;

    
    it('should process several guesses and return the correct state', ()=>{
        let state = {
            guesses: [35, 40],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 51
        }
            state = reducer(state, makeGuess(guess1));
        state = reducer(state, makeGuess(guess2));
        state = reducer(state, makeGuess(guess3));

        expect(state).toEqual({
            guesses: [35, 40, 45, 55, 51],
            feedback: 'You got it!',
            auralStatus: '',
            correctAnswer: 51
        })
    })

    it('should process poor guesses and return the Youre Ice Cold...', ()=>{
        const expectedFeedback= "You're Ice Cold..."
        let state = {
            guesses: [35, 40],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 51
        }
        state = reducer(state, makeGuess(guess4));

        expect(state).toEqual({
            guesses: [35, 40, guess4],
            feedback: expectedFeedback,
            auralStatus: '',
            correctAnswer: 51
        })
    })

    it('should reset the game', ()=>{
        const correctAnswer=4
        let state = {
            guesses: [35, 40],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 51
        }
        
        state = reducer(state,restartGame(correctAnswer))

        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 4
        })

    })

    it('should set the Aural flag', ()=>{
        let state = {
            guesses: [35, 40],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 51
        }
        state = reducer(state, generateAuralUpdate());
        expect(state).toEqual({
            guesses: [40, 35],
            feedback: 'Make your guess!',
            auralStatus: "Here's the status of the game right now: Make your guess! You've made 2 guesses. In order of most- to least-recent, they are: 40, 35",
            correctAnswer: 51

        })
    })

})