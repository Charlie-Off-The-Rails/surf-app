import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyCollectionsShow from '../MyCollectionsShow'

Enzyme.configure({adapter: new Adapter()})

describe("When MyCollectionsShow renders", () => {
    it("displays a p tag with code", () => {
        const myCollectionsShow = shallow(<MyCollectionsShow/>)
        const renderPTag = myCollectionsShow.find("p")
        expect(renderPTag.length).toEqual(1)
    })
})
