import { FaTasks } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { LiaBinocularsSolid } from "react-icons/lia";

const About = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-3/5 mt-20 mx-auto grid place-items-center">
        <div>
          <h1 className="glitch text-center">About me</h1>
          <p className="text-center 4xl:mt-12 4xl:text-xl">
            <q>
              As a frontend developer with 1 year of experience, I have skills
              in building responsive websites and web applications using
              HTML/SCSS, JavaScript, React, Redux, TailwindCSS. I am passionate
              about coding intuitive user interfaces that engage users. <br />{" "}
              <br /> My goal for the next year is to enhance my expertise in
              areas like performance optimization, SEO, and web security to
              build fast, secure, search-engine friendly web applications.
            </q>
          </p>

          <div className="grid grid-cols-3 gap-x-6 text-center w-4/5 mx-auto mt-8 4xl:mt-20">
            <div>
              <p className="grid place-items-center text-7xl mb-4 mx-auto w-[150px] h-[150px] rounded-iconRadius shadow-iconShdow bg-white text-[#104f42] hover:scale-90 transition-all duration-300">
                <LiaBinocularsSolid />
              </p>
              <p>Never stop learning to become a <code>Senior Frontend Developer</code></p>
            </div>
            <div>
              <p className="grid place-items-center text-7xl mb-4 mx-auto w-[150px] h-[150px] rounded-iconRadius shadow-iconShdow bg-white text-[#104f42] hover:scale-90 transition-all duration-300">
                <FaTasks />
              </p>
              <p>Bringing the best quality for every project </p>
            </div>
            <div>
              <p className="grid place-items-center text-7xl mb-4 mx-auto w-[150px] h-[150px] rounded-iconRadius shadow-iconShdow bg-white text-[#104f42] hover:scale-90 transition-all duration-300">
                <BsCodeSlash />
              </p>
              <ul className="">
                <li>UX/UI</li>
                <li>Performance Optimization</li>
                <li>Progressive Enhancement</li>
                <li>Maintainability </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
