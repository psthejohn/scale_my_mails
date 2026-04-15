import heroImg from './assets/hero.png'
import './App.css'

const navItems = ['Services', 'Proof', 'Process', 'Contact']

const imageSet = {
  hero:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  strategy:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  workspace:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
}

const metrics = [
  { value: '30-60', label: 'days to launch a revenue-ready email system' },
  { value: '4.8x', label: 'average retained ROI target for campaigns' },
  { value: 'US/UK/EU', label: 'foreign-client operating rhythm from India' },
]

const services = [
  {
    title: 'Email revenue audit',
    copy: 'A plain-English teardown of welcome flows, abandoned carts, list health, offers, and missed revenue moments.',
    tag: 'Start here',
  },
  {
    title: 'Campaign engine',
    copy: 'Weekly revenue emails with positioning, copy, design direction, segmentation, QA, and reporting.',
    tag: 'Retainers',
  },
  {
    title: 'Automation setup',
    copy: 'Welcome, nurture, cart recovery, post-purchase, winback, and reactivation flows built for compounding revenue.',
    tag: 'One-time',
  },
  {
    title: 'Async client system',
    copy: 'Loom updates, clear approvals, monthly scorecards, and a clean handoff rhythm across US, UK, AUS, and EU time zones.',
    tag: 'Operations',
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

function App() {
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
          <p className="eyebrow">Email marketing agency for foreign clients</p>
          <h1>Turn quiet email lists into a calm monthly revenue system.</h1>
          <p className="hero-lede">
            India-based execution for US, UK, AUS, and EU businesses that need strategy,
            copy, campaigns, automations, and reporting without hiring a full email team.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:hello@scalemymail.com">
              Get a free audit
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

      <section className="metrics-strip" aria-label="Business outcomes">
        {metrics.map((metric) => (
          <div key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What gets handled</p>
          <h2>Campaigns, flows, and client communication in one system.</h2>
          <p>
            The offer is built for lean founders who want foreign clients, USD retainers,
            INR cost control, and delivery that can scale with AI plus trusted freelancers.
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

      <section className="section split-section" id="proof">
        <div className="section-heading">
          <p className="eyebrow">Proof without name-dropping</p>
          <h2>Reviews written for trust, privacy, and sales clarity.</h2>
          <p>
            Client proof stays anonymized while still showing buyers the outcomes they care
            about: revenue clarity, faster approvals, and reliable execution.
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

      <section className="image-band" aria-label="Email marketing workspace">
        <article>
          <img src={imageSet.strategy} alt="Campaign reporting and strategy work on a laptop" />
          <div>
            <p className="eyebrow">Strategy</p>
            <h3>Every email starts with a revenue reason.</h3>
          </div>
        </article>
        <article>
          <img src={imageSet.workspace} alt="A clean workspace used for client delivery and planning" />
          <div>
            <p className="eyebrow">Delivery</p>
            <h3>Async updates keep clients moving without extra calls.</h3>
          </div>
        </article>
      </section>

      <section className="email-lab" aria-label="Sample email ideas">
        <div>
          <p className="eyebrow">Sample emails</p>
          <h2>Email ideas that sound specific, not spammy.</h2>
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

      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact us for scope</p>
          <h2>No public pricing table. Start with the audit, then quote the right work.</h2>
          <p>
            This keeps the offer flexible for campaigns, automations, setup projects, and
            monthly retainers without making the page feel like a cheap menu.
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
          Contact us
        </a>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">Delivery rhythm</p>
          <h2>A simple 4-step workflow clients can understand in one call.</h2>
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

      <section className="final-cta">
        <p className="eyebrow">First client ready</p>
        <h2>Get a free audit angle, a 90-day email plan, and a clean next step.</h2>
        <a className="primary-button" href="mailto:hello@scalemymail.com">
          Start with an audit
        </a>
      </section>
    </main>
  )
}

export default App
