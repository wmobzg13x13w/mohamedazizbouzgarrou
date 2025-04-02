import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='max-w-2xl mx-auto py-16'>
      <h2 className='section-title text-center'>Get in Touch</h2>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label htmlFor='name' className='block text-text-secondary mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full bg-secondary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-text-secondary mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full bg-secondary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent'
          />
        </div>
        <div>
          <label htmlFor='message' className='block text-text-secondary mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows='4'
            className='w-full bg-secondary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent'></textarea>
        </div>
        <button type='submit' className='btn-primary w-full'>
          Send Message
        </button>
        {status && <p className='text-green-500 text-center mt-4'>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
