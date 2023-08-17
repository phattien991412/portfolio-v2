import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-3/5 mx-auto ">
        <div>
          <h1 className="glitch text-center">Contact Me</h1>

          <div className="grid grid-cols-3 gap-4 text-center w-4/5 mx-auto mt-14">
            <div className="flex flex-col justify-between">
              <a
                className="text-7xl mx-auto mb-4 text-[132px] text-[#104f42] hover:scale-90 transition-all duration-300 cursor-pointer"
                href="mailto:phattien991412@gmail.com"
                
              >
                <AiOutlineMail />
              </a>
              <div className="h-14">
                <h3 className="text-center text-xl font-semibold">Email</h3>
                <p>
                  Feel free to contact us for more information or begin our
                  journey!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <a
                className="text-7xl mx-auto mb-4 text-[132px] text-[#104f42] hover:scale-90 transition-all duration-300"
                href="https://www.linkedin.com/in/phat-trinh-tien-60a269271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
              <div className="h-14">
                <h3 className="text-center text-xl font-semibold">LinkedIn</h3>
                <p>My social network</p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <a
                className="text-7xl mx-auto mb-4 text-[132px] text-[#104f42] hover:scale-90 transition-all duration-300"
                href="http://facebook.com/phattien991412"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
              <div className="h-14">
                <h3 className="text-center text-xl font-semibold">Facebook</h3>
                <p>My social network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
