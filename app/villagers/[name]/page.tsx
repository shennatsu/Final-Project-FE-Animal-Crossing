import Image from 'next/image';
import { notFound } from 'next/navigation';

type Villager = {
  name: string;
  image_url: string;
  species: string;
  birthday: string;
  personality: string;
  quote: string;
};

async function getVillager(name: string): Promise<Villager | null> {
  const res = await fetch(`https://api.nookipedia.com/villagers/${name}`, {
    headers: {
      "X-API-KEY": "9ab89780-e3e8-4435-bc32-a7567863cce5"
    }
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function VillagerDetail({ params }: { params: { name: string } }) {
  const villager = await getVillager(params.name);

  if (!villager) return notFound();

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
      <Image
        src={villager.image_url}
        alt={villager.name}
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4 text-center">{villager.name}</h1>
      <p className="text-center text-black mb-2">{villager.species} - {villager.personality}</p>
      <p className="text-center text-sm text-gray-500">Birthday: {villager.birthday}</p>
<blockquote className="mt-4 italic text-center">
  {`"${villager.quote}"`}
</blockquote>
    </div>
  );
}