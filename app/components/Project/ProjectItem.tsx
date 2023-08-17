import React from "react";
import { ProjectsList } from "./Project";
import Image from "next/image";

const ProjectItem = ({ data }: { data: ProjectsList }) => {
  return (
    <div className="w-full grid place-items-center">
      <div>
        <div className="project-img overflow-hidden">
          <Image
            className="hover:scale-110 transition-all duration-500 cursor-pointer"
            src={data.img}
            width={800}
            height={800}
            alt="project"
          />
        </div>
        <div className="w-full py-4 ">
          <h3 className="text-xl font-bold">
            {data.desc}
          </h3>
          <ul className="list-disc my-2">
            <label className="font-semibold">Feature & Tech:</label>
            <li className="ml-4">
              {data.feature}
            </li>
            <li className="ml-4">
              {data.tech}
            </li>
          </ul>
          <p className="pb-8">
            Visit via link:{" "}
            <a className="hover:text-secondaryColor transition-all duration-500"href={data.link} target="_blank" rel="noopener noreferrer">
              {data.link}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
