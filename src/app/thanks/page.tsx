import type { NextPage } from "next";
import Image from "next/image";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Logo from "../assets/images/splash.png";

const Thanks: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="pt-[120px] grow">
        <Container>
          <div className="flex items-center flex-col gap-4 py-6">
            <Image src={Logo} alt="Thank you" className="max-w-[500px] w-full" />
            <h2 className="text-5xl text-white">Thanks for your time</h2>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Thanks;
