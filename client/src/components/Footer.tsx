import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col gap-2 md:gap-0 md:justify-between  items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center ">
          <Image src="/logo.png" alt="Shoes_Store" width={66} height={66} />
        </Link>
        <p className="text-sm text-gray-400">@Argyrios Web_Dev</p>
        <p className="text-sm text-gray-400">All rights reserved...</p>
      </div>
      <div className="flex flex-col gap-3 text-sm  text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms Of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-3 text-sm  text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col gap-3 text-sm  text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
};
export default Footer;
