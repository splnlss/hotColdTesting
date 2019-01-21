export const RESTARTGAME = 'RESTARTGAME'
export const MAKEGUESS = 'MAKEGUESS'
export const AURALUPDATE = 'AURALUPDATE'

export const restartGame = () =>{
  return {type:RESTARTGAME}
}

export const makeGuess = (guess) =>{
  return {type:MAKEGUESS,guess}
}

export const generateAuralUpdate = () =>{
  return {type:AURALUPDATE}
}
