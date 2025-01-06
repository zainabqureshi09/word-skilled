'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HtmlCssCoursePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="relative h-screen bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-700 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/hc.png')" }}
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
              Master HTML & CSS
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Unlock the power of the web with hands-on learning and real-world projects. Your journey to becoming a web designer starts here!
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
              className="px-6 py-3 bg-transparent border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-purple-700 transition-transform transform hover:scale-105"
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
            Why Learn HTML & CSS?
          </motion.h2>
          <p className="text-lg font-light mb-12">
            HTML and CSS form the foundation of every website. Whether you’re a beginner or looking to refine your skills, this course will guide you step by step to mastery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Build Websites from Scratch',
                description:
                  'Learn how to structure web pages with HTML and style them beautifully with CSS.',
              },
              {
                title: 'Responsive Design',
                description: 'Make your websites look great on all devices with responsive design principles.',
              },
              {
                title: 'Modern CSS Techniques',
                description: 'Master CSS Grid, Flexbox, and animations to create dynamic layouts.',
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
                question: 'Do I need any prior experience?',
                answer:
                  'No, this course is beginner-friendly and covers everything from the basics to advanced concepts.',
              },
              {
                question: 'How long does the course take?',
                answer: 'The course is self-paced, but most students finish it within 6-8 weeks.',
              },
              {
                question: 'Will I receive a certificate?',
                answer: 'Yes, you will receive a certificate of completion after finishing the course.',
              },
              {
                question: 'What projects will I build?',
                answer:
                  'You’ll create multiple projects, including a personal portfolio, a responsive website, and interactive animations.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg font-light mb-8">
            Enroll now to kickstart your web development journey!
          </p>
        
        </motion.div>
      </section>
    </div>
  );
}
