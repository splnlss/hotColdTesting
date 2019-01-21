import reducer from './reducer'
import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE, restartGame, makeGuess, generateAuralUpdate} from './actions';


describe('Game Mechanics Reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'})

    expect(state.guesses).toEqual([])
    expect(state.feedback).toEqual('Make your guess!')
    expect(state.auralStatus).toEqual('')
    expect(state.correctAnswer).toBeLessThanOrEqual(100)
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
  })
  it('Should return the current state on an unknown action', () => {
    let currentState = {}
    const state = reducer(currentState, {type: '__UNKOWN'})

    expect(state).toBe(currentState)
  })
  
  describe('restartGame', () => {
    it('Should restart the game', () =>{
      let state = {
        guesses: [1,14,23,62],
        feedback: 'What???',
        correctAnswer: 62
      }

      const correctAnswer = 10
      state = reducer(state, restartGame(correctAnswer))

      expect(state.guesses).toEqual([])
      expect(state.feedback).toEqual('Make your guess!')
      expect(state.auralStatus).toEqual('')
      expect(state.correctAnswer).toEqual(correctAnswer)
      expect(state.auralStatus).toEqual('')
    })
  })

  describe('makeGuess', () =>{
    it('Should make a guess', () =>{
      let state = {
        guesses: [],
        feedback: '',
        correctAnswer: 66
      }

      state = reducer(state, makeGuess(25))
      expect(state.guesses).toEqual([25])
      expect(state.feedback).toEqual("You're Cold...")

      state = reducer(state, makeGuess(10))
      expect(state.guesses).toEqual([25, 10])
      expect(state.feedback).toEqual("You're Ice Cold...")


      state = reducer(state, makeGuess(55))
      expect(state.guesses).toEqual([25, 10, 55])
      expect(state.feedback).toEqual("You're Warm.")

      state = reducer(state, makeGuess(''))
      expect(state.guesses).toEqual([25, 10, 55, NaN])
      expect(state.feedback).toEqual('Please enter a valid number.')

      state = reducer(state, makeGuess(65))
      expect(state.guesses).toEqual([25, 10, 55, NaN, 65])
      expect(state.feedback).toEqual("You're Hot.")

      state = reducer(state, makeGuess(66))
      expect(state.guesses).toEqual([25, 10, 55, NaN, 65, 66])
      expect(state.feedback).toEqual("You got it!")
    })
  })

  describe('Generate Aural Update', () => {
    it('Should determine of guesses is plural', () => {
      let state = {
        guesses: [10, 25, 56],
        feedback: "You're Warm",
        auralStatus: ''
      }

      state = reducer(state, generateAuralUpdate())
      expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Warm You've made 3 guesses. In order of most- to least-recent, they are: 56, 25, 10")

    })

  })
})