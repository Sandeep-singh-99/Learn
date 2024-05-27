import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.taget.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <section>
      <main>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <img src="contact.png" alt="Contact page" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Contact Page</h1>
                <br />

                {/* Username field */}

                <div className="mb-5">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    value={Contact.username}
                    onChange={handleInput}
                    autoComplete="off"
                  />
                </div>

                {/* Email field */}

                <div className="mb-5">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    required
                    value={Contact.email}
                    onChange={handleInput}
                    autoComplete="off"
                  />
                </div>

                {/* Message field */}

                <div className="mb-5">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="bg-yellow-100 rounded-sm border-l-pink-950 shadow-sm"
                    name="message"
                    id="message"
                    required
                    value={Contact.message}
                    onChange={handleInput}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <br />
                <button type="submit" className="bg-teal-100 px-2 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
