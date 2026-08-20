import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { APP_DOWNLOAD_URL } from '@/lib/constants';
import { SiteImage } from '@/components/ui/SiteImage';
import '@/app/home.css';

function PhoneChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-top">
          <span>9:41</span>
          <span>•••</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function PhoneChat() {
  return (
    <PhoneChrome>
      <div className="phone-head">
        <div className="phone-didi">DIDI</div>
        <div>
          <div className="phone-title">DIDI</div>
          <div className="phone-subtitle">your daily check-in</div>
        </div>
      </div>
      <div className="bubble">
        Good morning. Show me your tongue after breakfast — new angle today.
      </div>
      <div className="bubble user">On it 📸</div>
      <div className="phone-label">Check up</div>
      <div className="scan-card">
        <p>Take a moment to notice how you feel. No score to chase.</p>
        <div className="pill-line">
          <i />
          <i />
          <i />
        </div>
      </div>
    </PhoneChrome>
  );
}

function PhoneScan() {
  return (
    <PhoneChrome>
      <div className="phone-head">
        <div className="phone-didi">CA</div>
        <div>
          <div className="phone-title">Your signal</div>
          <div className="phone-subtitle">scan · just now</div>
        </div>
      </div>
      <div className="hydration-ring">
        <span>74%</span>
      </div>
      <div className="scan-card">
        <div className="scan-number">
          Hydration 74% <small>signal</small>
        </div>
        <p>One more glass before lunch.</p>
      </div>
    </PhoneChrome>
  );
}

function PhoneEvening() {
  return (
    <PhoneChrome>
      <div className="evening-wrap">
        <div className="evening-sun">5</div>
        <h3>days in a row</h3>
        <p>Your rhythm is becoming a ritual.</p>
        <div className="phone-label">This evening</div>
        <div className="check-row">
          <i />
          <i />
          <i />
        </div>
        <p>check-ins 3/3</p>
      </div>
    </PhoneChrome>
  );
}

const DAY_MOMENTS = [
  {
    index: '01 / MORNING',
    time: '07:42',
    src: '/assets/screens/day-morning.png',
    alt: 'CheckApp home screen — morning check-up with DIDI',
    title: 'Morning, a new question',
    body: 'DIDI reads yesterday and starts a fresh check-in — never the same script.',
  },
  {
    index: '02 / NOTICE',
    time: '09:18',
    src: '/assets/screens/day-notice.png',
    alt: 'CheckApp My Health screen with hydration recommendation',
    title: 'A 3-second scan when it matters',
    body: 'One tongue photo. Hydration signal. One clear nudge.',
  },
  {
    index: '03 / TALK',
    time: '14:05',
    src: '/assets/screens/day-talk.png',
    alt: 'CheckApp chat with DIDI about how you feel',
    title: 'Talk on video if you want',
    body: 'Send a short video. DIDI watches and answers in context.',
  },
  {
    index: '04 / EVENING',
    time: '20:31',
    src: '/assets/screens/day-evening.png',
    alt: 'CheckApp recommendations from the week’s check-ins',
    title: 'Evening, a quiet recap',
    body: 'What went well, what to try tomorrow, streak intact.',
  },
] as const;

export function HomeLanding() {
  return (
    <div className="home-landing">
      <section className="hero">
        <div className="hl-container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">Your AI wellness companion</div>
            <h1 className="display">Your health deserves a friend, not a dashboard.</h1>
            <p className="hero-sub">Start free. No credit card. DIDI is waiting.</p>
            <p className="hero-support">
              Every morning a new question. Some days a 3-second tongue scan. Always a conversation —
              never another chart you&apos;ll ignore.
            </p>
            <div className="cta-row">
              <Link href={APP_DOWNLOAD_URL} className="button button-primary">
                Get CheckApp Free <ArrowUpRight size={16} aria-hidden />
              </Link>
              <Link href="/features" className="text-link">
                See all features <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
            <div className="fine-print">
              Not a medical device · Wellness guidance only · 2,400+ people building habits
            </div>
            <div className="hero-social">
              <strong>2,400+</strong>
              <span>people building a habit of checking in</span>
            </div>
          </div>

          <div className="hero-stage reveal delay-2" aria-label="CheckApp product screens">
            <div className="hero-phone hero-phone-back">
              <PhoneScan />
            </div>
            <div className="hero-phone hero-phone-front">
              <PhoneEvening />
            </div>
            <div className="hero-phone">
              <PhoneChat />
            </div>
          </div>
        </div>
      </section>

      <section className="section problem">
        <div className="hl-container">
          <div className="problem-head">
            <div>
              <div className="eyebrow">The usual way</div>
              <h2 className="section-title">
                Trackers count.
                <br />
                <span style={{ color: 'var(--hl-primary)' }}>DIDI talks.</span>
              </h2>
            </div>
            <p className="body-copy">
              Most apps log water and show a graph. By 3pm you still have a headache — and nobody
              asked how you feel.
            </p>
          </div>

          <div className="bento">
            <div className="bento-card bento-chart">
              <div className="chart-top">
                <b>daily hydration</b>
                <span>from CheckApp</span>
              </div>
              <div className="chart-screen">
                <SiteImage
                  src="/assets/screens/hydration-health.png"
                  alt="CheckApp My Health screen showing hydration analysis and drink-more-water recommendation"
                  width={603}
                  height={1311}
                  className="chart-screen-img"
                />
              </div>
              <div className="chart-fade">real signal, not another empty chart</div>
            </div>
            <div className="bento-card problem-line">
              <h3>You forget to drink until it hurts.</h3>
              <span className="bento-number">01</span>
            </div>
            <div className="bento-card problem-line">
              <h3>Charts everywhere. Zero next step.</h3>
              <span className="bento-number">02</span>
            </div>
            <div className="bento-card problem-line">
              <h3>Generic reminders die after day three.</h3>
              <span className="bento-number">03</span>
            </div>
            <div className="bento-card problem-closer">
              <h3>DIDI is different.</h3>
              <span className="bento-number">04</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight olive-band">
        <div className="hl-container">
          <div className="story-intro">
            <div>
              <div className="eyebrow" style={{ color: 'var(--hl-forest)' }}>
                A familiar rhythm
              </div>
              <h2 className="section-title">A day with DIDI</h2>
            </div>
            <p className="body-copy" style={{ color: 'var(--hl-forest-mid)', maxWidth: 340 }}>
              Four small moments. Enough to make noticing yourself feel natural.
            </p>
          </div>

          <div className="filmstrip">
            {DAY_MOMENTS.map((moment) => (
              <div className="film-card" key={moment.index}>
                <div className="film-index">
                  <span>{moment.index}</span>
                  <span>{moment.time}</span>
                </div>
                <div className="film-shot">
                  <SiteImage
                    src={moment.src}
                    alt={moment.alt}
                    width={603}
                    height={1311}
                    className="film-shot-img"
                  />
                </div>
                <h3>{moment.title}</h3>
                <p>{moment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fourp">
        <div className="hl-container">
          <div className="fourp-top">
            <div>
              <div className="eyebrow">Built on 4P Medicine</div>
              <h2 className="section-title">Care that fits you, not an average</h2>
            </div>
            <p className="body-copy" style={{ maxWidth: 340 }}>
              The principles behind DIDI keep the conversation personal, practical, and focused on
              your day.
            </p>
          </div>

          <div className="pillar-grid">
            <div className="pillar">
              <div className="pillar-num">01</div>
              <h3>Personalisation</h3>
              <p>
                Your check-in learns from the shape of your days, so the next question has a reason
                to be there.
              </p>
              <div className="pillar-ring">
                <span>74%</span>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <h3>Prediction</h3>
              <p>Patterns become context for a kinder nudge, never a verdict or a diagnosis.</p>
              <div className="pillar-chat">
                <div className="bubble">A small nudge, not a grade. You&apos;re doing fine.</div>
                <div className="bubble user">I needed that.</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <h3>Prevention</h3>
              <p>
                Small moments of noticing can support everyday wellness before a habit slips out of
                reach.
              </p>
              <div className="pillar-prevention" aria-hidden="true">
                <div className="pillar-glass-row">
                  <span className="pillar-glass filled" />
                  <span className="pillar-glass filled" />
                  <span className="pillar-glass filled" />
                  <span className="pillar-glass" />
                  <span className="pillar-glass" />
                </div>
                <div className="pillar-nudge">
                  <SiteImage
                    src="/assets/didi-app-icon.png"
                    alt=""
                    width={28}
                    height={28}
                    className="pillar-nudge-icon"
                  />
                  <div>
                    <strong>Soft nudge</strong>
                    <span>One glass before the afternoon dip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-num">04</div>
              <h3>Participativeness</h3>
              <p>You are part of the conversation. DIDI listens, you decide what feels useful.</p>
              <div className="pillar-participate" aria-hidden="true">
                <div className="pillar-action">💧 Drank water</div>
                <div className="pillar-action muted">📷 Tongue photo</div>
                <div className="pillar-action soft">Talk to DIDI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section proof">
        <div className="hl-container">
          <div className="proof-head">
            <div>
              <div className="eyebrow">Small proof, real people</div>
              <h2 className="section-title">For people who bounce off health apps</h2>
            </div>
            <p>
              It turns out a little warmth goes a long way. These are the signals people come back
              for.
            </p>
          </div>

          <div className="proof-layout">
            <div className="proof-photo">
              <SiteImage
                src="/assets/photos/happy-checkin.jpg"
                alt="Woman laughing outdoors — bright everyday wellness energy"
                width={1200}
                height={1800}
                className="proof-photo-img"
                priority={false}
              />
            </div>
            <div className="proof-stats">
              <div className="stat">
                <strong>2,400+</strong>
                <span>people checking in</span>
              </div>
              <div className="stat">
                <strong>94%</strong>
                <span>felt more consistent</span>
              </div>
              <div className="stat">
                <strong>
                  4.8<span>★</span>
                </strong>
                <span>from the community</span>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <div className="quote">
              <p>“It feels like opening a thoughtful note, not opening an app.”</p>
              <small>— Maya, early DIDI member</small>
            </div>
            <div className="quote">
              <p>“The question changes just when I’m about to tune out.”</p>
              <small>— Jonah, 29</small>
            </div>
            <div className="quote">
              <p>“I actually look forward to the evening recap.”</p>
              <small>— Lila, 34</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section open">
        <div className="hl-container">
          <div className="open-head">
            <div>
              <div className="eyebrow">A little more to open</div>
              <h2 className="section-title">What you actually open</h2>
            </div>
            <Link href="/features" className="text-link">
              See all features <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>

          <div className="teaser-grid">
            <div className="teaser">
              <div className="eyebrow">01</div>
              <div className="film-phone-mini">
                <div className="film-phone-screen">
                  <div className="mini-header" />
                  <div className="bubble">How are you arriving today?</div>
                  <div className="bubble user">Slow, but here.</div>
                </div>
              </div>
              <h3>
                Daily
                <br />
                Check-ins
              </h3>
            </div>
            <div className="teaser">
              <div className="eyebrow">02</div>
              <div className="teaser-scan-ring">
                <span>74%</span>
              </div>
              <h3>
                Tongue
                <br />
                Scans
              </h3>
            </div>
            <div className="teaser">
              <div className="eyebrow">03</div>
              <div className="film-phone-mini">
                <div className="film-phone-screen">
                  <div className="mini-header" />
                  <div className="bubble">Talk when typing feels like work.</div>
                </div>
              </div>
              <h3>
                Video
                <br />
                Messages
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="hl-container final-grid">
          <div>
            <div className="eyebrow" style={{ color: 'var(--hl-sun)' }}>
              Make room for a check-in
            </div>
            <h2 className="section-title">Your health deserves a friend, not a dashboard.</h2>
            <p>Start free. No credit card. DIDI is waiting.</p>
            <Link href={APP_DOWNLOAD_URL} className="button button-primary">
              Get CheckApp Free <ArrowUpRight size={16} aria-hidden />
            </Link>
            <div style={{ marginTop: 20 }}>
              <Link href="/features" className="text-link" style={{ color: 'var(--hl-olive-light)' }}>
                See all features <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
          <div className="final-stage">
            <div className="hero-phone hero-phone-back">
              <PhoneScan />
            </div>
            <div className="hero-phone">
              <PhoneEvening />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
