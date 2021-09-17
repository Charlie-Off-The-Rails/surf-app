/**
 * @jest-environment jsdom
 */

import React, { Component } from 'react'
import SurfSpotIndex from '../SurfSpotIndex'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router, Switch } from 'react-router'
import {createMemoryHistory} from 'history'


describe("When SurfSpotIndex renders", () => {
    it("displays a title", () => {
        render(<SurfSpotIndex/>)
        expect(screen.getByText("Surf Spots")).toBeVisible()
    })
})

describe("When adding spot to collection", () => {
    it("calls on createCollectionSopt", () => {
        const history = createMemoryHistory()
        const createCollectionSpot = jest.fn()
        const mockSurfSpot = {
            name: "PB",
            description: "Here we are just testing."
        }
        render(<Router history={history}>
                    <Switch>
                        <SurfSpotIndex 
                            surfSpots = {[mockSurfSpot]} 
                            createCollectionSpot= {createCollectionSpot}
                        />
                    </Switch>
                </Router>)
        expect(screen.getByText(mockSurfSpot.name)).toBeVisible()
    })
})
