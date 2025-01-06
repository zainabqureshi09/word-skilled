'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ReactNextCoursePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="relative h-screen bg-gradient-to-r from-green-700 via-blue-600 to-purple-500 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/reactjs-nextjs.jpg')" }}
        ></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-500 to-purple-400">
              Master React.js & Next.js
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Build fast, scalable, and SEO-friendly web applications with the power of React and Next.js.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="#enroll"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Enroll Now
            </Link>
            <Link
              href="#demo"
              className="px-6 py-3 bg-transparent border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-transform transform hover:scale-105"
            >
              Free Demo
            </Link>
          </div>
        </motion.div>
      </header>

      {/* About the Course */}
      <section className="py-16 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Why Learn React.js & Next.js?
          </motion.h2>
          <p className="text-lg font-light mb-12">
            React is the most popular library for building interactive user interfaces, while Next.js takes it further with server-side rendering and static site generation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Component-Based Design',
                description:
                  'Learn how to create reusable components to build scalable UIs.',
              },
              {
                title: 'Server-Side Rendering',
                description:
                  'Understand how Next.js enhances React apps with server-side rendering (SSR).',
              },
              {
                title: 'SEO Optimization',
                description:
                  'Leverage Next.js features for improved search engine rankings.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You’ll Learn */}
      <section className="py-16 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What You’ll Learn</h2>
          <p className="text-lg font-light mb-12">
            Master React and Next.js with hands-on projects and real-world scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'React Basics: JSX, Props, and State',
              'React Hooks: useEffect, useState, and Custom Hooks',
              'Component Lifecycle and Best Practices',
              'Next.js Basics: Pages, Routing, and APIs',
              'Static Site Generation (SSG) and SSR',
              'Deploying and Optimizing Next.js Apps',
            ].map((topic, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-semibold">{topic}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Do I need prior knowledge of JavaScript?',
                answer:
                  'Yes, a basic understanding of JavaScript is required to get the most out of this course.',
              },
              {
                question: 'Will I learn about Next.js APIs?',
                answer: 'Yes, this course covers building and consuming APIs with Next.js.',
              },
              {
                question: 'What kind of projects will I build?',
                answer:
                  'You’ll build interactive React apps, SEO-optimized Next.js websites, and a portfolio-ready project.',
              },
              {
                question: 'Can I deploy my projects?',
                answer:
                  'Yes, we’ll guide you through deploying your Next.js apps to platforms like Vercel or Netlify.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="enroll" className="py-16 px-6 text-gray-800 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Start Building Next-Gen Applications</h2>
          <p className="text-lg font-light mb-8">
            Enroll now and gain the skills to create fast, scalable, and interactive web applications!
          </p>
       
        </motion.div>
      </section>
    </div>
  );
}
