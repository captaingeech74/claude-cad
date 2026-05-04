import Link from "next/link";
import { Eye, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Flying <span className="text-primary-light">Colors</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Helping pilots and aviation professionals meet updated FAA colour
              vision requirements. Powered by the CAD Colour Vision Screener from
              the Applied Vision Research Centre at City St George&apos;s,
              University of London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/test" className="text-sm hover:text-white transition-colors">
                  Take the Test
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Color Blindness
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Research & Credits
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://researchcentres.citystgeorges.ac.uk/applied-vision/avot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  AVOT Vision Centre
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1gxg1Z3v5hbRtZkPPSyGsy6782nKoqImdOl3iLTgjFAY/edit?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Research Report
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs">
              This is a screening tool, not a clinical diagnosis. Consult an eye
              care professional for comprehensive assessment.
            </p>
            <p className="text-xs">
              CAD Test &copy; City St George&apos;s, University of London
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
