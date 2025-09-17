// data/products.ts

import type { Product } from "@/components/home/ProductCard";

export const products: Product[] = [
  {
    id: "1",
    title: "Baby Diaper Changing",
    category: "BABY DEALS",
    image:
      "https://images.pexels.com/photos/6393201/pexels-photo-6393201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    originalPrice: 55.9,
    salePrice: 50.31,
    discount: 10,
    isFavorite: true,
  },
  {
    id: "2",
    title: "Delta Children Disney Princess Plastic Toddler Canopy Bed, Pink",
    category: "BABY DEALS",
    image:
      "https://images-cdn.ubuy.co.in/651a12eb51aae3306d167616-disney-princess-kids-plastic-storage.jpg",
    originalPrice: 85.2,
    salePrice: 74.98,
    discount: 12,
    isFavorite: false,
  },
  {
    id: "3",
    title: "Disney/Pixar Cars Lightning McQueen Toddler-To-Twin Bed",
    category: "BEST SELLERS",
    image:
      "https://images-cdn.ubuy.co.in/64df3ca444b11d1a7a782242-disney-pixar-cars-lightning-mcqueen.jpg",
    originalPrice: 419.99,
    salePrice: 356.99,
    discount: 15,
    isFavorite: true,
  },
  {
    id: "4",
    title: "Fisher-Price Tissue Fun Activity Cube Baby Sensory Crinkle Toys",
    category: "BABY TOYS",
    image:
      "https://m.media-amazon.com/images/I/61BdOIq+jCL._UF894,1000_QL80_.jpg",
    originalPrice: 15.0,
    salePrice: 13.2,
    discount: 12,
    isFavorite: true,
  },
  {
    id: "5",
    title: "Garanimals Toddler Boys Cargo Short",
    category: "TODDLER CLOTHING",
    image:
      "https://images-cdn.ubuy.co.in/635291cf37d35009a05875c3-garanimals-baby-and-toddler-boy-cargo.jpg",
    originalPrice: 12.0,
    salePrice: 9.51,
    discount: 19,
    isFavorite: false,
  },
  {
    id: "6",
    title: "Hudson Baby Infant Boy Plush Sleep and Play, Space Adventure",
    category: "BEST SELLERS",
    image:
      "https://images-cdn.ubuy.co.in/635291cf37d35009a05875c3-garanimals-baby-and-toddler-boy-cargo.jpg",
    originalPrice: 16.99,
    salePrice: 15.29,
    discount: 10,
    isFavorite: false,
  },
  {
    id: "7",
    title: "Little Star Organic Baby Boy 2 Pk Rompers, Size Newborn",
    category: "TODDLER CLOTHING",
    image: "https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg",
    originalPrice: 18.0,
    salePrice: 16.2,
    discount: 10,
    isFavorite: false,
  },
  {
    id: "8",
    title: "Pamo Babe Unisex Bassinet Nursery Center Flat Play Yard Crib",
    category: "BEST SELLERS",
    image: "https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg",
    originalPrice: 199.99,
    salePrice: 169.99,
    discount: 15,
    isFavorite: false,
  },
];
