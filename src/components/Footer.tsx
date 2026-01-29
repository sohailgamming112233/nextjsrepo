import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            inspiring vibrant musicians.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>New Delhi, India</li>
            <li>Delhi 10001</li>
            <li>info@musicschool.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} Music School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
