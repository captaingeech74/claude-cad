import Link from "next/link";
import {
  Eye,
  Monitor,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Sparkles,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="ishihara-dot w-64 h-64 bg-primary top-10 -left-20" />
          <div className="ishihara-dot w-48 h-48 bg-accent top-40 right-10" />
          <div className="ishihara-dot w-32 h-32 bg-warm bottom-20 left-1/3" />
          <div className="ishihara-dot w-40 h-40 bg-primary-light -bottom-10 right-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Free FAA Color Vision Screening for Pilots
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Pass Your Color Vision Test{" "}
              <span className="gradient-text">with Flying Colors</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Updated FAA color vision requirements got you worried? Screen
              yourself right now — free, in your browser, in under 3 minutes —
              using the same gold-standard CAD test trusted by aviation
              authorities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/test"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold bg-primary text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                Take the Test
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold bg-surface text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "300M+", label: "People affected worldwide" },
              { value: "1 in 12", label: "Men with CVD" },
              { value: "1 in 200", label: "Women with CVD" },
              { value: "< 3 min", label: "To complete screening" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Color Blindness */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Understanding Colour Vision Deficiency
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Colour vision deficiency (often called &ldquo;colour
              blindness&rdquo;) is more common than most people realise. It
              doesn&apos;t mean seeing in black and white — it means
              experiencing colour differently. And that&apos;s okay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Red-Green Deficiency
              </h3>
              <p className="text-muted leading-relaxed">
                The most common type, affecting about 8% of men and 0.5% of
                women. Includes Protanopia (reduced red sensitivity) and
                Deuteranopia (reduced green sensitivity).
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Blue-Yellow Deficiency
              </h3>
              <p className="text-muted leading-relaxed">
                Less common but equally important to detect. Known as
                Tritanopia, it affects the perception of blue and yellow hues
                and can be congenital or acquired.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                You&apos;re Not Alone
              </h3>
              <p className="text-muted leading-relaxed">
                Over 300 million people worldwide live with some form of colour
                vision deficiency. Understanding your vision is the first step
                to adapting and thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the Test Works */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/3 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted">
              Three simple steps to understand your colour vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: Monitor,
                title: "Launch the Test",
                description:
                  "Click 'Take the Test' and the CAD Colour Vision Screener launches directly in your browser. No downloads required.",
              },
              {
                step: "2",
                icon: Eye,
                title: "Complete the Screening",
                description:
                  "Follow the on-screen instructions. You'll be shown coloured patterns and asked to identify what you see. Takes under 3 minutes.",
              },
              {
                step: "3",
                icon: CheckCircle,
                title: "Get Your Results",
                description:
                  "Receive immediate feedback on your red-green and blue-yellow colour vision. Results help you understand your colour perception.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the CAD Test */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 sm:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warm/10 text-warm text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  Gold Standard
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  The CAD Colour Vision Screener
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Developed by <strong>Professor John Barbur</strong> and the
                  Applied Vision Research Centre at City St George&apos;s,
                  University of London, the CAD (Colour Assessment and
                  Diagnosis) test is recognised as the gold standard for colour
                  vision assessment.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  The Colour Vision Screener uses novel techniques that isolate
                  colour signals from luminance cues, employing templates based
                  on statistical distributions measured in hundreds of subjects.
                  It has been adopted for aviation, rail, and other
                  safety-critical occupations.
                </p>
                <ul className="space-y-3">
                  {[
                    "Screens for both red-green and blue-yellow deficiencies",
                    "Based on rigorous peer-reviewed research",
                    "Used by aviation authorities worldwide",
                    "Free to use for personal screening",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual side */}
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-warm/10 flex items-center justify-center p-12">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-1.5 p-6">
                      {[
                        "#EF4444", "#F97316", "#84CC16", "#06B6D4", "#8B5CF6",
                        "#EC4899", "#F59E0B", "#10B981", "#3B82F6", "#A855F7",
                        "#EF4444", "#06B6D4", "#F59E0B", "#84CC16", "#EC4899",
                        "#3B82F6", "#8B5CF6", "#F97316", "#10B981", "#A855F7",
                        "#06B6D4", "#EF4444", "#84CC16", "#F59E0B", "#3B82F6",
                      ].map((color, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                          style={{
                            backgroundColor: color,
                            opacity: 0.5 + (i % 5) * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-surface rounded-xl shadow-lg p-3 border border-border">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">~3 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary-dark to-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Discover Your Colour Vision?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            It takes less than 3 minutes. It&apos;s free. And understanding your
            colour vision could change the way you see the world.
          </p>
          <Link
            href="/test"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold bg-white text-primary hover:bg-white/90 transition-all shadow-lg"
          >
            Take the Free Test Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
