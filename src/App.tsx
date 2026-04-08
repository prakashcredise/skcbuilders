import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Hammer, 
  Paintbrush, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
            <Building2 className="text-paper w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">SKC <span className="text-accent">BUILDERS</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-paper px-6 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper border-b border-primary/5 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif font-medium hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-paper px-6 py-3 text-center text-sm font-medium uppercase tracking-widest"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/50 via-paper/20 to-paper"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-medium uppercase tracking-[0.3em] mb-4">Established Excellence</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 text-balance">
            Crafting Spaces That <span className="italic text-accent">Inspire</span> Living.
          </h1>
          <p className="text-lg text-primary/70 max-w-lg mb-10 leading-relaxed">
            SKC Builders brings decades of expertise to Bangalore's skyline. From luxury residences to commercial landmarks, we build with precision, passion, and integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary text-paper px-8 py-4 flex items-center gap-2 hover:bg-accent transition-all group">
              View Our Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="border border-primary/20 px-8 py-4 hover:bg-primary hover:text-paper transition-all">
              Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-paper shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Home Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-accent p-8 text-paper shadow-xl max-w-[200px]">
            <p className="text-4xl font-serif font-bold mb-1">15+</p>
            <p className="text-xs uppercase tracking-widest opacity-80">Years of Building Trust in Bangalore</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Residential Construction",
      desc: "Bespoke villas and premium apartments designed for modern living and lasting value."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Commercial Projects",
      desc: "Functional and aesthetic commercial spaces that drive business growth and efficiency."
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Interior Design",
      desc: "Curated interiors that reflect your personality and enhance the functionality of every room."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Renovation & Remodeling",
      desc: "Transforming existing structures into contemporary masterpieces with minimal disruption."
    }
  ];

  return (
    <section id="services" className="py-24 bg-primary text-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <span className="text-accent font-medium uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Comprehensive Building Solutions</h2>
          </div>
          <p className="text-paper/60 max-w-md">
            We provide end-to-end construction services, ensuring every detail from foundation to finishing is handled with utmost care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-paper/10 hover:border-accent transition-colors group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left">
                {s.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-paper/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "The Emerald Heights",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    },
    {
      title: "Skyline Corporate Park",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Vintage Villa Remodel",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1600607687940-47a0f9259017?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Modern Minimalist Loft",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-accent font-medium uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Landmarks</h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors">
            View All Projects <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video overflow-hidden cursor-pointer"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent text-xs uppercase tracking-[0.2em] mb-2">{p.category}</span>
                <h3 className="text-paper text-2xl font-serif font-bold">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
              alt="Construction Site" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-6 -right-6 bg-paper p-6 shadow-xl border border-primary/5 hidden md:block">
            <p className="text-sm font-medium italic">"Quality is not an act, it is a habit."</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium uppercase tracking-[0.3em] mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Building Bangalore's Future Since 2010</h2>
          <div className="space-y-6 text-primary/70 leading-relaxed">
            <p>
              SKC Builders started with a simple vision: to redefine the construction landscape in Bangalore by prioritizing quality over quantity. Over the years, we have grown from a small team of passionate builders to a full-service development firm.
            </p>
            <p>
              Our approach is rooted in transparency and collaboration. We believe that every project is a partnership between us and our clients. By combining traditional craftsmanship with modern engineering, we deliver structures that stand the test of time.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-3xl font-serif font-bold text-primary">150+</p>
                <p className="text-xs uppercase tracking-widest">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-primary">98%</p>
                <p className="text-xs uppercase tracking-widest">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary text-paper rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-accent/5">
            <span className="text-accent font-medium uppercase tracking-[0.3em] mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Let's Discuss Your Project</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-paper/60 text-sm">Near Ashwini Public School, Marappa Layout, Bangalore, Karnataka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-paper/60 text-sm">+91 80-XXXX-XXXX</p>
                  <p className="text-paper/60 text-sm">+91 9XXX-XXX-XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-paper/60 text-sm">info@skcbuilders.in</p>
                  <p className="text-paper/60 text-sm">sales@skcbuilders.in</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20 bg-paper text-primary">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                  <input type="text" className="w-full border-b border-primary/20 py-3 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                  <input type="email" className="w-full border-b border-primary/20 py-3 focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Subject</label>
                <select className="w-full border-b border-primary/20 py-3 focus:border-accent outline-none transition-colors bg-transparent">
                  <option>Residential Construction</option>
                  <option>Commercial Project</option>
                  <option>Interior Design</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                <textarea rows={4} className="w-full border-b border-primary/20 py-3 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-primary text-paper py-4 font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-paper border-t border-primary/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm">
                <Building2 className="text-paper w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">SKC <span className="text-accent">BUILDERS</span></span>
            </a>
            <p className="text-sm text-primary/60 leading-relaxed mb-6">
              Building excellence with integrity and passion. Your trusted partner for construction and development in Bangalore.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-primary/60">
              <li><a href="#projects" className="hover:text-accent transition-colors">Featured Projects</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Company</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-primary/60">
              <li><a href="#" className="hover:text-accent transition-colors">Residential Building</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial Spaces</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Interior Architecture</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Structural Renovation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-primary/60 mb-4">Subscribe to get latest project updates.</p>
            <div className="flex border-b border-primary/20">
              <input type="email" placeholder="Your email" className="bg-transparent py-2 text-sm outline-none w-full" />
              <button className="text-accent"><ArrowRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary/40 uppercase tracking-widest">
          <p>© 2026 SKC Builders. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
