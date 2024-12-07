"use client"
import { useState } from "react";
import { Heading } from "@medusajs/ui";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    priority: "normal",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Optionally, you can reset the form or show a success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        subject: "",
        priority: "normal",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg">
        <Heading level="h1" className="text-3xl mb-2 text-center">Contact Us</Heading>
        <p className="text-lg mb-6 text-center">
          We&#39;d love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Name:</span>
            <input
              type="text"
              name="name"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Email:</span>
            <input
              type="email"
              name="email"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Phone Number:</span>
            <input
              type="tel"
              name="phone"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">City:</span>
            <input
              type="text"
              name="city"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Subject:</span>
            <input
              type="text"
              name="subject"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Priority:</span>
            <select
              name="priority"
              className="p-2 border border-gray-300 rounded-md"
              value={formData.priority}
              onChange={handleChange}
              required
            >
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Message:</span>
            <textarea
              name="message"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
