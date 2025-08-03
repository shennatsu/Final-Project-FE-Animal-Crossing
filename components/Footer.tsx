import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} AshaAnimalCross. All rights reserved.</p>
        <p className="text-gray-400 mt-2">For more info please concact us.</p>
      </div>
    </footer>
  );
}