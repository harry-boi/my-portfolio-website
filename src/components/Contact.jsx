import React from "react";

const ContactSection = () => {
  return (
    <section className="text-gray-600 dark:bg-gray-950 body-font bg-gray-100 py-16">
      <div className="container px-5 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 dark:text-gray-400">
          Get in Touch ✨
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-200 mb-8">
          Have a question or want to work together? I'd love to hear from you!
        </p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Call to Action */}
          <div className="md:w-full flex justify-center">
            <a
              href="mailto:your-email@example.com"
              className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400"
            >
              Email Me 📩
            </a>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          {/* Social Media Links */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.001.974-3.118 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.932 2.208-4.932 4.932 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.869 3.216 2.188 4.099-.806-.026-1.565-.248-2.228-.616v.062c0 2.388 1.693 4.382 3.946 4.833-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.626 1.955 2.444 3.377 4.6 3.417-1.68 1.316-3.809 2.1-6.115 2.1-.398 0-.79-.023-1.175-.069 2.182 1.401 4.768 2.216 7.548 2.216 9.053 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.015-.637.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.4c-.967 0-1.75-.783-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 10.4h-3v-4.5c0-1.093-.017-2.5-1.5-2.5-1.5 0-1.732 1.172-1.732 2.423v4.577h-3v-9h2.846v1.229h.041c.396-.75 1.365-1.538 2.808-1.538 3 0 3.556 1.975 3.556 4.546v4.763z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.135-.305-.54-1.527.105-3.176 0 0 1.005-.322 3.3 1.233.96-.267 1.985-.399 3.005-.405 1.02.006 2.045.138 3.005.405 2.28-1.555 3.285-1.233 3.285-1.233.645 1.649.24 2.871.105 3.176.765.84 1.23 1.911 1.23 3.221 0 4.61-2.805 5.62-5.475 5.92.435.375.81 1.102.81 2.221v3.293c0 .319.21.694.825.576 4.765-1.584 8.205-6.081 8.205-11.387 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm">
          Designed by{" "}
          <span className="font-semibold text-indigo-600">Harryboi</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
