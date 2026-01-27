"use client";
import Navbar from "@/components/Navbar";
import { Phone, Clock, Mail, MapPin } from "react-feather";

const Contact = () => {
  return (
    <div className=" w-full min-h-screen bg-white">
      <Navbar />
      {/* contact section */}
      <section className="flex flex-col pt-12 gap-5 items-center px-20 md:items-center md:px-30 md:gap-4 lg:items-start">
        <h1
          className="text-black text-4xl font-medium text-center md:text-center lg:text-start"
          style={{
            fontFamily: "var(--font-playfair-display)",
          }}
        >
          Get in Touch With Our Shop
        </h1>
        <p
          className="text-black w-[80%]  font-light text-center md:text-center md:w-[65%] sm-[80%] lg:text-left"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          incididunt ut Lorem ipsum dolor sit amet, consectetur.
        </p>
      </section>

      {/* forms */}
      <div className="flex flex-col w-full gap-6 mt-7 pb-10 justify-center items-center md:flex-col md:items-center md:px-10 md:gap-14  lg:items-center lg:flex-row sm:gap-3">
        {/* form content */}
         <form className="pt-5 flex flex-col gap-4 items-center w-[94%] rounded-3xl bg-[#F7F7F7] py-9 md:w-[90%] lg:w-[40%]">
            <h2
              className="text-black font-bold text-2xl max-w-65 text-center pt-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Let’s Talk About Your Product
            </h2>
            <label
              className="text-black text-sm font-medium self-start pl-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className=" w-[90%] h-12 rounded-lg border border-[#C7C7C7] bg-white pl-5 text-black placeholder:font-medium placeholder:text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            />

            <label
              className="text-black text-sm font-medium self-start pl-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="We’II get back to you"
              className=" w-[90%] h-12 rounded-lg border border-[#C7C7C7] bg-white pl-5 text-black placeholder:font-medium placeholder:text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            />

            <label
              className="text-black text-sm font-medium self-start pl-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Message
            </label>
            <textarea
              placeholder="Tell us how we can help"
              required
              className=" w-[90%] h-24 rounded-lg border border-[#C7C7C7] bg-white p-5 text-black placeholder:font-medium placeholder:text-sm resize-none"
              style={{ fontFamily: "var(--font-inter)" }}
            ></textarea>

            <input
              className="bg-[#19351a] text-white w-[60%] h-12 rounded-full mx-15  hover:bg-[#19351A] focus:outline-2 focus:outline-offset-2 focus:outline-[#19351A] active:bg-[#19351A]"
              type="submit"
            />
          </form> 

        <div className="w-full flex flex-col gap-4 items-center lg:w-[45%] lg:items-start lg:gap-3">
            <h1
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-black font-bold text-xl"
            >
              Prefer a Direct Approach?
            </h1>

            <div className="flex flex-row gap-3">
              <Phone color="black" size={18} />
              <h3
                style={{ fontFamily: "var(--font-inter)" }}
                className="text-black font-normal text-xs"
              >
                +62-8234-5674-8901
              </h3>
            </div>

            <div className="flex flex-row gap-3">
              <Clock color="black" size={18} />
              <h3
                style={{ fontFamily: "var(--font-inter)" }}
                className="text-black font-normal text-xs"
              >
                Monday to Sunday, 9 Am to 12 PM (GMT)
              </h3>
            </div>

            <div className="flex flex-row gap-3">
              <Mail color="black" size={18} />
              <h3
                style={{ fontFamily: "var(--font-inter)" }}
                className="text-black font-normal text-xs"
              >
                Xyz123456@gmail.com
              </h3>
            </div>

            <div className=" w-[90%] h-65 rounded-xl">
              <div className="relative w-full h-65 rounded-2xl overflow-hidden md:h-70 lg:h-85">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.472618262078!2d77.68875473975102!3d8.727760220513774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041185017eff2d%3A0xc67484ac20e5f4f2!2sTirunelveli%20Junction!5e0!3m2!1sen!2sin!4v1769330079011!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                />

                <div className="absolute bottom-3 left-[50%] -translate-x-1/2 w-[95%] bg-white rounded-xl shadow-lg p-4">
                  <h3
                    className="font-medium text-sm text-black"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Visit Our Shop
                  </h3>
                  <div className="flex flex-row gap-1 items-center">
                    <MapPin color="black" size={16} />
                    <p
                      className="text-xs text-gray-600 mt-1 font-medium"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      123 sass street, Innovate City, Techland
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/dir/?api=1&destination=Tirunelveli%20Junction",
                        "_blank",
                      )
                    }
                    className="mt-3 flex items-center gap-2 bg-[#19351a] text-white px-4 py-2 rounded-full text-sm  hover:bg-[#19351A] focus:outline-2 focus:outline-offset-2 focus:outline-[#19351A] active:bg-[#19351A]"
                  >
                    Get a Direction →
                  </button>
                </div>
              </div>
            </div>
          </div> 
      </div>
    </div>
  );
};

export default Contact;
