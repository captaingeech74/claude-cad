import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Building2,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | CADVision",
  description:
    "Resources about colour vision deficiency, the CAD test, research links, and frequently asked questions.",
};

const resources = [
  {
    icon: Building2,
    title: "Applied Vision Research Centre (AVOT)",
    description:
      "The research centre at City St George's, University of London that developed the CAD test and Colour Vision Screener.",
    href: "https://researchcentres.citystgeorges.ac.uk/applied-vision/avot",
  },
  {
    icon: FileText,
    title: "CAD Colour Blindness Test Research Report",
    description:
      "The research document detailing the CAD Colour Vision Screener methodology, validation, and findings.",
    href: "https://docs.google.com/document/d/1gxg1Z3v5hbRtZkPPSyGsy6782nKoqImdOl3iLTgjFAY/edit?usp=drivesdk",
  },
  {
    icon: BookOpen,
    title: "Colour Vision Assessment (City University)",
    description:
      "Official page for the full CAD diagnostic test, including information about booking appointments for comprehensive assessment.",
    href: "https://www.city.ac.uk/avot/individual-tests/colour-vision-assessment-including-cad",
  },
  {
    icon: Building2,
    title: "Aeglia Institute for Occupational Vision",
    description:
      "International partner for the CAD test equipment, providing colour vision assessment tools for occupational use.",
    href: "http://www.aeglia.nl/index.php/products/colour-vision",
  },
];

const faq = [
  {
    question: "What is the difference between the Screener and the full CAD test?",
    answer:
      "The Colour Vision Screener (CVS) is a rapid screening tool that identifies whether you may have a colour vision deficiency. The full CAD test is a comprehensive diagnostic assessment that precisely measures the type and severity of your deficiency. Think of the screener as a first step — if it indicates a deficiency, the full CAD test provides the detailed diagnosis.",
  },
  {
    question: "Is this test accurate when run in a web browser?",
    answer:
      "The screener runs on a secure cloud server (using Wine64 on Linux), with the display streamed live to your browser via noVNC. This means you're interacting with the real, unmodified Windows application — not an emulation. For best results, ensure your monitor is set to sRGB colour mode, you're in a well-lit room, and any blue-light filters are disabled. For official occupational certification, visit the AVOT centre in person.",
  },
  {
    question: "Who should take this test?",
    answer:
      "Anyone curious about their colour vision! It's particularly valuable for people considering careers in aviation, rail, maritime, or other fields where colour perception is safety-critical. It's also helpful for parents who suspect their child may have a colour vision deficiency, and for anyone who has wondered whether they see colours the same way others do.",
  },
  {
    question: "Can colour blindness be cured?",
    answer:
      "Congenital colour vision deficiency (the type you're born with) cannot currently be cured, though research into gene therapy is ongoing. However, acquired colour vision changes (from ageing, medication, or disease) may sometimes be improved by addressing the underlying cause. Importantly, understanding your colour vision helps you develop strategies and access accommodations.",
  },
  {
    question: "Is my data stored or shared?",
    answer:
      "No. The test runs on a cloud server that streams only the display to your browser. The server does not record your keystrokes, capture your results, or store any personal information. Your screening is completely private — the server simply runs the visual test application.",
  },
  {
    question: "What if the test doesn't load in my browser?",
    answer:
      "The test requires a modern browser and a stable internet connection to stream from the cloud server. If you experience issues, try using a desktop or laptop with a wired or strong Wi-Fi connection. The test server may take up to 30 seconds to wake up on first access — please be patient and try refreshing.",
  },
  {
    question: "How common is colour vision deficiency?",
    answer:
      "Approximately 8% of men and 0.5% of women of Northern European descent have some form of red-green colour vision deficiency. That's about 1 in 12 men and 1 in 200 women. Globally, over 300 million people are affected. Blue-yellow deficiency is much rarer, affecting fewer than 1 in 10,000 people.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Resources & FAQ
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Helpful links, research references, and answers to common questions
            about colour vision and the CAD test.
          </p>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Useful Links</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <resource.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {resource.title}
                      <ExternalLink className="w-4 h-4 opacity-50" />
                    </h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* About the backend */}
          <div className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
            <h3 className="font-semibold text-foreground mb-2">
              How the in-browser test works
            </h3>
            <p className="text-sm text-muted mb-0">
              The CAD Colour Vision Screener is a 64-bit Windows application. Rather than a client-side
              emulator, we run the real, unmodified application on a Linux cloud server using{" "}
              <strong>Wine64</strong>, and stream the display to your browser in real time via{" "}
              <strong>noVNC</strong> (WebSocket VNC). You interact with the genuine software as intended
              by its developers — no compromises.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group bg-background rounded-xl border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-primary/3 transition-colors">
                  <span className="font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Check Your Colour Vision?
          </h2>
          <p className="text-lg text-muted mb-8">
            The screening is free, private, and takes under 3 minutes.
          </p>
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold bg-primary text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
          >
            Take the Free Screening
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
