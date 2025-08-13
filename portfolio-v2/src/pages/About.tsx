import AboutSection from "../components/AboutSection";

const aboutData = [
  {
    title: "Who I Am?",
    image: "/images/lain.gif",
    desc: `Hi! My name is Ethan McKissic. 
           I'm a second-year Computer Science student at the University of Central Florida, always looking for new ways to grow and challenge myself. 
           Currently, my interests lie at the intersection of software development and cybersecurity. 
           I'm drawn to creating innovative solutions that solve real-world problems while simultaneously ensuring that systems, applications, and networks remain secure and robust.`,
  },
  {
    title: "My Journey",
    image: "/images/me.jpg",
    desc: `I started my career as a self-taught developer, diving into the world of coding through online resources and projects. 
           Over the years, I've honed my skills in various programming languages and frameworks, always eager to learn and adapt. 
           My goal is to continue growing as a developer and contribute to meaningful projects that make a difference.`,
  },
  {
    title: "A little more about me",
    image: "/images/lain.gif",
    desc: `When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or working on personal projects that challenge my skills.
           I believe in the power of community and collaboration, and I'm always excited to connect with fellow developers and tech enthusiasts.
           If you're interested in collaborating or just want to chat about tech, feel free to reach out!`,
  },
];  

function About() {
  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center justify-center mt-32">
        {aboutData.map((section, index) => (
          <AboutSection
            key={index}
            title={section.title}
            image={section.image}
            desc={section.desc}
          />
        ))}
    </section>
  );
}

export default About;
