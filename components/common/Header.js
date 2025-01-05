import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo-main-removebg.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);  // State to track scroll

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);

    const handleScroll = () => {
      // Check if the user has scrolled past 100px (or any value you want)
      if (window.scrollY > 100) {
        setScrolling(true);  // Add sticky class when scrolled
      } else {
        setScrolling(false);  // Remove sticky class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <header className={scrolling ? "header header-with-scroll" : "header"}>
      <div className="container">
        <div className="headerlogo">
          <Image
            src={logo}
            alt="Company Logo"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <nav
  className={`openMenu ${open ? "active" : ""}`}
  onClick={() => setOpen(false)}
>
          <Link href="/" className={activeLink == "/" ? "activeLink" : ""}>
            Home
          </Link>
          <Link href="/services" className={activeLink == "/services" ? "activeLink" : ""}>
            Services
          </Link>
          <Link href="/agency" className={activeLink == "/agency" ? "activeLink" : ""}>
            About Us
          </Link>
          <Link href="/showcase" className={activeLink == "/showcase" ? "activeLink" : ""}>
            Showcase
          </Link>
          <Link href="/contact" className={activeLink == "/contact" ? "activeLink" : ""}>
            Contact
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
