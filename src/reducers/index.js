import {RESTARTGAME, MAKEGUESS, AURALUPDATE} from '../actions/index'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

function calculateGuess(g, correctAnswer,feedback){
  const guess = parseInt(g, 10);
  console.log(g, correctAnswer);
  if (isNaN(g)) {
    return 'Please enter a valid number';
  }

const difference = Math.abs(guess - correctAnswer);

  // let feedback;
  if (difference >= 50) {
    feedback = 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    feedback = 'You\'re Cold...';
  } else if (difference >= 10) {
    feedback = 'You\'re Warm.';
  } else if (difference >= 1) {
    feedback = 'You\'re Hot!';
  } else {
    feedback = 'You got it!';
  }
  return feedback;
}

function calculateAuralStatus(guesses,feedback) {
   // const { guesses, feedback } = this.state;

  // If there's not exactly 1 guess, we want to
  // pluralize the nouns in this aural update.
  const pluralize = guesses.length !== 1;
  let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

  if (guesses.length > 0) {
    auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
  }
  return auralStatus;
}

export default function hotColdApp(state=initialState, action){
  switch(action.type){
    case RESTARTGAME:
      return initialState;
    case MAKEGUESS:
      return {...state,
        guesses:[...state.guesses, action.guess],
        feedback:calculateGuess(action.guess, state.correctAnswer, state.feedback)
      }
    case AURALUPDATE:
      return {...state, auralStatus:calculateAuralStatus([...state.guesses], calculateGuess(state.feedback))}
    default:
      return state;
  }
  //return state;
}
