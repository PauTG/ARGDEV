import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div className='w-full mt-6 h-full text-left px-5 flex text-white'>
            <div className='border border-white rounded-md w-full p-5 flex flex-col md:flex-row items-center justify-between backdrop-blur-3xl md:mt-40'>
                <div className='max-w-[800px] flex flex-col gap-3 p-4'>
                    <div className='flex flex-col mb-4'>
                        <p className='text-lg md:text-xl font-bold'>Quienes somos</p>
                        <p className='italic text-sm md:text-base'>en Argentina Developer 🇦🇷</p>
                    </div>

                    <p className='text-base md:text-xl font-bold mb-4'>
                        Sin mucho pretexto, somos una comunidad orientada al desarrollo IT.
                        Nuestro objetivo es acompañar a los que arrancan en el mundo de la programación, y aprender con ustedes 🤝🏼
                    </p>

                    <div className='flex justify-center'>
                        <a href="https://argdeveloper.vercel.app" target="_blank" rel="noopener noreferrer">
                            <button className='bg-slate-900 bg-opacity-20 font-bold py-3 rounded-md w-screen max-w-xs'>
                                Ingresa a nuestro Discord (✿◡‿◡)
                            </button>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center mt-4 md:mt-0'>
                    <img className='w-32 md:w-48 lg:w-60 max-w-full' src="/logoB.png" alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default Sobre;

export { Sobre };
