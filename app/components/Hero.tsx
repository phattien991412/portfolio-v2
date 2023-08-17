"use client";

import Image from "next/image";

import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaSass } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { BsArrowDownCircle } from "react-icons/bs";
import {
  SiTailwindcss,
  SiAntdesign,
  SiChakraui,
  SiGreensock
} from "react-icons/si";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

import Tooltip from "./Tooltip";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".cover", {
        scale: 7,
        ease: "ease",
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: 1,
          start: "top top",
          end: "bottom",
          pin: true,
        }
      });
    }, heroRef);
    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    }; // cleanup
  }, []);
  return (
    <section ref={heroRef} className="hero-section relative overflow-hidden h-screen">
      <div className="cover" />
      <div className="grid place-items-center mt-16">
        <div>
          <div className="w-[500px] h-[500px] mx-auto">
            <Image
              src="/images/coding.png"
              width={500}
              height={500}
              alt="hero"
            />
          </div>

          <p className="animate-bounce grid place-items-center text-3xl -mt-4">
            <BsArrowDownCircle />
          </p>

          <h1 className="text-center text-4xl">I'm a Frontend Developer</h1>
          <ul className="skill flex justify-center items-center gap-4 text-3xl mt-8">
            <li>
              <Tooltip label="HTML5">
                <span>
                  <AiFillHtml5 />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="CSS3">
                <span>
                  <DiCss3 />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Javascript">
                <span>
                  <IoLogoJavascript />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Typescript">
                <span>
                  <BiLogoTypescript />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="ReactJS">
                <span>
                  <FaReact />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="NextJS">
                <span>
                  <TbBrandNextjs />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="TailwindCSS">
                <span>
                  <SiTailwindcss />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="SASS/SCSS">
                <span>
                  <FaSass />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Antd">
                <span>
                  <SiAntdesign />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="ChakraUI">
                <span>
                  <SiChakraui />
                </span>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="GSAP">
                <span>
                  <SiGreensock />
                </span>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
