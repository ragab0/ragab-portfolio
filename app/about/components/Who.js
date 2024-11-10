import Link from "next/link";

export default function Who() {
  return (
    <section>
      <header>
        <h2>Who is Me ?</h2>
      </header>
      <article>
        <p>
          Hello there! I'm Ragab Eid, a dedicated software developer with
          expertise in full-stack web development. My journey is driven by a
          profound passion for coding and creating meaningful digital
          experiences.
        </p>
        <br />
        <p>
          I architect and develop scalable solutions that combine technical
          excellence with user-centric design. My expertise spans across
          React.js, Next.js, and various backend technologies such as Node.js
          and Express.js, allowing me to build everything from dynamic
          e-commerce platforms and task management apps to sophisticated
          learning management systems.
        </p>
        <br />
        <p>
          What sets me apart is my commitment to writing clean, maintainable
          code while adhering to industry best practices. I approach each
          project with a focus on performance, accessibility, and user
          experience, ensuring that every solution not only meets but exceeds
          client expectations.
        </p>
        <br />
        <p>
          I thrive in collaborative environments and am always eager to take on
          new challenges that push the boundaries of what's possible in web
          development. Whether it's implementing AI-enhanced features or
          creating intuitive user interfaces, I'm committed to delivering
          excellence in every project.
        </p>
        <br />
        <p>
          <b>Looking for a developer who can turn your vision into reality?</b>{" "}
          Let's
          <Link href="/contact" className="font-bold underline">
            {" "}
            connect{" "}
          </Link>
          and discuss how we can create something extraordinary together.
        </p>
      </article>
    </section>
  );
}
