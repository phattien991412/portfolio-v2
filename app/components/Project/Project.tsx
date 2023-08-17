import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectItem from "./ProjectItem";

export interface ProjectsList {
  img: string;
  desc: string;
  tech: string;
  feature: string;
  link: string;
}

const Project = () => {
  const projects: ProjectsList[] = [
    {
      img: "/images/airbnb.png",
      desc: "Airbnb",
      feature:
        "Login/Register, Login with Google/Github, Create / Delete Properties, Booking / Reservation, Reservation cancellation, Add favorite, Search, Filter, Show empty error.",
      tech:
        "ReactJS / NextJS 13, Typescript, Tailwind, Prisma, MongoDB, NextAuth, Zustand, React-hook-form, Cloudinary.",
      link: "https://airbnb47.vercel.app/"
    },
    {
      img: "/images/netflix.png",
      desc: "Netflix",
      feature:
        "Login/Register, Login with Google/Github, Add/Remove movie from list, modal info.",
      tech:
        "HTML/CSS, Javascript, ReactJs, NextJs, Next/Auth, TailwinCss, SwiperJs, SWR, Prisma, MongoDB",
      link: "https://themovie47.vercel.app/auth"
    },
    {
      img: "/images/flexibble.png",
      desc: "Flexibble",
      feature: "Login with Google, CRUD Project, Detail Project , Profile Page",
      tech:
        "HTML/CSS, Typescript, ReactJs/NextJS, Next-auth, JWT, Cloundinary, TailwindCSS",
      link: "https://flexibble-47.vercel.app/"
    },
    {
      img: "/images/meta.png",
      desc: "Meta versus Madness",
      feature: "Animation with framer motion",
      tech: "HTML/SASS, Javascript, NextJs, Framer Motion",
      link: "https://metamadness47.vercel.app/"
    },
    {
      img: "/images/interno.png",
      desc: "Interno",
      feature: "Landing page for Interior Design - Total 11 pages",
      tech: "ReactJs/NextJs, TailwindCSS, GSAP, Masonry",
      link: "https://interno-nine.vercel.app/"
    },
    {
      img: "/images/nft.png",
      desc: "NFT Marketplace",
      feature: "Animation with Intersection Observer",
      tech: "ReactJs/NextJs, TailwindCSS, InterSection Observer",
      link: "https://nftmarketplace47.vercel.app/"
    }
  ];

  return (
    <div className="h-screen w-3/5 mx-auto">
      <h1 className="glitch text-center mb-12">Projects</h1>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        {projects.map(data =>
          <SwiperSlide key={data.desc} className="project w-full bg-[#2d2d2e]">
            <ProjectItem data={data} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Project;
