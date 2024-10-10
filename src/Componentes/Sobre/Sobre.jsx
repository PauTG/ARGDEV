import { Link } from 'react-router-dom';


function Sobre() {
    return (
        <div className='w-full mt-36 h-96 text-left px-5 flex text-white backdrop-blur-sm'>
            <div className='border border-white rounded-md w-full p-5 h-full flex px-24 items-center md:container md:mx-auto justify-between'>
                <div className='max-w-[900px] flex flex-col gap-5'>
                    <div className='flex flex-col'>
                    <p>Quienes somos</p>
                    <p className='italic'>en Argentina Developer 🇦🇷</p></div>

                    <p className=' text-xl'>
                        Sin mucho pretexto, somos una comunidad orientada al desarrollo IT.
                        Nuestro objetivo es acompañar a los que arrancan en el mundo de la programación, y aprender con ustedes 🤝🏼
                    </p>

                    <div className='flex self-center'>
                        <button className='bg-slate-900 bg-opacity-20 font-bold py-3 rounded-md w-72'>Ingresa a nuestro Discord (✿◡‿◡)</button>
                    </div>
                </div>
                <div>
                <img className='w-70' src="/logoB.png" alt="Logo" /></div>
            </div>
        </div>
    );
}




export { Sobre };