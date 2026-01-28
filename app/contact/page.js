"use client";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Phone, Clock, Mail, MapPin } from "react-feather";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Contact = () => {
  return (
    <>
      {/* contact section */}
      <section className=" w-full min-h-screen bg-white">
        <Navbar />
        {/* text */}
        <div className="flex flex-col pt-12 gap-5 items-center md:items-center md:px-36 md:gap-4 lg:items-start">
          <h1
            className="text-black text-4xl font-medium w-[80%] text-center md:text-center lg:text-start"
            style={{
              fontFamily: "var(--font-playfair-display)",
            }}
          >
            Get in Touch With Our Shop
          </h1>
          <p
            className={`${inter.className} text-black w-[80%] font-light text-center md:text-center md:w-[65%] sm-[80%] lg:text-left`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            incididunt ut Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>

        {/* forms */}
        <div className="flex flex-col w-full gap-6 py-8 justify-center items-center md:flex-col md:items-center md:gap-14  lg:items-center lg:flex-row sm:gap-3 lg:pl-16">
          {/* form content */}
          <form className="pt-5 flex flex-col gap-4 items-center w-[90%] rounded-3xl bg-[#F7F7F7] py-9 md:w-[90%] lg:w-[40%]">
            <h2
              className={`${inter.className} text-black font-bold text-2xl max-w-65 self-center text-center  pt-4 md:self-center lg:self-center`}
            >
              Let’s Talk About Your Product
            </h2>
            <label
              className={`${inter.className} text-black text-sm font-medium self-start pl-8`}
            >
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className={`${inter.className} w-[90%] h-12 rounded-lg border border-[#C7C7C7] bg-white pl-5 text-black placeholder:font-medium placeholder:text-sm`}
            />

            <label
              className={`${inter.className} text-black text-sm font-medium self-start pl-8`}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="We’II get back to you"
              className={`${inter.className} w-[90%] h-12 rounded-lg border border-[#C7C7C7] bg-white pl-5 text-black placeholder:font-medium placeholder:text-sm`}
            />

            <label
              className={`${inter.className} text-black text-sm font-medium self-start pl-8`}
            >
              Message
            </label>
            <textarea
              placeholder="Tell us how we can help"
              required
              className={`${inter.className} w-[90%] h-24 rounded-lg border border-[#C7C7C7] bg-white p-5 text-black placeholder:font-medium placeholder:text-sm resize-none`}
            ></textarea>

            <input
              className={`${inter.className} bg-[#19351a] text-white w-[60%] h-12 rounded-full mx-15  hover:bg-[#19351A] focus:outline-2 focus:outline-offset-2 focus:outline-[#19351A] active:bg-[#19351A]`}
              type="submit"
            />
          </form>

          <div className="w-full flex flex-col gap-4 items-center lg:w-[45%] lg:items-start lg:gap-3">
            <h1 className={`${inter.className} text-black font-bold text-xl`}>
              Prefer a Direct Approach?
            </h1>

            <div className="flex flex-row gap-3">
              <Phone color="black" size={18} />
              <h3
                className={`${inter.className} text-black font-normal text-xs`}
              >
                +62-8234-5674-8901
              </h3>
            </div>

            <div className="flex flex-row gap-3">
              <Clock color="black" size={18} />
              <h3
                className={`${inter.className} text-black font-normal text-xs`}
              >
                Monday to Sunday, 9 Am to 12 PM (GMT)
              </h3>
            </div>

            <div className="flex flex-row gap-3">
              <Mail color="black" size={18} />
              <h3
                className={`${inter.className} text-black font-normal text-xs`}
              >
                Xyz123456@gmail.com
              </h3>
            </div>

            <div className=" w-[90%] h-72 rounded-xl">
              <div className="relative rounded-2xl overflow-hidden  h-64 md:h-72 lg:h-80">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.472618262078!2d77.68875473975102!3d8.727760220513774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041185017eff2d%3A0xc67484ac20e5f4f2!2sTirunelveli%20Junction!5e0!3m2!1sen!2sin!4v1769330079011!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                />

                <div className="absolute bottom-3 left-[50%] -translate-x-1/2 w-[95%] bg-white rounded-xl shadow-lg p-4">
                  <h3
                    className={`${inter.className} font-medium text-sm text-black`}
                  >
                    Visit Our Shop
                  </h3>
                  <div className="flex flex-row gap-1 items-center">
                    <MapPin color="black" size={16} />
                    <p
                      className={`${inter.className} text-xs text-gray-600 mt-1 font-medium`}
                      // style={{ fontFamily: "var(--font-inter)" }}
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
                    className={`${inter.className} mt-3 flex items-center gap-2 bg-[#19351a] text-white px-4 py-2 rounded-full text-sm  hover:bg-[#19351A] focus:outline-2 focus:outline-offset-2 focus:outline-[#19351A] active:bg-[#19351A]`}
                  >
                    Get a Direction →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Contact;
