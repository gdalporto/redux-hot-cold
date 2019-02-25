import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount} from './guess-count';

describe('GuessCount', ()=>{
    it('should render without crashing', ()=>{
        shallow(<GuessCount />);
    })
    it('should display the proper guess number', ()=>{
        let guessCount=3;
        let wrapper = shallow(<GuessCount guessCount={guessCount} />)
        let guessNumber = wrapper.find('span[id="count"]').text()
        expect(guessNumber).toEqual(guessCount.toString());

    })
})