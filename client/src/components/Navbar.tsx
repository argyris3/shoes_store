import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Bell, Home, ShoppingBag } from 'lucide-react';
import ShoppingCartIcon from './ShoppingCartIcon';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4 ">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Shoes_Store" width={66} height={66} className="w-11 h-11 md:w-15 md:h-15" />
        <p className="text-md font-medium hidden md:block tracking-wider">Shoes_Store</p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};
export default Navbar;
