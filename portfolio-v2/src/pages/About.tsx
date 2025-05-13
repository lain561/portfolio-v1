import Title from "../components/PageTitle";

function About() {
  return (
    <section className="min-h-screen min-w-screen flex flex-col items-center justify-center">
        <Title title="About Me" />
        <div className="relative top-16 w-2/3 mx-auto flex items-center justify-center px-4">
          <div className="flex-1">

            {/* I THINK I SHGOULD USE A WAVING ICON GIF*/}
            <h5 className="text-[1.75rem] mb-8">Hi, I'm Ethan McKissic</h5>

            {/*UPDATE THIS DESCRIPTON*/}
            <p className="text-2xl tracking-wider leading-relaxed font-mono font-light">
              I'm a second-year Computer Science student at the University of Central Florida, always looking for new ways to grow and challenge myself.
              Currently, my interests lie at the intersection of software development and cybersecurity.
              I'm drawn to creating innovative solutions that solve real-world problems while simultaneously ensuring that systems, applications, and networks remain secure and robust.
            </p>
            
          </div>
          
          <div className="ml-20 w-[400px]">
            <img 
              src="../../images/me.jpg" 
              alt="ethan mckissic" 
              className="w-full h-auto rounded-[500px] shadow-lg"
            />
          </div>
        </div>
    </section>
  );
}

export default About;