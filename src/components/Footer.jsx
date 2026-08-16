import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  const quickLinks = ["Home", "About Us", "Contact", "Privacy Policy", "Terms of Service"];

  return (
    <div className="bg-base-300 mt-10">
      <Wrapper>
        {/* Main Footer Content */}
        <footer className="footer md:footer-horizontal p-10 text-base-content">
          {/* Categories Section */}
          <nav>
            <h6 className="footer-title text-lg">News Categories</h6>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <a key={category} className="link link-hover capitalize">
                  {category}
                </a>
              ))}
            </div>
          </nav>

          {/* Quick Links Section */}
          <nav>
            <h6 className="footer-title text-lg">Quick Links</h6>
            {quickLinks.map((link) => (
              <a key={link} className="link link-hover">
                {link}
              </a>
            ))}
          </nav>

          {/* About Section */}
          <nav>
            <h6 className="footer-title text-lg">About News App</h6>
            <p className="text-sm max-w-xs">
              Your trusted source for news from around the world. Get instant updates on trending topics and breaking news across all categories.
            </p>
          </nav>
        </footer>

        {/* Bottom Footer */}
        <footer className="footer border-t border-base-200 px-10 py-6 text-base-content">
          <aside className="grid-flow-col items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">📰</span>
            </div>
            <div>
              <p className="font-bold">News App</p>
              <p className="text-sm">Stay informed. Stay updated.</p>
            </div>
          </aside>

          {/* Social Media Links */}
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a href="#" className="link link-hover" title="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="link link-hover" title="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" className="link link-hover" title="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" className="link link-hover" title="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>

        {/* Copyright */}
        <div className="text-center py-4 border-t border-base-200">
          <p className="text-sm text-base-content/70">
            &copy; 2026 News App. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
