import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    reset();
    // You can also trigger EmailJS or your backend here
  };

  return (
    <>
      <style>{`
        .contact-section {
          padding: 4rem 0;
          background-color: var(--bs-body-bg);
          color: var(--bs-body-color);
        }

        .form-wrapper {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 1rem;
          backdrop-filter: blur(10px);
        }

        @media (prefers-color-scheme: dark) {
          .contact-section {
            background-color: #0d1117;
            color: #c9d1d9;
          }

          .form-wrapper {
            background: rgba(22, 27, 34, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .form-control,
          .input-group-text {
            background-color: #161b22;
            color: #c9d1d9;
            border-color: rgba(255, 255, 255, 0.1);
          }

          .form-control:focus {
            background-color: #0d1117;
            color: #f0f6fc;
          }

          .input-group-text i {
            color: #58a6ff;
          }
        }

        .input-group-text {
          background-color: #f0f0f0;
        }

        .form-control {
          transition: all 0.2s ease;
        }

        .success-msg {
          color: #0d6efd;
          font-weight: 600;
          font-size: 1.1rem;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">
            Let’s Connect
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <div className="p-5 shadow-lg form-wrapper">
                {submitted && (
                  <div className="alert text-center success-msg mb-4" data-aos="fade-down">
                    ✅ Thanks! We'll be in touch shortly.
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-semibold">Name</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person-fill"></i>
                      </span>
                      <input
                        id="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your full name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="your@email.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email format',
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Tell us about your project..."
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message.message}</div>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-2 fs-6 fw-bold shadow-sm"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
