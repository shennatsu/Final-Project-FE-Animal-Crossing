import Image from 'next/image';
import Link from 'next/link'; 

type Villager = {
  name: string;
  image_url: string;
  species: string;
  personality: string;
};

type Props = {
  villagers: Villager[];
};

export default function VillagerList({ villagers }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {villagers.map((v) => (
        // Disini pake encodeURIComponent biar bisa memastikan nama dengan spasi (contoh: "Agent S") berfungsi di URL
        <Link href={`/villagers/${encodeURIComponent(v.name)}`} key={v.name}>
          <div className="bg-white rounded-lg shadow p-4 text-center h-full cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition-all duration-200">
            <Image
              src={v.image_url}
              alt={v.name}
              width={150}
              height={150}
              className="mx-auto rounded"
            />
            <h2 className="mt-2 font-semibold text-lg text-gray-800">{v.name}</h2>
            <p className="text-sm text-gray-500">{v.species} - {v.personality}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}