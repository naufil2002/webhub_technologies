import Head from 'next/head';
import { Hero } from "@/sections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Hub Technologies</title>
        <meta name="description" content="Empowering Your Digital Journey" />
        <meta property="og:title" content="Web Hub Technologies" />
        <meta property="og:description" content="Empowering Your Digital Journey" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://webhubtechnologies.in" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
    </>
  );
}
