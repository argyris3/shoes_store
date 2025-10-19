'use client';

import { ShoppingBasket } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const categories = [
  {
    name: 'All',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'all',
  },
  {
    name: 'Nike',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'nike',
  },
  {
    name: 'Adidas',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'adidas',
  },
  {
    name: 'Reebok',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'reebok',
  },
  {
    name: 'Puma',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'puma',
  },
  {
    name: 'Asics',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'asics',
  },
  {
    name: 'Salomon',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'salomon',
  },
  {
    name: 'Under Armour',
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: 'underarmour',
  },
];

const Categories = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', value || 'all');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const selectedCategory = searchParams.get('category');
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-200 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selectedCategory ? 'bg-white' : 'text-gray-500'
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};
export default Categories;
