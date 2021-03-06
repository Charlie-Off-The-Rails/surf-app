import React, { Component } from "react";
import yarenny from "../assets/yarenny.png";
import StyledPageTitle from "../components/StyledPageTitle";
import alfonso from "../assets/alfonso.jpeg";
import todd from "../assets/todd.jpg";
import marcelo from "../assets/marcelo.jpg";

class AboutUs extends Component {
  render() {
    return (
      <>
        <StyledPageTitle>About Us</StyledPageTitle>
        <div className="pb-10 grid gap-6 w-11/12 max-w-max mx-auto">
          <figure className="md:flex bg-white p-8 items-center rounded-md">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto flex-none">
              <img
                className="object-cover w-full max-w-full h-full max-h-full rounded-full"
                src={alfonso}
                alt="Photo of Alfonso Martinez"
              />
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="font-semibold">
                  Alfonso is a web developer based in Southern California. He's
                  a passionate and people-oriented developer -- he enjoys
                  learning novel techniques and technologies, and using them to
                  help people connect and realize their goals. He loves web
                  development, especially if it involves using React, Ruby on
                  Rails, or whatever Javascript libraries he can get his hands
                  on. You can also find him camping, watching horror movies, or
                  playing roleplaying games.
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div>Alfonso Martinez</div>
                <div className="text-gray-dark">Project Manager</div>
              </figcaption>
            </div>
          </figure>
          <figure className="md:flex bg-white rounded-md items-center p-8">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto flex-none">
              <img
                className="object-cover w-full h-full max-w-full max-h-full rounded-full"
                src={marcelo}
                alt="Photo of Marcelo Azevedo"
              />
            </div>
            <div className="pt-6 md:p-8 text-center md:text-right space-y-4">
              <blockquote>
                <p className="font-semibold">
                  "I am a software developer based in San Diego, CA. I am
                  currently attending the LEARN Academy full-stack software
                  development boot camp where we are working on multiple
                  projects using JavaScript, React, Ruby, and Ruby on Rails. I
                  also have many years of professional experience as a
                  geoscientist contributing to projects by collecting,
                  analyzing, and reporting on scientific data.Today as a
                  software developer, I strive to bring creative projects to
                  life and to resolve challenging tasks with process
                  improvements and innovative solutions."
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div>Marcelo Azevedo</div>
                <div className="text-gray-dark">Tech Lead</div>
              </figcaption>
            </div>
          </figure>
          <figure className="md:flex bg-white rounded-md p-8 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto flex-none">
              <img
                className="h-full w-full object-cover max-w-full max-h-full rounded-full"
                src={todd}
                alt="Photo of Todd Comte"
              />
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="font-semibold">
                  A junior web developer at Off The Rails LLC. The team that brought you the awesome app Cowabunga Surf. As a Product Manager he has demonstrated the ability to work with HTML, CSS JavaScript, React, Ruby on Rails and Tailwind CSS. He has exhibited a history of working in the military industry. Skilled in Government, Conflict Resolution, Operational Planning, Team Building, Public Speaking and Social Services Professional.
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div>Todd Comte</div>
                <div className="text-gray-dark">Product Manager</div>
              </figcaption>
            </div>
          </figure>
          <figure className="md:flex bg-white rounded-md p-8 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto flex-none">
              <img
                className="object-cover w-full h-full max-w-full max-h-full rounded-full"
                src={yarenny}
                alt="Photo of Yarenny Baez"
              />
            </div>
            <div className="pt-6 md:p-8 text-center md:text-right space-y-4 flex-1">
              <blockquote>
                <p className="font-semibold">
                Analytical full-stack web developer with a passion for building creative and functional web applications for those to enjoy. Skilled communicator with experience in pair programming/mob programming. Open minded and eager to learn and grow through new opportunities. "Working on Cowabunga 411 has been a great learning experience, I found a passion for UX/UI design and I look forward to seeing where it takes me!"
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div>Yarenny Baez</div>
                <div className="text-gray-dark">Design Lead</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </>
    )
  }
}

export default AboutUs;
