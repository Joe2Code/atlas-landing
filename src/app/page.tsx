import Image from "next/image";

const TELEGRAM_BOT_URL = "https://t.me/AroonAtlasBot";

/* ------------------------------------------------------------------ */
/*  Shared data                                                        */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Real-Time Signals",
    desc: "Entry and exit alerts for 20 crypto pairs across 3 timeframes — delivered the moment they trigger.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
    title: "Curated News",
    desc: "Crypto, macro, and geopolitical headlines from trusted sources — filtered for what actually moves markets.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Fully Customizable",
    desc: "Pick your coins, timeframes, and news categories. Change your setup anytime as your strategy evolves.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-Powered Analysis",
    desc: "Contextual market insights that connect your signals with news and macro trends — coming soon.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "Smart Alerts",
    desc: "Price alerts, whale movements, and market mood — know what matters before the crowd does.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Built for Traders",
    desc: "Designed by a trader, for traders. No noise, no fluff — just actionable intelligence.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Join on Telegram",
    desc: "Start the bot and subscribe in under 60 seconds.",
  },
  {
    num: "02",
    title: "Customize Your Setup",
    desc: "Pick your coins, timeframes, and news preferences.",
  },
  {
    num: "03",
    title: "Receive Signals & News",
    desc: "Get real-time alerts and curated market intelligence.",
  },
];

const FAQS = [
  {
    q: "What crypto pairs do you cover?",
    a: "We cover 20 pairs including BTC, ETH, SOL, XRP, DOGE, LINK, SUI, AAVE, BNB, and more. You choose which ones you want to follow.",
  },
  {
    q: "What timeframes are available?",
    a: "1-hour, 4-hour, and Daily (1D). Pick any combination that fits your trading style — scalper, day trader, or swing trader.",
  },
  {
    q: "How are signals generated?",
    a: "Signals are generated from technical analysis strategies running on TradingView, delivered to your Telegram the moment they trigger.",
  },
  {
    q: "Can I try it before subscribing?",
    a: "You can preview a sample signal with the /preview command and browse all features with /features before subscribing.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Manage your subscription through Stripe — cancel anytime with no questions asked.",
  },
  {
    q: "What news sources do you use?",
    a: "Crypto news from CryptoPanic, trending coins from CoinGecko, and macro/world news from Reuters, Bloomberg, CNBC, WSJ, and more.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="bg-grid">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-navy-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Aroon Atlas" width={36} height={36} className="rounded-full" />
            <span className="text-lg font-bold text-foreground">Aroon Atlas</span>
          </div>
          <div className="hidden sm:flex items-center gap-8 text-sm text-text-muted">
            <a href="#features" className="hover:text-cyan transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-cyan transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-cyan transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-cyan transition-colors">FAQ</a>
          </div>
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-background font-semibold text-sm px-5 py-2 rounded-lg hover:bg-cyan-dim transition-colors"
          >
            Open Bot
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-44 sm:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image src="/logo.jpeg" alt="Aroon Atlas" width={120} height={120} className="rounded-full" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Navigate the Markets<br />
            <span className="text-cyan">with Precision</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Real-time crypto trading signals, curated market news, and AI-powered
            analysis — delivered straight to Telegram.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-cyan bg-cyan text-background font-bold text-lg px-8 py-4 rounded-xl hover:bg-cyan-dim transition-all"
            >
              Get Started on Telegram
            </a>
            <a
              href="#features"
              className="border border-navy-border text-text-muted font-medium text-lg px-8 py-4 rounded-xl hover:border-cyan hover:text-cyan transition-all"
            >
              See Features
            </a>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Early-bird pricing: <span className="text-cyan font-semibold">$10/mo</span> for the first 100 subscribers
          </p>
        </div>
      </section>

      {/* Signal Preview */}
      <section className="pb-20 px-6">
        <div className="max-w-md mx-auto bg-navy-card border border-navy-border rounded-2xl p-6 font-mono text-sm leading-relaxed">
          <p className="text-text-muted mb-3 font-sans text-xs uppercase tracking-widest">Live Signal Preview</p>
          <div className="space-y-1">
            <p className="text-foreground font-bold">&#x1F3AF; LIVE SIGNAL</p>
            <p className="text-foreground">&#x1F4B0; Asset: <span className="text-cyan">BTCUSDT</span></p>
            <p className="text-foreground">&#x23F0; Timeframe: <span className="text-cyan">4h</span></p>
            <p className="text-foreground">&#x1F7E2; Direction: <span className="text-green-400">LONG</span></p>
            <p className="text-foreground">&#x1F4CD; Entry: <span className="text-cyan">$68,420.00</span></p>
            <p className="text-foreground">&#x1F6D1; Stop: <span className="text-red-400">$66,950.00</span></p>
            <div className="border-t border-navy-border mt-3 pt-3">
              <p className="text-text-muted text-xs">&#x1F5FA;&#xFE0F; Aroon Atlas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Everything You Need to <span className="text-cyan">Trade Smarter</span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            Built by a trader, for traders. No noise — just the tools and intelligence you need.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-navy-card border border-navy-border rounded-2xl p-6 hover:border-cyan/40 transition-colors"
              >
                <div className="text-cyan mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Up and Running in <span className="text-cyan">3 Steps</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-5xl font-extrabold text-cyan/20 mb-4">{s.num}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coins Ticker */}
      <section className="py-12 px-6 border-y border-navy-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm mb-4">Supported Assets</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["BTC", "ETH", "SOL", "XRP", "DOGE", "LINK", "SUI", "AAVE", "BNB", "UNI", "HBAR", "ONDO", "INJ", "FLOKI", "TAO", "PENGU", "MON", "TRX"].map(
              (coin) => (
                <span
                  key={coin}
                  className="bg-navy-card border border-navy-border text-cyan text-xs font-mono px-3 py-1.5 rounded-full"
                >
                  {coin}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Simple, <span className="text-cyan">Transparent Pricing</span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-xl mx-auto">
            One plan. Full access. Cancel anytime.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Early Bird */}
            <div className="relative bg-navy-card border-2 border-cyan rounded-2xl p-8">
              <div className="absolute -top-3 left-6 bg-cyan text-background text-xs font-bold px-3 py-1 rounded-full">
                EARLY BIRD
              </div>
              <div className="mt-2">
                <span className="text-4xl font-extrabold text-cyan">$10</span>
                <span className="text-text-muted">/mo</span>
              </div>
              <p className="text-sm text-text-muted mt-1 mb-6">or $99/year</p>
              <ul className="space-y-3 text-sm">
                {[
                  "Real-time entry & exit signals",
                  "20 crypto pairs, 3 timeframes",
                  "Daily market pulse & news",
                  "Weekly trading briefs",
                  "Full customization",
                  "Priority support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan mt-0.5">&#x2713;</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-8 text-center glow-cyan bg-cyan text-background font-bold py-3 rounded-xl hover:bg-cyan-dim transition-all"
              >
                Claim Early-Bird Spot
              </a>
              <p className="text-xs text-text-muted text-center mt-3">First 100 subscribers only</p>
            </div>

            {/* Regular */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
              <div className="mt-5">
                <span className="text-4xl font-extrabold text-foreground">$15</span>
                <span className="text-text-muted">/mo</span>
              </div>
              <p className="text-sm text-text-muted mt-1 mb-6">or $149/year</p>
              <ul className="space-y-3 text-sm">
                {[
                  "Real-time entry & exit signals",
                  "20 crypto pairs, 3 timeframes",
                  "Daily market pulse & news",
                  "Weekly trading briefs",
                  "Full customization",
                  "Priority support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan mt-0.5">&#x2713;</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-8 text-center border border-navy-border text-foreground font-bold py-3 rounded-xl hover:border-cyan hover:text-cyan transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="text-cyan">Questions</span>
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-navy-card border border-navy-border rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-foreground font-medium">
                  {faq.q}
                  <span className="text-cyan text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-4 text-text-muted text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Trade <span className="text-cyan">Smarter</span>?
          </h2>
          <p className="text-text-muted mb-8">
            Join Aroon Atlas on Telegram and start receiving signals in minutes.
          </p>
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glow-cyan bg-cyan text-background font-bold text-lg px-10 py-4 rounded-xl hover:bg-cyan-dim transition-all"
          >
            Launch Aroon Atlas
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Aroon Atlas" width={28} height={28} className="rounded-full" />
            <span className="text-sm text-text-muted">&copy; 2025 Aroon Atlas. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
