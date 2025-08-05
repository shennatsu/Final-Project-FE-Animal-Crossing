'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Recipe = {
  name: string;
  image_url: string;
    sell: number;
  buy: { price: number; currency: string }[];
  materials: { name: string; count: number }[];
};

export default function RecipesPage() {
  const [data, setData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.nookipedia.com/nh/recipes', {
      headers: {
        'X-API-KEY': '9ab89780-e3e8-4435-bc32-a7567863cce5',
      },
    })
      .then((res) => res.json())
      .then((recipes) => {
        setData(recipes);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Crafting Recipes</h1>

      {loading ? (
        <p className="text-center">Loading recipes...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data.slice(0, 50).map((recipe) => (
            <div
              key={recipe.name}
              className="bg-white text-black rounded-lg shadow p-4 text-center hover:scale-105 transition"
            >
              <Image
                src={recipe.image_url}
                alt={recipe.name}
                width={200}
                height={200}
                className="mx-auto rounded"
              />
              <h2 className="mt-2 font-semibold text-lg">{recipe.name}</h2>
              <p className="text-sm text-gray-700">
                Requires:{' '}
                {recipe.materials?.length > 0
                  ? recipe.materials.map((m) => `${m.count}x ${m.name}`).join(', ')
                  : '—'}
              </p>
              <p className="text-xs italic text-gray-500 mt-1">
               Sell: {recipe.sell ? `${recipe.sell} Bells` : '—'}<br />
               Buy: {recipe.buy?.[0]?.price ? `${recipe.buy[0].price} Bells` : '—'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
