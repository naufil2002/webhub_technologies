import Layout from "@/components/common/Layout";
import "@/styles/main.scss"; // Ensure global styles are imported
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time for the logo animation

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  useEffect(() => {
    // Show scroll-to-top button when scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <DefaultSeo {...SEO} />
      {/* Preloader */}
      {isLoading && (
        <div id="preloader">
          <div className="logo-animation">
            <img src="/logo.png" alt="Logo" />
            <span className="gradient-text">Welcome to Our Website</span>
          </div>
        </div>
      )}

      {/* Render content after preloader */}
      {!isLoading && (
        <Layout>
          <Component {...pageProps} />
          {/* Scroll-to-Top Button */}
          {showScroll && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              ↑
            </button>
          )}
        </Layout>
      )}
    </>
  );
}
