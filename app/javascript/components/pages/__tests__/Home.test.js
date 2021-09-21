import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({adapter: new Adapter()})

describe("when home renders", () => {
    it("displays a SyledPageTitle component", () => {
        const home = shallow(<Home/>)
        const styledPageTitle = home.find("StyledPageTitle")
        expect(styledPageTitle.length).toEqual(1)
    })
})
