import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";

const Social = () => {
  return (
    <div>
      <Link href="https://github.com/HoangTienDinh" target="blank">
        <GitHubIcon />
      </Link>
      <Link href="https://www.linkedin.com/in/hoangdinh90/" target="blank">
        <LinkedInIcon />
      </Link>
      <Link href="https://www.instagram.com/hohohoang/" target="blank">
        <InstagramIcon />
      </Link>
      <Link href="mailto:hoangdinh90@gmail.com" target="blank">
        <EmailIcon />
      </Link>
    </div>
  );
};

export default Social;
