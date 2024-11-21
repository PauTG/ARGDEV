const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-xl mx-auto text-white">
      <h1 className="text-3xl sm:text-7xl italic font-bold mb-6 text-center">Bienvenidos</h1>
      <img
        src="/logoB.png"
        className="h-56 w-auto cursor-pointer hover:rotate-12 transition-transform duration-300"
        alt="Logo"
      />
    </div>
  );
};

export default Home;
