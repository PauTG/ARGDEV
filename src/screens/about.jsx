const About = () => {
  return (
    <div className="container flex w-full p-2 mx-auto text-left text-white md:p-4">
      <div className="border border-white rounded-md w-full p-5 flex flex-col h-[700px] md:flex-row items-center justify-between backdrop-blur-3xl">
        <div className="max-w-[800px] flex flex-col gap-3 p-4 bg-opacity-50 rounded-lg drop-shadow-[0_0_19px_rgba(0,0,0,0.4)] shadow-gray-400">
          <div className="flex flex-col mb-4">
            <p className="text-lg font-bold text-white md:text-2xl">
              Quienes somos
            </p>
            <p className="text-2xl italic text-white md:text-base">
              en Argentina Developer
            </p>
          </div>

          <p className="mb-3 text-base font-semibold text-white md:text-2xl">
            Sin mucho pretexto, somos una comunidad orientada al desarrollo IT.
            Nuestro objetivo es acompañar a los que arrancan en el mundo de la
            programación, y aprender con ustedes 🤝🏼
          </p>

          <div className="flex justify-center drop-shadow-[0_0_45px_rgba(0,0,0,0.7)]">
            <a
              href="https://argdeveloper.vercel.app"
              className="w-96 h-12 rounded-xl relative flex items-center justify-center overflow-hidden border backdrop-blur-3xl transition duration-500 ease-in-out hover:scale-105"
            >
              <span className="absolute border-2 border-white text-white" />
              <span className="rounded-xl font-semibold flex justify-center items-center p-4 z-10 h-full w-full">
                Ingresa a nuestro Discord (✿◡‿◡)
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-4 rounded-lg md:mt-0">
          <img
            className="w-32 max-w-full m-10 md:w-48 lg:w-60 md:m-28"
            src="/logoB.png"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
