import type { NextPage } from "next";

import Clients from "./components/Clients";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      <main className="pt-[60px]">
        <Container>
          <Hero />
          <Clients />
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
