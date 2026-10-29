"use client";
import { useState } from "react";

export default function Contact() {
  const initState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [isWaiting, setWaiting] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [status, setStatus] = useState(null);

  function valueHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    setWaiting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData(initState);
        setStatus({ type: "success", message: "Message sent successfully!" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong." });
    } finally {
      setWaiting(false);
    }
  }

  return (
    <section id="contact" className="py-32 bg-bgSecondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-primary">Get In </span>
            <span className="text-textPrimary">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-8 text-textSecondary text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="space-y-6 bg-background p-8 md:p-12 rounded-lg shadow-2xl border border-primary/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-mono text-primary">Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={valueHandler}
                className="w-full bg-bgTertiary border border-primary/10 rounded-sm px-4 py-3 text-textPrimary focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono text-primary">Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={valueHandler}
                className="w-full bg-bgTertiary border border-primary/10 rounded-sm px-4 py-3 text-textPrimary focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-primary">Subject</label>
            <input
              required
              type="text"
              name="subject"
              value={formData.subject}
              onChange={valueHandler}
              className="w-full bg-bgTertiary border border-primary/10 rounded-sm px-4 py-3 text-textPrimary focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-primary">Message</label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={valueHandler}
              rows={6}
              className="w-full bg-bgTertiary border border-primary/10 rounded-sm px-4 py-3 text-textPrimary focus:outline-none focus:border-primary transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isWaiting}
            className="w-full border-2 border-primary text-primary py-4 rounded-sm font-mono text-lg hover:bg-primary/10 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {isWaiting ? "Loading..." : "Say Hello"}
          </button>

          {status && (
            <div
              className={`text-center p-4 rounded-sm font-mono text-sm ${status.type === "success" ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"}`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
