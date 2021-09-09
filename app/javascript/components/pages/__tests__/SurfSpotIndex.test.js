import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SurfSpotIndex from '../SurfSpotIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When SurfSpotIndex renders", () => {
    it("displays a p tag with code", () => {
        const surfSpotIndex = shallow(<SurfSpotIndex/>)
        const renderPTag = surfSpotIndex.find("p")
        expect(renderPTag.length).toEqual(1)
    })
})
