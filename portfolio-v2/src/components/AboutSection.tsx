import Title from "./PageTitle";

interface AboutSectionProps {
    title: string;
    image: string;
    desc: string;
}

function AboutSection(props:AboutSectionProps) {
  return (
    <div className="w-4/5 mx-auto flex flex-col items-center justify-center 
                      gap-10 px-6 sm:px-8 lg:px-24 mb-32">
        
        <Title title={props.title} />
        {/* Image first on all sizes */}
        <div className="flex items-center justify-center w-full mb-2 sm:mb-4 lg:mb-6">
            <img
            src={props.image}
            alt="ethan mckissic"
            className="w-64 sm:w-80 md:w-[400px] lg:w-[700px] h-auto md:h-[400px] rounded-2xl shadow-lg object-cover transition-all duration-300"
            />
        </div>

        {/* Text second */}
        <div className="flex-1 text-center">
            <p className="text-base sm:text-lg md:text-xl tracking-wider leading-relaxed font-mono max-w-5xl mx-auto">
                {props.desc}
            </p>
        </div>
    </div>
  );
}
export default AboutSection; 