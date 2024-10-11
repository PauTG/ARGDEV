import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div className='w-full h-full text-left px-4 md:mt-4 flex text-white'>
            <div className='border border-white rounded-md w-full p-5 flex flex-col h-[700px] md:flex-row items-center justify-between backdrop-blur-3xl'>
            <div className="max-w-[800px] flex flex-col gap-3 p-4 bg-opacity-50 rounded-lg drop-shadow-[0_0_2px_rgba(0,0,0,0.7)] shadow-gray-400">
  <div className="flex flex-col mb-4">
    <p className="text-lg md:text-2xl font-bold text-white">Quienes somos</p>
    <p className="italic text-2xl md:text-base text-white">en Argentina Developer</p>
  </div>

  <p className="text-base md:text-2xl font-bold text-white mb-3">
    Sin mucho pretexto, somos una comunidad orientada al desarrollo IT.
    Nuestro objetivo es acompañar a los que arrancan en el mundo de la programación, y aprender con ustedes 🤝🏼
  </p>

  <div className="flex justify-center">
    <a href="https://argdeveloper.vercel.app" target="_blank" rel="noopener noreferrer">
      <button className=" bg-teal-50 bg-opacity-10 hover:shadow-sm font-bold py-3 rounded-3xl w-screen max-w-xs text-white">
        Ingresa a nuestro Discord (✿◡‿◡)
      </button>
    </a>
  </div>
</div>

                <div className='flex justify-center mt-4 md:mt-0 rounded-lg drop-shadow-[0_0_2px_rgba(0,0,0,0.7)]'>
                    <img className='w-32 md:w-48 lg:w-60 max-w-full m-28' src="/logoB.png" alt="Logo" />
                </div>
            </div>
        </div>
    );
}


export { Sobre };
