import {GuessForm} from './guess-form'
import React from 'react'
import {shallow, mount} from 'enzyme'
import {makeGuess} from '../actions'


describe('<GuessForm />',()=>{
    it('should load without crashing', ()=>{
        shallow(<GuessForm />)
    })



    it('should dispatch makeGuess when form submitted', ()=>{
        const dispatch = jest.fn();
        let guess = "40";
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        wrapper.find('input[type="number"]').instance().value = guess;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
    })

    // it('should replace in input field with blank', ()=>{
    //     const dispatch = jest.fn();
    //     const wrapper = mount(<GuessForm dispatch={dispatch} />);
    //     const input = wrapper.find('input[type="number"]');
    //     wrapper.simulate('submit');
    //     expect(input.instance().value).toEqual('');


    // })

    it('should dispatch makeGuess reset input', ()=>{
        const dispatch = jest.fn();
        let guess = "40";
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        wrapper.find('input[type="number"]').instance().value = guess;
        wrapper.simulate('submit');
        expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
    })

})
