import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import AfterHero from "../components/Hero/AfterHero";
import Building from "../components/Hero/Building";
import TheVision from "../components/Hero/TheVision";
import CrossChain from "../components/Hero/CrossChain";
import FAQS from "../components/Hero/FAQS";
import Goals from "../components/Hero/Goals";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AfterHero />
      <Building />
      <TheVision />
      <Goals />
      <CrossChain />
      <FAQS />
    </Layout>
  );
}
