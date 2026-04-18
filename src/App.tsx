import heroImg from './assets/hero.png'
import './App.css'
import { useEffect, useRef } from 'react'

// Scroll Reveal Hook
const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null)
  
  useEffect(() => {
    if (!ref.current) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return ref
}

const navItems = ['Services', 'Proof', 'Process', 'Contact', 'FAQ']

const imageSet = {
  hero:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  strategy:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  workspace:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
}

const metrics = [
  { value: '30-60', label: 'days to launch an email revenue system' },
  { value: '4.8x', label: 'average ROI from email alone' },
  { value: 'Email-first', label: 'strategy for US, UK, AUS, EU founders' },
]

const whyUs = [
  { icon: '📧', text: 'Email-focused expertise', subtext: 'Only email design, copy, and setup' },
  { icon: '⚡', text: '30-60 day execution', subtext: 'From audit to live campaigns' },
  { icon: '📊', text: '4.8x avg ROI', subtext: 'Measurable email revenue' },
  { icon: '🌍', text: 'Async delivery worldwide', subtext: 'US/UK/AUS/EU time zones' },
]

const services = [
  {
    title: 'Email audit',
    copy: 'Breakdown of your welcome sequences, abandonment flows, list health, offer gaps, and missed revenue moments in email.',
    tag: 'Start here',
  },
  {
    title: 'Email campaigns',
    copy: 'Strategic weekly emails: copy, design, segmentation, A/B testing, QA, and performance reporting. Retainer-based.',
    tag: 'Retainers',
  },
  {
    title: 'Email automation',
    copy: 'Welcome, nurture, cart recovery, post-purchase, winback, and reactivation flows—all designed for email revenue.',
    tag: 'One-time',
  },
  {
    title: 'Email operations',
    copy: 'Async Loom updates, approvals via email/Slack, monthly email scorecards, and clean handoff workflows.',
    tag: 'Delivery',
  },
]

const contactReasons = [
  {
    title: 'Audit first',
    copy: 'Send your store, funnel, or email platform details and get a practical first diagnosis before any retainer talk.',
  },
  {
    title: 'Scope privately',
    copy: 'Pricing depends on list size, campaign volume, automation depth, and how much your team wants handled.',
  },
  {
    title: 'Move async',
    copy: 'Most planning, approvals, reporting, and revisions can happen through Loom, email, and shared docs.',
  },
]

const proof = [
  {
    quote:
      'The audit found revenue leaks we had ignored for months. The first sequence was clear, fast, and easy for our team to approve.',
    person: 'DTC founder, United States',
  },
  {
    quote:
      'The async updates were better than another agency meeting. We always knew what was shipped, what was next, and what needed approval.',
    person: 'SaaS operator, United Kingdom',
  },
  {
    quote:
      'The emails felt like our voice, not a template. Campaigns became a predictable part of our monthly revenue instead of a scramble.',
    person: 'Online educator, Australia',
  },
]

const emails = [
  {
    subject: 'Your welcome offer expires tonight',
    preview:
      'A conversion-focused welcome email that gives new subscribers a reason to act without sounding desperate.',
  },
  {
    subject: 'Still comparing options?',
    preview:
      'A soft objection-handling email for leads who opened, clicked, and paused before booking or buying.',
  },
  {
    subject: 'Three quick wins from your account',
    preview:
      'A value-first retention email that makes the customer feel understood before introducing the next step.',
  },
]

const process = [
  'Audit the current funnel and revenue gaps',
  'Map the next 90 days of campaigns and automations',
  'Write, design, QA, and schedule email assets',
  'Report results with decisions, not vanity charts',
]

const faq = [
  {
    question: 'How long does the audit take?',
    answer:
      'The initial audit takes 5-7 business days. You\'ll get a detailed findings report plus a discovery call to discuss next steps.',
  },
  {
    question: 'Do you guarantee results?',
    answer:
      'We guarantee clear execution and measurable monthly reporting. Revenue results depend on your offer, audience quality, and overall funnel—we optimize the email layer and propose the next initiatives based on data.',
  },
  {
    question: 'What\'s the typical retainer?',
    answer:
      'Monthly retainers range from $1,500 to $8,000 USD depending on list size, campaign frequency, automation depth, and design complexity. One-time projects and audits are separately quoted.',
  },
  {
    question: 'How do async approvals work?',
    answer:
      'You\'ll receive Loom videos of campaign drafts, automation flows, and design choices. You approve via email, Slack, or our shared feedback doc. Typical approval turnaround is 24-48 hours across time zones.',
  },
  {
    question: 'Can you handle my existing email platform?',
    answer:
      'Yes. We work with Klaviyo, ConvertKit, Mailchimp, Substack, HubSpot, and custom integrations. We can also recommend platform migrations if your current setup is limiting revenue.',
  },
  {
    question: 'What if we\'re not satisfied?',
    answer:
      'The audit is risk-free—if you don\'t see value in the recommendations, we part as friends. For retainers, we work on a month-to-month basis with a 2-week wind-down period if needed.',
  },
]

function App() {
  const metricsRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const proofRef = useScrollReveal()
  const imageBandRef = useScrollReveal()
  const emailLabRef = useScrollReveal()
  const founderRef = useScrollReveal()
  const contactRef = useScrollReveal()
  const processRef = useScrollReveal()
  const faqRef = useScrollReveal()
  
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Scale My Mail home">
          <span className="brand-mark">SM</span>
          <span>Scale My Mail</span>
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="mailto:hello@scalemymail.com">
          Book audit
        </a>
      </header>

      <section className="hero-section" id="top">
        <img src={heroImg} className="hero-art" alt="" />
        <div className="hero-copy">
          <p className="eyebrow">Email-only agency for international founders</p>
          <h1>Email design, copy, and tools setup for revenue-focused founders.</h1>
          <p className="hero-lede">
            India-based email specialists crafting high-converting sequences and automations for US, UK, AUS, and EU businesses. We do one thing: turn quiet email lists into predictable monthly revenue.
          </p>
          <div className="why-us-highlights">
            {whyUs.map((item) => (
              <div key={item.text} className="why-us-item">
                <div className="why-us-icon">{item.icon}</div>
                <div>
                  <strong>{item.text}</strong>
                  <span>{item.subtext}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:hello@scalemymail.com">
              Get a free email audit
            </a>
            <a className="secondary-button" href="#contact">
              Contact us
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={imageSet.hero}
            alt="A focused marketing team reviewing campaign work on laptops"
          />
          <div className="signal-panel" aria-label="Campaign scorecard preview">
            <div className="panel-topline">
              <span>April revenue system</span>
              <strong>Live</strong>
            </div>
            <div className="score-grid">
              <span>Welcome flow</span>
              <strong>Ready</strong>
              <span>Campaign queue</span>
              <strong>6 emails</strong>
              <span>Report cadence</span>
              <strong>Monthly</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip reveal" ref={metricsRef} aria-label="Business outcomes">
        {metrics.map((metric) => (
          <div key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section reveal" ref={servicesRef} id="services">
        <div className="section-heading">
          <p className="eyebrow">Email services we provide</p>
          <h2>Design, copy, and tools for email revenue.</h2>
          <p>
            We specialize exclusively in email: audits, campaign management, automation setup, and delivery operations. No social, SMS, or paid ads. Just high-converting email sequences built for your audience.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span>{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section reveal" ref={proofRef} id="proof">
        <div className="section-heading">
          <p className="eyebrow">Client proof</p>
          <h2>Real email outcomes from real founders.</h2>
          <p>
            These clients started with email audits, moved to retainer campaigns, and now run monthly revenue sequences autonomously. Anonymous but verified.
          </p>
        </div>
        <div className="review-stack">
          {proof.map((review) => (
            <figure className="review-card" key={review.person}>
              <blockquote>{review.quote}</blockquote>
              <figcaption>{review.person}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="image-band reveal" ref={imageBandRef} aria-label="Email marketing workspace">
        <article>
          <img src={imageSet.strategy} alt="Email campaign strategy and copywriting work" />
          <div>
            <p className="eyebrow">Copy + Design</p>
            <h3>Every email sequence starts with a revenue reason.</h3>
          </div>
        </article>
        <article>
          <img src={imageSet.workspace} alt="Email operations and async client delivery" />
          <div>
            <p className="eyebrow">Setup + Operations</p>
            <h3>Async updates and approvals keep campaigns moving.</h3>
          </div>
        </article>
      </section>

      <section className="email-lab reveal" ref={emailLabRef} aria-label="Sample email ideas">
        <div>
          <p className="eyebrow">Sample emails</p>
          <h2>Email copy that converts without sounding pushy.</h2>
        </div>
        <div className="email-list">
          {emails.map((email) => (
            <article className="email-card" key={email.subject}>
              <span>Subject</span>
              <h3>{email.subject}</h3>
              <p>{email.preview}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section founder-section reveal" ref={founderRef} id="about">
        <div className="section-heading">
          <p className="eyebrow">About the founder</p>
          <h2>Built by someone who obsesses over email performance.</h2>
        </div>
        <div className="founder-card">
          <div className="founder-avatar">PS</div>
          <div className="founder-content">
            <h3>5+ years scaling email for SaaS and DTC brands.</h3>
            <p>
              After managing email systems that generated $50M+ in revenue, I built Scale My Mail to offer that same expertise to international founders at service rates. We run on a lean India-based team, async-first workflow, and one core belief: email should be your highest-ROI marketing channel. No template work, no shortcuts.
            </p>
            <div className="founder-creds">
              <span>✓ Email-only specialist since 2019</span>
              <span>✓ $50M+ email revenue managed</span>
              <span>✓ SaaS, DTC, courses, marketplaces</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section reveal" ref={contactRef} id="contact">
        <div className="section-heading">
          <p className="eyebrow">Ready to scale email revenue?</p>
          <h2>Start with a free email audit.</h2>
          <p>
            We'll analyze your current sequences, flows, and list health. Then you get a written report with strategic recommendations and a clear next step—no obligation.
          </p>
        </div>
        <div className="contact-grid">
          {contactReasons.map((item) => (
            <article className="contact-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <a className="primary-button contact-button" href="mailto:hello@scalemymail.com">
          Get your email audit
        </a>
      </section>

      <section className="section process-section reveal" ref={processRef} id="process">
        <div className="section-heading">
          <p className="eyebrow">Email execution workflow</p>
          <h2>How we scale your email revenue in 4 steps.</h2>
        </div>
        <ol className="process-list">
          {process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="section faq-section reveal" ref={faqRef} id="faq">
        <div className="section-heading">
          <p className="eyebrow">Questions about email services</p>
          <h2>Quick answers about how we work.</h2>
        </div>
        <div className="faq-grid">
          {faq.map((item) => (
            <div key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <p className="eyebrow">Ready to start</p>
        <h2>Get a free email audit, a 90-day plan, and a clear path forward.</h2>
        <a className="primary-button" href="mailto:hello@scalemymail.com">
          Book your email audit
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-mark">SM</div>
            <div>
              <strong>Scale My Mail</strong>
              <p>Email design, copy, and tools for founders worldwide.</p>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h4>Services</h4>
              <a href="#services">Email Services</a>
              <a href="#process">Process</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="mailto:hello@scalemymail.com">Contact</a>
              <a href="mailto:hello@scalemymail.com?subject=Press">Press</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Scale My Mail. Email specialists for US, UK, AUS, and EU founders.</p>
          <p>Email: <a href="mailto:hello@scalemymail.com">hello@scalemymail.com</a></p>
        </div>
      </footer>
    </main>
  )
}

export default App
