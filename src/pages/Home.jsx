import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Testimonials from '../components/Testimonials';
import OfferingsSection from '../components/OfferingsSection';
import StatsSection from '../components/StatsSection';
import RecentProjects from '../components/RecentProjects';


export default function Home() {
  const images = ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg4.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode,] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, );

  const whatWeDoItems = [
    { icon: 'laptop', title: 'Web Development', desc: 'Modern web apps with React, Vue, and Node.js.' },
    { icon: 'phone', title: 'Mobile Apps', desc: 'Flutter & React Native apps for all devices.' },
    { icon: 'cloud', title: 'Cloud Solutions', desc: 'AWS & Firebase-based secure deployments.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '85vh' }}>
        <div
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            filter: 'brightness(0.5)',
            position: 'absolute',
            inset: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            transition: 'background-image 1s ease-in-out',
          }}
        />
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#0d6efd"
          glarePosition="all"
          scale={1.05}
          style={{
            maxWidth: 700,
            margin: 'auto',
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center p-5 rounded-4"
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              boxShadow: '0 0 20px rgba(13,110,253,0.7)',
            }}
            data-aos="zoom-in"
          >
            <h1 className="display-4 fw-bold">Welcome to Logictech Studio</h1>
            <p className="lead">Crafting Digital Solutions for the Modern World</p>
          </motion.div>
        </Tilt>
      </div>

      {/* Offerings Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <OfferingsSection />
      </motion.div>

      {/* What We Do Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">
          What We Do
        </h2>
        <div className="row text-center">
          {whatWeDoItems.map((item, idx) => (
            <div
              className="col-md-4 mb-4"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <Link
                to={
                  item.title === 'Web Development'
                    ? '/services/web-development'
                    : item.title === 'Mobile Apps'
                    ? '/services/mobile-development'
                    : '/services/cloud-solutions'
                }
                style={{ textDecoration: 'none' }}
              >
                <button
                  type="button"
                  className="btn btn-outline-primary w-100 p-4 h-100 d-flex flex-column align-items-center justify-content-center"
                  style={{ cursor: 'pointer', borderRadius: '12px' }}
                >
                  <i className={`bi bi-${item.icon} fs-1 mb-3`} style={{ color: '#0d6efd' }}></i>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p>{item.desc}</p>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <StatsSection />

      {/* Testimonials with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Testimonials darkMode={darkMode} />
      </motion.div>


      <RecentProjects />




      {/* CTA Section */}
      <section
        className="text-center py-5 bg-primary text-white"
        data-aos="fade-up"
        style={{ position: 'relative' }}
      >
        <motion.h2
          className="mb-3 fw-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Ready to bring your idea to life? Let’s build something great.
        </motion.p>
        <motion.a
          href="/contact"
          className="btn btn-light btn-lg px-4 py-2 mt-3 fw-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </motion.a>
      </section>
    </>
  );
}
