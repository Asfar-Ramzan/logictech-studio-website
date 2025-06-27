import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StatsSection() {
  const stats = [
    { end: 95, suffix: '%', label: 'Recommendation Rate' },
    { end: 100, suffix: '+', label: 'Projects Completed' },
    { end: 16, suffix: '×', label: 'Velocity and Quality' },
    { end: 25, suffix: '+', label: 'Clientage' },
    { end: 4, suffix: '.0', label: 'Original Startups' },
    { end: 10, suffix: '+', label: 'Industry Verticals' },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>{`
        .stats-section {
        
        }
        .stats-heading {
          font-size: 2.15rem;
          font-weight: 900;
          color: #0d0d0d;
        }
        .stats-heading .highlight {
          color: #0d6efd;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          
        }
        .stat-label {
          font-size: 1.1rem;
          color: #555;
          margin-top: 0.5rem;
        }
        @media (max-width: 768px) {
          .stats-heading {
            font-size: 2rem;
          }
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="py-5 stats-section text-center">
        <Container>
          <h2 className="mb-5 stats-heading" data-aos="fade-up">
            Achievements <span className="highlight">Unlocked</span>
          </h2>

          <Row className="gy-4">
            {stats.map((stat, index) => (
              <Col xs={6} md={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="stat-number">
                  <CountUp
                    end={stat.end}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="stat-label">{stat.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
