import Hero from "./Hero";
import Contact from "./Contact";
import Project from "./Project/Project";
import FakeHorizontal from "./FakeHorizontal/FakeHorizontal";

const Layout = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section id="about" className="mt-14">
        <FakeHorizontal />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Layout;
