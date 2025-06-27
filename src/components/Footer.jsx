import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <style>{`
        footer {
          background-color: #121212;
          color: #ccc;
          padding: 3rem 0 2rem;
          margin-top: 4rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        footer a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        footer a:hover {
          color: #0d6efd; /* bootstrap primary blue */
          text-decoration: underline;
        }
        h5, h6 {
          color: #fff;
          margin-bottom: 1rem;
        }
        ul {
          padding-left: 0;
          list-style: none;
        }
        ul li {
          margin-bottom: 0.5rem;
        }
        .social-icons a {
          font-size: 1.5rem;
          margin-right: 1.2rem;
          display: inline-block;
          color: #ccc;
        }
        .social-icons a:hover {
          color: #0d6efd;
        }
        hr {
          border-color: #333;
          margin: 2rem 0 1.5rem;
        }
        .copyright {
          font-size: 0.85rem;
          text-align: center;
          color: #777;
        }

        /* Responsive spacing */
        @media (max-width: 576px) {
          footer {
            padding: 2rem 1rem 1rem;
          }
          .social-icons a {
            font-size: 1.3rem;
            margin-right: 1rem;
          }
        }
      `}</style>

      <footer>
        <Container>
          <Row>
            <Col md={4} sm={12} data-aos="fade-up" data-aos-delay="0">
              <h5>About Logictech Studio</h5>
              <p style={{ maxWidth: '320px', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Logictech Studio is a software development company specializing in web, mobile, and cloud solutions, delivering high-quality products to clients worldwide.
              </p>
            </Col>

            <Col md={2} sm={6} xs={12} data-aos="fade-up" data-aos-delay="100">
              <h6>Quick Links</h6>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </Col>

            <Col md={3} sm={6} xs={12} data-aos="fade-up" data-aos-delay="200">
              <h6>Contact</h6>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                Email: <a href="mailto:info@logictechstudio.com">info@logictechstudio.com</a>
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                Address: 123 Software St, Tech City, USA
              </p>
            </Col>

            <Col md={3} sm={12} data-aos="fade-up" data-aos-delay="300">
              <h6>Follow Us</h6>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </Col>
          </Row>

          <hr />

          <p className="copyright">
            &copy; {new Date().getFullYear()} Logictech Studio. All rights reserved.
          </p>
        </Container>

        {/* Bootstrap Icons CDN for social icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </footer>
    </>
  );
}
