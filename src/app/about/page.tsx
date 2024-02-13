import { NextPage } from "next";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="pt-[120px] grow">
        <Container>
          <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-md shadow-md">
            <h1 className="text-3xl font-semibold mb-4">About Us</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default About;
