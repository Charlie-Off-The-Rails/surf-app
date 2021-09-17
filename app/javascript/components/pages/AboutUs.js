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
        <br/>
        <div className="pb-10">
        <figure className="md:flex bg-white rounded-sm p-8 md:p-0">
          <img
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={alfonso}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Alfonso is a web developer based in Southern California. He's a
                passionate and people-oriented developer -- he enjoys learning
                novel techniques and technologies, and using them to help people
                connect and realize their goals. He loves web development,
                especially if it involves using React, Ruby on Rails, or
                whatever Javascript libraries he can get his hands on. You can
                also find him camping, watching horror movies, or playing
                roleplaying games.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div>Alfonso Martinez</div>
              <div className="text-gray-dark">Project Manager</div>
            </figcaption>
          </div>
        </figure>
        <figure className="md:flex bg-white rounded-sm p-8 md:p-0">
          <img
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={marcelo}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-right space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                I am a software developer based in San Diego, CA. I am currently
                attending the LEARN Academy full-stack software development boot
                camp where we are working on multiple projects using JavaScript,
                React, Ruby, and Ruby on Rails. I also have many years of
                professional experience as a geoscientist contributing to
                projects by collecting, analyzing, and reporting on scientific
                data.Today as a software developer, I strive to bring creative
                projects to life and to resolve challenging tasks with process
                improvements and innovative solutions.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div>Marcelo Azevedo</div>
              <div className="text-gray-dark">Tech Lead</div>
            </figcaption>
          </div>
        </figure>
        <figure className="md:flex bg-white rounded-sm p-8 md:p-0">
          <img
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={todd}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Hard-working, self driven, Junior web developer looking to
                improve any team or company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div>Todd Comte</div>
              <div className="text-gray-dark">Product Manager</div>
            </figcaption>
          </div>
        </figure>
        <figure className="md:flex bg-white rounded-sm p-8 md:p-0">
          <img
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={yarenny}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-right space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Analytical full-stack web developer with a passion for building
                creative and functional web applications for those to enjoy.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    );
  }
}

export default AboutUs;
