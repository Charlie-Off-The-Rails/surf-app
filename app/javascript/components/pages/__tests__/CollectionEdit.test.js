import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CollectionEdit from '../CollectionEdit'
import StyledPageTitle from '../../components/StyledPageTitle'

Enzyme.configure({adapter: new Adapter()})

describe("renders SyledPageTitle child component", () => {
    it("displays SyledPageTitle component", () => {
        const collectionEdit = shallow(<CollectionEdit/>)
        const styledPage = collectionEdit.find("StyledPageTitle")
        expect(styledPage.length).toEqual(1)
    })
})

describe("renders CollectionForm child component", () => {
    it("displays CollectionForm component", () => {
        const collectionEdit = shallow(<CollectionEdit/>)
        const collectionForm = collectionEdit.find("CollectionForm")
        expect(collectionForm.length).toEqual(1)
    })
})


