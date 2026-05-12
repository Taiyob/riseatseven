import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate, useMotionValueEvent, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowLeft, ArrowDown, Play, ChevronDown, Check, Star, PlayCircle, Plus, Search, TrendingUp, Clock, Award } from 'lucide-react';
import { ContainerScroll, CardsContainer, CardTransformed } from './components/ui/animated-cards-stack';

const imageFiles = [
  'recreate_the_image_as_same_202605080136.jpeg',
  'recreate_this_image_2K_202605080122.jpeg',
  'recreate_this_image_2K_202605080145.jpeg',
  'recreate_this_image_as_same_202605080127.jpeg',
  'recreate_this_imge_same_to_202605080141.jpeg',
  'recreate_this_picture_2K_202605080103.jpeg'
];

const featuredProjects = [
  {
    title: 'SIXT',
    years: '[2023-2025]',
    image: '/Feature work image/make_as_same_as_it_202605081434.jpeg',
    category: 'Car rental',
    hoverBg: '#D17C37',
    hoverText: 'An extra 3m clicks regionally through SEO',
    hoverBadge: 'Car rental'
  },
  {
    title: 'Dojo - B2B',
    years: '[2021-2025]',
    image: '/Feature work image/make_as_same_as_it_202605081437.jpeg',
    category: 'Fintech',
    hoverBg: '#F6D2C3',
    hoverText: 'A B2B success story for Dojo card machines',
    hoverBadge: 'Card Machines'
  },
  {
    title: 'Magnet Trade',
    years: '[2023-2024]',
    image: '/Feature work image/make_as_same_as_it_202605081440.jpeg',
    category: 'B2B Trade',
    hoverBg: '#C2D1F0',
    hoverText: 'Scaling B2B lead generation by 150%',
    hoverBadge: 'Trade & Retail'
  },
  {
    title: 'Leading E Sim',
    years: '[2023-2025]',
    image: '/Feature work image/make_as_same_as_it_202605081443.jpeg',
    category: 'Telecom',
    hoverBg: '#E9C46A',
    hoverText: 'Connecting global travellers with seamless data',
    hoverBadge: 'Connectivity'
  },
  {
    title: 'Kroger - Retail',
    years: '[2022-2025]',
    image: '/Feature work image/make_as_same_as_it_202605081447.jpeg',
    category: 'Retail',
    hoverBg: '#2A9D8F',
    hoverText: 'Transforming e-commerce conversion rates',
    hoverBadge: 'Supermarket'
  },
  {
    title: 'HubSpot',
    years: '[2021-2024]',
    image: '/Feature work image/make_as_same_as_it_202605081455.jpeg',
    category: 'Software',
    hoverBg: '#F4A261',
    hoverText: 'Driving inbound marketing leadership globally',
    hoverBadge: 'SaaS Platform'
  },
  {
    title: 'Xbox Global',
    years: '[2024-2025]',
    image: '/Feature work image/make_as_same_as_it_202605081504.jpeg',
    category: 'Gaming',
    hoverBg: '#107C10',
    hoverText: 'Launching next-gen console experiences',
    hoverBadge: 'Gaming Console'
  },
  {
    title: 'Revolution Beauty',
    years: '[2023-2025]',
    image: '/Feature work image/make_as_same_as_it_202605081506.jpeg',
    category: 'Beauty',
    hoverBg: '#FCD5CE',
    hoverText: 'Viral TikTok campaigns that sold out worldwide',
    hoverBadge: 'Cosmetics'
  },
  {
    title: 'Amazon Prime',
    years: '[2023-2025]',
    image: '/Feature work image/make_it_same_to_same_202605081450.jpeg',
    category: 'Entertainment',
    hoverBg: '#00A8E1',
    hoverText: 'Boosting subscription retention through content',
    hoverBadge: 'Streaming'
  },
  {
    title: 'Google Cloud',
    years: '[2022-2024]',
    image: '/Feature work image/make_this_image_as_same_202605081502.jpeg',
    category: 'Technology',
    hoverBg: '#4285F4',
    hoverText: 'Enterprise solutions for scalable cloud infrastructure',
    hoverBadge: 'Cloud Services'
  },
  {
    title: 'TikTok Ads',
    years: '[2024-2025]',
    image: '/Feature work image/recreate_this_image_keep_as_202605081500.jpeg',
    category: 'Social Media',
    hoverBg: '#69C9D0',
    hoverText: 'Maximizing ROI for Gen-Z advertising campaigns',
    hoverBadge: 'Advertising'
  }
];

function FeaturedWork() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const totalProjects = featuredProjects.length;

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const index = Math.min(totalProjects - 1, Math.floor(latest * totalProjects));
      setActiveIndex(index);
    });
  }, [scrollYProgress, totalProjects]);

  // Calculate exactly how far to translate up so the last item stops at the top
  const yTransformVal = `-${100 - (100 / totalProjects)}%`;
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", yTransformVal]);

  return (
    <div className="bg-[#f4f4f4] w-full relative" ref={containerRef} style={{ height: `${totalProjects * 100}vh` }}>
      {/* Sticky Box Container */}
      <div className="sticky top-0 h-screen w-full px-2 md:px-4 py-2 md:py-4 flex items-center justify-center">

        {/* The Inner Rounded Card (Box) */}
        <div className="w-full h-full bg-[#0b0b0b] rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row text-white shadow-xl">

          {/* Left Column: Animated Text List */}
          <div className="w-full md:w-1/2 flex-1 md:h-full relative overflow-hidden flex flex-col z-10">
            {/* Absolute Title */}
            <h3 className="font-bold text-xs md:text-sm tracking-tight absolute top-6 md:top-12 left-6 md:left-16 z-20">Featured Work</h3>

            {/* Scrolling Container */}
            <motion.div
              style={{ height: `${totalProjects * 100}%`, y: yTransform }}
              className="flex flex-col w-full absolute top-0 left-0"
            >
              {featuredProjects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    style={{ height: `${100 / totalProjects}%` }}
                    className={`flex flex-col justify-center pl-6 pr-4 md:pl-16 md:pr-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 scale-100' : 'opacity-[0.25] scale-[0.98]'}`}
                  >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] font-bold tracking-tighter leading-[0.9] flex items-start gap-1 md:gap-2 w-full cursor-pointer">
                      <span className="max-w-[95%]">{project.title}</span>
                      <span className="text-[10px] md:text-xs font-bold mt-2 md:mt-4 tracking-normal whitespace-nowrap">
                        {project.years}
                      </span>
                    </h2>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Dynamic Images */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-full relative z-0 overflow-hidden">
            <motion.div
              style={{ height: `${totalProjects * 100}%`, y: yTransform }}
              className="flex flex-col w-full absolute top-0 left-0"
            >
              {featuredProjects.map((project, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <div
                    key={index}
                    style={{ height: `${100 / totalProjects}%` }}
                    className="flex items-center justify-center p-4 md:p-12 relative cursor-none"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="w-full h-full md:h-[90%] bg-[#1a1a1a] rounded-[16px] md:rounded-[24px] overflow-hidden relative shadow-2xl border border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />

                      {/* The Hover Overlay */}
                      <div
                        className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-start items-start pointer-events-none"
                        style={{
                          backgroundColor: project.hoverBg,
                          clipPath: isHovered ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)',
                          transition: 'clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1)'
                        }}
                      >
                        <h3 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight text-[#111] max-w-[95%] mt-2 md:mt-4">
                          {project.hoverText}
                        </h3>

                        {/* Hover Category Badge */}
                        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-white/40 backdrop-blur-md border border-black/10 text-black text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full font-semibold tracking-wide flex items-center gap-2 shadow-sm">
                          <Search className="w-3 h-3 md:w-4 md:h-4" />
                          {project.hoverBadge}
                          <TrendingUp className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                        </div>
                      </div>

                      {/* Default Category Badge */}
                      <div className={`absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full font-semibold tracking-wide flex items-center gap-2 shadow-lg transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        {project.category}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Custom Cursor Overlay for Hover State */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed top-0 left-0 w-24 h-24 rounded-full bg-[#A6F2D6] pointer-events-none z-[9999] flex items-center justify-center text-black shadow-lg"
            style={{
              x: cursorPos.x - 48,
              y: cursorPos.y - 48,
            }}
          >
            <ArrowUpRight className="w-8 h-8" strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
const ServiceItem = ({ title, image, isLast }) => {
  return (
    <div className={`relative w-full group cursor-pointer ${!isLast ? 'border-b border-black/10' : ''}`}>
      {/* Background hover image layer */}
      <div className="absolute top-1 bottom-1 -left-4 -right-4 md:-left-6 md:-right-6 z-0 opacity-0 group-hover:opacity-100 transition-all duration-400 overflow-hidden rounded-full pointer-events-none">
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-400"></div>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full bg-black"></div>
        )}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center py-6 md:py-8 w-full transition-transform duration-400">
        <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-white absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400" strokeWidth={2.5} />
        <h3 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-black group-hover:text-white transition-colors duration-400 leading-none group-hover:ml-10 md:group-hover:ml-12 relative z-20">
          {title}
        </h3>
      </div>
    </div>
  );
};

function OurServices() {
  return (
    <div className="w-full bg-[#f4f4f4] px-4 md:px-8 py-16 md:py-24 flex flex-col">
      {/* Explore Our Work Button Container */}
      <div className="w-full flex justify-center mb-16 md:mb-24">
        <button className="group bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm border border-black/5 hover:bg-gray-50 hover:scale-105 transition-all duration-300">
          Explore Our Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>

      {/* Header Container */}
      <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-between mb-12 md:mb-20">
        <h2 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter text-black flex items-center gap-3 md:gap-5 leading-none">
          Our
          <span className="w-[4.5rem] h-[4.5rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] lg:w-[7.5rem] lg:h-[7.5rem] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-lg inline-block flex-shrink-0 flex items-center justify-center bg-gray-200 relative -top-1 md:-top-2">
            <img
              src="/Our service image/make_as_same_as_it_202605081820.jpeg"
              alt="Services"
              className="w-full h-full object-cover"
            />
          </span>
          Services
        </h2>
        <button className="group hidden md:flex bg-white text-black px-6 py-3 rounded-full text-sm font-bold items-center gap-1 shadow-sm border border-black/5 hover:bg-gray-50 hover:scale-105 transition-all duration-300 mb-2 lg:mb-4">
          View All Services <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>

      {/* Services List Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 lg:gap-x-24">
        {/* Left Column */}
        <div className="flex flex-col w-full">
          <ServiceItem
            title="Digital PR"
            image="/service name imge/digital_pr.jpeg"
          />
          <ServiceItem
            title="Search & Growth Strategy"
            image="/service name imge/research_and_growth_streatagy.jpeg"
          />
          <ServiceItem
            title="Data & Insights"
            image="/service name imge/data_insights.png"
            isLast={true}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full">
          <ServiceItem
            title="Organic Social & Content"
            image="/service name imge/organic_social_content.jpeg"
          />
          <ServiceItem
            title="Content Experience"
            image="/service name imge/content_experience.png"
          />
          <ServiceItem
            title="Onsite SEO"
            image="/service name imge/onsite_seo.jpeg"
            isLast={true}
          />
        </div>
      </div>

      {/* Mobile View All Services Button */}
      <div className="w-full flex justify-start mt-8 md:hidden">
        <button className="group bg-white text-black px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-1 shadow-sm border border-black/5 hover:bg-gray-50 hover:scale-105 transition-all duration-300">
          View All Services <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
function NotAlgorithms() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="w-full bg-[#f4f4f4] py-16 md:py-24 overflow-hidden flex flex-col items-center relative cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex-1 w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
        <div className="flex w-max animate-ticker items-center py-4 md:py-8">
          {/* First set */}
          <div className="flex items-center gap-6 md:gap-12 px-3 md:px-6">
            <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] leading-none font-medium tracking-tighter text-black whitespace-nowrap">
              Not Algorithms
            </span>
            <div className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[12rem] lg:h-[12rem] rounded-2xl md:rounded-3xl overflow-hidden shrink-0 shadow-lg">
              <img src="/Not algorithms image/make_this_image_as_same_202605100110.jpeg" alt="Stage" className="w-full h-full object-cover" />
            </div>
            <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] leading-none font-medium tracking-tighter text-black whitespace-nowrap">
              Chasing Consumers
            </span>
            <div className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[12rem] lg:h-[12rem] rounded-2xl md:rounded-3xl overflow-hidden shrink-0 shadow-lg">
              <img src="/Not algorithms image/make_this_as_same_as_202605100111.jpeg" alt="Group" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Duplicated set for seamless infinite scroll */}
          <div className="flex items-center gap-6 md:gap-12 px-3 md:px-6" aria-hidden="true">
            <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] leading-none font-medium tracking-tighter text-black whitespace-nowrap">
              Not Algorithms
            </span>
            <div className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[12rem] lg:h-[12rem] rounded-2xl md:rounded-3xl overflow-hidden shrink-0 shadow-lg">
              <img src="/Not algorithms image/make_this_image_as_same_202605100110.jpeg" alt="Stage" className="w-full h-full object-cover" />
            </div>
            <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] leading-none font-medium tracking-tighter text-black whitespace-nowrap">
              Chasing Consumers
            </span>
            <div className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[12rem] lg:h-[12rem] rounded-2xl md:rounded-3xl overflow-hidden shrink-0 shadow-lg">
              <img src="/Not algorithms image/make_this_as_same_as_202605100111.jpeg" alt="Group" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Cursor Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed top-0 left-0 bg-brandGreen px-5 md:px-6 py-2.5 md:py-3 rounded-full flex items-center justify-center pointer-events-none z-50 text-black shadow-lg font-semibold text-xs md:text-sm whitespace-nowrap"
            style={{
              x: cursorPos.x - 70, // Centers the cursor
              y: cursorPos.y - 20,
            }}
          >
            Send Us Your Brief <ArrowUpRight className="w-4 h-4 ml-1" strokeWidth={2} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const TESTIMONIALS_DATA = [
  {
    id: "pioneers",
    variant: "dark",
    heading: "Pioneers",
    text1: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    text2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    image: "/Testimonal image/make_this_image_as_same_202605091546.jpeg"
  },
  {
    id: "awards",
    variant: "mint",
    heading: "Award Winning",
    text1: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    image: "/Testimonal image/make_this_picture_as_same_202605091550.jpeg"
  },
  {
    id: "speed",
    variant: "light",
    heading: "Speed",
    text1: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    image: "/Testimonal image/make_this_image_as_same_202605091553.jpeg"
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#f4f4f4] px-4 md:px-8 pt-16 md:pt-24 pb-0">
      <div>
        <h3 className="text-center text-xl md:text-2xl font-bold tracking-tight text-black">
          Legacy In The Making
        </h3>
      </div>
      <ContainerScroll className="container mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 h-screen w-full py-12 md:py-20 flex items-center justify-center">
          <CardsContainer className="mx-auto size-full h-[32rem] md:h-[40rem] lg:h-[45rem] w-full max-w-[40rem]">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS_DATA.length}
                key={testimonial.id}
                variant={testimonial.variant}
                index={index + 1}
              >
                <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-6 md:space-y-8">
                  <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-md shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.heading}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mt-2 md:mt-4">
                    {testimonial.heading}
                  </h3>
                  <div className="flex flex-col gap-4 font-medium text-sm md:text-base lg:text-lg leading-snug tracking-tight opacity-90 px-4 md:px-8">
                    <p>{testimonial.text1}</p>
                    {testimonial.text2 && <p>{testimonial.text2}</p>}
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  );
}

const WHATS_NEW_DATA = [
  {
    id: "news-1",
    author: "Ray Saddiq",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "3 mins",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    image: "/Whats new image/make_as_same_as_it_202605082259.jpeg",
    badge: null
  },
  {
    id: "news-2",
    author: "Ray Saddiq",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "2 mins",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    image: "/Whats new image/make_as_same_as_it_202605082302.jpeg",
    badge: null
  },
  {
    id: "news-3",
    author: "Carrie Rose",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image: "/Whats new image/make_as_same_as_it_202605082303.jpeg",
    badge: "News"
  }
];

function WhatsNewSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="bg-[#f4f4f4] px-4 md:px-6 pt-0 pb-16 md:pb-24 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
        <h2 className="text-5xl sm:text-7xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] text-black flex flex-wrap items-center gap-2 md:gap-3">
          <span>What's</span>
          <span className="inline-block w-14 h-16 md:w-20 md:h-24 lg:w-24 lg:h-28 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shrink-0 shadow-xl mx-1 md:mx-2 -mt-1 md:-mt-2">
            <img src="/Not algorithms image/make_this_image_as_same_202605100110.jpeg" className="w-full h-full object-cover" alt="What's New" />
          </span>
          <span>New</span>
        </h2>
        <div className="mt-8 md:mt-0 flex shrink-0 md:pb-4 lg:pb-8">
          <button className="group bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-md transition-all duration-300 shadow-sm border border-black/5 hover:-translate-y-0.5 hover:scale-105">
            Explore More Thoughts <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {WHATS_NEW_DATA.map((item) => {
          const isHovered = hoveredIndex === item.id;
          return (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div
                className="relative aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-6 bg-gray-200 cursor-none"
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {/* The Hover Overlay (Blur Effect from Bottom Middle) */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none backdrop-blur-md bg-white/10"
                  style={{
                    clipPath: isHovered ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)',
                    transition: 'clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1)'
                  }}
                />

                {item.badge && (
                  <div className={`absolute top-5 left-5 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full z-20 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 px-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-2 bg-transparent md:bg-white/50 border border-gray-300/50 md:border-transparent px-2 py-1 pr-3 rounded-full text-xs font-semibold text-black hover:bg-white transition-colors">
                    <img src={item.authorAvatar} alt={item.author} className="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover shadow-sm" />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-transparent md:bg-white/50 border border-gray-300/50 md:border-transparent px-3 py-1 md:py-1.5 rounded-full text-xs font-semibold text-gray-500 hover:bg-white transition-colors">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug text-black group-hover:underline underline-offset-4 decoration-2">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Cursor Overlay for Hover State */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed pointer-events-none z-50 flex items-center justify-center w-24 h-24 rounded-full bg-[#B4F2DC] text-black shadow-xl"
            style={{
              left: cursorPos.x - 48,
              top: cursorPos.y - 48,
            }}
          >
            <ArrowUpRight className="w-8 h-8" strokeWidth={2} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const AnimatedLetter = ({ letter, index, total, scrollYProgress }) => {
  // Distribute the drop timing so it matches the horizontal scrolling.
  // The first letter drops early, the last letter drops late.
  // Optimized to drop at a fixed horizontal threshold (approx 80vw) as the container scrolls.
  const start = 0.05 + (index / total) * 0.7;
  // We use 3 keyframes to create a "wave" or bounce effect strictly tied to the scroll progress.
  // It drops from -30vh, overshoots slightly to 2vh, then settles at 0vh.
  const dropEnd = start + 0.02;
  const settleEnd = start + 0.035;

  // Fall straight down, dip slightly below the baseline (wave), and come back up to 0.
  const y = useTransform(
    scrollYProgress,
    [start, dropEnd, settleEnd],
    ["-30vh", "2.5vh", "0vh"]
  );

  return (
    <motion.span
      style={{ y }}
      className="inline-block text-black"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

const ReadyToRiseSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth the scroll progress to ensure letters drop one-by-one even if user scrolls fast
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, mass: 0.2 });

  // The entire text container starts at the right edge of the screen (100vw)
  // and scrolls out to the left as the user scrolls down.
  const containerX = useTransform(smoothProgress, [0, 1], ["100vw", "-200vw"]);

  const text = "Ready to Rise at Seven?";
  const letters = text.split("");

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[200vh] bg-[#f4f4f4]"
    >
      {/* Sticky container that stays on screen while we scroll the 400vh height */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Massive Scrolling Text Container */}
        <motion.div
          style={{ x: containerX }}
          className="flex whitespace-nowrap text-[16vw] md:text-[18vw] font-bold tracking-tighter text-black leading-none select-none px-4"
        >
          {letters.map((letter, i) => (
            <AnimatedLetter
              key={i}
              letter={letter}
              index={i}
              total={letters.length}
              scrollYProgress={smoothProgress}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};


const FooterSection = () => {
  return (
    <footer className="bg-[#141414] text-white pt-16 pb-6 px-6 md:px-12 w-full flex flex-col justify-between overflow-hidden">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 w-full mb-16 md:mb-24">

        {/* Left Newsletter & Socials */}
        <div className="flex flex-col gap-6 w-full lg:w-[40%]">
          <h3 className="text-2xl md:text-[28px] font-medium tracking-tight">Stay updated with Rise news</h3>

          <div className="relative w-full max-w-[380px]">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-[#222222] text-white placeholder-gray-400 rounded-full py-3.5 pl-6 pr-14 outline-none focus:ring-1 focus:ring-white/30 transition-all border border-transparent hover:border-white/10 text-sm"
            />
            <button className="group absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-[#B4F2DC] rounded-full flex items-center justify-center hover:bg-[#a1e5ce] hover:scale-105 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex items-center gap-2 mt-1">
            {[
              { id: 'f', type: 'text' },
              { id: 'X', type: 'text' },
              { id: 'in', type: 'text' },
              { id: 'yt', type: 'text' },
              { id: 'tik', type: 'text' },
              { id: 'ig', type: 'text' }
            ].map((social, i) => (
              <a key={i} href="#" className="w-10 h-6 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform group">
                <span className="text-black text-[11px] font-bold tracking-tighter">{social.id}</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-black ml-[1px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Links Columns */}
        <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-24 xl:gap-32 w-full lg:w-auto">
          {/* Col 1 */}
          <div className="flex flex-col gap-2.5">
            {['Services', 'Work', 'About', 'Culture', 'Meet The Risers'].map((item) => (
              <a key={item} href="#" className="text-white hover:text-gray-300 font-medium text-[15px] transition-colors tracking-tight">
                {item}
              </a>
            ))}
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-2.5">
            {['Testimonials', 'Blog & Resources', 'Webinars', 'Careers'].map((item) => (
              <a key={item} href="#" className="text-white hover:text-gray-300 font-medium text-[15px] transition-colors tracking-tight">
                {item}
              </a>
            ))}
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-2.5">
            {['Sheffield', 'Manchester', 'London', 'New York', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-white hover:text-gray-300 font-medium text-[15px] transition-colors tracking-tight">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col w-full">
        {/* Massive Text */}
        <div className="w-full flex justify-between items-baseline mb-6 border-b border-white/20 pb-4 overflow-hidden">
          <h1 className="text-[13.5vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter w-full flex items-baseline whitespace-nowrap">
            Rise at Seve
            {/* The stylized N */}
            <span className="relative flex items-end ml-1">
              <svg viewBox="0 0 100 100" className="w-[11vw] h-[11vw] mb-[0.5vw]" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="square">
                {/* Vertical left line */}
                <path d="M 15 90 L 15 10" />
                {/* Diagonal line */}
                <path d="M 15 10 L 95 90" />
              </svg>
              <span className="text-[2.5vw] md:text-[2vw] ml-2 md:ml-3 mb-[6vw] font-normal leading-none border-[2px] md:border-[3px] border-white rounded-full w-[4vw] h-[4vw] md:w-[3.5vw] md:h-[3.5vw] flex items-center justify-center shrink-0">
                R
              </span>
            </span>
          </h1>
        </div>

        {/* Sub Footer Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] md:text-xs text-gray-400 font-medium">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span>•</span>
            <span>Company Number 22066298</span>
            <span>•</span>
            <span>VAT Registered GB 433513056</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms & conditions</a>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            Website by <a href="#" className="text-white hover:underline font-bold">Sabbir</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default function App() {
  const [currentImage, setCurrentImage] = useState('');

  // Navigation Bar Auto-Hide Logic
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest < 50);
    if (latest > lastScrollY && latest > 100) {
      setIsNavVisible(false); // scrolling down
    } else {
      setIsNavVisible(true); // scrolling up
    }
    setLastScrollY(latest);
  });

  useEffect(() => {
    // Pick one random image for both background and inline
    const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
    setCurrentImage(randomImage);
  }, []);

  return (
    <div className="w-full bg-[#f4f4f4] font-sans">
      <div className="flex flex-col min-h-screen w-full">
        {/* Page Reveal Curtain */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="fixed top-0 left-0 w-full z-[100] pointer-events-none flex flex-col"
          style={{ height: '140vh' }}
        >
          <div className="w-full bg-[#B4F2DC] flex-1" />
          <svg
            className="w-full h-[20vh] text-[#B4F2DC]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(-1px)' }}
          >
            <path fill="currentColor" d="M0,0 L100,0 L100,100 Q50,-50 0,100 Z" />
          </svg>
        </motion.div>

        {/* Top Banner */}
        <div className="w-full px-2 md:px-4 mt-2 shrink-0 relative z-30">
          <div className="w-full bg-[#B4F2DC] text-black text-xs md:text-sm font-semibold py-2 md:py-2.5 text-center tracking-wide rounded-full">
            🚨 The Category Leaderboard - Live Now
          </div>
        </div>

        {/* Main Hero Container */}
        <div className="relative flex-1 mx-2 md:mx-4 mb-2 md:mb-4 mt-2 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] bg-black text-white shadow-xl z-20 flex flex-col">

          {/* Background Image with AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            {currentImage && (
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0 z-0 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem]"
              >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
                <img
                  src={`/hero section image/${currentImage}`}
                  alt="Background"
                  className="w-full h-full object-cover blur-xl scale-110"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Global Fixed Navbar - Auto Hides on Scroll Down */}
          <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isNavVisible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className={`${isAtTop ? 'absolute top-6' : 'fixed top-4'} left-0 right-0 mx-auto w-[98%] max-w-[1600px] bg-white/70 backdrop-blur-lg rounded-full z-[90] flex items-center justify-between px-4 md:px-6 py-3 border border-white/40 shadow-sm text-black`}
          >
            {/* Logo */}
            <div className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-1 cursor-pointer">
              Rise at Seven
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 md:w-5 md:h-5 -mt-1 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-6 text-[13px] font-semibold tracking-tight">
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Services +</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Industries +</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">International +</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">About +</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 relative">
                Work
                <span className="absolute -top-2.5 -right-4 bg-[#B4F2DC] text-black text-[9px] leading-none px-1 py-0.5 rounded-sm font-bold shadow-sm">25</span>
              </li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Careers</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Blog & Resources +</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Webinar</li>
            </ul>

            {/* CTA Button */}
            <button className="group bg-black text-white px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5 hover:bg-black/80 hover:scale-105 transition-all duration-300 shrink-0">
              Get In Touch <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </motion.nav>

          {/* Main Content Wrapper */}
          <div className="relative z-20 w-full flex-1 px-4 md:px-8 py-6 flex flex-col justify-between">

            {/* Navbar removed from here */}

            {/* Hero Center Text */}
            <div className="flex-1 flex flex-col items-center justify-center text-center mt-12 md:mt-0">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center mb-6"
              >
                <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-shadow-sm mb-3">
                  #1 MOST RECOMMENDED<br />CONTENT MARKETING AGENCY
                </p>
                {/* Mock Awards */}
                <div className="flex items-center gap-4 text-white/90">
                  <Award className="w-5 h-5" />
                  <div className="flex flex-col text-[8px] font-bold leading-tight text-left">
                    <span>GLOBAL</span>
                    <span>SEARCH</span>
                    <span>AWARDS</span>
                  </div>
                  <Award className="w-5 h-5" />
                  <div className="flex flex-col text-[8px] font-bold leading-tight text-left">
                    <span>UK Search</span>
                    <span>Awards</span>
                  </div>
                  <Award className="w-5 h-5" />
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-shadow-lg leading-[1.1] md:leading-[1.1]"
              >
                We Create<br />
                <span className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                  Category
                  {currentImage && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                      className="w-16 h-12 md:w-24 md:h-16 lg:w-28 lg:h-20 inline-block overflow-hidden rounded-xl md:rounded-2xl border-2 border-white/20 shadow-xl relative top-1 md:top-2"
                    >
                      <img src={`/hero section image/${currentImage}`} className="w-full h-full object-cover" alt="Dynamic Inline" />
                    </motion.div>
                  )}
                  Leaders
                </span><br />
                <span className="text-lg md:text-2xl lg:text-3xl font-medium tracking-normal mt-1 md:-mt-1 block">
                  on every searchable platform
                </span>
              </motion.h1>

              {/* Logos Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex items-center gap-3 md:gap-5 lg:gap-6 mt-8 md:mt-12 text-sm md:text-base font-bold opacity-80 flex-wrap justify-center"
              >
                <span>Google</span>
                <span>ChatGPT</span>
                <span>Gemini</span>
                <span>TikTok</span>
                <span>YouTube</span>
                <span>Pinterest</span>
                <span>GIPHY</span>
                <span>reddit</span>
                <span>amazon</span>
              </motion.div>

            </div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-4"
            >
              <div className="text-xs md:text-sm font-medium opacity-90 max-w-xs text-center md:text-left text-shadow-sm">
                Organic media planners creating, distributing & optimising
                search-first content for SEO, Social, PR, AI and Marketplaces.
              </div>

              <div className="text-xs md:text-sm font-medium opacity-90 text-center md:text-right text-shadow-sm">
                <strong>4 Global Offices serving</strong><br />
                UK, USA (New York) & EU
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      {/* Brand Ticker Section */}
      <div className="w-full mt-8 md:mt-12 flex flex-col">
        <div className="flex items-center w-full px-4 md:px-8">
          <span className="text-xs md:text-sm font-semibold mr-4 md:mr-8 whitespace-nowrap shrink-0">The agency behind _</span>

          {/* Ticker Animation Container */}
          <div className="flex-1 overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            <div className="flex w-max animate-ticker items-center">
              {/* First set of logos */}
              <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 opacity-80">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 blur-[2px] flex items-center justify-center text-white text-[10px] font-bold shrink-0">RAS</div>
                <span className="font-bold text-xl md:text-2xl tracking-tighter shrink-0">Kroger</span>
                <span className="font-bold text-xl md:text-2xl tracking-tight flex items-center shrink-0">HubSp<span className="text-orange-500">o</span>t</span>
                <span className="font-bold text-xl md:text-2xl tracking-widest flex items-center gap-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                  XBOX
                </span>
                <span className="font-black text-2xl md:text-3xl tracking-tighter shrink-0">SIXT</span>
                <span className="flex flex-col items-center leading-none shrink-0">
                  <span className="font-serif italic text-lg md:text-xl">REVOLUTION</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] mt-0.5">Beauty London</span>
                </span>
              </div>

              {/* Duplicated set for seamless infinite scroll */}
              <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 opacity-80" aria-hidden="true">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 blur-[2px] flex items-center justify-center text-white text-[10px] font-bold shrink-0">RAS</div>
                <span className="font-bold text-xl md:text-2xl tracking-tighter shrink-0">Kroger</span>
                <span className="font-bold text-xl md:text-2xl tracking-tight flex items-center shrink-0">HubSp<span className="text-orange-500">o</span>t</span>
                <span className="font-bold text-xl md:text-2xl tracking-widest flex items-center gap-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                  XBOX
                </span>
                <span className="font-black text-2xl md:text-3xl tracking-tighter shrink-0">SIXT</span>
                <span className="flex flex-col items-center leading-none shrink-0">
                  <span className="font-serif italic text-lg md:text-xl">REVOLUTION</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] mt-0.5">Beauty London</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driving Demand Section */}
      <div className="w-full px-4 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 mb-12">

        {/* Left Column Text */}
        <div className="w-full lg:w-[35%] pt-2 md:pt-4">
          <p className="text-base md:text-[1.1rem] lg:text-[1.2rem] font-medium leading-tight tracking-tight text-black/90 max-w-[28rem]">
            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
          </p>
        </div>

        {/* Right Column Title & Buttons */}
        <div className="w-full lg:w-[50%] flex flex-col items-start lg:items-start lg:pl-16 xl:pl-24">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tighter text-black w-full text-left whitespace-nowrap">
            Driving Demand &<br />
            Discovery
            <span className="inline-block mx-2 md:mx-4 w-10 h-12 md:w-14 md:h-16 lg:w-16 lg:h-20 rounded-2xl overflow-hidden relative top-2 md:top-3 border-2 border-white/50 shadow-xl">
              {currentImage && (
                <img src={`/hero section image/${currentImage}`} className="w-full h-full object-cover" alt="Discovery" />
              )}
            </span>
          </h2>

          <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-10 w-full justify-start">
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-1 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-black/5">
              Our Story <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white text-black px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-1 transition-all hover:shadow-sm hover:-translate-y-0.5 border border-transparent hover:border-black/5">
              Our Services <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Featured Work Sticky Section */}
      <FeaturedWork />

      {/* Our Services Section */}
      <OurServices />

      {/* Not Algorithms Marquee Section */}
      <NotAlgorithms />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* What's New Section */}
      <WhatsNewSection />

      {/* Ready To Rise Section */}
      <ReadyToRiseSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
