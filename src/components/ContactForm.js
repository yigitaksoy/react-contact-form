const ContactForm = () => {
  return (
    <div id="form-container" className="lg:p-5">
      <div className="overflow-hidden">
        <h3 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold">
          Contact
        </h3>
      </div>

      <div>
        <form method="POST" action="">
          <div className="mx-auto rounded-xl max-w-xl">
            <div className="grid grid-cols-1 gap-6 label">
              <label htmlFor="name" className="block border-b py-2 ">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required="required"
                  placeholder="Name"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker uppercase font-bold text-3xl"
                />
              </label>

              <label htmlFor="email" className="block border-b">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required="required"
                  className="
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                />
              </label>
              <label htmlFor="phone" className="block border-b">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required="required"
                  className="
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                />
              </label>
              <label htmlFor="company" className="block border-b">
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company"
                  required="required"
                  className="
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                />
              </label>

              <label className="block border-b">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required="required"
                  placeholder="Tell us a little more about your cool project!"
                  className="
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-2xl font-bold
                    "
                ></textarea>
              </label>
              <div className="text-center">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 hover:bg-indigo-300 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
