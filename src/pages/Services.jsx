import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      desc: 'We build blazing-fast, SEO-friendly websites using React, Node.js, Bootstrap, and Tailwind.',
    },
    {
      title: 'Mobile Applications',
      desc: 'High-performance Android & iOS apps built with Flutter & Firebase from a single codebase.',
    },
    {
      title: 'UI/UX Design',
      desc: 'Crafting visually stunning, intuitive interfaces that drive user engagement.',
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Secure and scalable cloud deployment with CI/CD, Docker, and infrastructure automation.',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <style>{`
        .services-section {
          padding: 4rem 0;
          background-color: var(--bs-body-bg);
          color: var(--bs-body-color);
        }

        .services-heading {
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--bs-heading-color, #f8f9fa);
        }

        .highlight {
          color: #0d6efd;
        }

        .service-card {
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          background-color: #ffffff;
          transition: all 0.3s ease;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px rgba(13, 110, 253, 0.2);
        }
          .services-heading {
  color:rgb(17, 17, 18) !important;
}


        .service-card h5 {
          color: #0d6efd;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: #333;
          font-size: 1.05rem;
        }

        @media (prefers-color-scheme: dark) {
          .services-section {
            background-color: #0d1117;
            color: #c9d1d9;
          }

          .services-heading {
            color: #f0f6fc;
          }

          .service-card {
            background-color: #161b22;
            border: 1px solid #30363d;
          }

          .service-card p {
            color: #c9d1d9;
          }
        }

        @media (max-width: 768px) {
          .services-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="services-section">
        <div className="container">
          <h2 className="text-center mb-5 services-heading" data-aos="fade-down">
            Our <span className="highlight">Services</span>
          </h2>

          <div className="row g-4">
            {services.map((s, i) => (
              <div
                className="col-sm-6 col-lg-3"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="service-card shadow-sm">
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
