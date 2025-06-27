import { useState, useEffect } from 'react';
import { Tab, Nav, Row, Col, Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const offerings = {
  services: [
    {
      title: 'Education Technology',
      content: 'We deliver scalable EdTech platforms tailored for modern learning experiences with personalized and adaptive systems.'
    },
    {
      title: 'Data, ML & AI',
      content: 'We provide AI/ML solutions for smarter decision-making, automation, and data analysis with real-world applications.'
    },
    {
      title: 'E-Commerce',
      content: `Our E-commerce tech solutions help you improve your online retail experience and drive growth.
        We provide the latest eCommerce technology solutions to boost your online presence. Our services include
        eCommerce development, where we build strong and scalable online stores tailored to your needs.`
    }
  ],
  solutions: [
    {
      title: 'Custom Software',
      content: 'Bespoke software tailored to your workflow and needs, with ongoing maintenance and optimization.'
    },
    {
      title: 'DevOps & Cloud',
      content: 'Robust CI/CD pipelines, scalable infrastructure, and cloud-native development using AWS, GCP, or Azure.'
    },
    {
      title: 'AI Solutions',
      content: 'We build predictive models, chatbots, and recommendation engines using state-of-the-art AI frameworks.'
    }
  ]
};

export default function OfferingsSection({ darkMode }) {
  const [activeTab, setActiveTab] = useState('services');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const bgClass = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  const cardClass = darkMode ? 'bg-dark border-secondary text-light' : 'bg-white border-light text-dark';
  const navVariant = darkMode ? 'pills' : 'tabs';

  return (
    <section className={`py-5 ${bgClass}`}>      
      <Container>
        <h2 className="fw-bold text-center mb-2" data-aos="fade-up">
          Our <span className="text-primary">Offerings</span>
        </h2>
        <p className={`text-center mb-4 ${darkMode ? 'text-light' : 'text-muted'}`} data-aos="fade-up" data-aos-delay="100">
          From the initial stages of development to QA processes to robust IT operations to AI solutions,<br />
          we offer a broad range of tech services and solutions customized to your requirements.
        </p>

        <div className="mb-4 d-flex justify-content-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => setActiveTab('services')}
            className={`btn ${activeTab === 'services' ? 'btn-primary' : 'btn-outline-primary'}`}
          >
            Our Services
          </button>
          <button
            onClick={() => setActiveTab('solutions')}
            className={`btn ${activeTab === 'solutions' ? 'btn-primary' : 'btn-outline-primary'}`}
          >
            Our Solutions
          </button>
        </div>

        <Tab.Container defaultActiveKey="0">
          <Row>
            <Col sm={4}>
              <Nav variant={navVariant} className="flex-column text-start" data-aos="fade-up" data-aos-delay="300">
                {offerings[activeTab].map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index.toString()} className={`py-2 ${darkMode ? 'text-light' : ''}`}>
                      {item.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content className={`p-4 rounded shadow-sm ${cardClass}`} data-aos="fade-up" data-aos-delay="400">
                {offerings[activeTab].map((item, index) => (
                  <Tab.Pane key={index} eventKey={index.toString()}>
                    <h4 className="fw-bold">{item.title}</h4>
                    <p className="mt-2">{item.content}</p>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
}
