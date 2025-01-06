'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GraphicDesigningCoursePage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="relative h-screen bg-gradient-to-r from-purple-800 via-pink-700 to-red-500 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/graphic.png')" }}
        ></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-red-700 to-pink-700">
              Become a Graphic Design Pro
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Master design principles, tools, and techniques to create stunning visuals that captivate and communicate effectively.
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
            Why Learn Graphic Design?
          </motion.h2>
          <p className="text-lg font-light mb-12">
            Graphic design is the art of creating visual content to communicate ideas. This course will equip you with the skills to craft designs that inspire and engage audiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Learn Design Tools',
                description:
                  'Master industry-standard tools like Adobe Photoshop, Illustrator, and Figma.',
              },
              {
                title: 'Understand Design Principles',
                description:
                  'Get a strong foundation in color theory, typography, and layout design.',
              },
              {
                title: 'Create Professional Projects',
                description:
                  'Work on real-world projects like logos, branding, and social media graphics.',
              },
              {
                title: 'Build Your Portfolio',
                description:
                  'Create a stunning portfolio to showcase your skills and attract clients or employers.',
              },
              {
                title: 'Freelancing Essentials',
                description:
                  'Learn how to market yourself as a designer and start your freelancing journey.',
              },
              {
                title: 'Motion Graphics Basics',
                description:
                  'Get introduced to motion graphics and animation using tools like After Effects.',
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
                question: 'Is this course beginner-friendly?',
                answer:
                  'Yes, this course starts from the basics and gradually moves to advanced design techniques.',
              },
              {
                question: 'What tools will I learn?',
                answer:
                  'You’ll gain hands-on experience with tools like Photoshop, Illustrator, Figma, and After Effects.',
              },
              {
                question: 'What kind of projects will I create?',
                answer:
                  'You’ll design logos, posters, social media graphics, branding packages, and more.',
              },
              {
                question: 'Will I get a certificate?',
                answer:
                  'Yes, you will receive a certificate of completion to showcase your skills.',
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
          <h2 className="text-4xl font-bold mb-6">Start Your Design Journey</h2>
          <p className="text-lg font-light mb-8">
            Enroll now and bring your creative ideas to life with professional graphic design skills!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
