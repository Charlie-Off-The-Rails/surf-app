import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyCollectionsShow from '../MyCollectionsShow'

Enzyme.configure({adapter: new Adapter()})


describe("When MyCollectionsShow renders", () => {
    it("displays one CardStyle component", () => {
        const collectionShow = shallow(<MyCollectionsShow/>)
        const styledCardFormat = collectionShow.find("CardFormat")
        expect(styledCardFormat.length).toEqual(1)
    })
})
