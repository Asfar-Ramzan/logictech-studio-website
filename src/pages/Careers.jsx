import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Careers() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [position, setPosition] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const openForm = (pos) => {
    setPosition(pos);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', coverLetter: '', resume: null });
    setErrors({});
  };

  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        // simple email regex
        if (!/^\S+@\S+\.\S+$/.test(value)) return 'Invalid email address';
        return '';
      case 'phone':
        if (!value) return '';
        if (!/^\+?[\d\s-]{7,15}$/.test(value))
          return 'Invalid phone number format';
        return '';
      case 'resume':
        if (!value) return 'Resume file is required';
        if (
          !['application/pdf', 'application/msword', 
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          ].includes(value.type)
        ) return 'Only PDF, DOC, or DOCX files are allowed';
        return '';
      case 'coverLetter':
        if (value.length > 500) return 'Cover letter must be 500 characters or less';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'resume') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: validateField(name, file) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, val]) => {
      const error = validateField(key, val);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fix the errors before submitting.');
      return;
    }
    // Replace with actual submission logic here
    alert(`Thank you, ${formData.name}! Your application for "${position}" has been submitted.`);
    closeForm();
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-3 fw-bold" data-aos="fade-up">
        Careers at Logictech Studio
      </h2>
      <p className="text-center mb-5 text-muted" data-aos="fade-up" data-aos-delay="100">
        We're always looking for talented individuals who are passionate about building great software.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          {[
            {
              title: ' Frontend Developer',
              desc: 'Join our UI/UX team to build responsive web applications using React and modern JavaScript frameworks.',
              location: 'Remote or Lahore, Pakistan',
            },
            {
              title: ' Backend Engineer',
              desc: "We're looking for Node.js or Laravel experts to manage APIs and system architecture for complex platforms.",
              location: 'Remote or Lahore, Pakistan',
            },
            {
              title: 'Internships',
              desc: 'Fresh graduate? Apply for our paid internship program and start your career at Logictech Studio.',
              location: 'Apply: careers@logictechstudio.com',
              isInternship: true,
            },
          ].map((job, i) => (
            <div
              className="card glass-card shadow-lg mb-4 border-0 rounded-4"
              key={i}
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
            >
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold">{job.title}</h5>
                <p className="card-text">{job.desc}</p>
                <p className="text-muted fw-light mb-3">
                  <strong>{job.isInternship ? 'Apply' : 'Location'}:</strong> {job.location}
                </p>
                {!job.isInternship && (
                  <button
                    className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                    onClick={() => openForm(job.title.replace(/^[^a-zA-Z]+/, ''))}
                  >
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={closeForm}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content rounded-4 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold">Apply for {position}</h5>
                <button type="button" className="btn-close" onClick={closeForm}></button>
              </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                <div className="modal-body pt-0">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Full Name *</label>
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email *</label>
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resume" className="form-label fw-semibold">
                      Upload Resume (PDF, DOC) *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className={`form-control ${errors.resume ? 'is-invalid' : ''}`}
                      onChange={handleChange}
                      required
                    />
                    {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
                  </div>

                  <div className="form-floating">
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows="4"
                      className={`form-control ${errors.coverLetter ? 'is-invalid' : ''}`}
                      placeholder="Write a brief cover letter..."
                      value={formData.coverLetter}
                      onChange={handleChange}
                    />
                    <label htmlFor="coverLetter">Cover Letter</label>
                    {errors.coverLetter && (
                      <div className="invalid-feedback">{errors.coverLetter}</div>
                    )}
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0">
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold"
                    onClick={closeForm}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
