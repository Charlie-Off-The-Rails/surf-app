import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyCollectionsIndex from '../MyCollectionsIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When MyCollectionsIndex renders", () => {
    it("displays a p tag with code", () => {
        const myCollectionsIndex = shallow(<MyCollectionsIndex/>)
        const renderPTag = myCollectionsIndex.find("p")
        expect(renderPTag.length).toEqual(1)
    })
})
