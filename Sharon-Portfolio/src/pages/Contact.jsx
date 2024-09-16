import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative bg-gray-900 py-20">
      <div className="container px-5 py-10 mx-auto flex flex-wrap items-start">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden p-10 shadow-lg">
          <div className="relative flex flex-wrap py-6 rounded-lg shadow-md bg-gray-900">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
                ADDRESS
              </h2>
              <p className="mt-2 text-gray-400">
                Clay City <br />
                Nairobi, Kenya 00100
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
                EMAIL
              </h2>
              <a
                href="mailto:obinsasharon6@gmail.com"
                className="text-indigo-400 leading-relaxed"
              >
                obinsasharon6@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-sm mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-400">+254-769-600-939</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          {/* Anti-spam field */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <h2 className="text-white sm:text-4xl text-3xl mb-5 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed text-gray-400 mb-5">
            I'm always excited to work on challenging and innovative projects.
            Whether you're looking to build a dynamic web application, improve
            your digital presence, or need full-stack development expertise,
            feel free to reach out. Let's create something amazing together!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
