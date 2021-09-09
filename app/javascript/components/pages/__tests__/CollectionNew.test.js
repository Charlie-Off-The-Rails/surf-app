import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CollectionNew from '../CollectionNew'

Enzyme.configure({adapter: new Adapter()})

describe("When CollectionNew renders", () => {
    it("displays a p tag with code", () => {
        const collectionNew = shallow(<CollectionNew/>)
        const renderPTag = collectionNew.find("p")
        expect(renderPTag.length).toEqual(1)
    })
})
