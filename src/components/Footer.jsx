import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./emailstyle.css";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-black  bg-opacity-30">
      <div className="container p-12 flex justify-between">
        <span>
          {" "}
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Image
              src={"./images/logo.svg"}
              alt="bridge kala"
              width={200}
              height={80}
              className="inverted-colors"
            />
          </Link>
        </span>
        <div className="flex flex-col gap-3 text-sm text-slate-600 font-semibold">
          <span className="text-lg text-white font-bold border-b-4 border-primary-500">
            Our links
          </span>
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Services</span>
          <span className="cursor-pointer">Blog</span>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-600 font-semibold">
          <span className="text-lg text-white font-bold border-b-4 border-primary-500">
            Our Services
          </span>
          <span className="cursor-pointer">Content Production</span>
          <span className="cursor-pointer">Design & Development</span>
          <span className="cursor-pointer">Marketing & Advertisement</span>
          <span className="cursor-pointer">Branding & PR</span>
          <span className="cursor-pointer">Management Event</span>
          <span className="cursor-pointer">Strategy & Growth</span>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-600 font-semibold">
          <span className="text-lg text-white font-bold border-b-4 border-primary-500">
            Other links
          </span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">Portfolio</span>
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms & Conditions</span>
          <span className="cursor-pointer">Support</span>
          <span className="cursor-pointer">GMB Profile</span>
        </div>
        <div></div>
        <p className="max-w-[200px] text-sm text-slate-400">
          Copyright © 2022. <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
