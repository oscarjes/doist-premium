import React from "react";
import Link from "gatsby-link";
import Logo from "../../images/premium-logo.svg";

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-transparent">
      <div className="flex font-light flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-4">
        <Link to="/" className="flex items-center no-underline text-grey">
         <img src={Logo} className="" />
        </Link>

        <button
          className="block md:hidden border border-red flex items-center px-3 py-2 rounded text-grey"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-grey-dark"
            >
              How It Works
            </Link>

            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-dark"
            >
              Premium
            </Link>

            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-dark"
            >
              Business
            </Link>

            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-dark"
            >
              Pricing
            </Link>

            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-dark"
            >
              Log In
            </Link>

            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 no-underline font-bold text-grey-dark"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
