"use client";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import MarketTable from "../components/MarketTable";
import Features from "../components/Features";
import States from "../components/States";
import Howitwork from "../components/Howitwork";
import GlobalPresence from "../components/GlobalInfrastructure";
import NexusTradeFunding from "../components/NexusTradeFunding";

export default function Home() {
  return (
    <>
      {/* banner-block */}
      <Banner />
      {/* NAVBAR */}
      <Navbar />
      {/* HERO */}
      <HeroPage />
      {/* FEATURES */}
      <Features />
      {/* stats-strip */}
      <States />
      {/* How it Works */}
      <Howitwork />
      {/* GlobalPresence page */}
      <GlobalPresence />

      <NexusTradeFunding />

      {/* MARKETS TABLE */}
      <MarketTable />
    </>
  );
}
