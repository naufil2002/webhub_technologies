import Head from "next/head";
import { Hero } from "@/sections";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home - Web Hub Technologies"
        description="Empowering Your Digital Journey with Web Development and SEO Services."
        openGraph={{
          url: "https://webhubtechnologies.in",
          title: "Home - Web Hub Technologies",
          description: "Empowering Your Digital Journey.",
          images: [
            {
              url: "../public/logo.png",
              width: 800,
              height: 600,
              alt: "Web Hub Technologies Logo",
            },
          ],
          site_name: "Web Hub Technologies",
        }}
      />
      <Hero />
    </>
  );
}
