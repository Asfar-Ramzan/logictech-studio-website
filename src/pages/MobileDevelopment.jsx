import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MobileDevelopment() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold" data-aos="fade-up">Mobile App Development</h1>
                <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
                    Build high-performance, cross-platform mobile apps with Flutter and Firebase.
                </p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6" data-aos="fade-right">
                    <img
                        src="/images/65e18cefdb107_cross.platform.development.with.flutter.png"
                        alt="Flutter Mobile App"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <h4 className="fw-semibold mb-3">Cross-Platform with Flutter</h4>
                    <p>
                        We develop beautiful, natively compiled mobile applications using <strong>Flutter</strong>. One codebase, both platforms.
                    </p>
                    <ul>
                        <li>One codebase for Android & iOS</li>
                        <li>Custom animations & widgets</li>
                        <li>Fast development cycle</li>
                        <li>Consistent UI across devices</li>
                    </ul>
                </div>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-md-2" data-aos="fade-left">
                    <img
                        src="/images/maxresdefault-3.jpg"
                        alt="Firebase Integration"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-6 order-md-1" data-aos="fade-right">
                    <h4 className="fw-semibold mb-3">Real-Time with Firebase</h4>
                    <p>
                        We use <strong>Firebase</strong> to power real-time databases, cloud functions, and authentication — enabling responsive, data-driven apps with scalability built-in.
                    </p>
                    <ul>
                        <li>Realtime database & Firestore</li>
                        <li>Push notifications</li>
                        <li>Firebase Auth & Cloud Functions</li>
                        <li>Secure & scalable infrastructure</li>
                    </ul>
                </div>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6" data-aos="fade-right">
                    <img
                        src="/images/Performance-Optimization--Maximizing-Results-with-Goal-Seeking--Understanding-the-Importance-of-Performance-Optimization.webp"
                        alt="Performance Optimization"
                        className="img-fluid rounded shadow-sm"
                    />
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <h4 className="fw-semibold mb-3">Optimized for Performance</h4>
                    <p>
                        Our Flutter apps are optimized for performance and battery efficiency, ensuring a smooth user experience. We follow best practices in architecture and state management for long-term scalability and maintainability.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-5" data-aos="fade-up">
                <div className="col-lg-10 text-center">
                    <h5 className="fw-semibold">Ready to build your app?</h5>
                    <p>We’d love to collaborate and bring your mobile idea to life using Flutter and Firebase.</p>
                    <a href="/contact" className="btn btn-primary px-4 py-2 mt-2 fw-semibold">
                        Contact Us
                    </a>
                </div>
            </div>

        </div>
    );
}
