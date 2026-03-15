import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  color: string;
  sizes: string[];
  image: string;
  description: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Obsidian Oversized Hoodie",
    price: 89,
    category: "Hoodies",
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    image: product1,
    description: "Premium heavyweight cotton hoodie with dropped shoulders and a relaxed oversized fit. Perfect for layering.",
    isNew: true,
    isTrending: true,
  },
  {
    id: "2",
    name: "Desert Cargo Pants",
    price: 120,
    category: "Pants",
    color: "Beige",
    sizes: ["S", "M", "L", "XL"],
    image: product2,
    description: "Utilitarian cargo pants crafted from durable cotton twill with multiple pockets and tapered leg.",
    isTrending: true,
  },
  {
    id: "3",
    name: "Essential Tee — Bone",
    price: 45,
    category: "T-Shirts",
    color: "White",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product3,
    description: "Ultra-soft pima cotton tee in our signature relaxed cut. A wardrobe foundation piece.",
    isNew: true,
  },
  {
    id: "4",
    name: "Military Bomber Jacket",
    price: 195,
    category: "Jackets",
    color: "Olive",
    sizes: ["S", "M", "L", "XL"],
    image: product4,
    description: "Classic bomber silhouette reimagined with modern proportions. Water-resistant nylon shell with satin lining.",
    isTrending: true,
  },
  {
    id: "5",
    name: "Shadow Slim Joggers",
    price: 75,
    category: "Pants",
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    image: product1,
    description: "Tapered joggers in technical fleece with zip pockets and ribbed ankle cuffs.",
  },
  {
    id: "6",
    name: "Canvas Overshirt",
    price: 110,
    category: "Jackets",
    color: "Beige",
    sizes: ["S", "M", "L", "XL"],
    image: product2,
    description: "Heavyweight canvas overshirt with chest pockets and snap closures. A transitional essential.",
    isNew: true,
  },
  {
    id: "7",
    name: "Midnight Graphic Tee",
    price: 55,
    category: "T-Shirts",
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product3,
    description: "Premium cotton tee featuring exclusive Velvora graphic print. Limited drop.",
  },
  {
    id: "8",
    name: "Terrain Windbreaker",
    price: 165,
    category: "Jackets",
    color: "Olive",
    sizes: ["S", "M", "L"],
    image: product4,
    description: "Lightweight packable windbreaker with hidden hood and reflective detailing.",
    isTrending: true,
  },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Pants", "Jackets"];
export const colors = ["All", "Black", "White", "Beige", "Olive"];
export const sizes = ["XS", "S", "M", "L", "XL"];
