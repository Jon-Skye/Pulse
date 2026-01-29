"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Editorial Submission",
  "Brand Partnership",
  "Technical Support",
  "Press Inquiry",
] as const;

const CONTACT_CARDS = [
  {
    title: "Editorial Team",
    email: "editorial@pulsemagazine.com",
    description:
      "Story ideas, article submissions, and editorial inquiries",
  },
  {
    title: "Partnerships",
    email: "partnerships@pulsemagazine.com",
    description:
      "Brand collaborations, sponsorships, and advertising opportunities",
  },
  {
    title: "General",
    email: "hello@pulsemagazine.com",
    description: "General questions, feedback, and reader inquiries",
  },
  {
    title: "Press",
    email: "press@pulsemagazine.com",
    description: "Media inquiries and press kit requests",
  },
];

const FAQ_ITEMS = [
  {
    q: "How can I submit an article for publication?",
    a: "Send your pitch or completed article to editorial@pulsemagazine.com. Include a brief bio and any relevant writing samples. We typically respond within 5-7 business days.",
  },
  {
    q: "Do you accept guest contributors?",
    a: "Yes! We're always looking for fresh voices and perspectives. Review our editorial guidelines and send your proposal to our editorial team.",
  },
  {
    q: "How can my brand partner with PULSE?",
    a: "We offer various partnership opportunities including sponsored content, newsletter placements, and custom campaigns. Contact partnerships@pulsemagazine.com for our media kit.",
  },
  {
    q: "What's your editorial focus?",
    a: "PULSE covers intentional living, sustainable practices, wellness, design, and thoughtful consumption. We focus on actionable content for real life.",
  },
  {
    q: "How often do you publish new content?",
    a: "We publish 3-4 new articles weekly, with our newsletter going out every Tuesday featuring the week's highlights and exclusive content.",
  },
];

const inputBase =
  "w-full px-4 py-3 border border-foreground/20 bg-background text-foreground text-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24">
          <Container className="max-w-article text-center">
            <h1 className="font-serif text-h1 mb-4">Get in Touch</h1>
            <p className="text-body-lg text-foreground/70 max-w-xl mx-auto">
              We&apos;d love to hear from you. Whether you&apos;re a reader,
              contributor, or brand partner, let&apos;s start a conversation.
            </p>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-muted">
          <Container className="max-w-[750px]">
            <h2 className="font-serif text-h2 mb-10">Send us a message</h2>
            {formSubmitted ? (
              <p className="text-body-lg text-foreground/80">
                Thank you for your message. We&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-body-sm font-medium text-foreground mb-2"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className={inputBase}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-body-sm font-medium text-foreground mb-2"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className={inputBase}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-body-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className={inputBase}
                  >
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-body-sm font-medium text-foreground mb-2"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    className={`${inputBase} resize-y min-h-[140px]`}
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-caption uppercase tracking-wider bg-accent text-white hover:bg-accent-dark transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </Container>
        </section>

        {/* Contact Information Grid */}
        <section className="py-16 md:py-24">
          <Container>
            <h2 className="font-serif text-h2 mb-12">Other ways to connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONTACT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-muted rounded-lg p-6 border border-foreground/5"
                >
                  <h3 className="font-serif text-[22px] mb-3">{card.title}</h3>
                  <a
                    href={`mailto:${card.email}`}
                    className="text-body-sm text-accent underline underline-offset-2 hover:text-accent-dark transition-colors break-all"
                  >
                    {card.email}
                  </a>
                  <p className="text-body-sm text-foreground/70 mt-3">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted">
          <Container className="max-w-3xl">
            <h2 className="font-serif text-h2 mb-12">
              Frequently asked questions
            </h2>
            <dl className="space-y-10">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i}>
                  <dt className="font-serif text-h4 text-foreground mb-2">
                    {item.q}
                  </dt>
                  <dd className="text-body text-foreground/70 pl-0">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16 md:py-24">
          <Container className="max-w-xl text-center">
            <h2 className="font-serif text-h2 mb-4">Stay in the loop</h2>
            <p className="text-body-lg text-foreground/70 mb-10">
              Get our weekly newsletter with the latest articles, exclusive
              content, and curated recommendations delivered to your inbox every
              Tuesday.
            </p>
            {newsletterSubmitted ? (
              <p className="text-body text-foreground/80">
                Thanks for subscribing. Check your inbox for a confirmation.
              </p>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  name="newsletter-email"
                  required
                  placeholder="you@example.com"
                  className={`${inputBase} flex-1`}
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-caption uppercase tracking-wider bg-accent text-white hover:bg-accent-dark transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
