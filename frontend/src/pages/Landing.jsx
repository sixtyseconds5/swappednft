import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Characters from "../components/Characters";
import Legend from "../components/Legend";
import FAQ from "../components/FAQ";
import ApplyCTA from "../components/ApplyCTA";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Characters />
      <Legend />
      <FAQ />
      <ApplyCTA />
      <Footer />
    </main>
  );
};

export default Landing;
