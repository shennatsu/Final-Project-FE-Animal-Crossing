import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full shadow-md bg-red-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

        <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png" 
                            alt="Asha Page Logo"
                            width={60} 
                            height={0} 
                            className="object-contain"
                        />
                        <span className="text-xl arial font-bold">
                            Animal Crossing Page
                        </span>
                    </Link>


                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white-700 hover:text-gray-300">
                        Home
                        </Link>
                        <Link href="/recipe" className="text-white-700 hover:text-gray-300">
                        Recipe
                        </Link>
                        <Link href="/about" className="text-white-700 hover:text-gray-300">
                        About
                        </Link>
                        <Link href="/villagers" className="text-white-700 hover:text-gray-300">
                        Villagers
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}