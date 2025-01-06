'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WordPressCoursePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="relative h-screen bg-gradient-to-r from-purple-700 via-blue-600 to-purple-600 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/wordpress.png')" }}
        ></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500">
              Master WordPress
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Build stunning websites and blogs effortlessly with the most popular content management system on the web.
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
            Why Learn WordPress?
          </motion.h2>
          <p className="text-lg font-light mb-12">
            WordPress powers over 40% of the web. Whether you're creating a personal blog, an online store, or a corporate website, WordPress makes it easy and efficient.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Easy to Use',
                description:
                  'WordPress’s intuitive interface makes website creation accessible to everyone.',
              },
              {
                title: 'Customizable Design',
                description:
                  'Use thousands of themes and plugins to create unique, professional websites.',
              },
              {
                title: 'No Coding Required',
                description:
                  'Build powerful websites without writing a single line of code.',
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
      <section className="py-16 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What You’ll Learn</h2>
          <p className="text-lg font-light mb-12">
            From setting up WordPress to customizing themes and managing content, gain all the skills you need to create professional websites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Installing and Setting Up WordPress',
              'Understanding the WordPress Dashboard',
              'Customizing Themes and Templates',
              'Using Plugins for Advanced Features',
              'Creating Pages, Posts, and Menus',
              'Optimizing Your Website for SEO',
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
                question: 'Do I need any prior experience with websites?',
                answer:
                  'No, this course starts from the basics and guides you through every step of the process.',
              },
              {
                question: 'Can I create an e-commerce site with WordPress?',
                answer: 'Absolutely! You’ll learn how to use WooCommerce to build online stores.',
              },
              {
                question: 'Do I need to know coding?',
                answer:
                  'No coding skills are required! However, we’ll touch on basic HTML and CSS for advanced customizations.',
              },
              {
                question: 'Will I learn about website hosting?',
                answer:
                  'Yes, we’ll cover how to choose a hosting provider and set up your WordPress site.',
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
          <h2 className="text-4xl font-bold mb-6">Start Building Stunning Websites</h2>
          <p className="text-lg font-light mb-8">
            Enroll now and learn to create professional, user-friendly websites with WordPress!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
