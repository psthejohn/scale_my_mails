import heroImg from './assets/hero.png'
import './App.css'

const navItems = ['Services', 'Proof', 'Pricing', 'Process']

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

const packages = [
  {
    name: 'Starter',
    price: '$800',
    detail: 'for small lists that need consistent campaigns',
    items: ['2 campaigns per month', 'Monthly performance report', 'Subject line testing', 'Async Loom update'],
  },
  {
    name: 'Growth',
    price: '$2,000',
    detail: 'for brands ready to turn email into a channel',
    items: ['4-6 campaigns per month', '1 core automation flow', 'Bi-weekly strategy call', 'Copy, design direction, QA'],
    featured: true,
  },
  {
    name: 'Full-Service',
    price: '$4,500',
    detail: 'for teams that want email handled end to end',
    items: ['Weekly campaigns', 'Full lifecycle automation', 'Weekly reporting cadence', 'Freelancer support managed'],
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
            <a className="secondary-button" href="#pricing">
              View packages
            </a>
          </div>
        </div>
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

      <section className="section" id="pricing">
        <div className="section-heading">
          <p className="eyebrow">USD pricing, lean delivery</p>
          <h2>Packages designed for high-margin solo operations.</h2>
          <p>
            Start with retainers, add one-time automation builds, and keep delivery light
            through templates, QA checklists, Loom updates, and specialist freelancers only
            when the client budget supports it.
          </p>
        </div>
        <div className="pricing-grid">
          {packages.map((plan) => (
            <article className={plan.featured ? 'price-card featured' : 'price-card'} key={plan.name}>
              <span>{plan.name}</span>
              <h3>{plan.price}<small>/mo</small></h3>
              <p>{plan.detail}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
