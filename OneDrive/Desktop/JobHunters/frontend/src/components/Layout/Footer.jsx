import React, { useContext } from "react";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Context } from "../../main";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Sushmitha.</div>
      <div>
        <Link to={"https://x.com/?lang=en"} target="_blank">
        <FaTwitter />
        </Link>
        <Link to={"https://www.youtube.com/"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://in.linkedin.com/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;