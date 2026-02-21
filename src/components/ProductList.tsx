
import { ProductsType } from '@/types';
import React from 'react'
import Categories from './Categories';
import ProductCard from './ProductCard';
import Link from 'next/link';
import Filter from './Filter';
// import Filter from './Filter';
const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Breathable and lightweight t-shirt for daily workouts.",
    description: "The Adidas CoreFit T-Shirt is engineered for comfort and performance. Featuring moisture-wicking fabric and a modern fit, it keeps you cool during intense training sessions or casual outings.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    category: "t-shirts"
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Premium insulated zip-up jacket for cold weather.",
    description: "Stay warm without the bulk with the Puma Ultra Warm Zip. This jacket features advanced thermal insulation and a sleek, athletic design, making it your go-to layer for chilly mornings and outdoor adventures.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    category: "jackets"
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Soft and cozy fleece pullover for ultimate comfort.",
    description: "The Nike Air Essentials Pullover is crafted from premium brushed fleece for a soft, warm feel. With a relaxed fit and iconic Nike Air branding, it's the perfect combination of sporty style and everyday comfort.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    category: "jackets"
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription: "High-flexibility athletic tee with Dri-FIT technology.",
    description: "Move freely with the Nike Dri Flex T-Shirt. Designed with high-stretch fabric and sweat-wicking technology, this tee ensures you stay dry and comfortable through every rep and run.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
    category: "t-shirts"
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription: "Water-resistant fleece jacket for all-weather protection.",
    description: "Under Armour StormFleece technology repels water without sacrificing breathability. This jacket is lightweight, incredibly warm, and perfect for athletes who don't let the weather stop their grind.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
    category: "jackets"
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription: "Iconic sneakers with the largest Air unit for maximum bounce.",
    description: "The Nike Air Max 270 delivers unmatched comfort underfoot. Inspired by Air Max heritage, it features a large Air heel unit and a breathable mesh upper for a modern, athletic look and feel.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
    category: "shoes"
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse ",
    shortDescription: "Responsive running shoes with energy-returning foam.",
    description: "Take your runs to the next level with Nike Ultraboost Pulse. Featuring responsive cushioning and a supportive knit upper, these shoes provide a snug, sock-like fit and incredible energy return with every stride.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    category: "shoes"
  },
  {
    id: 8,
    name: "Levi’s Classic Denim",
    shortDescription: "Timeless denim shirt with a rugged, authentic feel.",
    description: "The Levi’s Classic Denim shirt is a staple for any wardrobe. Made from durable cotton denim, it features a classic button-down design and a versatile fit that only gets better with age.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    category: "accessories"
  },
  {
    id: 9,
    name: "Luxury Leather Handbag",
    shortDescription: "Elegant brown leather square crossbody bag for women.",
    description: "High-quality PU leather square crossbody handbag in brown. Perfect for daily use and special occasions. Features a durable strap and spacious interior.",
    price: 79.9,
    sizes: ["one-size"],
    colors: ["brown"],
    images: { brown: "/products/fashion-pu-leather-square-crossbody-handbag-brown-250126-181.webp" },
    category: "bags"
  },
  {
    id: 10,
    name: "Senior Crossbody Bag",
    shortDescription: "Pure color simple senior women's handbag in green.",
    description: "Simple yet elegant senior women's crossbody handbag in a beautiful green shade. Lightweight and stylish, ideal for modern professionals.",
    price: 64.9,
    sizes: ["one-size"],
    colors: ["green"],
    images: { green: "/products/pure-color-simple-senior-womens-crossbody-handbag-green-250126-325.webp" },
    category: "bags"
  },
  {
    id: 11,
    name: "Designer Chain Handbag",
    shortDescription: "Elegant purple PU leather designer handbag with chain.",
    description: "Women's PU leather designer crossbody chain handbag in purple. Features a sophisticated look with a metallic chain strap and high-end finish.",
    price: 89.9,
    sizes: ["one-size"],
    colors: ["purple"],
    images: { purple: "/products/women-pu-leather-designer-crossbody-chain-handbag-purple-250126-538.webp" },
    category: "bags"
  },
  {
    id: 12,
    name: "Classic White Chain Bag",
    shortDescription: "Timeless white designer crossbody chain handbag.",
    description: "Classic white designer crossbody chain handbag for a clean and elegant look. Made from premium PU leather with a sleek chain detail.",
    price: 54.9,
    sizes: ["one-size"],
    colors: ["white"],
    images: { white: "/products/women-pu-leather-designer-crossbody-chain-handbag-white-250126-545.webp" },
    category: "bags"
  },
  {
    id: 13,
    name: "Classic Black Fashion Bag",
    shortDescription: "Sophisticated black leather handbag with gold accents.",
    description: "Elegant and versatile black leather handbag featuring premium gold hardware and a 'FASHION & BAGS' designer logo. Perfect for professional and formal settings.",
    price: 84.5,
    sizes: ["one-size"],
    colors: ["black"],
    images: { black: "/products/cf07750ba1235b28e16e121d716b13d9.jpg" },
    category: "bags"
  },
  {
    id: 14,
    name: "Michael Kors Inspired Tote",
    shortDescription: "Elegant textured tote bag with MK pendant.",
    description: "Stylish and spacious textured tote bag with black handles and a signature MK inspired pendant. Perfect for summer outings and daily essentials.",
    price: 72.9,
    sizes: ["one-size"],
    colors: ["beige"],
    images: { beige: "/products/e2819913c5e1ceab1a1ee33aee864885.jpg" },
    category: "bags"
  },
  {
    id: 15,
    name: "Urban Street Sneakers",
    shortDescription: "Modern and stylish urban sneakers for daily wear.",
    description: "These urban street sneakers combine comfort with a contemporary design. Featuring a durable sole and breathable panels, they are perfect for exploring the city in style.",
    price: 89.9,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["white", "black"],
    images: { white: "/products/shoes1.jpg" },
    category: "shoes"
  },
  {
    id: 16,
    name: "Classic Sport Running",
    shortDescription: "High-performance running shoes for athletes.",
    description: "Designed for peak performance, these classic sport running shoes offer superior cushioning and support. The lightweight construction ensures maximum speed and comfort.",
    price: 74.5,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["red", "blue"],
    images: { red: "/products/shoes2.webp" },
    category: "shoes"
  },
  {
    id: 17,
    name: "Breathable Mesh Runners",
    shortDescription: "Lightweight and breathable shoes for maximum comfort.",
    description: "Stay cool and comfortable with these breathable mesh runners. The mesh upper provides excellent ventilation, making them ideal for long runs or hot weather.",
    price: 65.0,
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["gray", "black"],
    images: { gray: "/products/shoes3.webp" },
    category: "shoes"
  },
  {
    id: 18,
    name: "Premium Leather Loafers",
    shortDescription: "Elegant and sophisticated leather loafers.",
    description: "Add a touch of sophistication to your outfit with these premium leather loafers. Crafted from high-quality leather, they offer a perfect blend of style and comfort for formal occasions.",
    price: 95.0,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["brown", "black"],
    images: { brown: "/products/shoes4.jpg" },
    category: "shoes"
  },
  {
    id: 19,
    name: "Midnight Bloom Perfume",
    shortDescription: "A captivating floral scent for evening elegance.",
    description: "Midnight Bloom offers a rich blend of nocturnal jasmine and dark vanilla. This sophisticated fragrance is designed for those who want to leave a lasting impression at any evening event.",
    price: 45.0,
    sizes: ["50ml", "100ml"],
    colors: ["clear"],
    images: { clear: "/products/Perfume1.jpg" },
    category: "perfumes"
  },
  {
    id: 20,
    name: "Ocean Breeze Eau de Parfum",
    shortDescription: "Refresing and crisp scent inspired by the sea.",
    description: "Experience the freshness of the ocean with every spray. Ocean Breeze features notes of sea salt, citrus, and light musk, making it the perfect daily fragrance for an active lifestyle.",
    price: 38.5,
    sizes: ["30ml", "50ml", "100ml"],
    colors: ["clear"],
    images: { clear: "/products/Perfume2.jpg" },
    category: "perfumes"
  },
  {
    id: 21,
    name: "Velvet Oud Collection",
    shortDescription: "Luxurious and woody fragrance with deep oud notes.",
    description: "The Velvet Oud Collection is a masterpiece of oriental perfumery. It combines precious oud wood with spicy amber and sweet rose for a truly luxurious and warm sensory experience.",
    price: 85.0,
    sizes: ["100ml"],
    colors: ["clear"],
    images: { clear: "/products/Perfume3.jpg" },
    category: "perfumes"
  },
  {
    id: 22,
    name: "Golden Amber Essence",
    shortDescription: "Warm and inviting amber scent with a hint of spice.",
    description: "Golden Amber Essence radiates warmth and comfort. Its inviting blend of amber, cinnamon, and vanilla creates a cozy yet elegant atmosphere that lingers beautifully throughout the day.",
    price: 52.0,
    sizes: ["50ml", "100ml"],
    colors: ["clear"],
    images: { clear: "/products/Perfume4.jpg" },
    category: "perfumes"
  },
  {
    id: 24,
    name: "Secret Garden Mist",
    shortDescription: "Light and airy floral mist for a touch of nature.",
    description: "Transport yourself to a blooming paradise with Secret Garden Mist. This light and airy fragrance features notes of peony, lily of the valley, and fresh green leaves, perfect for spring and summer days.",
    price: 29.9,
    sizes: ["100ml", "200ml"],
    colors: ["clear"],
    images: { clear: "/products/Perfume6.jpg" },
    category: "perfumes"
  },
];

const ProductList = ({ category, params }: { category: string, params: "homepage" | "products" }) => {
  const filteredProducts = category && category !== "all"
    ? products.filter(p => p.category === category)
    : products;

  return (
    <div className='w-full'>

      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
      <Link href={category ? `/products/?category=${category}` : "/products"} className='flex justify-end mt-4 underline text-sm text-gray-500'

      >View all products</Link>
    </div>
  )
}

export default ProductList
