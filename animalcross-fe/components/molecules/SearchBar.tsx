'use client';

import Input from '../atoms/input';

type Props = {
    search: string;
    setSearch: (value: string) => void;
}

export default function Search({ search, setSearch }: Props) {
    return (
        <div className="flex justify-center items-center">
            <Input placeholde="Search vilagger by name..." value={search} onChange={setSearch} />
        </div>
    );
}


