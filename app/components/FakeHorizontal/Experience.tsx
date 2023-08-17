import { FaTasks } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { LiaBinocularsSolid } from "react-icons/lia";

const Experience = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-3/5 mt-20 mx-auto grid place-items-center">
        <div>
          <h1 className="glitch text-center">Experience</h1>

          <div className="grid grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-between h-full">
              <div className="border-4 border-dashed border-mainColor p-4">
                <h2 className="text-xl font-semibold">
                  Intern Front-end Web Developer
                </h2>
                <p className="font-semibold">Cong ty CP CN & KT Stech</p>
                <p>07/2022 - 11/2022</p>
                <p>
                  Participated in the development of the Dakshow project,
                  focusing on studying and updating the UI and creating new
                  functions.
                </p>
              </div>

              <div className="border-4 border-dashed border-mainColor p-4">
                <h2 className="text-xl font-semibold">
                  Personal Project
                </h2>

                <ul className="list-disc ml-4">
                    <li>Airbnb Clone</li>
                    <li>Netflix Clone</li>
                    <li>Landing page for Interior Design</li>
                    <li>Landing page for NFT Marketplace</li>
                    <li>Landing page for Metamadness</li>
                </ul>
              </div>
            </div>

            <div className="border-4 border-dashed border-mainColor p-4">
              <h2 className="text-xl font-semibold">Front-end Web Developer</h2>
              <p className="font-semibold">Cong ty CP CN & KT Stech</p>
              <p>11/2022 - 07/2023</p>
              <ul className="list-disc ml-4">
                <li>
                  Develop reusable components for improved maintenance and
                  increased code reusability.
                </li>
                <li>
                  Implementing code splitting helps optimize page loading times
                  by loading only the necessary code.
                </li>
                <li>
                  Optimize SEO for stech website based on PageSpeed Insights for
                  excellent results.
                </li>
                <li>
                  Implementing advanced lazy loading techniques for images
                  improves the visual loading experience.
                </li>
                <li>
                  Using Redux Toolkit for managing state in a more efficient and
                  organized way
                </li>
                <li>
                  Collaborated with the backend team to create and update APIs,
                  avoiding repetition of API usage.
                </li>
                <li>Build a core service to manage APIs.</li>
                <li>Contributed to building the company's websites.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
