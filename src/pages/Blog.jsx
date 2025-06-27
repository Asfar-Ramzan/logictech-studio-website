import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const blogPosts = [
  { title: 'Launching Logictech Studio', date: '2025-06-01', summary: 'We’re excited to announce our new software house focused on modern digital solutions.' },
  { title: 'Case Study: E-commerce Platform', date: '2025-05-20', summary: 'How we helped a retail brand scale online sales using React & Node.js.' },
  { title: 'UI/UX Tips for 2025', date: '2025-04-10', summary: 'Design trends and practical tips for better user experience.' }
];

export default function Blog() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Latest from Our Blog</h2>
      <div className="row">
        {blogPosts.map((post, idx) => (
          <div className="col-md-4 mb-4" key={idx} data-aos="fade-up">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="text-muted small">{post.date}</p>
                <p className="card-text">{post.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}