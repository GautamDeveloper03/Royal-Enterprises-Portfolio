import { useState } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Royal Enterprises,

I would like to enquire about your services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Required: ${formData.service}
Message: ${formData.message}

Thank you.
    `;

    const whatsappUrl =
      `https://wa.me/919171076712?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    // Clear form after opening WhatsApp
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact Us
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's Discuss Your Project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Contact Royal Enterprises for false ceiling, grid ceiling,
            interior works and materials.
          </p>
        </div>

        {/* Contact + Form */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h3 className="text-2xl font-bold">
              Royal Enterprises
            </h3>

            <p className="mt-2 text-slate-400">
              False Ceiling | Grid Ceiling | Interior Works | Materials Sales
            </p>

            <div className="mt-8 space-y-6">

              {/* Phone */}
              <a
                href="tel:9171076712"
                className="flex items-start gap-4 transition hover:text-blue-400"
              >
                <div className="rounded-lg bg-blue-600/20 p-3">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 font-semibold">
                    9171076712
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919171076712"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 transition hover:text-blue-400"
              >
                <div className="rounded-lg bg-blue-600/20 p-3">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-semibold">
                    Chat with us
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-600/20 p-3">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Address
                  </p>

                  <p className="mt-1 leading-6">
                    No. 1729, Kundrathur Main Road,
                    <br />
                    Gerugambakkam,
                    <br />
                    Chennai - 600122
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-600/20 p-3">
                  <Clock size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Business Hours
                  </p>

                  <p className="mt-1 font-semibold">
                    Contact us for availability
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h3 className="text-2xl font-bold">
              Send an Enquiry
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Fill in your requirements and send them directly
              to us through WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Service Required
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="False Ceiling">
                    False Ceiling
                  </option>

                  <option value="Grid Ceiling">
                    Grid Ceiling
                  </option>

                  <option value="Interior Works">
                    Interior Works
                  </option>

                  <option value="Ceiling Design">
                    Ceiling Design
                  </option>

                  <option value="Materials Sales">
                    Materials Sales
                  </option>

                  <option value="Repair & Modification">
                    Repair & Modification
                  </option>

                  <option value="Others">
                    Others
                  </option>

                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 active:scale-[0.98]"
              >
                <Send size={18} />

                Submit Enquiry
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;