import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const columns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Produce Boxes", href: "#" },
      { label: "CSA Membership", href: "#" },
      { label: "Wholesale", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Recipes", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Shipping Policy", href: "#" },
      { label: "Returns", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

const MobileColumn: React.FC<{ column: FooterColumn }> = ({ column }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-green/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-sm font-semibold text-black"
      >
        {column.title}
        <ChevronDown
          size={16}
          className={`text-earth/40 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <ul className="pb-4 space-y-3">
          {column.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-earth/60 hover:text-green transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-green-800 border-t border-green/ text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(135,169,107,0.04),transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-15 relative">
        {/* Top section: Logo + description + social */}
        <div className="py-16 lg:pb-12">
          <div className="grid lg:grid-cols-6 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  
                  <motion.a
                    href="/"
                    className="inline-block mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src="dark_logo.jpg"
                      alt="Blacc Farms Logo"
                      className="h-20 w-auto object-contain"
                    />
                  </motion.a>
                </div>
                <p className="text-sm text-earth/60 leading-relaxed max-w-xs">
                  Sustainable, organic farming committed to bringing the
                  freshest produce to your table while nurturing the land for
                  future generations.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-3 mt-6 text-black">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-white border border-green/10 flex items-center justify-center text-earth/50 hover:text-green hover:border-green/30 hover:shadow-md transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop navigation columns */}
            <div className="hidden lg:grid lg:col-span-4 grid-cols-4 gap-8">
              {columns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold text-black mb-5">
                    {column.title}
                  </h3>
                  <ul className="space-y-3.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 3 }}
                          className="text-sm text-earth/60 hover:text-green transition-colors duration-200 inline-block"
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile accordion columns */}
            <div className="lg:hidden">
              {columns.map((column) => (
                <MobileColumn key={column.title} column={column} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-green/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-earth/50">
          <p>
            &copy; {new Date().getFullYear()} Blacc Farms. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-green transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-earth/20">|</span>
            <a
              href="#"
              className="hover:text-green transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="text-earth/20">|</span>
            <a
              href="#"
              className="flex items-center gap-1.5 hover:text-green transition-colors duration-200"
            >
              <Mail size={12} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
