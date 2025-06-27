import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WebDevelopment() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold" data-aos="fade-up">Web Development</h1>
                <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
                    Building fast, scalable, and modern web applications tailored to your business.
                </p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6" data-aos="fade-right">
                    <img
                        src="/images/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg"
                        alt="React Web Development"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <h4 className="fw-semibold mb-3">Specialists in React.js</h4>
                    <p>
                        At Logictech Studio, we craft powerful, modern web experiences using <strong>React.js</strong>, the leading JavaScript library for building dynamic and high-performing user interfaces.
                        Our expert developers focus on creating scalable SPAs (Single Page Applications) that are fast, responsive, and interactive.
                    </p>
                    <ul>
                        <li>Component-based architecture</li>
                        <li>Optimized for performance & SEO</li>
                        <li>Seamless integration with APIs</li>
                        <li>Reusable & maintainable code</li>
                    </ul>
                </div>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-md-2" data-aos="fade-left">
                    <img
                        src="/images/azwedo-l-lc-Q7gIMX0Uf3Y-unsplash.jpg"
                        alt="Responsive Design"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-6 order-md-1" data-aos="fade-right">
                    <h4 className="fw-semibold mb-3">Responsive & Accessible</h4>
                    <p>
                        Our web solutions are fully responsive and work flawlessly across all devices and screen sizes. We prioritize accessibility, performance, and user experience to ensure every visitor has a smooth interaction.
                    </p>
                </div>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6" data-aos="fade-right">
                    <img
                        src="/images/joan-gamell-ZS67i1HLllo-unsplash.jpg"
                        alt="Backend Integration"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <h4 className="fw-semibold mb-3">Full Stack Capabilities</h4>
                    <p>
                        From front-end interfaces to back-end APIs, our full stack developers handle the entire development lifecycle. Whether it’s connecting to a CMS, integrating with a payment system, or deploying to cloud services, we’ve got you covered.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-5" data-aos="fade-up">
                <div className="col-lg-10 text-center">
                    <h5 className="fw-semibold">Have a project in mind?</h5>
                    <p>Let’s discuss how our React expertise can power your next web solution.</p>
                    <a href="/contact" className="btn btn-primary px-4 py-2 mt-2 fw-semibold">
                        Contact Us
                    </a>
                </div>
            </div>

        </div>
    );
}
