import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CollectionEdit from '../CollectionEdit'

Enzyme.configure({adapter: new Adapter()})

describe("When CollectionEdit renders", () => {
    it("displays a p tag with code", () => {
        const collectionEdit = shallow(<CollectionEdit/>)
        const renderPTag = collectionEdit.find("p")
        expect(renderPTag.length).toEqual(1)
    })
})
