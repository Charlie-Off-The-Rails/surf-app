/**
 * @jest-environment jsdom
 */

import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SurfSpotIndex from '../SurfSpotIndex'


Enzyme.configure({adapter: new Adapter()})


describe("When SurfSpotIndex renders", () => {
    it("displays StyledPageTitle component", () => {
        const surfSpotIndex = shallow(<SurfSpotIndex/>)
        const styledPageTitle = surfSpotIndex.find("StyledPageTitle")
        expect(styledPageTitle.length).toEqual(1)
    })
})

