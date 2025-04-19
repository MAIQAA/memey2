import React, { useState, FormEvent } from "react";
import { BiSupport } from "react-icons/bi";

const ContactPage: React.FC = () => {
  interface ContactFormFields {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    honeypot?: string; // Optional honeypot field for spam protection
  }

  const [formData, setFormData] = useState<ContactFormFields>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormFields>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormFields> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam bot detected
    if (!validateForm()) return;

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          honeypot: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Error sending message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
            Contact MeMeY
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or need support? Reach out to us, and we’ll get back
            to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto mt-16 animate-fade-in-up">
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 transition-all duration-500 hover:shadow-blue-300 hover:-translate-y-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-6 animate-fade-in-down">
              Get in Touch
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 animate-fade-in"
            >
              {/* Honeypot Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                aria-hidden="true"
              />

              {/* Input Fields */}
              {[
                {
                  id: "name",
                  type: "text",
                  placeholder: "Full Name",
                  required: true,
                },
                {
                  id: "email",
                  type: "email",
                  placeholder: "Email",
                  required: true,
                },
                {
                  id: "phone",
                  type: "tel",
                  placeholder: "Phone Number",
                  required: false,
                },
                {
                  id: "subject",
                  type: "text",
                  placeholder: "Subject",
                  required: false,
                },
              ].map(({ id, type, placeholder, required }) => (
                <div key={id} className="relative group">
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    className={`w-full bg-white/80 text-gray-800 placeholder-transparent border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer transition-all duration-300 ${
                      errors[id] ? "border-red-500" : ""
                    }`}
                    placeholder={placeholder}
                    aria-required={required}
                  />
                  <label
                    htmlFor={id}
                    className="absolute left-4 -top-3.5 text-gray-600 text-sm bg-white/90 px-1 rounded transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    {placeholder}
                  </label>
                  {errors[id] && (
                    <p className="text-sm text-red-500 mt-1">{errors[id]}</p>
                  )}
                </div>
              ))}

              {/* Message Field */}
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  aria-required="true"
                  className={`w-full bg-white/80 text-gray-800 placeholder-transparent border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer transition-all duration-300 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-3.5 text-gray-600 text-sm bg-white/90 px-1 rounded transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Message
                </label>
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-lg py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message 🚀"}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <p
                  className={`text-center text-sm mt-2 ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  } animate-fade-in`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Prefer to email us directly? Contact our support team!
          </p>
          <a
            href="mailto:support@memey.cloud"
            className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <BiSupport className="w-5 h-5 mr-2" />
            support@memey.cloud
          </a>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
