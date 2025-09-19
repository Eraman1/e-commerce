// components/BrandWeLove.tsx
import Image from "next/image";
import Link from "next/link";

interface Brand {
    name: string;
    image: string;
    link?: string;
}

const brands: Brand[] = [
    { name: "Safety Mart", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/safety-mart" },
    { name: "Parent's Choice", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/parents-choice" },
    { name: "Pampers L.L.C", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/pampers" },
    { name: "NUK Accessories", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/nuk" },
    { name: "Johnson's & Johnson's", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/johnson" },
    { name: "Fisher Price", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/fisher-price" },
    { name: "Evenflo", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/evenflo" },
    { name: "Disney", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/disney" },
    { name: "Bright Star", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/bright-star" },
    { name: "Baby Relax", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/baby-relax" },
    { name: "Baby Einstein", image: "https://cdn.pixabay.com/photo/2016/03/31/22/24/baby-1297017_1280.png", link: "/brands/baby-einstein" },
];

export default function BrandWeLove() {
    return (
        <section className="bg-white rounded-xl shadow p-6 mt-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Brand we love</h2>
                <Link href="/brands" className="text-sm text-teal-500 font-semibold hover:underline">
                    View all brands →
                </Link>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {brands.map((brand, index) => (
                    <Link
                        key={index}
                        href={brand.link || "#"}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105">
                            <Image
                                src={brand.image}
                                alt={brand.name}
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-800">{brand.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
