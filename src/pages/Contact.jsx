import Button from '../components/Button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {arrowRight} from '../assets/icons'

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs.init({
      publicKey: "yBdV-BxUp6f8qkaGq",
    });

    try {
      const response = await emailjs.sendForm(
        'service_u974yv9', // Replace with your service ID
        'template_9xth32a', // Replace with your template ID
        formRef.current,
        {
        name: form.name, // Assuming you want to display the sender's name
        email: form.email,
        message: form.message,
        }
      );

      if (response.status === 200) {
        // Handle successful submission
        alert('Your message has been sent successfully!');
        // Clear the form fields
        setForm({ name: '', email: '', message: '' });
      } else {
        // Handle errors
        console.error('Error sending email:', response.statusText);
        alert('An error occurred while sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact mt-12">
      <div className="contact-container">
        <h3 className="contact-container_h3 ">Let's Talk</h3 >
        <p>
          Whether you are looking to buy our products, partner with us, or give us
          feedback, we would like to hear from you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" flex flex-col space-y-7 w-full"
          action=""
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-500 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input-field" 
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-500 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input-field"
              placeholder="yourname@example.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-500 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="input-field "
              placeholder="Hi, I am interested in..."
              rows={5} // Adjust rows for desired height
              required
            ></textarea>
          </div>

          <Button
            label={loading ? 'Sending...' : 'Send Message'}
            iconURL={arrowRight}
            fullWidth
            disabled={loading}
            className="mt-10"
            type="submit"
          />
        </form>


      </div>
    </section>
  );
};

export default Contact;
