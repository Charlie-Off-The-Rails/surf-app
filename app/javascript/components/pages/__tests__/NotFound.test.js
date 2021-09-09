import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
    it("displays a p tag with code", () => {
        const notFound = shallow(<NotFound/>)
        const renderPTag = notFound.find("p")
        expect(renderPTag.length).toEqual(1)
    })
})
