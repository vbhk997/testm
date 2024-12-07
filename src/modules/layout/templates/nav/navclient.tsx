// NavClient.tsx
"use client"; // This directive makes the component a Client Component

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import SideMenu from "@modules/layout/components/side-menu";
import AboutUs from "@modules/layout/components/about-us";
import Offering from "@modules/layout/components/offering";

const NavClient = ({ regions }: { regions: any }) => {
  const toggleMenu = () => {
    const dropdown = document.getElementById("mobile-dropdown");
    if (dropdown) {
      dropdown.classList.toggle("hidden"); // Toggle visibility
    }
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <button className="p-2" onClick={toggleMenu}>
            {/* Hamburger Icon */}
            <span className="block w-6 h-1 bg-ui-fg-base mb-1"></span>
            <span className="block w-6 h-1 bg-ui-fg-base mb-1"></span>
            <span className="block w-6 h-1 bg-ui-fg-base"></span>
          </button>
        </div>

        <LocalizedClientLink
          href="/"
          className="txt-compact-xlarge-plus hover:text-ui-fg-base text-center"
          data-testid="nav-store-link"
        >
          MyMedha
        </LocalizedClientLink>

        <div className="flex items-center">
          <LocalizedClientLink
            className="txt-compact-xlarge-plus hover:text-ui-fg-base"
            href="/account"
            data-testid="nav-account-link"
          >
            Account
          </LocalizedClientLink>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        id="mobile-dropdown"
        className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10 hidden"
      >
        <div className="flex flex-col items-start p-4">
          {/* Who We Are Section */}
          <div className="py-2">
            <h3 className="font-bold text-lg">Who We Are</h3>
            <LocalizedClientLink
              href="/purpose"
              className="py-1 hover:text-ui-fg-base"
            >
              Purpose
            </LocalizedClientLink>
            <div className="my-1"></div> {/* Gap */}
            <LocalizedClientLink
              href="/leadership"
              className="py-1 hover:text-ui-fg-base"
            >
              Advisors
            </LocalizedClientLink>
            <div className="my-1"></div> {/* Gap */}
            <LocalizedClientLink
              href="/founder"
              className="py-1 hover:text-ui-fg-base"
            >
              Founder
            </LocalizedClientLink>
          </div>

          {/* Offerings Section */}
          <div className="py-2">
            <h3 className="font-bold text-lg">Offerings</h3>
            <LocalizedClientLink
              href="/products/sparsh"
              className="py-1 hover:text-ui-fg-base"
            >
              Sparsh
            </LocalizedClientLink>
            <div className="my-1"></div> {/* Gap */}
            <LocalizedClientLink
              href="/products/chaitanya"
              className="py-1 hover:text-ui-fg-base"
            >
              Chaitanya
            </LocalizedClientLink>
            <div className="my-1"></div> {/* Gap */}
            <LocalizedClientLink
              href="/products/shashwat"
              className="py-1 hover:text-ui-fg-base"
            >
              Shashwat
            </LocalizedClientLink>
          </div>

          {/* About Us Section */}
          <div className="py-2">
            <h3 className="font-bold text-lg">About Us</h3>
            <LocalizedClientLink
              href="/aboutus"
              className="py-1 hover:text-ui-fg-base"
            >
              About Us
            </LocalizedClientLink>
          </div>

          {/* Contact Us Section */}
          <div className="py-2">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <LocalizedClientLink
              href="/contactus"
              className="py-1 hover:text-ui-fg-base"
            >
              Contact Us
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavClient;
