// app/villagers/[name]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Tipe data untuk detail villager, lebih lengkap dari sebelumnya
type VillagerDetails = {
  name: string;
  url: string;
  image_url: string;
  species: string;
  personality: string;
  gender: string;
  birthday_month: string;
  birthday_day: string;
  sign: string;
  quote: string;
  phrase: string;
};

// Fungsi untuk mengambil data SATU villager berdasarkan nama
async function getVillagerData(name: string): Promise<VillagerDetails | null> {
  const decodedName = decodeURIComponent(name);
  const res = await fetch(`https://api.nookipedia.com/villagers?name=${decodedName}`, {
    headers: {
      "X-API-KEY": "9ab89780-e3e8-4435-bc32-a7567863cce5"
    },
    next: { revalidate: 3600 } 
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data[0] || null;
}

// Komponen halaman detail
export default async function VillagerDetailPage({ params }: { params: { name: string } }) {
  const villager = await getVillagerData(params.name);

  if (!villager) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold">Villager Not Found</h1>
        <Link href="/villagers" className="text-blue-500 hover:underline mt-4 inline-block">
          &larr; Back to all villagers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        <div className="md:w-1/3 p-6 flex-shrink-0">
          <Image
            src={villager.image_url}
            alt={villager.name}
            width={300}
            height={300}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="md:w-2/3 p-6 text-gray-800">
          <h1 className="text-4xl font-bold text-gray-900">{villager.name}</h1>
          <p className="text-xl text-gray-600 mt-1">{villager.species} | {villager.personality} | {villager.gender}</p>
          
          <div className="mt-4 border-t pt-4">
            {/* PERUBAHAN DI SINI */}
            <p className="text-lg italic text-center bg-gray-100 p-3 rounded-md">{`"${villager.quote}"`}</p>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-semibold block">Birthday</span>
              <span>{villager.birthday_month} {villager.birthday_day} ({villager.sign})</span>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <span className="font-semibold block">Catchphrase</span>
              {/* PERUBAHAN DI SINI */}
              <span className="italic">{`"${villager.phrase}"`}</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/villagers" className="text-blue-600 font-semibold hover:underline">
              &larr; Back to Villager List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fungsi untuk generate metadata halaman (judul di tab browser)
export async function generateMetadata({ params }: { params: { name: string } }) {
  const decodedName = decodeURIComponent(params.name);
  return {
    title: `${decodedName} | Animal Crossing Villager`,
  };
}