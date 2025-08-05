'use client';

import { useState, useMemo } from 'react';
import Search from '@/components/molecules/SearchBar'; // Pastikan path ini benar
import VillagerList from '@/components/organisms/VillagerList'; // Pastikan path ini benar

type Villager = {
  name: string;
  image_url: string;
  species: string;
  personality: string;
};

type Props = {
  initialVillagers: Villager[];
};

export default function VillagerClientPage({ initialVillagers }: Props) {
  const [search, setSearch] = useState('');

  
  const filteredVillagers = useMemo(() => {
    if (!search) {
      return initialVillagers; // Jika tidak ada keyword, tampilkan semua
    }
    return initialVillagers.filter((villager) =>
      villager.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, initialVillagers]);

  return (
    <>
      <div className="mb-8 max-w-md mx-auto">
        {/* Perbaiki typo: placeholde -> placeholder & vilagger -> villager */}
        <Search search={search} setSearch={setSearch} />
      </div>
      
      {/* Tampilkan daftar villager yang sudah difilter */}
      <VillagerList villagers={filteredVillagers} />
    </>
  );
}