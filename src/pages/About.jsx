import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          min-height: 100vh;
          padding: 4rem 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: var(--bs-body-bg);
          color: var(--bs-body-color);
        }

        .about-heading {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 3rem;
          text-align: center;
          color: var(--bs-heading-color, #f8f9fa);
        }

        .highlight {
          color: #0d6efd;
        }

        .about-text p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--bs-body-color);
          text-align: justify;
        }
          .about-heading {
  color:rgb(0, 0, 0) !important;
}


        .image-grid img {
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.15);
          transition: transform 0.3s ease;
          cursor: pointer;
          height: 180px;
          object-fit: cover;
          width: 100%;
        }

        .image-grid img:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(13, 110, 253, 0.4);
        }

        @media (max-width: 768px) {
          .about-heading {
            font-size: 2.2rem;
          }
          .image-grid img {
            height: 140px;
          }
        }

        @media (prefers-color-scheme: dark) {
          .about-section {
            background-color: #0d1117;
            color: #c9d1d9;
          }
          .about-heading {
            color: #f0f6fc;
          }
          .about-text p {
            color: #c9d1d9;
          }
        }
      `}</style>

      <section className="about-section">
        <Container>
          <h2 className="about-heading" data-aos="fade-down">
            About <span className="highlight">Logictech Studio</span>
          </h2>

          <Row className="mb-5 align-items-center">
            <Col md={6} data-aos="fade-right" data-aos-delay="100" className="about-text">
              <p>
                <strong>Logictech Studio</strong> is a full-service software house focused on delivering
                innovative, scalable, and user-centric digital products that drive business
                success worldwide. Our expertise spans modern web development, mobile app
                creation, and cloud-native backend systems.
              </p>
              <p>
                We build cutting-edge websites using <strong>React.js</strong> and <strong>Node.js</strong>, styled with <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>,
                ensuring responsive and accessible designs across all devices.
              </p>
              <p>
                For mobile, our <strong>Flutter</strong> and <strong>Firebase</strong> development enables fast, beautiful, and high-performance apps for both <em>Android</em> and <em>iOS</em>.
              </p>
              <p>
                Our backend systems are engineered for security, performance, and scale — supporting complex workflows and integrations with third-party platforms.
              </p>
              <p>
                With a focus on transparency, collaboration, and innovation, Logictech Studio is your trusted partner in digital transformation.
              </p>
            </Col>

            <Col md={6} data-aos="fade-left" data-aos-delay="200">
              <Row className="image-grid g-3">
                {[
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80",
                  "images/app-development-banner_33099-1720.avif",
                ].map((src, i) => (
                  <Col xs={6} key={i}>
                    <Image src={src} alt={`About ${i + 1}`} rounded fluid />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
