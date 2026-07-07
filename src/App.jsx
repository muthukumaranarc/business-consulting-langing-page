import { useState } from 'react'

/* ──────────────────── TopBar & Header ──────────────────── */
function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs text-gray-500 py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p>Welcome to Financial Services Consultant!</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
              English
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex gap-2">
              <a href="#" className="hover:text-gray-700"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg></a>
              <a href="#" className="hover:text-gray-700"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
              <a href="#" className="hover:text-gray-700"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg></a>
            </div>
            <a href="#" className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 font-semibold text-xs tracking-wider transition-colors ml-2">
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Info */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6 lg:mb-0">
          <div className="w-10 h-10 bg-brand-500 rounded flex items-center justify-center transform rotate-45">
            <div className="w-4 h-4 bg-white border-2 border-brand-500 transform -rotate-45" />
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Consuloan</span>
        </div>

        {/* Info Blocks */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm">
          {/* Phone/Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">001-1234-88888</p>
              <p className="text-gray-500 text-xs">info.deercreative@gmail.com</p>
            </div>
          </div>
          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">40 Baria Sreet 133/2</p>
              <p className="text-gray-500 text-xs">NewYork City, US</p>
            </div>
          </div>
          {/* Time */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">8:00 AM - 6:00 PM</p>
              <p className="text-gray-500 text-xs">Monday to Saturday</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ──────────────────── Navbar ──────────────────── */
function Navbar() {
  const links = ['HOME', 'ABOUT US', 'SERVICES', 'PAGES', 'PROJECTS', 'NEWS', 'SHOP', 'CONTACT'];
  return (
    <nav className="bg-brand-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        <ul className="flex items-center overflow-x-auto no-scrollbar">
          {links.map((link, idx) => (
            <li key={link}>
              <a 
                href="#" 
                className={`block px-5 py-5 text-[11px] font-bold tracking-wider hover:bg-brand-600 transition-colors whitespace-nowrap ${idx === 0 ? 'bg-brand-500' : ''}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 pl-4">
          <button className="p-3 hover:bg-brand-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="p-3 hover:bg-brand-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

/* ──────────────────── Hero ──────────────────── */
function Hero() {
  return (
    <section className="relative h-[600px] flex items-center bg-gray-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)', opacity: 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Communication is the key<br />
            for any Global Business
          </h1>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-white text-gray-900 border border-gray-200 px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-50 transition-colors">
              ABOUT US
            </a>
            <a href="#" className="bg-brand-500 text-white px-8 py-3 text-sm font-bold tracking-wider hover:bg-brand-600 transition-colors">
              OUR SEVICES
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── CallToAction ──────────────────── */
function CallToAction() {
  return (
    <div className="bg-brand-800 py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Would you like to speak to one of our financial advisers?</h3>
          <p className="text-gray-300 text-sm">Just submit your contact details and we'll be in touch shortly.</p>
        </div>
        <a href="#" className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 text-sm font-bold tracking-wider whitespace-nowrap transition-colors">
          GET A QUOTE
        </a>
      </div>
    </div>
  )
}

/* ──────────────────── About Us ──────────────────── */
function AboutUs() {
  const cards = [
    {
      title: 'Financial Projections',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium',
      icon: '$',
      dark: false
    },
    {
      title: 'Strategy & Consulting',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium',
      icon: '📊',
      dark: true
    },
    {
      title: 'Online Consulting',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium',
      icon: '🎧',
      dark: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            We help you in creating a financial strategy that represents your personality. Getting to know you is financial advisor's primary goal. - An approach centered around your life's priorities. It's time for a financial strategy that puts your needs and priorities front and center.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 max-w-5xl mx-auto shadow-xl">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`p-12 text-center transition-colors ${
                card.dark ? 'bg-brand-800 text-white' : 'bg-white text-gray-900'
              }`}
            >
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl mb-6 border-2 ${
                card.dark ? 'border-brand-500 text-white bg-brand-800' : 'border-brand-100 text-brand-500 bg-white'
              }`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{card.title}</h3>
              <p className={`text-sm leading-relaxed ${card.dark ? 'text-gray-300' : 'text-gray-500'}`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Stats Section ──────────────────── */
function Stats() {
  const stats = [
    { num: '90', label: 'Companies consulted', icon: '⏱' },
    { num: '120', label: 'Consultants', icon: '🎧' },
    { num: '50', label: 'Awards Winning', icon: '🏆' },
    { num: '240', label: 'Satisfied Customers', icon: '❤' },
  ];

  return (
    <section className="relative py-24 bg-brand-800 text-white">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-2">We advise you, you call the right decision!</h2>
        <p className="text-brand-200 text-sm mb-16">We help entrepreneurs get their act together before they talk to investors.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl mb-4 text-brand-300">{s.icon}</span>
              <span className="text-4xl md:text-5xl font-bold mb-2">{s.num}</span>
              <span className="text-xs uppercase tracking-wider text-brand-200">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Our Industries ──────────────────── */
function Industries() {
  const industries = [
    { title: 'Corporate Finance', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { title: 'Economic Consulting', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { title: 'Forensic & Litigation', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { title: 'Strategic Communications', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { title: 'Technology Consulting', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { title: 'Healthcare Consulting', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industries</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-12">
          {industries.map((ind, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-brand-500 text-white rounded-full flex items-center justify-center">
                ★
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Meet Our Team ──────────────────── */
function Team() {
  const team = [
    { name: 'Jackson Nash', role: 'Tax Advice', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', active: false },
    { name: 'Ollie Schneider', role: 'Business Planner', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', active: true },
    { name: 'Roger West', role: 'Financer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', active: false },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500">We are here to Acelerate your business and help you find the way.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white overflow-hidden shadow group">
              <div className="aspect-[4/5] bg-gray-200 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all" />
              </div>
              <div className={`p-6 text-center transition-colors ${member.active ? 'bg-brand-800 text-white' : 'bg-brand-900 text-white'}`}>
                {member.active ? (
                  <div className="flex justify-center gap-4 mb-2">
                    <a href="#" className="hover:text-brand-300">f</a>
                    <a href="#" className="hover:text-brand-300">t</a>
                    <a href="#" className="hover:text-brand-300">g+</a>
                    <a href="#" className="hover:text-brand-300">in</a>
                  </div>
                ) : (
                  <>
                    <h3 className="font-bold mb-1">{member.name}</h3>
                    <p className="text-xs text-brand-300">{member.role}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── Request Call Back ──────────────────── */
function CallBack() {
  return (
    <section className="py-20 bg-brand-800 text-white relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Request a call back.</h2>
        <p className="text-sm text-brand-200 mb-12">
          Would you like to speak to one of our financial advisers? Just submit your contact details and we'll<br/>
          be in touch shortly. You can also email us if you prefer that type of communication.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4">
          <select className="flex-1 bg-white text-gray-700 px-4 py-3 text-sm focus:outline-none rounded-none">
            <option>How can we help:*</option>
            <option>Financial Consulting</option>
            <option>Business Planning</option>
          </select>
          <input type="text" placeholder="Your Name:*" className="flex-1 bg-white text-gray-700 px-4 py-3 text-sm focus:outline-none rounded-none" />
          <input type="tel" placeholder="Phone Number:*" className="flex-1 bg-white text-gray-700 px-4 py-3 text-sm focus:outline-none rounded-none" />
          <button type="button" className="bg-brand-500 hover:bg-brand-600 px-8 py-3 font-bold text-sm tracking-wider transition-colors">
            SUBMIT {'>'} 
          </button>
        </form>
      </div>
    </section>
  )
}

/* ──────────────────── Clients ──────────────────── */
function Clients() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-wrap justify-between items-center gap-8 opacity-60">
        <h3 className="text-2xl font-bold text-gray-400">prime$</h3>
        <h3 className="text-2xl font-bold text-gray-400 flex items-center gap-1"><span className="text-xl">∞</span> DUO</h3>
        <h3 className="text-2xl font-bold text-gray-400">TechConsulting</h3>
        <h3 className="text-2xl font-bold text-gray-400">INGERIS</h3>
        <h3 className="text-2xl font-bold text-gray-400">Amaris</h3>
      </div>
    </section>
  )
}

/* ──────────────────── Download App ──────────────────── */
// function DownloadApp() {
//   return (
//     <div className="bg-brand-800 text-white py-6 border-b border-brand-700">
//       {/* <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-center items-center gap-4 text-xl font-semibold">
//         <span>📱 Click on the image to download</span>
//       </div> */}
//     </div>
//   )
// }

/* ──────────────────── Footer ──────────────────── */
function Footer() {
  return (
    <footer className="bg-brand-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-12 border-b border-brand-700">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center transform rotate-45">
              <div className="w-3 h-3 bg-white border-2 border-brand-500 transform -rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">Consuloan</span>
          </div>
          <p className="text-xs text-brand-200 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <ul className="text-xs text-brand-200 space-y-3">
            <li className="flex gap-2 items-start"><span className="mt-0.5 text-brand-400">📍</span> 40 Baria Sreet, NewYork City, US</li>
            <li className="flex gap-2"><span className="mt-0.5 text-brand-400">📞</span> 001-1234-88888</li>
            <li className="flex gap-2"><span className="mt-0.5 text-brand-400">✉</span> info.deercreative@gmail.com</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-6">Our Links</h4>
          <div className="flex gap-8">
            <ul className="text-xs text-brand-200 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">&gt; Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; Pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; Projects</a></li>
            </ul>
            <ul className="text-xs text-brand-200 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">&gt; News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">&gt; Careers</a></li>
            </ul>
          </div>
        </div>

        {/* News */}
        <div>
          <h4 className="font-bold mb-6">Recent News</h4>
          <div className="mb-4 border-b border-brand-700 pb-4">
            <a href="#" className="text-xs font-semibold hover:text-brand-300 transition-colors block mb-1">Colombia Gets a Business Makeover</a>
            <span className="text-[10px] text-brand-400 flex items-center gap-1">⏰ 20 AUG 2017</span>
          </div>
          <div>
            <a href="#" className="text-xs font-semibold hover:text-brand-300 transition-colors block mb-1">Counting the Cost of Delay & Disruption</a>
            <span className="text-[10px] text-brand-400 flex items-center gap-1">⏰ 20 AUG 2017</span>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-xs text-brand-200 mb-4 leading-relaxed">Subscribe our newsletter gor get notification about new updates, etc.</p>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Enter Your Email" className="bg-brand-900 border border-brand-700 text-white px-4 py-3 text-xs focus:outline-none" />
            <button type="button" className="bg-brand-500 hover:bg-brand-600 px-4 py-3 text-xs font-bold transition-colors w-full sm:w-auto self-start mt-2">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-900 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-400">
          <p>@2017 Consuloan. All rights reserved.</p>
          <div className="text-lg text-brand-200 opacity-50 italic">www.DownloadNewThemes.com</div>
          <div className="flex gap-2">
            {['f', 't', 'v', 'in', 'W'].map(icon => (
              <a key={icon} href="#" className="w-8 h-8 bg-brand-800 flex items-center justify-center rounded hover:bg-brand-500 hover:text-white transition-colors font-bold">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ──────────────────── App ──────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <CallToAction />
      <AboutUs />
      <Stats />
      <Industries />
      <Team />
      <CallBack />
      <Clients />
      {/* <DownloadApp /> */}
      <Footer />
    </div>
  )
}
