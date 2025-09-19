// data/products.ts

import type { Product } from "@/components/home/ProductCard";

export const products: Product[] = [
  {
    id: "1",
    title: "Baby Diaper Changing",
    category: "BABY DEALS",
    image:
      "https://cdn.pixabay.com/photo/2015/12/05/23/38/nursery-1078923_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2016/05/04/11/25/giraffe-1371203_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2020/10/03/13/13/baby-5623513_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2020/04/21/06/03/dream-5071192_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2020/05/19/05/28/do-not-share-a-toy-5189298_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2017/11/06/15/50/basket-2924001_1280.jpg",
    originalPrice: 16.99,
    salePrice: 15.29,
    discount: 10,
    isFavorite: false,
  },
  {
    id: "7",
    title: "Little Star Organic Baby Boy 2 Pk Rompers, Size Newborn",
    category: "TODDLER CLOTHING",
    image:
      "https://cdn.pixabay.com/photo/2020/05/19/05/28/do-not-share-a-toy-5189298_1280.jpg",
    originalPrice: 18.0,
    salePrice: 16.2,
    discount: 10,
    isFavorite: false,
  },
  {
    id: "8",
    title: "Pamo Babe Unisex Bassinet Nursery Center Flat Play Yard Crib",
    category: "BEST SELLERS",
    image:
      "https://cdn.pixabay.com/photo/2014/07/25/06/06/baby-401469_1280.jpg",
    originalPrice: 199.99,
    salePrice: 169.99,
    discount: 15,
    isFavorite: false,
  },
];
