"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Hero from "./components/Hero";
import FakeHorizontal from "./components/FakeHorizontal/FakeHorizontal";
import Link from "next/link";
import Project from "./components/Project/Project";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

interface NavItem {
  href: string;
  name: string;
}

export default function Home() {
  const [selected, setSelected] = useState<string>('#home')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute('href');

    if(href) {
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      // @ts-ignore
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        // @ts-ignore
        link.removeEventListener('click', handleClick);  
      });
    };

  }, []);

  const navList: NavItem[] = [
    {
      href: '#home',
      name: 'Home'
    },
    {
      href: '#about',
      name: 'About'
    },
    {
      href: '#resume',
      name: 'Resume'
    },

    {
      href: '#project',
      name: 'Project'
    },
    {
      href: '#contact',
      name: 'Contact'
    }
  ];

  return (
    <main id="home" >
      <Layout/>

      <div className="fixed z-[999999] bottom-7 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-red-500 cursor-pointer border border-red-400 border-b-4 font-medium overflow-hidden rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <ul className="nav flex justify-between items-center gap-4">
            {
              navList.map((item) => (
                <li key={item.href} onClick={() => setSelected(item.href)} className={`${selected === item.href ? 'selected' : ""}`}>
                  <Link href={item.href}>
                    <p>{item.name}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
      </div>
    </main>
  );
}
