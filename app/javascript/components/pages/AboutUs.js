import React, { Component } from 'react'

class AboutUs extends Component {
    render() {
        return (
            <>
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg font-semibold">
                            Analytical full-stack web developer with a passion for building creative and functional web applications for those to enjoy.
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-cyan-600">
                            Yarenny Baez
                            </div>
                            <div class="text-gray-500">
                            Design Lead
                            </div>
                        </figcaption>
                    </div>
                </figure>
                <p>This is the about us page</p>
            </>
        )
    }
}

export default AboutUs