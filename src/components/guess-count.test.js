import React from 'react';
import {shallow, mount} from 'enzyme';


import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it("Renders without crashing", () => {
        shallow(<GuessCount />);
    });

    it("checking to see if you have made more than one guess", ()=>{
        const wrapper = shallow(<GuessCount guessCount="2"/>);
        expect(wrapper.contains(<h2 id="guessCount">)).toEqual(guesses);
    })
})
    //         wrapper.instance().setEditing(true);
// expect(lists.length).toEqual(seedLists.length);
