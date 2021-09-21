import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CollectionNew from '../CollectionNew'

Enzyme.configure({adapter: new Adapter()})

describe("renders SyledPageTitle child component", () => {
    it("displays SyledPageTitle component", () => {
        const collectionNew = shallow(<CollectionNew/>)
        const styledPage = collectionNew.find("StyledPageTitle")
        expect(styledPage.length).toEqual(1)
    })
})

describe("renders CollectionForm child component", () => {
    it("displays CollectionForm component", () => {
        const collectionNew = shallow(<CollectionNew/>)
        const collectionForm = collectionNew.find("CollectionForm")
        expect(collectionForm.length).toEqual(1)
    })
})
