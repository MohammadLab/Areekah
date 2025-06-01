export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 font-arabic text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center">
        We’re here to help! Have questions about our furniture collections, your order, or anything else? Send us a message using the form below — we typically respond within 24-48 hours.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="bg-white shadow rounded p-6 space-y-4"
      >
        {/* Hidden input for Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-600">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border rounded px-3 py-2 text-gray-800"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-gray-600">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border rounded px-3 py-2 text-gray-800"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold text-gray-600">Your Message</label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="border rounded px-3 py-2 text-gray-800"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Contact Information</h2>
        <p className="text-gray-600">
          Email us directly at <a href="mailto:moe.labak@gmail.com" className="text-orange-500 underline">moe.labak@gmail.com</a> if you prefer. We're happy to assist!
        </p>
      </div>
    </div>
  );
}
