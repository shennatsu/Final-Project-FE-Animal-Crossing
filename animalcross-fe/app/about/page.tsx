import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#fefef0] min-h-screen py-16 px-4">
    {/* Gambar 3 kolom */}
<div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
  <Image 
    src="/images/store1.jpg" 
    width={300} 
    height={200} 
    alt="Store 1" 
    className="rounded-xl shadow-lg max-h-[200px] w-auto object-cover" 
  />
  <Image 
    src="/images/store2.jpg" 
    width={300} 
    height={200} 
    alt="Store 2" 
    className="rounded-xl shadow-lg max-h-[200px] w-auto object-cover" 
  />
  <Image 
    src="/images/store3.jpg" 
    width={300} 
    height={200} 
    alt="Store 3" 
    className="rounded-xl shadow-lg max-h-[200px] w-auto object-cover" 
  />
</div>


      {/* Deskripsi dan elemen dekorasi */}
      <div className="relative bg-white shadow-xl rounded-xl p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-900 mb-4">About this project</h2>
        <p className="text-gray-900">
        Animal Crossing is a social simulation video game series developed and published by Nintendo.
        It was created by Katsuya Eguchi and Hisashi Nogami. This Project is using API from Nookipedia.
        All data pulled from the Nookipedia wiki, the largest community-driven encyclopedia about the series
        </p>

        {/* Elemen dekoratif */}
        <Image
          src="/images/pohon2.png"
          alt="Decor Tree Left"
          width={100}
          height={100}
          className="absolute -left-15 bottom-0 z-1"
        />
        <Image
          src="/images/pohon1.png"
          alt="Decor Tree Right"
          width={100}
          height={100}
          className="absolute -right-18 bottom-0 z-10"
        />
      </div>
    </section>
  );
}
