import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white py-24">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black">
            Welcome to Animal Crossing!
          </h1>
          <button className="bg-blue-500 font-bold text-5xl py-3 px-8 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg">
            Get Started Now
          </button>



          
        </div>
      </div>
    </section>
    
  );
  
}
