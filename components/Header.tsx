import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

        <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png" 
                            alt="Asha Page Logo"
                            width={40} 
                            height={40} 
                        />
                        <span className="text-xl arial font-bold">
                            Animal Crossing Page
                        </span>
                    </Link>


                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white-700 hover:text-gray-300">
                        Home
                        </Link>
                        <Link href="/" className="text-white-700 hover:text-gray-300">
                        Profiles
                        </Link>
                        <Link href="/" className="text-white-700 hover:text-gray-300">
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