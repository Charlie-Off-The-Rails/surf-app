import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({adapter: new Adapter()})

describe("When footer renders", () => {
    it("displays a footer", () => {
        const footer = shallow(<Footer/>)
        const renderFooterTag = footer.find("footer")
        expect(renderFooterTag.length).toEqual(1)
    })
})
