'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JsTsCoursePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="relative h-screen bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-700 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/jsts.png')" }}
        ></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
              Master JavaScript & TypeScript
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Build powerful, scalable, and interactive web applications with the most versatile programming languages on the web.
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
            Why Learn JavaScript & TypeScript?
          </motion.h2>
          <p className="text-lg font-light mb-12">
            JavaScript is the backbone of modern web applications, while TypeScript adds type safety for scalable projects. Together, they form a powerful duo for web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Master JavaScript Fundamentals',
                description:
                  'Understand variables, functions, loops, and essential concepts.',
              },
              {
                title: 'Advanced JavaScript Concepts',
                description:
                  'Learn ES6+ features, closures, promises, async/await, and more.',
              },
              {
                title: 'TypeScript Essentials',
                description:
                  'Add type safety and scalability to your JavaScript projects.',
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

      {/* FAQs Section */}
      <section className="py-16 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Do I need prior programming experience?',
                answer:
                  'No, this course starts from the basics and progresses to advanced concepts.',
              },
              {
                question: 'How long does it take to complete?',
                answer: 'The course is self-paced, but most students finish it in 8-10 weeks.',
              },
              {
                question: 'What projects will I work on?',
                answer:
                  'You’ll create interactive web applications, a type-safe project with TypeScript, and more.',
              },
              {
                question: 'Do I get a certificate?',
                answer:
                  'Yes, you’ll receive a certificate of completion after finishing the course.',
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Scalable Applications?</h2>
          <p className="text-lg font-light mb-8">
            Enroll now to unlock your potential as a web developer!
          </p>
         
        </motion.div>
      </section>
    </div>
  );
}
