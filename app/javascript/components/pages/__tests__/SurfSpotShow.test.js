import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SurfSpotShow from '../SurfSpotShow'

Enzyme.configure({adapter: new Adapter()})

describe("When SurfSpotShow renders", () => {
    it("displays StyledCardTitle component", () => {
        const surfSpotShow = shallow(<SurfSpotShow surfSpot={{name: "test"}}/>)
        const styledCardTitle = surfSpotShow.find("StyledCardTitle")
        expect(styledCardTitle.length).toEqual(1)
    })
})
