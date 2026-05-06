import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import img1 from "../imports/1.PNG";
import img2 from "../imports/2.PNG";
import img4 from "../imports/4.PNG";
import img5 from "../imports/5.PNG";
import img6 from "../imports/6.PNG";
import img7 from "../imports/7.PNG";
import img10 from "../imports/10.PNG";
import img11 from "../imports/11.PNG";
import img12 from "../imports/12.PNG";
import img13 from "../imports/13.PNG";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <span
                className="text-2xl tracking-wider uppercase text-stone-900"
                style={{ letterSpacing: "0.15em" }}
              >
                Moneeb Apparels
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "about",
                "services",
                "collection",
                "facility",
                "sustainability",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-stone-700 hover:text-stone-900 capitalize tracking-wide transition-colors text-sm"
                >
                  {item === "collection" ? "Products" : item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="text-stone-900"
              >
                {mobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200"
          >
            <div className="px-6 pt-4 pb-6 space-y-3">
              {[
                "home",
                "about",
                "services",
                "collection",
                "facility",
                "sustainability",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 capitalize transition-colors"
                >
                  {item === "collection" ? "Products" : item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 min-h-screen flex items-center bg-stone-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm tracking-widest uppercase text-stone-600 mb-6"
              >
                Premium Textile Manufacturing
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl mb-8 text-stone-900 tracking-tight"
                style={{ lineHeight: "1.1" }}
              >
                Crafting Quality
                <br />
                <span className="italic font-serif">
                  Since 1990
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-stone-600 mb-12 leading-relaxed max-w-xl"
              >
                Three decades of excellence in full-package
                apparel manufacturing, delivering premium
                quality garments to international brands
                worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-10 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-all flex items-center gap-2 group"
                >
                  <span className="tracking-wide">
                    Start a Project
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={() => scrollToSection("collection")}
                  className="px-10 py-4 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all"
                >
                  <span className="tracking-wide">
                    View Collection
                  </span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300 -rotate-3"></div>
              <img
                src={img1}
                alt="Moneeb Apparels Facility"
                className="relative z-10 w-full shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={img2}
                alt="About Moneeb Apparels"
                className="w-full shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-widest uppercase text-stone-600 mb-6">
                Our Story
              </p>
              <h2 className="text-4xl lg:text-5xl mb-8 text-stone-900 tracking-tight">
                Heritage of{" "}
                <span className="italic font-serif">
                  Excellence
                </span>
              </h2>

              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  <span className="text-stone-900">
                    Moneeb Apparels
                  </span>{" "}
                  stands as a trusted name in full-package
                  apparel manufacturing, with over three decades
                  of expertise serving international brands and
                  retailers.
                </p>
                <p>
                  From initial concept through to final
                  delivery, we orchestrate every phase of
                  production with precision. Our comprehensive
                  services span product design, premium fabric
                  sourcing, meticulous sample development, bulk
                  production, and timely global delivery.
                </p>
                <p>
                  Our commitment is built on three pillars:
                  unwavering reliability, technical mastery, and
                  ethical manufacturing practices that respect
                  both people and planet.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-stone-200">
                <div>
                  <div className="text-4xl text-stone-900 mb-2">
                    30+
                  </div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">
                    Years
                  </div>
                </div>
                <div>
                  <div className="text-4xl text-stone-900 mb-2">
                    15K
                  </div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">
                    Units/Month
                  </div>
                </div>
                <div>
                  <div className="text-4xl text-stone-900 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">
                    Quality
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest uppercase text-stone-600 mb-6">
              What We Offer
            </p>
            <h2 className="text-4xl lg:text-5xl text-stone-900 tracking-tight">
              Full-Service{" "}
              <span className="italic font-serif">
                Manufacturing
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                "Product Development & Design",
                "End-to-End Manufacturing Solutions",
                "Global Supply Chain Management",
                "Quality Assurance & Compliance",
                "Rapid Turnaround Times",
                "Competitive Pricing Models",
                "Dedicated Account Management",
                "International Export Services",
                "Long-Term Partnership Focus",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1">
                    <Check
                      size={20}
                      className="text-stone-900"
                    />
                  </div>
                  <span className="text-lg text-stone-700 group-hover:text-stone-900 transition-colors">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={img4}
                alt="Our Services"
                className="w-full shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Collection */}
      <section id="collection" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest uppercase text-stone-600 mb-6">
              Our Collection
            </p>
            <h2 className="text-4xl lg:text-5xl text-stone-900 tracking-tight mb-6">
              Premium{" "}
              <span className="italic font-serif">
                Product Range
              </span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Expertly crafted garments designed for modern
              living
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={img5}
                alt="Product Collection"
                className="w-full shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-3xl text-stone-900 mb-8 tracking-tight">
                Product Categories
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Polo Shirts",
                  "T-Shirts",
                  "Henley Shirts",
                  "Sweatshirts",
                  "Hoodies",
                  "Mock Neck Zip-Ups",
                  "Joggers",
                  "Shorts",
                  "Men's Wear",
                ].map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.4,
                    }}
                    className="py-4 border-b border-stone-200 text-stone-700 hover:text-stone-900 transition-colors"
                  >
                    {product}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Capabilities */}
          <div className="bg-stone-900 text-white py-20 px-12 rounded-sm">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl tracking-tight mb-4">
                Manufacturing{" "}
                <span className="italic font-serif">
                  Capabilities
                </span>
              </h3>
              <p className="text-stone-400">
                Industry-leading production capacity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  process: "Dyeing",
                  capacity: "3,000 Kgs/Dispatch",
                },
                {
                  process: "Cutting",
                  capacity: "15,000 units/month",
                },
                {
                  process: "Sewing",
                  capacity: "15,000 units/month",
                },
                {
                  process: "Packing",
                  capacity: "15,000 units/month",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="text-center border-t-2 border-white/20 pt-6"
                >
                  <div className="text-4xl mb-3">
                    {item.capacity}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-stone-400">
                    {item.process}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <img
                src={img6}
                alt="Manufacturing Capabilities"
                className="w-full rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section id="facility" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest uppercase text-stone-600 mb-6">
              Our Facility
            </p>
            <h2 className="text-4xl lg:text-5xl text-stone-900 tracking-tight">
              State-of-the-Art{" "}
              <span className="italic font-serif">
                Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: img7,
                title: "Head Office & Executive Block",
                desc: "Modern administrative facilities",
              },
              {
                img: img10,
                title: "Sample Room & Production Floor",
                desc: "Cutting-edge manufacturing space",
              },
              {
                img: img11,
                title: "Packing & Accessory Store",
                desc: "Efficient logistics operations",
              },
              {
                img: img12,
                title: "Safety & Compliance",
                desc: "Industry-leading safety standards",
              },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="group relative overflow-hidden bg-white shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl text-stone-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-stone-600">
                    {facility.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-widest uppercase text-stone-600 mb-6">
                Sustainability
              </p>
              <h2 className="text-4xl lg:text-5xl text-stone-900 tracking-tight mb-12">
                Committed to a{" "}
                <span className="italic font-serif">
                  Better Future
                </span>
              </h2>

              <div className="space-y-10">
                {[
                  {
                    title: "Solar Energy Initiative",
                    desc: "Rooftop solar power plant significantly reduces our carbon footprint and dependence on conventional energy sources.",
                  },
                  {
                    title: "Water Treatment Facility",
                    desc: "On-site treatment ensures all industrial wastewater is properly cleansed before discharge, protecting our environment.",
                  },
                  {
                    title: "Government Certified",
                    desc: "Licensed by the Federal Government of Pakistan for waste control and raw material regeneration.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.5,
                    }}
                    className="border-l-2 border-stone-900 pl-6"
                  >
                    <h3 className="text-xl text-stone-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={img13}
                alt="Sustainability Practices"
                className="w-full shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 bg-stone-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-widest uppercase text-stone-400 mb-6">
                Get in Touch
              </p>
              <h2 className="text-4xl lg:text-5xl tracking-tight mb-8">
                Let's Create{" "}
                <span className="italic font-serif">
                  Together
                </span>
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed mb-12">
                Ready to elevate your brand with premium
                manufacturing? Our team is here to bring your
                vision to life.
              </p>

              <button className="px-10 py-4 bg-white text-stone-900 hover:bg-stone-100 transition-all flex items-center gap-2 group">
                <span className="tracking-wide">
                  Schedule Consultation
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="border-t border-white/20 pt-8">
                <div className="text-sm uppercase tracking-widest text-stone-400 mb-3">
                  Location
                </div>
                <div className="text-xl">
                  Moneeb Apparels
                  <br />
                  Industrial Area
                  <br />
                  Pakistan
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <div className="text-sm uppercase tracking-widest text-stone-400 mb-3">
                  Email
                </div>
                <div className="text-xl">
                  info@moneebapparels.com
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <div className="text-sm uppercase tracking-widest text-stone-400 mb-3">
                  Phone
                </div>
                <div className="text-xl">+92 XXX XXXXXXX</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
            <div className="text-sm tracking-widest uppercase mb-4 md:mb-0">
              Moneeb Apparels
            </div>
            <div className="text-sm text-stone-400">
              © 2026 Moneeb Apparels. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}