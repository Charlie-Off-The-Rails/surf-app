import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from '../AboutUs'

Enzyme.configure({adapter: new Adapter()})

describe("When AboutUs renders", () => {
    it("displays a p tag with code", () => {
        const aboutUs = shallow(<AboutUs/>)
        const renderImgTag = aboutUs.find("img")
        expect(renderImgTag.length).toEqual(4)
    })
})
