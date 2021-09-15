import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SurfSpotIndex from '../SurfSpotIndex'
import {render, screen} from '@testing-library/react'

Enzyme.configure({adapter: new Adapter()})

describe("When SurfSpotIndex renders", () => {
    it("displays a title", () => {
        render(<SurfSpotIndex/>)
        expect(screen.getByText("Surf Spots")).toExist()
    })
})
