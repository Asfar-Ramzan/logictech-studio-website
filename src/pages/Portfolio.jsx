import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: 'E-commerce Platform',
      desc: 'Built a scalable online store using React and Node.js for a global retailer.',
      delay: 200,
    },
    {
      title: 'Food Delivery App',
      desc: 'Developed a full-stack mobile app for food ordering and tracking using Flutter and Firebase.',
      delay: 300,
    },
    {
      title: 'Finance Dashboard',
      desc: 'Created a real-time analytics dashboard for a fintech startup using React and D3.js.',
      delay: 400,
    },
  ];

  return (
    <>
      <style>{`
        .portfolio-section {
          padding: 4rem 0;
          background-color: var(--bs-body-bg);
          color: var(--bs-body-color);
        }

        .portfolio-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--bs-heading-color, #f8f9fa);
        }
          .portfolio-title {
  color:rgb(0, 0, 0) !important;
}


        .portfolio-subtext {
          font-size: 1.1rem;
          color: var(--bs-secondary-color, #6c757d);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px rgba(13, 110, 253, 0.15);
        }

        .glass-card h5 {
          color: #0d6efd;
        }

        @media (prefers-color-scheme: dark) {
          .portfolio-section {
            background-color: #0d1117;
            color: #c9d1d9;
          }

          .portfolio-subtext {
            color: #8b949e;
          }

          .glass-card {
            background: rgba(22, 27, 34, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .glass-card h5 {
            color: #58a6ff;
          }
        }

        @media (max-width: 768px) {
          .portfolio-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="portfolio-section">
        <div className="container">
          <h2 className="text-center mb-3 portfolio-title" data-aos="fade-up">
            Our Portfolio
          </h2>
          <p className="text-center mb-5 portfolio-subtext" data-aos="fade-up" data-aos-delay="100">
            Explore some of our recent work across various industries and technologies.
          </p>

          <div className="row">
            {projects.map((project, i) => (
              <div
                className="col-md-4 mb-4"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={project.delay}
              >
                <div className="card glass-card h-100 shadow-lg border-0">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
