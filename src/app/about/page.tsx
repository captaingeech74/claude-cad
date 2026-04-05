import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Colour Vision Deficiency | CADVision",
  description:
    "Learn about colour vision deficiency (colour blindness): types, causes, prevalence, and how the CAD test works.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Understanding Colour Vision
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Colour vision deficiency is one of the most common visual
            conditions. Learning about it helps us build a more inclusive
            world for everyone.
          </p>
        </div>
      </section>

      {/* How Color Vision Works */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">How Colour Vision Works</h2>
          <div className="prose prose-lg max-w-none text-muted space-y-4">
            <p>
              Human colour vision relies on three types of photoreceptor cells
              called <strong>cones</strong>, located in the retina at the back of
              the eye. Each type is sensitive to a different range of
              wavelengths:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 not-prose my-8">
              {[
                {
                  name: "L-cones (Long)",
                  color: "bg-red-500",
                  desc: "Sensitive to long wavelengths — reds and oranges",
                },
                {
                  name: "M-cones (Medium)",
                  color: "bg-green-500",
                  desc: "Sensitive to medium wavelengths — greens and yellows",
                },
                {
                  name: "S-cones (Short)",
                  color: "bg-blue-500",
                  desc: "Sensitive to short wavelengths — blues and violets",
                },
              ].map((cone) => (
                <div
                  key={cone.name}
                  className="bg-surface rounded-xl p-6 border border-border"
                >
                  <div className={`w-8 h-8 rounded-full ${cone.color} mb-3 opacity-80`} />
                  <h3 className="font-semibold text-foreground text-base mb-1">
                    {cone.name}
                  </h3>
                  <p className="text-sm text-muted">{cone.desc}</p>
                </div>
              ))}
            </div>
            <p>
              Your brain combines the signals from all three cone types to
              create the rich spectrum of colour you perceive. When one or more
              cone types are altered or absent, colour perception changes —
              this is colour vision deficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Types of CVD */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Types of Colour Vision Deficiency
          </h2>

          <div className="space-y-6">
            {/* Red-Green */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-400 to-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Red-Green Deficiency
                  </h3>
                  <p className="text-muted mb-4 leading-relaxed">
                    The most common form, affecting approximately 8% of men and
                    0.5% of women of Northern European descent. It includes:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-surface rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-foreground mb-1">
                        Protanopia / Protanomaly
                      </h4>
                      <p className="text-sm text-muted">
                        Reduced or absent L-cone (red) function. Reds may appear
                        darker and harder to distinguish from greens, browns,
                        and oranges.
                      </p>
                    </div>
                    <div className="bg-surface rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-foreground mb-1">
                        Deuteranopia / Deuteranomaly
                      </h4>
                      <p className="text-sm text-muted">
                        Reduced or absent M-cone (green) function. The most
                        common type overall. Greens may appear more reddish or
                        brownish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue-Yellow */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Blue-Yellow Deficiency (Tritanopia)
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Much rarer than red-green deficiency, affecting fewer than 1
                    in 10,000 people. Caused by reduced or absent S-cone (blue)
                    function. Blues may appear greenish, and yellows may appear
                    pale or pinkish. This type can also be acquired through
                    ageing, certain medications, or eye disease.
                  </p>
                </div>
              </div>
            </div>

            {/* Complete */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gray-300 to-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Achromatopsia (Complete Colour Blindness)
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Extremely rare, affecting roughly 1 in 30,000 people. People
                    with achromatopsia have no functioning cone cells and see
                    entirely in shades of grey. It is often accompanied by
                    light sensitivity and reduced visual acuity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Why It Matters
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Colour vision plays a crucial role in many aspects of daily life
              and numerous professions. Understanding your colour vision profile
              helps you:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "Safety-Critical Careers",
                  desc: "Pilots, air traffic controllers, train drivers, and maritime officers all require verified colour vision for safety.",
                },
                {
                  title: "Everyday Life",
                  desc: "Reading traffic lights, choosing ripe fruit, interpreting charts and maps, and matching clothes — colour affects daily tasks.",
                },
                {
                  title: "Education",
                  desc: "Children with undiagnosed CVD may struggle with colour-coded materials. Early detection helps teachers provide support.",
                },
                {
                  title: "Self-Understanding",
                  desc: "Simply knowing how your colour vision differs from average helps you develop strategies and ask for accommodations when needed.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface rounded-xl p-6 border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The CAD Test */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">About the CAD Test</h2>
          </div>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              The <strong>CAD (Colour Assessment and Diagnosis)</strong> test
              was developed by Professor John Barbur and the Applied Vision
              Research Centre (AVOT) at City St George&apos;s, University of
              London. It is widely recognised as the gold standard for colour
              vision assessment.
            </p>
            <p>
              Unlike older plate-based tests (such as Ishihara), the CAD test
              uses dynamic, computer-generated stimuli that isolate colour
              signals from luminance cues. This means it measures your
              colour vision with far greater precision, detecting both the
              type and severity of any deficiency.
            </p>
            <p>
              The <strong>Colour Vision Screener (CVS)</strong> is a
              streamlined version designed for rapid screening. It identifies
              individuals who may benefit from the full CAD diagnostic
              assessment. The screener uses templates based on statistical
              distributions of red-green and yellow-blue colour thresholds
              measured in hundreds of subjects with normal and deficient
              colour vision.
            </p>
            <p>
              The methodology has been adopted by aviation authorities
              worldwide, including for cabin crew, air traffic controllers,
              and London Underground drivers. It has enabled up to one third
              of applicants with congenital colour deficiency to demonstrate
              they can work safely in their chosen field — something
              traditional tests could not determine.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Curious About Your Colour Vision?
          </h2>
          <p className="text-lg text-muted mb-8">
            The screening takes less than 3 minutes and is completely free.
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
