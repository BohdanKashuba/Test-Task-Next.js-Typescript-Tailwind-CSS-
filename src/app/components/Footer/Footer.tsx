import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";

import Container from "../Container";

import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="py-2 text-center text-white bg-gradient-to-r from-orange-200 to-green-200">
      <Container>
        <p className="text-2xl my-1">This is the best footer</p>
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:underline focus:underline"
          >
            <span>Come back</span>
            <Image src={Logo} alt="Pinapple Store" />
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
