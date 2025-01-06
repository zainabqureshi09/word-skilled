'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PythonCoursePage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="relative h-screen bg-gradient-to-r from-purple-600 via-teal-500 to-blue-700 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/python.png')" }}
        ></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-600 to-teal-400">
              Master Python Programming
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Learn Python with hands-on projects and real-world applications. Your journey to becoming a Python expert starts here!
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
              className="px-6 py-3 bg-transparent border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-teal-700 transition-transform transform hover:scale-105"
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
            Why Learn Python?
          </motion.h2>
          <p className="text-lg font-light mb-12">
            Python is one of the most versatile and in-demand programming languages. This course will guide you from the basics to advanced concepts, unlocking endless possibilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Beginner to Advanced',
                description:
                  'Start from the basics and advance to building full-scale applications and automations.',
              },
              {
                title: 'Real-World Applications',
                description: 'Learn Python for web development, data science, and automation.',
              },
              {
                title: 'Hands-On Projects',
                description: 'Build projects like calculators, data visualizations, and more.',
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
                question: 'Is this course suitable for beginners?',
                answer:
                  'Absolutely! This course is designed for beginners and gradually moves to advanced concepts.',
              },
              {
                question: 'What can I do with Python?',
                answer:
                  'You can develop web applications, automate tasks, analyze data, and even work on AI/ML projects.',
              },
              {
                question: 'How long will it take to complete?',
                answer:
                  'The course is self-paced, but most students finish within 6-10 weeks depending on their schedule.',
              },
              {
                question: 'Are there projects included?',
                answer:
                  'Yes, there are several projects, including data analysis with pandas, web scraping, and a Flask web app.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
          <h2 className="text-4xl font-bold mb-6">Start Your Python Journey</h2>
          <p className="text-lg font-light mb-8">
            Enroll now and become proficient in one of the most popular programming languages!
          </p>
        
        </motion.div>
      </section>
    </div>
  );
}
