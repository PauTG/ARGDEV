const Home = () => {
  return (
    <div className="w-auto text-4xl rounded-lg drop-shadow-[0_0_24px_rgba(0,0,0,0.5)] h-auto italic text-center mt-36 text-white">
      <h1 className="text-3xl italic font-bold mb-4">Bienvenidos a nuestra comunidad</h1>
      <img
        src="/logoB.png"
        className="mx-auto mt-14 h-56 w-auto cursor-pointer hover:rotate-12 transition-transform duration-300"
        alt="Logo"
      />
    </div>
  );
};

export default Home;
