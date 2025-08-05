import VillagerClientPage from './VillagerClientPage'; // Impor komponen client

type Villager = {
  name: string;
  image_url: string;
  species: string;
  personality: string;
};

// Fungsi fetch data tetap sama
export const dynamic = 'force-dynamic';

async function getData(): Promise<Villager[]> {
  const res = await fetch("https://api.nookipedia.com/villagers", {
    headers: {
      "X-API-KEY": "9ab89780-e3e8-4435-bc32-a7567863cce5"
    }
  });

  if (!res.ok) throw new Error("Failed to fetch villagers");
  return res.json();
}

// Komponen Page sekarang menjadi lebih ringkas
export default async function VillagersPage() {
  const allVillagers = await getData();
  // Anda bisa tetap membatasi jumlah data awal jika mau
  const initialVillagers = allVillagers.slice(0, 80);

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Animal Crossing Villagers
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Find your favorite villager!
      </p>
      
      {/* Render komponen client dan kirim data awal sebagai props */}
      <VillagerClientPage initialVillagers={initialVillagers} />
    </div>
  );
}