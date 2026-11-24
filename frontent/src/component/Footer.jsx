import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { MdAccessAlarms } from "react-icons/md";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F0BC04] text-black px-6 md:px-10  py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* Address - 1 */}
        <div>
          <div className="font-bold text-lg mb-3 flex items-center gap-2">
            <span>
              <SlLocationPin className="" size={20} />
            </span>
            Address - 1
          </div>
          <div>
            {" "}
            <span></span>
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">Mahim:</span> Shop No : 4, Karam
              Bhoomi Bldg, Mori Rd, Nr Mahim Bus Depot, Mahim West- 400016 <br />
              <br />
              <span className="font-semibold">New Mumbai- Nr Airport:</span>{" "}
              Bites n Grill inside Kartrax One, Nr Swami Samarth Math, Survey
              No: 93, H. No. 3/5, Panvel, Mosare, Nr Airport, New Mumbai- 410206
            </p>
          </div>
        </div>

        {/* Address - 2 */}
        <div>
          <div className="font-bold text-lg mb-3 flex items-center gap-2">
            <span>
              <SlLocationPin className="" size={20} />
            </span>
            Address - 2
          </div>
          <div>
            {" "}
            <span></span>
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">Chembur:</span> At Occassion Cake
              Shop OPP Post office Chembur east Nr Sandu Garden <br />
              Mumbai -400071
            </p>
          </div>
        </div>

        {/* Reservations */}
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <span>
              <IoCallOutline size={20} />
            </span>{" "}
            Reservations
          </h3>
          <p className="text-sm leading-relaxed">
            Mahim: <span className="text-red-600">+91 95049 02902</span> <br />
            New Mumbai nr Airport:{" "}
            <span className="text-red-600">+91 99878 59229</span> <br />
            Chembur: <span className="text-red-600">+91 91369 27424</span> <br />
            <span className="font-bold text-md">Email:</span>{" "}
            bitesngrill@gmail.com
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <span>
              <MdAccessAlarms size={20} />
            </span>{" "}
            Opening Hour
          </h3>
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">Chembur:</span> 1200 - 2400 <br />
            <span className="font-semibold">Mahim:</span> 1200 - 2400 <br />
            <span className="font-semibold">New Mumbai- Nr Airport:</span> 1400
            - 2200 <br />
            <span className="font-semibold">Every Day</span>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full border border-gray-200/45 hover:border-black duration-300 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-gray-200/45 hover:border-black duration-300 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-gray-200/45 hover:border-black duration-300 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm mt-10 border-t border-black/20 pt-4">
        © Copyright <span className="font-bold">BitesnGrill.</span> All Rights
        Reserved <br />
        Designed by{" "}
        <a href="https://amigowebster.com/" className="font-semibold">
          Amigowebster
        </a>
      </div>

      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
        >
          <IoIosArrowUp size={22} />
        </button>
      )}
    </footer>
  );
}
