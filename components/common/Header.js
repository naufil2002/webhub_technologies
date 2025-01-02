import Link from "next/link";
import Image from "next/image";
// import { TitleLogo } from "./Title"
import logo from "../../assets/images/logo-main-removebg.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Image
              src={logo}
              alt="Company Logo"
              width={100}
              height={50}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Services
            </Link>
            <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              About Us
            </Link>
            <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              Showcase
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              Contact
            </Link>
            <button className="button-primary">book a consultation</button>
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
    </>
  );
};

export default Header;
