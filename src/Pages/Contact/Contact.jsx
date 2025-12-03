import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill in name, email and message." });
      return;
    }

    setStatus({ type: "pending", text: "Sending..." });

    // Simulate sending
    setTimeout(() => {
      console.log("Contact message submitted:", form);
      setStatus({ type: "success", text: "Message sent. We'll reply soon!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <main className="min-h-[80vh] bg-base-100 text-base-content transition-colors duration-300">
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
            Contact Us
          </h1>
          <p className="mt-4 text-center max-w-2xl mx-auto text-base-content/80">
            Have questions, feedback or a partnership idea? Send us a message and
            we'll get back to you within 1-2 business days.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <form
              onSubmit={handleSubmit}
              className="contact-card p-6 rounded-lg shadow-lg bg-base-200/60"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name *"
                  className="input input-bordered w-full"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email *"
                  type="email"
                  className="input input-bordered w-full"
                />
              </div>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input input-bordered w-full mt-4"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message *"
                className="textarea textarea-bordered w-full mt-4 h-36"
              />

              <div className="mt-4 flex items-center gap-4">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                {status && (
                  <span
                    className={`text-sm ${
                      status.type === "error"
                        ? "text-error"
                        : status.type === "success"
                        ? "text-success"
                        : "text-base-content/70"
                    }`}
                  >
                    {status.text}
                  </span>
                )}
              </div>
            </form>

            <aside className="p-6 rounded-lg shadow-lg bg-base-300/50">
              <h3 className="text-xl font-semibold text-primary">Reach Out</h3>
              <p className="mt-2 text-base-content/80">
                Prefer email? Write to <strong>support@toy-universe.example</strong>
              </p>

              <div className="mt-6">
                <h4 className="font-semibold">Office</h4>
                <p className="text-sm text-base-content/70">Dhaka, Bangladesh</p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Business hours</h4>
                <p className="text-sm text-base-content/70">Mon — Fri, 9am — 6pm</p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Social</h4>
                <p className="text-sm text-base-content/70">@toy_universe</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
