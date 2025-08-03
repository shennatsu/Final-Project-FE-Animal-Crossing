// app/villagers/page.tsx
import Image from 'next/image';

type Villager = {
  name: string;
  image_url: string;
  species: string;
  personality: string;
};

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

export default async function VillagersPage() {
  const villagers = await getData();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Animal Crossing Villagers</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {villagers.slice(0, 80).map((villager) => (
          <div key={villager.name} className="bg-white rounded-lg shadow p-4 text-center">
            <Image
              src={villager.image_url}
              alt={villager.name}
              width={150}
              height={150}
              className="mx-auto rounded"
            />
            <h2 className="mt-2 font-semibold text-lg">{villager.name}</h2>
            <p className="text-sm text-black">{villager.species} - {villager.personality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
