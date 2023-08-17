"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import About from "./About";
import Experience from "./Experience";

const FakeHorizontal = () => {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: comp.current,
          pin: true,
          scrub: 1,
          //   snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=3500"
        }
      });
    }, comp);
    return () => {
      ctx.revert();
    }; // cleanup
  }, []);
  return (
    <div
      id="container"
      ref={comp}
      className="container flex flex-nowrap"
    >
      <section className="panel h-screen ">
        <About />
      </section>

      <section id="resume" className="panel h-screen ">
        <Experience />
      </section>
    </div>
  );
};

export default FakeHorizontal;
