import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    it("displays a p tag with code", () => {
        const home = shallow(<Home/>)
        const renderPTag = home.find("p")
        expect(renderPTag.length).toEqual(1)
    })
})
