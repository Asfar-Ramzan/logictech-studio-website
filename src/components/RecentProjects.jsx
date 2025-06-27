import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const caseStudies = [
  {
    title: 'Academia',
    subtitle: 'Mobile-First – LMS',
    image: '/images/project-academia.jpg',
    content:
      'A learning management system built with mobile-first design in mind, allowing students and instructors to interact seamlessly across devices.',
  },
  {
    title: 'Enterprise',
    subtitle: 'Content Management System',
    image: '/images/project-enterprise.jpg',
    content:
      'A robust CMS enabling businesses to create, manage, and deliver content efficiently with user roles and rich editor support.',
  },
  {
    title: 'Defence',
    subtitle: 'Surveillance System\nComputer Vision & AI',
    image: '/images/project-defence.jpg',
    content:
      'A secure AI-powered surveillance system utilizing computer vision for threat detection, motion tracking, and live monitoring.',
  },
];

export default function RecentProjects() {
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>{`
        /* Container for each project column */
        .project-col {
          flex: 1 0 350px; /* grow, no shrink, base width 350px */
          max-width: 350px;
        }

        .project-card {
          cursor: pointer;
          transition: transform 0.3s ease;
          position: relative;
          border-radius: 0.375rem;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          height: 220px;
          display: flex;
          flex-direction: column;
        }

        .project-card img {
          flex-grow: 1;
          width: 100%;
          object-fit: cover;
          border-radius: 0.375rem 0.375rem 0 0;
        }

        .project-card:hover {
          transform: scale(1.03);
          z-index: 2;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          border-radius: 0.375rem;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          text-align: center;
          color: white;
          user-select: none;
        }

        .project-card:hover .overlay {
          opacity: 1;
          pointer-events: auto;
        }

        /* Dark mode section background and text */
        .dark-mode-section {
          background-color: #f8f9fa;
          color: #212529;
          transition: background-color 0.3s, color 0.3s;
        }
        body.dark .dark-mode-section {
          background-color: #1a1a1a;
          color: #eee;
        }

        /* Modal dark mode */
        .dark-mode-modal .modal-content {
          background-color: #1e1e1e;
          color: #fff;
        }

        .dark-mode-modal .modal-header,
        .dark-mode-modal .modal-footer {
          border-color: transparent;
        }

        .dark-mode-modal .btn-secondary {
          background-color: #444;
          border: none;
        }

        .dark-mode-modal .btn-secondary:hover {
          background-color: #666;
        }

        /* Button dark mode */
        .btn-dark {
          background-color: #212529;
          border-color: #212529;
          transition: background-color 0.3s ease;
        }
        .btn-dark:hover {
          background-color: #1a1a1a;
          border-color: #1a1a1a;
        }
      `}</style>

      <section className="py-5 bg-light dark-mode-section text-dark dark:text-light text-center">
        <Container>
          <h2 className="fw-bold mb-5" data-aos="fade-up">
            Recent Projects
          </h2>
          <Row className="g-4 justify-content-center">
            {caseStudies.map((project, idx) => (
              <Col
                key={idx}
                className="project-col"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div
                  className="project-card position-relative overflow-hidden rounded shadow-sm"
                  onClick={() => setModalIndex(idx)}
                  role="button"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid w-100"
                    draggable={false}
                  />
                  <div className="overlay">
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="mb-0">{project.subtitle}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {modalIndex !== null && (
            <Modal
              show={true}
              onHide={() => setModalIndex(null)}
              centered
              dialogClassName="dark-mode-modal"
            >
              <Modal.Header closeButton className="bg-light dark:bg-dark border-0">
                <Modal.Title className="fw-bold text-dark dark:text-light">
                  {caseStudies[modalIndex].title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-white dark:bg-dark text-dark dark:text-light">
                <img
                  src={caseStudies[modalIndex].image}
                  alt={caseStudies[modalIndex].title}
                  className="img-fluid rounded mb-3"
                  draggable={false}
                />
                <p style={{ whiteSpace: 'pre-line' }}>
                  {caseStudies[modalIndex].content}
                </p>
              </Modal.Body>
              <Modal.Footer className="bg-light dark:bg-dark border-0">
                <Button variant="secondary" onClick={() => setModalIndex(null)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}

          <div className="mt-5" data-aos="fade-up">
            <a
              href="/about"
              className="btn btn-dark rounded-pill px-4 py-2 fw-semibold"
            >
              Like what you see? Read more about us →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
