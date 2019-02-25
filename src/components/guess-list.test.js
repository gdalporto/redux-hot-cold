import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessList} from './guess-list';

describe('<GuessList />', ()=> {
    it('should render without crashing', ()=>{
        shallow(<GuessList guesses={[2, 40]} />);
    });

    it('should display a list of guesses', ()=>{
        let guesses=[10, 50, 20, 30];
        let wrapper = shallow(<GuessList guesses={guesses} />);
        wrapper.find('li').forEach((item,index)=>{
            expect(item.text()).toEqual(guesses[index].toString());
        })
    })
})