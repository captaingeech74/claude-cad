"use client";

import { useState, useCallback, useRef } from "react";
import {
  Monitor,
  Maximize2,
  CheckCircle,
  Info,
  Loader2,
  Play,
  Sun,
  Eye,
  RefreshCw,
  ArrowLeft,
  Wifi,
  AlertTriangle,
} from "lucide-react";

// The Fly.io backend URL — update this after deploying the backend
const NOVNC_URL =
  "https://cad-screener.fly.dev/vnc.html?autoconnect=true&reconnect=true&resize=scale&show_dot=false&path=websockify&cursor=local&compression=2&quality=8";

type ViewMode = "instructions" | "connecting" | "running";

const PRE_LAUNCH_STEPS = [
  {
    icon: Monitor,
    title: "Use a desktop or laptop",
    desc: "A full-size monitor gives the best colour accuracy. Avoid phones and tablets.",
  },
  {
    icon: Sun,
    title: "Disable blue-light filters",
    desc: "Turn off Night Shift, f.lux, or any warm/night display mode for accurate colour rendering.",
  },
  {
    icon: Eye,
    title: "Sit in a well-lit room",
    desc: "Avoid glare on your screen. Overhead lighting is ideal — no direct sunlight on your monitor.",
  },
  {
    icon: Info,
    title: "Allow about 3 minutes",
    desc: "The test is brief but requires your full focus. Find a quiet moment to complete it uninterrupted.",
  },
];

export default function TestPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("instructions");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const launchTest = useCallback(() => {
    setViewMode("connecting");
    setConnectionError(false);
    setIframeLoaded(false);
    // After a brief moment, transition to running view so the iframe starts loading
    setTimeout(() => setViewMode("running"), 400);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  const handleIframeError = useCallback(() => {
    setConnectionError(true);
  }, []);

  const restartTest = useCallback(() => {
    setIframeLoaded(false);
    setConnectionError(false);
    if (iframeRef.current) {
      iframeRef.current.src = NOVNC_URL;
    }
  }, []);

  const goFullscreen = useCallback(() => {
    if (iframeRef.current?.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  }, []);

  const exitTest = useCallback(() => {
    setViewMode("instructions");
    setIframeLoaded(false);
    setConnectionError(false);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* ─── INSTRUCTIONS / PRE-LAUNCH ─── */}
      {viewMode === "instructions" && (
        <div className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Eye className="w-4 h-4" />
                CAD Colour Vision Screener v2.7
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Take the Colour Vision Screening Test
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                The CAD Colour Vision Screener detects red-green and blue-yellow
                colour vision deficiencies in under 3 minutes. It runs directly
                in your browser — no installation required.
              </p>
            </div>

            {/* Before You Begin */}
            <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 mb-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Before You Begin
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {PRE_LAUNCH_STEPS.map((item) => (
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

            {/* What to Expect */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-primary">
                <Wifi className="w-5 h-5" />
                How it Works
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    step: "1",
                    title: "Connect",
                    desc: "Your browser connects to a secure cloud environment where the test is running.",
                  },
                  {
                    step: "2",
                    title: "Test",
                    desc: "Follow the on-screen instructions. You'll see moving coloured targets and respond using your keyboard.",
                  },
                  {
                    step: "3",
                    title: "Results",
                    desc: "The screener displays your results immediately. No data is stored or transmitted.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {s.title}
                      </h3>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Button */}
            <div className="text-center">
              <button
                onClick={launchTest}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-semibold bg-primary text-white hover:bg-primary-dark transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-6 h-6" fill="currentColor" />
                Launch Colour Vision Test
              </button>
              <p className="text-xs text-muted mt-4">
                Runs in your browser via a secure cloud connection. No download needed.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 bg-background rounded-xl border border-border p-5">
              <p className="text-xs text-muted leading-relaxed text-center">
                <strong>Disclaimer:</strong> This is a screening tool, not a
                clinical diagnosis. Results may vary based on your display
                hardware and settings. For occupational certification or
                comprehensive assessment, visit the{" "}
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

      {/* ─── CONNECTING TRANSITION ─── */}
      {viewMode === "connecting" && (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Connecting to Test Environment
            </h2>
            <p className="text-muted text-sm">
              Starting the CAD Screener on a secure cloud server…
            </p>
          </div>
        </div>
      )}

      {/* ─── TEST RUNNING (noVNC) ─── */}
      {viewMode === "running" && (
        <div className="bg-[#0f0f1a] min-h-[calc(100vh-4rem)] flex flex-col">
          {/* Toolbar */}
          <div className="bg-[#111827] border-b border-white/10 px-4 py-2 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  iframeLoaded && !connectionError
                    ? "bg-green-400 animate-pulse"
                    : connectionError
                    ? "bg-red-400"
                    : "bg-yellow-400 animate-pulse"
                }`}
              />
              <span className="text-white/70 text-sm font-medium">
                CAD Colour Vision Screener v2.7
              </span>
              {!iframeLoaded && !connectionError && (
                <span className="text-white/40 text-xs">Connecting…</span>
              )}
              {iframeLoaded && (
                <span className="text-green-400/70 text-xs">Live</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={restartTest}
                title="Restart test"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Restart
              </button>
              <button
                onClick={goFullscreen}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                <Maximize2 className="w-3 h-3" />
                Fullscreen
              </button>
              <button
                onClick={exitTest}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                Back
              </button>
            </div>
          </div>

          {/* noVNC viewport */}
          <div className="flex-1 relative">
            {/* Loading overlay while connecting */}
            {!iframeLoaded && !connectionError && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#0f0f1a]">
                <div className="text-center">
                  <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto mb-3" />
                  <p className="text-white/60 text-sm">
                    Connecting to test environment…
                  </p>
                  <p className="text-white/30 text-xs mt-1">
                    First connection may take up to 15 seconds
                  </p>
                </div>
              </div>
            )}

            {/* Connection error state */}
            {connectionError && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#0f0f1a]">
                <div className="text-center max-w-sm px-4">
                  <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Connection Failed
                  </h2>
                  <p className="text-white/60 text-sm mb-6">
                    Could not reach the test server. The server may be starting
                    up — this can take up to 30 seconds on first launch.
                  </p>
                  <button
                    onClick={restartTest}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {/* The actual noVNC iframe */}
            <iframe
              ref={iframeRef}
              id="novnc-frame"
              src={NOVNC_URL}
              className="w-full h-full border-0"
              style={{
                minHeight: "calc(100vh - 6rem)",
                opacity: iframeLoaded ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
              allow="fullscreen"
              title="CAD Colour Vision Screener"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </div>

          {/* Bottom status bar */}
          <div className="bg-[#111827] border-t border-white/10 px-4 py-1.5 flex items-center justify-between flex-shrink-0">
            <span className="text-white/30 text-xs">
              Powered by Wine64 + noVNC · City University London AVOT
            </span>
            <span className="text-white/30 text-xs">
              Screening tool — not a clinical diagnosis
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
