import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CloudSolutions() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Cloud Solutions</h2>
      <p className="lead text-muted text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        Scalable. Reliable. Serverless. Welcome to the next generation of cloud engineering.
      </p>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6" data-aos="fade-right">
          <img
            src="/images/87b1435c-79d2-449e-b920-30fa19d9d829.png"
            alt="Cloud Services"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
          <h4 className="fw-bold mb-3">Cloud Architecture & Platforms</h4>
          <p>
            Logictech Studio engineers cloud-native applications using AWS, Firebase, and Google Cloud. We design infrastructure that grows with your business – secure, elastic, and globally distributed.
          </p>
          <ul className="list-unstyled">
            <li>✅ AWS Lambda, EC2, and S3 hosting</li>
            <li>✅ Firebase Authentication & Firestore</li>
            <li>✅ Google Cloud Functions & Storage</li>
            <li>✅ Containerized apps with Docker & Kubernetes</li>
          </ul>
        </div>
      </div>

      <div className="row align-items-center flex-lg-row-reverse mb-5">
        <div className="col-lg-6" data-aos="fade-left">
          <img
            src="/images/what-is-cloud-monitoring-main-1170x665.jpg"
            alt="Cloud Monitoring"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
          <h4 className="fw-bold mb-3">DevOps & CI/CD Automation</h4>
          <p>
            Our DevOps team implements best-in-class CI/CD pipelines and monitoring using GitHub Actions, Jenkins, and AWS CodePipeline. Your deployments become faster, safer, and stress-free.
          </p>
          <ul className="list-unstyled">
            <li>🚀 Automated deployments to staging & production</li>
            <li>🔐 End-to-end monitoring and rollback strategies</li>
            <li>📈 Log-based alerting & health dashboards</li>
            <li>📦 Secure backups & disaster recovery</li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-10 text-center">
          <h5 className="fw-semibold">Ready to unlock cloud efficiency?</h5>
          <p>
            Whether you're launching a new SaaS platform or modernizing your legacy infrastructure, we’ll help you go cloud-native the right way.
          </p>
          <a href="/contact" className="btn btn-primary px-4 py-2 mt-2 fw-semibold">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
