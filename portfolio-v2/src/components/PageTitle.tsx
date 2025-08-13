function Title(props: {title: string}) {
    return (
      <>
        <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-shadow-lg">{props.title}</h1>
      </>
    );
  }
  
  export default Title;
  