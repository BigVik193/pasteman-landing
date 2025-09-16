'use client';

import { useCallback, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";
import { FaGithub, FaApple, FaStar } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';

export default function Home() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffe300", "#ff1f00", "#2d00ff", "#ffebeb"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 160,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 8 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      {/* Top Right Links */}
      <div className="absolute top-6 right-6 z-50 flex gap-3">
        <a
          href="https://buymeacoffee.com/vikrambattalapalli"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white px-3 py-2 rounded-md transition-colors duration-200 shadow-lg"
        >
          <SiKofi size={16} />
          <span className="font-medium text-sm">Buy me a coffee</span>
        </a>
        <a
          href="https://github.com/BigVik193/pastepal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-md transition-colors duration-200 shadow-lg"
        >
          <FaGithub size={16} />
          <span className="font-medium text-sm">GitHub</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* App Title */}
          <h1 className="text-6xl sm:text-8xl font-bold mb-4 text-gray-800 drop-shadow-lg">
            PastePal
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 font-light mb-8 drop-shadow">
            macOS Multiple Clipboard Manager
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-gray-700 drop-shadow">
            <p>
              A lightweight menu bar app that provides <strong>10 independent clipboard slots</strong> with fully configurable keyboard shortcuts and persistent settings.
            </p>
            <p>
              Store multiple items simultaneously and access them instantly across all applications with your preferred key combinations.
            </p>
          </div>

          {/* Installation */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Installation</h2>
            <div className="flex flex-col gap-4 justify-center items-center">
              <a
                href="/PastePal-1.0.2.dmg"
                download
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <FaApple size={20} />
                <span>Download for macOS</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>or</span>
                <div className="text-gray-600">
                  <code className="bg-gray-100 px-3 py-1 rounded">brew install --cask BigVik193/tap/pastepal</code>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 max-w-md mx-auto">
              <p className="mb-2">If you see "PastePal is damaged", run:</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                sudo xattr -rd com.apple.quarantine /Applications/PastePal.app
              </code>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">10 Clipboard Slots</h3>
              <p className="text-sm text-gray-700">Store up to 10 different clipboard contents simultaneously</p>
            </div>
            <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Configurable Shortcuts</h3>
              <p className="text-sm text-gray-700">Customize keybinds through intuitive settings interface</p>
            </div>
            <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Persistent Settings</h3>
              <p className="text-sm text-gray-700">Custom shortcuts saved and restored between sessions</p>
            </div>
          </div>

          {/* Quick Start */}
          <div className="mt-12 text-sm text-gray-500 drop-shadow">
            <p>Default shortcuts: Cmd+Shift+[1,2,7,8,9] • Fully customizable through Settings interface</p>
          </div>
        </div>
      </div>
    </div>
  );
}