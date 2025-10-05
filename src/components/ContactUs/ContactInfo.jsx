import {
  faArrowRight,
  faLocationDot,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        alert("Network error!");
        const text = await res.text();
        throw new Error(text || `Request failed with status ${res.status}`);
      }
      setStatus({
        loading: false,
        success: "Message sent successfully.",
        error: null,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      alert(`Subscribed successfully`);
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.message || "Failed to send. Please try again.",
      });
      alert("Server was gone!");
    }
  };

  return (
    <div>
      {/* Spacing before section */}
      <div className="py-12 md:py-16"></div>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Contact Information */}
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-black">
                  Contact Information
                </h2>
                <div className="mt-4"></div>
                <p className="text-slate-600 dark:text-black">
                  We Have grown up with the internet revolution, and we <br />{" "}
                  know how to deliver on its
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {/* Contact box - phone */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#e7eaf3] shadow-sm">
                  <div className="shrink-0">
                    <FontAwesomeIcon size="xl" icon={faPhone} />
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-slate-900 dark:text-black">
                      Contact Us
                    </h5>
                    <a
                      href="tel:(124)555-6565"
                      className="text-slate-700 dark:text-black hover:text-primary transition"
                    >
                      (124) 555-6565
                    </a>
                  </div>
                </div>

                {/* Contact box - email */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#e7eaf3] shadow-sm">
                  <div className="shrink-0">
                    <FontAwesomeIcon size="xl" icon={faMessage} />
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-slate-900 dark:text-black">
                      Send Us a Mail
                    </h5>
                    <a
                      href="mailto:admin@techxen.org"
                      className="text-slate-700 dark:text-black hover:text-primary transition"
                    >
                      support@triospace.com
                    </a>
                  </div>
                </div>

                {/* Contact box - location */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#e7eaf3] shadow-sm">
                  <div className="shrink-0">
                    <FontAwesomeIcon size="xl" icon={faLocationDot} />
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-slate-900 dark:text-black">
                      Office Location
                    </h5>
                    <a
                      href="#"
                      className="text-slate-700 dark:text-black hover:text-primary transition"
                    >
                      73 Bridge St Brooklyn Arakansas <br /> 85032 United
                      States, NY 10018
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <div className="rounded-2xl  bg-white dark:bg-[#e7eaf3] shadow-sm p-6 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-300 dark:border-[#e7eaf3] bg-white dark:bg-white px-4 py-3 text-slate-900 dark:text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-300 dark:border-[#e7eaf3] bg-white dark:bg-white px-4 py-3 text-slate-900 dark:text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-300 dark:border-[#e7eaf3] bg-white dark:bg-white px-4 py-3 text-slate-900 dark:text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-300 dark:border-[#e7eaf3] bg-white dark:bg-white px-4 py-3 text-slate-900 dark:text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-300 dark:border-[#e7eaf3] bg-white dark:bg-white px-4 py-3 text-slate-900 dark:text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <textarea
                      cols="30"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-300 dark:border-[#e7eaf3] bg-white dark:bg-white px-4 py-3 text-slate-900 dark:text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      Submit
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </button>
                    {status.success && (
                      <p className="mt-3 text-green-600">{status.success}</p>
                    )}
                    {status.error && (
                      <p className="mt-3 text-red-600">{status.error}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Spacing after section */}
      <div className="py-12 md:py-16"></div>
      {/* Map */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700">
          <iframe
            className="w-full h-[450px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default ContactInfo;
