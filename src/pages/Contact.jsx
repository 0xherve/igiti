import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const inputClass = 'w-full rounded-lg border border-line bg-white px-4 py-3 placeholder:text-gray-400';
const labelClass = 'mb-2 font-medium text-muted';
const emptyForm = { name: '', email: '', message: '' };

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm('service_u974yv9', 'template_9xth32a', formRef.current, {
        publicKey: 'yBdV-BxUp6f8qkaGq',
      });
      alert('Your message has been sent successfully!');
      setForm(emptyForm);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto my-12 max-w-3xl px-6">
      <div className="flex flex-col gap-6 rounded-card border border-line bg-contact p-8 sm:p-10">
        <h3 className="font-palanquin text-4xl font-bold">Let's Talk</h3>
        <p className="text-lg text-muted">
          Whether you are looking to buy our products, partner with us, or give us feedback, we would like to hear from you.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className={labelClass}>Full Name</label>
            <input id="name" type="text" name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Enter your full name" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="yourname@example.com" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className={labelClass}>Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} className={inputClass} placeholder="Hi, I am interested in..." rows={5} required />
          </div>
          <Button
            label={loading ? 'Sending...' : 'Send Message'}
            iconURL={arrowRight}
            fullWidth
            disabled={loading}
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
