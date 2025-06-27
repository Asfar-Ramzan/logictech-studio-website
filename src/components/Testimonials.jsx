import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const quotes = [
    {
      name: 'Ayesha Khan',
      role: 'Founder, StyleMart',
      feedback:
        'Logictech Studio brought our e-commerce vision to life beautifully and efficiently. Their team was proactive, communicative, and delivered beyond expectations. Our site now runs smoother than ever, helping us increase sales and customer satisfaction.',
    },
    {
      name: 'James Taylor',
      role: 'CTO, FoodExpress',
      feedback:
        'Amazing team! Fast delivery and top-notch code quality. They understood our complex requirements and implemented a scalable solution that seamlessly integrated with our existing systems. Highly recommended.',
    },
    {
      name: 'Zara Ali',
      role: 'Product Manager, Finovate',
      feedback:
        'Their UI/UX team helped us drastically improve user engagement. The redesign was modern, clean, and user-friendly. We saw a significant increase in retention and positive feedback from our users.',
    },
  ];

  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 4rem 0;
          background-color: var(--bs-body-bg);
          color: var(--bs-body-color);
        }

        .testimonial-heading {
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--bs-heading-color, #f8f9fa);
        }

        .testimonial-card {
          background-color: #ffffff;
          border: 1px solid #e6e6e6;
          border-radius: 1.5rem;
          padding: 2rem;
          transition: transform 0.3s ease;
          font-style: italic;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 30px rgba(13, 110, 253, 0.1);
        }

        .testimonial-card h6 {
          font-weight: 700;
          margin-top: 1rem;
          margin-bottom: 0.2rem;
        }

        .testimonial-card small {
          color: #6c757d;
        }

        @media (prefers-color-scheme: dark) {
          .testimonials-section {
            background-color: #0d1117;
            color: #c9d1d9;
          }

          .testimonial-card {
            background-color: #161b22;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #c9d1d9;
          }

          .testimonial-card small {
            color: #8b949e;
          }

          .testimonial-heading {
            color: #f0f6fc;
          }
        }
          .testimonial-heading {
  color:rgb(0, 0, 0) !important;
}


        @media (max-width: 768px) {
          .testimonial-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="text-center mb-5 testimonial-heading" data-aos="fade-up">
            Reviews
          </h2>
          <div className="row">
            {quotes.map((q, i) => (
              <div
                className="col-md-4 mb-4"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="testimonial-card h-100 shadow-sm">
                  <p className="mb-3">“{q.feedback}”</p>
                  <h6>{q.name}</h6>
                  <small>{q.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
