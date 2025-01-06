'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DigitalMarketingCoursePage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="relative h-screen bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/digital.png')" }}
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
              Master Digital Marketing
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Learn SEO, PPC, social media, and content marketing with real-world projects. Take your marketing skills to the next level!
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
              className="px-6 py-3 bg-transparent border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-indigo-700 transition-transform transform hover:scale-105"
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
            Why Choose Digital Marketing?
          </motion.h2>
          <p className="text-lg font-light mb-12">
            Digital marketing is the backbone of modern businesses. This course equips you with essential tools and strategies to thrive in the competitive online marketplace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Search Engine Optimization (SEO)',
                description:
                  'Learn how to optimize websites to rank higher on search engines and attract organic traffic.',
              },
              {
                title: 'Social Media Marketing',
                description:
                  'Master the art of engaging audiences on platforms like Instagram, Facebook, and LinkedIn.',
              },
              {
                title: 'Pay-Per-Click (PPC) Advertising',
                description:
                  'Run successful ad campaigns on platforms like Google Ads to maximize ROI.',
              },
              {
                title: 'Email Marketing Strategies',
                description:
                  'Understand how to create targeted email campaigns that convert leads into customers.',
              },
              {
                title: 'Content Marketing',
                description:
                  'Develop strategies for creating and promoting engaging content to drive brand awareness.',
              },
              {
                title: 'Analytics & Reporting',
                description:
                  'Analyze campaign performance using tools like Google Analytics and refine strategies.',
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
                  'Yes, this course is designed for beginners and provides a step-by-step approach to mastering digital marketing.',
              },
              {
                question: 'What tools will I learn?',
                answer:
                  'You’ll work with tools like Google Analytics, Google Ads, Facebook Ads Manager, Mailchimp, and more.',
              },
              {
                question: 'Will there be real-world projects?',
                answer:
                  'Absolutely! You’ll run ad campaigns, analyze real data, and create marketing strategies for real-world scenarios.',
              },
              {
                question: 'How long will it take to complete?',
                answer:
                  'Most students complete the course within 8-10 weeks, but it’s self-paced so you can learn at your own speed.',
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
          <h2 className="text-4xl font-bold mb-6">Start Your Digital Marketing Journey</h2>
          <p className="text-lg font-light mb-8">
            Enroll now and become an expert in digital marketing with hands-on experience!
          </p>
        
        </motion.div>
      </section>
    </div>
  );
}
