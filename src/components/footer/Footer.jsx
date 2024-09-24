import React from "react";
import logo from "../../assets/images/logo-new.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img src={logo} alt="logo" className="w-64" />
          <p>
            Creative Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <aside className="bg-base-200 text-center pb-4">
        <p>
          Copyright Ⓒ 2021 Creatives For You. All rights reserved | Company No:
          12095620.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
