// components/EcommerceBanner.tsx
import Image from "next/image";

interface BannerProps {
    title: string;
    subtitle?: string;
    ctaText: string;
    ctaLink: string;
    image: string;
}

export default function Banner({
    title,
    subtitle,
    ctaText,
    ctaLink,
    image,
}: BannerProps) {
    return (
        <section className="relative w-full h-auto mb-4 rounded-lg overflow-hidden">
            <div className="relative w-full h-[300px]">
                <Image
                    src={image}
                    alt="Banner Image"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
                    {subtitle && <p className="text-white text-lg md:text-xl mt-3">{subtitle}</p>}
                    <a
                        href={ctaLink}
                        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
        </section>

    );
}
