import {AuralStatus} from './aural-status';
import React from 'react';
import {shallow} from 'enzyme';

describe('AuralStatus', ()=>{
    it('should load without crashing', ()=>{
        shallow(<AuralStatus />)
    })

    it('should return aural status update', ()=>{
        let auralStatus = 'This is an aural status update';
        let wrapper = shallow(<AuralStatus auralStatus={auralStatus} />);
        let value = wrapper.text();
        expect(value).toEqual(auralStatus);
    })
})
