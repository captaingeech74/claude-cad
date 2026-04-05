"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Monitor,
  AlertTriangle,
  Download,
  ExternalLink,
  Maximize2,
  CheckCircle,
  Info,
  Loader2,
  Play,
  Sun,
  Eye,
  FolderOpen,
  MousePointer,
  ArrowRight,
  Cpu,
} from "lucide-react";

type ViewMode = "choose" | "emulator-loading" | "emulator-running";

const GOOGLE_DRIVE_DOWNLOAD_URL =
  "https://drive.google.com/file/d/1sdBK4WCTNVpaNCKzsIe49T5h7A56T7_p/view?usp=drivesdk";

export default function TestPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("choose");
  const [emulatorError, setEmulatorError] = useState(false);

  const launchEmulator = useCallback(() => {
    setViewMode("emulator-loading");
    setEmulatorError(false);
    setTimeout(() => setViewMode("emulator-running"), 800);
  }, []);

  const goFullscreen = useCallback(() => {
    const iframe = document.getElementById("emulator-frame") as HTMLIFrameElement;
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  }, []);

  // Listen for messages from the Boxedwine iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "boxedwine-status") {
        if (event.data.state === "error") {
          setEmulatorError(true);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Main instructions + options */}
      {viewMode === "choose" && (
        <div className="py-12 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Eye className="w-4 h-4" />
                CAD Colour Vision Screener v2.7
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Take the Colour Vision Screening Test
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                The CAD Colour Vision Screener screens for red-green and
                blue-yellow colour vision deficiencies in under 3 minutes.
              </p>
            </div>

            {/* Before You Begin */}
            <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Before You Begin
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Monitor,
                    title: "Use a Windows Desktop or Laptop",
                    desc: "This test requires a Windows PC with a full-size monitor. It cannot run on Mac, Linux, or mobile devices.",
                  },
                  {
                    icon: Sun,
                    title: "Check Your Display Settings",
                    desc: "Set your monitor to sRGB colour mode if available. Disable Night Shift, f.lux, or any blue-light filters.",
                  },
                  {
                    icon: Eye,
                    title: "Ensure Good Lighting",
                    desc: "Sit in a well-lit room without glare on your screen. Avoid direct sunlight on the monitor.",
                  },
                  {
                    icon: Info,
                    title: "Allow ~3 Minutes",
                    desc: "The screening is quick but requires your full attention. Find a quiet moment to complete it.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Options */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Option 1: Download & Run (Primary) */}
              <div className="bg-surface rounded-2xl border-2 border-primary/30 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  Recommended
                </div>

                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Download &amp; Run on Windows
                  </h3>
                  <p className="text-sm text-muted">
                    Best colour accuracy. Download the official installer
                    and run the screener natively on your Windows PC.
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-3 mb-6">
                  {[
                    {
                      step: "1",
                      icon: Download,
                      text: "Download the installer (271 MB)",
                    },
                    {
                      step: "2",
                      icon: MousePointer,
                      text: "Run the installer — follow the prompts",
                    },
                    {
                      step: "3",
                      icon: Play,
                      text: "Launch CAD Screener from your desktop",
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {s.step}
                      </div>
                      <s.icon className="w-4 h-4 text-muted flex-shrink-0" />
                      <span className="text-sm text-foreground">{s.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={GOOGLE_DRIVE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold bg-primary text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
                >
                  <Download className="w-5 h-5" />
                  Download for Windows
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>

                <p className="text-xs text-muted mt-3 text-center">
                  Requires Windows 7 or later. 271 MB download.
                </p>
              </div>

              {/* Option 2: Browser Emulator (Experimental) */}
              <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Try in Browser
                    <span className="ml-2 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      Experimental
                    </span>
                  </h3>
                  <p className="text-sm text-muted">
                    Run the screener directly in your browser using a Windows
                    emulator. No download or installation needed.
                  </p>
                </div>

                <div className="bg-warm/5 border border-warm/20 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warm flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-muted">
                      <p className="font-medium text-foreground mb-1">
                        Limitations
                      </p>
                      <ul className="space-y-1">
                        <li>
                          The emulator runs a 32-bit Windows environment. The
                          CAD Screener is a 64-bit application and may not
                          function correctly.
                        </li>
                        <li>
                          Colour accuracy may be affected by emulation.
                        </li>
                        <li>Performance may be slower than native.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={launchEmulator}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold bg-surface border-2 border-border text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Launch in Browser
                </button>

                <p className="text-xs text-muted mt-3 text-center">
                  Requires a modern browser with WebAssembly support. ~20 MB
                  download.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-background rounded-xl border border-border p-5">
              <p className="text-xs text-muted leading-relaxed text-center">
                <strong>Disclaimer:</strong> The CAD Colour Vision Screener is a
                screening tool, not a clinical diagnosis. Results are indicative
                and may vary based on your display hardware and settings. For
                comprehensive colour vision assessment, including occupational
                certification, please visit the{" "}
                <a
                  href="https://researchcentres.citystgeorges.ac.uk/applied-vision/avot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  AVOT Centre at City St George&apos;s, University of London
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Emulator Loading */}
      {viewMode === "emulator-loading" && (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Starting Windows Emulator
            </h2>
            <p className="text-muted mb-2">
              Loading the Boxedwine environment and CAD Screener...
            </p>
            <p className="text-xs text-muted">
              This may take a moment on first load
            </p>
          </div>
        </div>
      )}

      {/* Emulator Running */}
      {viewMode === "emulator-running" && (
        <div className="bg-[#1a1a2e] min-h-[calc(100vh-4rem)] flex flex-col">
          {/* Toolbar */}
          <div className="bg-[#111827] border-b border-white/10 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-sm font-medium">
                CAD Colour Vision Screener — Emulator
              </span>
              <span className="text-white/30 text-xs bg-white/5 px-2 py-0.5 rounded">
                Experimental
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={goFullscreen}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                <Maximize2 className="w-3 h-3" />
                Fullscreen
              </button>
              <button
                onClick={() => setViewMode("choose")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                Exit
              </button>
            </div>
          </div>

          {/* Emulator iframe */}
          <div className="flex-1 flex items-center justify-center p-2">
            {emulatorError ? (
              <div className="text-center max-w-md">
                <AlertTriangle className="w-12 h-12 text-warm mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">
                  Emulator Error
                </h2>
                <p className="text-white/60 mb-6">
                  The Windows emulator couldn&apos;t run the CAD Screener. This
                  is expected — the screener is a 64-bit application and the
                  browser emulator only supports 32-bit.
                </p>
                <a
                  href={GOOGLE_DRIVE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download for Windows Instead
                </a>
              </div>
            ) : (
              <iframe
                id="emulator-frame"
                src="/emulator/cad-screener.html?app=cad-screener&p=cad-screener.exe"
                className="w-full h-full rounded-lg border border-white/10"
                style={{ minHeight: "calc(100vh - 8rem)" }}
                allow="fullscreen"
                title="CAD Colour Vision Screener Emulator"
              />
            )}
          </div>

          {/* Bottom bar */}
          <div className="bg-[#111827] border-t border-white/10 px-4 py-2 flex items-center justify-between">
            <span className="text-white/40 text-xs">
              Powered by Boxedwine (Wine/WebAssembly)
            </span>
            <a
              href={GOOGLE_DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs inline-flex items-center gap-1 transition-colors"
            >
              Download for Windows instead
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
