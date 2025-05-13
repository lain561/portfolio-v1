function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-[1.2rem] md:text-[2.1rem] text-shadow-lg">hi, my name is</h2>
        <h1 className="text-[2.2rem] md:text-[4.3rem] mb-2 md:mb-4 text-shadow-lg">ethan mckissic</h1>
        <div className="w-[250px] md:w-[375px] h-14 flex flex-row items-center justify-between"> 
            <a href="mailto: mckissicethan@gmail.com" target="_blank"><img className="h-8 w-8 md:h-12 md:w-12" src="../../images//icons8-gmail-100.png" alt="Email"/></a>
            <a href="https://github.com/lain561" target="_blank"><img className="h-8 w-8 md:h-12 md:w-12"  src="../../images/icons8-github-96.png" alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/ethan-mckissic-1682362a8/" target="_blank"><img className="h-8 w-8 md:h-11 md:w-11" src="../../images/icons8-linkedin-100.png" alt="LinkedIn"/></a>
            <a href="" target="_blank"><img className="h-8 w-8 md:h-12 md:w-12" src="../../images/icons8-resume-96.png" alt="Resume"/></a>
        </div>
    </div>
  );
}

export default Home;
