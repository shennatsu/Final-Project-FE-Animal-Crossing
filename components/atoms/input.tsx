'use clint';

type InputProps = {
    placeholde?: string;
    value: string;
    onChange: (value: string) => void;
};

export default function Input({ placeholde, value, onChange }: InputProps) {
    return (
        <input
            type="text"
            placeholder={placeholde}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
    );
}