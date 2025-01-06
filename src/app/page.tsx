'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function CategoryCard({ name, image, description, slug }: any) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">{name}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <Link
          href={`/${slug}`}
          className="inline-block bg-gradient-to-r from-purple-600 to-purple-400 text-white px-5 py-2 rounded-lg shadow-md hover:from-purple-500 hover:to-purple-300 hover:shadow-lg transition-all"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const categories = [
    {
      id: 1,
      name: 'HTML & CSS',
      image: 'htmlandcss.webp',
      description: 'Master the fundamentals of web development.',
      slug: 'html-css',
    },
    {
      id: 2,
      name: 'JavaScript & TypeScript',
      image: '/js-ts.png',
      description: 'Learn JavaScript and its superset TypeScript.',
      slug: 'js-ts',
    },
    {
      id: 3,
      name: 'React & Next.js',
      image: '/reactjs-nextjs.jpg',
      description: 'Build modern web apps with React and Next.js.',
      slug: 'react-next',
    },
    {
      id: 4,
      name: 'Digital Marketing',
      image: '/dm.webp',
      description: 'Understand SEO, PPC, and marketing strategies.',
      slug: 'dm',
    },
    {
      id: 5,
      name: 'Graphic Designing',
      image: '/gd.jpg',
      description: 'Design stunning visuals using modern tools.',
      slug: 'gd',
    },
    {
      id: 6,
      name: 'WordPress',
      image: '/wp.jpg',
      description: 'Create websites effortlessly using WordPress.',
      slug: 'wordpress',
    },
    {
      id: 7,
      name: 'Python Programming',
      image: '/python.webp',
      description: 'Learn Python for web, data, and AI development.',
      slug: 'python',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-yellow-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-extrabold text-purple-900 text-center mb-12">
          Explore Our Courses
        </h1>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
