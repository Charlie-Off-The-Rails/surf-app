import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({adapter: new Adapter()})

describe("When header renders", () => {
    it("displays a header", () => {
        const header = shallow(<Header/>)
        const renderHeaderTag = header.find("header")
        expect(renderHeaderTag.length).toEqual(1)
    })
}) 

//  Aaron said we can use spec testing here
// describe("When logged in", () => {
//     it("displays `my collections` and `create a collection` buttons", () => {
//     })
// })
