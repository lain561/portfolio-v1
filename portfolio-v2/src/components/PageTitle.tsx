function Title(props: {title: string}) {
    return (
      <div className="min-w-screen text-center absolute top-30 mt-4">
          <h1 className="text-5xl font-extrabold text-shadow-lg">{props.title}</h1>
      </div>
    );
  }
  
  export default Title;
  