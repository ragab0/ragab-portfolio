import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-bgSecondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center mx-auto">
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
        <ContactForm />
      </div>
    </section>
  );
}
