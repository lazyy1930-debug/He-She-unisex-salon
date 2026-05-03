import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Scissors,
  Sparkles,
  Droplets,
  Award,
  Clock,
  ThumbsUp,
  MapPin,
  Phone,
  MessageCircle,
  Menu,
  X,
  Star,
  Instagram,
  HeartHandshake
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const whatsappNumber = "917975446634";
  const whatsappMessage = "Hi, I would like to book an appointment at He & She Family Unisex Salon.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { icon: Scissors, title: "Haircut & Styling", price: "From ₹150", desc: "Precision cuts and modern styling for all hair types." },
    { icon: Droplets, title: "Beard Grooming", price: "From ₹100", desc: "Classic shaves, beard trimming, and shaping." },
    { icon: Sparkles, title: "Facial & Skincare", price: "From ₹400", desc: "Rejuvenating facials, cleanups, and glow treatments." },
    { icon: Scissors, title: "Hair Coloring", price: "From ₹500", desc: "Global color, highlights, and root touch-ups." },
    { icon: Award, title: "Bridal & Groom", price: "Custom", desc: "Complete wedding day makeovers and pre-wedding packages." },
    { icon: HeartHandshake, title: "Spa & Massage", price: "From ₹800", desc: "Relaxing head and shoulder massages." }
  ];

  const features = [
    { icon: Award, title: "Experienced Professionals", desc: "Our team consists of highly trained and skilled stylists." },
    { icon: Sparkles, title: "Hygienic Environment", desc: "We maintain strict hygiene and sanitize tools after every use." },
    { icon: ThumbsUp, title: "Affordable Pricing", desc: "Premium services that won't break the bank." },
    { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Your happiness is our top priority. We listen to your needs." }
  ];

  const reviews = [
    { name: "Rahul S.", rating: 5, text: "Best salon in KGF! The haircut was perfect and the staff is very polite and professional." },
    { name: "Priya V.", rating: 5, text: "Loved my bridal makeup here. They really understand what suits you best. Highly recommended!" },
    { name: "Arun Kumar", rating: 5, text: "Great ambiance and very clean. My go-to place for beard grooming and facials." },
    { name: "Kavya M.", rating: 5, text: "Premium feeling at very reasonable prices. Excellent hair coloring services." }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen font-sans text-gray-200">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#D4AF37] text-black w-full py-3 px-4 z-[60] relative flex flex-col items-center justify-center text-center gap-1.5 shadow-sm">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <Star size={12} className="fill-current hidden sm:block" />
          Trusted by 1000+ Happy Customers in KGF
          <Star size={12} className="fill-current hidden sm:block" />
        </span>
        <span className="text-[9px] sm:text-[10px] font-medium opacity-90 uppercase tracking-widest max-w-3xl">
          Get the perfect haircut, grooming, and skincare from experienced professionals at He & She Salon.
        </span>
      </div>

      {/* Navbar segment */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <a href="#home" className="text-2xl font-serif text-[#D4AF37] tracking-widest uppercase leading-none">
                He & She
              </a>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 mt-1">Family Unisex Salon</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </a>
              ))}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Book: +91 79754 46634
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#D4AF37]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-[#D4AF37] rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex justify-center">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#D4AF37] text-black px-4 py-3 rounded-md font-bold text-[11px] uppercase tracking-widest"
                >
                  <MessageCircle size={16} />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content Area adjustments to match theme layout */}
      <main className="flex-1 flex flex-col gap-6 p-4 sm:p-8 overflow-hidden max-w-7xl mx-auto mt-2">
        
        {/* Top Grid: Hero & About Column next to Services Column on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Hero Section */}
            <section 
              id="home" 
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
              className="flex-1 min-h-[400px] sm:min-h-[500px] bg-black border border-[#D4AF37]/10 p-8 sm:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-end group shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
            >
              {/* Parallax Background */}
              <div 
                className="absolute inset-[-5%] w-[110%] h-[110%] transition-transform duration-500 ease-out pointer-events-none"
                style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1920&q=80" 
                  alt="Salon Interior" 
                  className="w-full h-full object-cover opacity-15 mix-blend-screen group-hover:opacity-20 transition-opacity duration-700"
                />

                {/* Animated 3D Background Mesh */}
                <div className="absolute inset-0 overflow-hidden mix-blend-screen opacity-70">
                  <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/20 rounded-full blur-[80px] animate-blob1" />
                  <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#aa8c2c]/15 rounded-full blur-[100px] animate-blob2" />
                  <div className="absolute top-[30%] right-[30%] w-[40%] h-[40%] bg-amber-600/10 rounded-full blur-[60px] animate-blob3" />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0">
                    <div className="absolute left-[15%] bottom-0 w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px] animate-particle-1" />
                    <div className="absolute left-[35%] bottom-0 w-2 h-2 bg-[#D4AF37]/80 rounded-full blur-[2px] animate-particle-2" />
                    <div className="absolute left-[65%] bottom-0 w-1.5 h-1.5 bg-white/50 rounded-full blur-[1px] animate-particle-3" />
                    <div className="absolute left-[85%] bottom-0 w-1 h-1 bg-[#D4AF37]/60 rounded-full blur-[1px] animate-particle-4" />
                  </div>
                </div>
              </div>
              
              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
              
              {/* Decorative Icon */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] hidden sm:block pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="#D4AF37"><path d="M17 5h-1V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-1.1 0-2 .9-2 2v1l2 3h10l2-3V7c0-1.1-.9-2-2-2zM9 4h6v1H9V4zm11 8H4v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7z"/></svg>
              </div>
              
              <div className="relative z-10 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 leading-tight">
                    Premium <span className="text-[#D4AF37]">Unisex</span><br/>Salon in KGF
                  </h1>
                  <p className="text-sm text-gray-400 mb-8 max-w-md italic leading-relaxed">
                    Professional Hair, Skin & Grooming Services tailored for you. Step into luxury and experience the perfect makeover in Bharat Nagar.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white text-black font-bold uppercase text-[11px] tracking-widest hover:bg-[#D4AF37] transition-colors text-center shadow-lg"
                    >
                      Book Appointment on WhatsApp
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-[#111] border border-white/5 p-8 rounded-2xl flex flex-col sm:flex-row gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full sm:w-1/3 aspect-[4/5] overflow-hidden rounded-lg relative hidden sm:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?auto=format&fit=crop&w=800&q=80" 
                  alt="Stylist working" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full sm:w-2/3"
              >
                <h3 className="text-[#D4AF37] uppercase text-[10px] tracking-[0.3em] font-bold mb-3">Our Story</h3>
                <h4 className="text-2xl text-white font-serif mb-4 leading-tight">Elevating Beauty & Style</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  At He & She, we combine experienced craftsmanship with premium quality products. Established in the heart of Kolar Gold Fields, our sanctuary focuses on hygienic, affordable, and personalized grooming for every family member.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-white/5">
                   <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Call for inquiries</p>
                   <a href="tel:+917975446634" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
                     +91 79754 46634
                   </a>
                </div>
              </motion.div>
            </section>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-5 bg-[#0d0d0d] border border-[#D4AF37]/10 p-8 rounded-2xl flex flex-col">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-serif text-white">Signature Services</h2>
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest mb-1">Price Menu</span>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
              {services.map((service, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center group py-2">
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:flex text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                        <service.icon size={20} />
                      </div>
                      <div>
                        <p className="text-white font-medium group-hover:text-[#D4AF37] transition-colors text-sm sm:text-base">{service.title}</p>
                        <p className="text-[10px] text-gray-500 uppercase mt-0.5 max-w-[200px] truncate">{service.desc}</p>
                      </div>
                    </div>
                    <div className="text-[#D4AF37] font-serif pr-2">{service.price}</div>
                  </div>
                  {index < services.length - 1 && <div className="h-px bg-white/5 w-full my-2"></div>}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[10px] text-gray-400 hover:text-[#D4AF37] items-center pb-1 border-b border-transparent hover:border-[#D4AF37] transition-colors uppercase tracking-widest"
              >
                View Full Menu on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Gallery, Why Choose Us, Reviews, Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-6 mt-2">
          
          {/* Why Choose Us & Reviews Column */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <section className="bg-[#111] p-8 rounded-2xl border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-2xl"></div>
               <h3 className="text-[#D4AF37] uppercase text-[10px] tracking-[0.3em] font-bold mb-6">The Experience</h3>
               
               <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                        <feature.icon size={14} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">{feature.title}</h4>
                        <p className="text-[10px] text-gray-400 uppercase leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </section>

            <section id="reviews" className="bg-[#111] p-6 rounded-2xl border border-white/5 flex-1 shadow-sm">
              <div className="bg-black border border-[#D4AF37]/20 rounded-xl p-4 mb-6 flex items-center justify-center text-center shadow-lg">
                <span className="text-sm font-bold text-white tracking-wide">
                  👉 Rated 4.7⭐ on Google by 460+ Customers
                </span>
              </div>
              <h3 className="text-xs font-serif text-[#D4AF37] mb-6 uppercase tracking-widest">Recent Praise</h3>
              <div className="space-y-5">
                {reviews.map((review, i) => (
                  <div key={i} className={i !== reviews.length - 1 ? "pb-5 border-b border-white/5" : ""}>
                    <p className="text-[11px] text-gray-400 leading-relaxed italic">"{review.text}"</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-[10px] text-white font-bold uppercase">— {review.name}</p>
                      <div className="flex text-[#D4AF37] gap-0.5">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} size={10} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Gallery Column */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            <section id="gallery" className="bg-[#111] p-6 rounded-2xl border border-white/5">
               <h3 className="text-xs font-serif text-[#D4AF37] mb-1 uppercase tracking-widest">Gallery</h3>
               <p className="text-[11px] text-gray-400 mb-4 tracking-wide font-medium">Inside Our Salon &ndash; Bharat Nagar, KGF</p>
               <div className="grid grid-cols-2 gap-3 pb-2">
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="relative group aspect-square overflow-hidden rounded-lg border border-white/5">
                      <img 
                        src={img} 
                        alt={`Gallery ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  ))}
               </div>
            </section>

            {/* Special Offer Section */}
            <section className="bg-gradient-to-br from-[#D4AF37] to-[#aa8c2c] p-8 rounded-2xl text-black flex-1 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-20">
                <Sparkles size={80} />
              </div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 opacity-20">
                <Star size={80} className="fill-current" />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-black/80">Special Offer</h3>
                <p className="text-2xl font-serif font-bold leading-tight mb-3 px-2">Get 10% OFF on your first visit</p>
                <div className="flex items-center gap-1.5 mb-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#111]">
                  <Clock size={14} />
                  <span>Limited slots available today</span>
                </div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0a0a0a] text-[#D4AF37] px-6 py-3.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 hover:bg-black transition-all flex items-center gap-2 shadow-2xl"
                >
                  <MessageCircle size={16} />
                  Book now on WhatsApp
                </a>
              </div>
            </section>
          </div>

          {/* Contact Column */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            <section id="contact" className="bg-[#D4AF37] text-black p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              <div className="relative z-10 w-full h-full flex flex-col">
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4">Visit Us</h3>
                <p className="text-lg font-serif mb-1 leading-snug">Bharat Nagar, <br className="hidden lg:block xl:hidden"/> Kolar Gold Fields</p>
                <p className="text-[10px] opacity-80 mb-8 uppercase font-medium">Karnataka, India - 563115</p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-3 bg-black/10 p-3 rounded-lg">
                    <Clock size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Open Daily: 9AM - 9PM</span>
                  </div>
                  
                  <a href="tel:+917975446634" className="flex items-center gap-3 bg-black text-[#D4AF37] p-3 rounded-lg hover:bg-black/80 transition-colors">
                    <Phone size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">+91 79754 46634</span>
                  </a>

                  <div className="pt-2">
                     <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-[#D4AF37] transition-colors">
                      <Instagram size={14} />
                     </a>
                  </div>
                </div>
              </div>
            </section>
            
            <div className="h-48 w-full rounded-2xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.276483569768!2d78.257002!3d12.9514757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac0fa77cf239cb%3A0xc66518cf2a255964!2sRobertsonpet%2C%20Kolar%20Gold%20Fields%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Location map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <div 
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 fill-current bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform cursor-pointer"
        aria-label="Book Appointment on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.011 0-3.982-.511-5.719-1.482l-6.275 1.6z"/></svg>
        <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Book Appointment on WhatsApp</span>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 gap-4 text-center">
          <span>&copy; {new Date().getFullYear()} He & She Family Unisex Salon</span>
          <span>Best Unisex Salon in Kolar • Professional Grooming</span>
        </div>
      </footer>
    </div>
  );
}
