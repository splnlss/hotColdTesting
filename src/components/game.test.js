import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

describe('<Game />', () => {
    it("Renders without crashing", () => {
        shallow(<Game />);
    });

    it("restarts the Game", () =>{
      
        //method to start game, callback(), function restarts
        //shallow(<Header />)
        //wrapper.find('button').simulate('click');
    });
    it("makes a guess");
    it("changes state with new guess and feedback")
    it("generates a new aural update and sets to a new state")


})


//
