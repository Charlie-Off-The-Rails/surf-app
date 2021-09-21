import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
    it("displays an image", () => {
        const notFound = shallow(<NotFound/>)
        const renderImageTag = notFound.find("img")
        expect(renderImageTag.length).toEqual(1)
    })
})
