import React from 'react';
import {shallow, mount, render} from 'enzyme';
// import {expect} from 'chai';


import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it("Renders without crashing", () => {
        shallow(<GuessCount />);
    });

    it("checking to see if you have made more than one guess", ()=>{
        const wrapper = render(<GuessCount guessCount={2}/>);
        const result = wrapper.text()
        console.log(result,wrapper)
        const shal = shallow(<GuessCount guessCount={2}/>)
        console.log(shal)
        console.log(shal.find("#guessCount"))
        expect(result).toContain("guesses");
    })
})
