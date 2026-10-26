import { useEffect, useState } from "react";
import "./App.css";

const photos = [
  {
    src: "/images/beacon-ridge-53.jpg",
    group: "Beacon Ridge",
    alt: "Beacon Ridge property exterior",
  },
  {
    src: "/images/beacon-ridge-41.jpg",
    group: "Beacon Ridge",
    alt: "Beacon Ridge property photograph",
  },
  {
    src: "/images/beacon-ridge-54.jpg",
    group: "Beacon Ridge",
    alt: "Beacon Ridge property detail",
  },
  {
    src: "/images/roseworthy-52.jpg",
    group: "Roseworthy",
    alt: "Roseworthy property photograph",
  },
  {
    src: "/images/ailanto-14.jpg",
    group: "Ailanto",
    alt: "Ailanto property exterior",
  },
  {
    src: "/images/ailanto-45.jpg",
    group: "Ailanto",
    alt: "Ailanto property photograph",
  },
  {
    src: "/images/ailanto-50.jpg",
    group: "Ailanto",
    alt: "Ailanto property detail",
  },
];

const services = [
  {
    number: "01",
    image: "/images/stock-3395.jpg",
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    number: "02",
    image: "/images/stock-107927.jpg",
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
  },
  {
    number: "03",
    image: "/images/stock-771.jpg",
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${
        isScrolled ? "site-header-scrolled" : ""
      }`}
    >
      <a
        href="#home"
        className="brand"
        aria-label="Marci Metzger home"
        onClick={closeMenu}
      >
        <img
          src="/images/marci-brand.png"
          alt="Marci Metzger — The Ridge Realty Group"
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#approach" onClick={closeMenu}>Buying & Selling</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-call" href="tel:+12069196886">
          Call Marci <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Marci Metzger · The Ridge Realty Group</p>

        <h1>
          Find your place
          <br />
          <span>in Pahrump.</span>
        </h1>

        <p className="hero-description">
          A more personal real estate experience, built around your next
          chapter.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#gallery">
            Explore the gallery <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-text" href="tel:+12069196886">
            Call now <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-caption">
          <span className="caption-line" />
          <span>Pahrump, Nevada · Real estate with a personal touch</span>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to introduction">
        <span>Discover more</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

function Introduction() {
  return (
    <section className="intro section" id="about">
      <div className="section-kicker">
        <span>01 / The introduction</span>
        <span>Meet your real estate professional</span>
      </div>

      <div className="intro-grid">
        <div className="intro-image-wrap">
          <img
            src="/images/marci-photo.jpg"
            alt="Photograph from Marci Metzger's original website"
            className="intro-image"
            loading="lazy"
          />
          <div className="image-note">Your local real estate connection</div>
        </div>

        <div className="intro-copy">
          <p className="eyebrow accent-text">Experience you can feel</p>
          <h2>
            Real estate is
            <br />
            <em>personal.</em>
          </h2>

          <p className="intro-name">Marci Metzger</p>
          <p className="intro-credential">Realtor for nearly 3 decades</p>

          <div className="short-rule" />

          <p className="body-copy">
            Finding a home or preparing to sell one is about more than a
            transaction. It is about understanding your goals, knowing the
            local market, and having someone you can turn to throughout
            the process.
          </p>

          <a className="text-link" href="#contact">
            Let’s talk about your plans <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="stats-band">
        <div className="stat">
          <span className="stat-number">~30</span>
          <span className="stat-label">Years of real estate experience</span>
        </div>
        <div className="stat">
          <span className="stat-number">~90</span>
          <span className="stat-label">Clients helped in 2021</span>
        </div>
        <div className="stat">
          <span className="stat-number">$28.5M</span>
          <span className="stat-label">Sales closed in 2021</span>
        </div>
      </div>

      <p className="stats-context">
        Our team works hard every day to grow and learn, so that we may
        continue to excel in our market. Our clients deserve our best, and
        we want to make sure our best is better every year.
      </p>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="section-kicker">
        <span>02 / How we help</span>
        <span>Guidance for your next move</span>
      </div>

      <div className="approach-heading">
        <p className="eyebrow accent-text">Buy with confidence. Sell with purpose.</p>
        <h2>Every move deserves <em>a plan.</em></h2>
      </div>

      <div className="approach-grid">
        <article className="approach-card seller-card">
          <span className="card-index">01 — SELLERS</span>
          <h3>
            Don’t just
            <br />
            list it...
            <br />
            <em>Get it sold.</em>
          </h3>
          <p>
            We exhaust every avenue to ensure our listings are at the
            fingertips of every possible buyer, getting you top dollar for
            your home.
          </p>
          <a className="text-link" href="#contact">
            Discuss selling your home <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article className="approach-card buyer-card">
          <span className="card-index">02 — BUYERS</span>
          <div className="buyer-image">
            <img
              src="/images/mountain-falls-pond.jpg"
              alt="Landscape photograph from the original website"
              loading="lazy"
            />
          </div>
          <h3>
            Guide
            <br />
            <em>to buyers.</em>
          </h3>
          <p>
            Nobody knows the market like we do. Enjoy having a pro at your
            service. Market analysis, upgrades lists, contractors on speed
            dial, and more!
          </p>
          <a className="text-link" href="#contact">
            Start your home search <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}

function PropertySearch() {
  const [searchNote, setSearchNote] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
    setSearchNote(
      "You're viewing photos from the original website. For current listing availability and property details, please contact Marci directly."
    );
  }

  return (
    <section className="property-search section" id="search">
      <div className="search-intro">
        <p className="eyebrow">The next chapter</p>
        <h2>
          Find your
          <br />
          <em>dream home.</em>
        </h2>
        <p>
          Start exploring. When you are ready for up-to-date listings,
          Marci can help you find the right place.
        </p>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-form-header">
          <span>Property search</span>
          <span className="search-icon" aria-hidden="true">⌕</span>
        </div>

        <div className="search-fields">
          <label>
            Location
            <select defaultValue="Pahrump">
              <option value="Pahrump">Pahrump</option>
              <option value="Other">Other area</option>
            </select>
          </label>

          <label>
            Type
            <select defaultValue="Any">
              <option value="Any">Any property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </label>

          <label>
            Sort by
            <select defaultValue="Recent">
              <option value="Recent">Most recent</option>
              <option value="PriceLow">Price: low to high</option>
              <option value="PriceHigh">Price: high to low</option>
            </select>
          </label>

          <label>
            Bedrooms
            <select defaultValue="Any">
              <option value="Any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </label>

          <label>
            Baths
            <select defaultValue="Any">
              <option value="Any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </label>

          <label>
            Min. price
            <input
              type="number"
              min="0"
              placeholder="$ Min"
              aria-label="Minimum price"
            />
          </label>

          <label>
            Max. price
            <input
              type="number"
              min="0"
              placeholder="$ Max"
              aria-label="Maximum price"
            />
          </label>
        </div>

        <button className="button button-primary search-button" type="submit">
          Search now <span aria-hidden="true">↗</span>
        </button>

        {searchNote && (
          <p className="form-notice" role="status">{searchNote}</p>
        )}
      </form>
    </section>
  );
}

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const photo = photos[activeIndex];

  const previousPhoto =
    previousIndex === null ? null : photos[previousIndex];

  // Preload all gallery photos to prevent a blank frame during transitions.
  useEffect(() => {
    photos.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  function goToSlide(index, direction = "next") {
    const nextIndex = (index + photos.length) % photos.length;

    if (nextIndex === activeIndex || isTransitioning) {
      return;
    }

    setPreviousIndex(activeIndex);
    setSlideDirection(direction);
    setActiveIndex(nextIndex);
    setIsTransitioning(true);

    window.setTimeout(() => {
      setPreviousIndex(null);
      setIsTransitioning(false);
    }, 850);
  }

  function previousSlide() {
    goToSlide(activeIndex - 1, "prev");
  }

  function nextSlide() {
    goToSlide(activeIndex + 1, "next");
  }

  return (
    <section className="gallery section" id="gallery">
      <div className="section-kicker">
        <span>03 / Photo gallery</span>
        <span>Discover the collection</span>
      </div>

      <div className="gallery-heading">
        <div>
          <p className="eyebrow accent-text">
            Selected property photography
          </p>

          <h2>
            Spaces worth <em>discovering.</em>
          </h2>
        </div>

        <p className="gallery-description">
          A closer look at the property photographs featured on
          Marci's original homepage.
        </p>
      </div>

      <div
        className="split-gallery"
        role="region"
        aria-roledescription="carousel"
        aria-label="Property photo gallery"
      >
        {/* Image panel */}
        <div className="split-gallery-visual">
          {previousPhoto && isTransitioning && (
            <figure
              className={`split-gallery-image gallery-image-outgoing turn-out-${slideDirection}`}
              aria-hidden="true"
            >
              <img src={previousPhoto.src} alt="" />
            </figure>
          )}

          <figure
            key={photo.src}
            className={`split-gallery-image gallery-image-incoming ${
              previousPhoto && isTransitioning
                ? `turn-in-${slideDirection}`
                : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="eager"
              decoding="async"
            />
          </figure>

          <div className="gallery-image-overlay" />

          <span className="gallery-image-brand">
            MARCI METZGER <span>·</span> THE RIDGE REALTY GROUP
          </span>

          <span className="gallery-image-counter" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")}
            <span> / {String(photos.length).padStart(2, "0")}</span>
          </span>

          <span className="gallery-image-caption">
            PROPERTY COLLECTION
          </span>
        </div>

        {/* Text panel */}
        <div className="split-gallery-content">
          <div
            key={photo.src}
            className={`gallery-slide-copy ${
              previousPhoto && isTransitioning
                ? `copy-${slideDirection}`
                : ""
            }`}
          >
            <p className="eyebrow accent-text">
              A closer look · {String(activeIndex + 1).padStart(2, "0")}
            </p>

            <h3>{photo.group}</h3>

            <div className="gallery-title-rule" />

            <p className="gallery-slide-description">
              Explore the property photography featured on the
              original homepage. For current listings, pricing, and
              availability, contact Marci directly.
            </p>

            <a className="gallery-contact-link" href="#contact">
              Start a conversation
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="gallery-navigation">
            <div className="gallery-dots" aria-label="Choose photograph">
              {photos.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className={
                    index === activeIndex
                      ? "gallery-dot gallery-dot-active"
                      : "gallery-dot"
                  }
                  aria-label={`Show photograph ${index + 1}: ${item.group}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  disabled={isTransitioning}
                  onClick={() =>
                    goToSlide(
                      index,
                      index > activeIndex ? "next" : "prev"
                    )
                  }
                />
              ))}
            </div>

            <div className="gallery-arrows">
              <button
                type="button"
                className="gallery-arrow"
                aria-label="Previous photograph"
                disabled={isTransitioning}
                onClick={previousSlide}
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                className="gallery-arrow gallery-arrow-next"
                aria-label="Next photograph"
                disabled={isTransitioning}
                onClick={nextSlide}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="gallery-footnote">
        Selected imagery from the original Marci Metzger homepage.
        Contact the team for current property information.
      </p>
    </section>
  );
}


function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-kicker">
        <span>04 / Our services</span>
        <span>Support throughout the journey</span>
      </div>

      <div className="services-heading">
        <p className="eyebrow accent-text">Good advice makes a difference</p>
        <h2>Real estate, <em>done right.</em></h2>
        <p className="services-intro">
          From your first questions to the next set of keys, have a
          knowledgeable professional in your corner.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-image">
              <img src={service.image} alt="" loading="lazy" />
              <span>{service.number}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a className="text-link" href="#contact">
              Learn more <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setFormMessage(
      "Your form passed browser validation, but this demo does not send messages yet. Please call Marci directly."
    );
  }

  return (
    <section className="contact section" id="contact">
      <div className="section-kicker">
        <span>05 / Get in touch</span>
        <span>Call or visit</span>
      </div>

      <div className="contact-grid">
        <div className="contact-copy">
          <p className="eyebrow accent-text">Let’s start a conversation</p>
          <h2>
            Your next move
            <br />
            starts <em>here.</em>
          </h2>
          <p>
            Have questions about buying, selling, or the Pahrump market?
            Reach out to Marci.
          </p>

          <a className="contact-phone" href="tel:+12069196886">
            (206) 919-6886 <span aria-hidden="true">↗</span>
          </a>

          <div className="contact-detail">
            <span className="detail-label">Visit the office</span>
            <address>
              3190 HW-160, Suite F
              <br />
              Pahrump, Nevada 89048
              <br />
              United States
            </address>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=3190+HW-160+Suite+F+Pahrump+Nevada+89048"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-detail">
            <span className="detail-label">Office hours</span>
            <p>Open daily · 8:00 am – 7:00 pm</p>
            <p className="hours-note">
              Appointments outside office hours available upon request.
              Just call!
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="eyebrow">Send a message</p>
          <h3>How can we help?</h3>

          <label>
            Your name
            <input name="name" type="text" autoComplete="name" required />
          </label>

          <label>
            Email address *
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </label>

          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>

          <button className="button button-primary" type="submit">
            Send message <span aria-hidden="true">↗</span>
          </button>

          {formMessage && (
            <p className="form-notice" role="status">{formMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="#home" className="footer-brand">
          <img
            src="/images/marci-brand.png"
            alt="Marci Metzger — The Ridge Realty Group"
            loading="lazy"
          />
        </a>

        <p>
          Thoughtful guidance.
          <br />
          A more personal move.
        </p>

        <a className="footer-top" href="#home">
          Back to top ↑
        </a>
      </div>

      <div className="footer-bottom">
        <span>Marci Metzger · The Ridge Realty Group</span>
        <span>3190 HW-160, Suite F, Pahrump, Nevada 89048</span>
        <span>© {new Date().getFullYear()} · All rights reserved</span>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      [
        ".section-kicker",
        ".intro-grid",
        ".stat",
        ".stats-context",
        ".approach-heading",
        ".approach-card",
        ".search-intro",
        ".search-form",
        ".gallery-heading",
        ".split-gallery",
        ".services-heading",
        ".service-card",
        ".contact-copy",
        ".contact-form",
      ].join(",")
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Add reveal classes to individual statistics, not the whole stats band.
    targets.forEach((element) => element.classList.add("reveal"));

    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Approach />
        <PropertySearch />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}