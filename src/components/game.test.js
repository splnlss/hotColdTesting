import React from 'react';
import {shallow, mount} from 'enzyme';

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

    });
    it("makes a guess");
    it("changes state with new guess and feedback")
    it("generates a new aural update and sets to a new state")


})


// const wrapper = shallow(<AddForm />);
//         wrapper.instance().setEditing(true);
//         wrapper.update();
//         expect(wrapper.hasClass('add-form')).toEqual(true);
