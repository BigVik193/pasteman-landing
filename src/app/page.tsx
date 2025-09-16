'use client';

import { useEffect, useRef } from 'react';
import { FaGithub, FaApple, FaStar } from 'react-icons/fa';

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      import('vanta/dist/vanta.fog.min.js').then((VANTA) => {
        import('three').then((THREE) => {
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xffe300,
            midtoneColor: 0xff1f00,
            lowlightColor: 0x2d00ff,
            baseColor: 0xffebeb,
            blurFactor: 0.6,
            zoom: 1,
            speed: 1
          });
        });
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative min-h-screen w-full overflow-hidden">
      {/* GitHub Link - Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <a
          href="https://github.com/BigVik193/pastepal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-800/90 text-white px-3 py-2 rounded-md transition-colors duration-200 backdrop-blur-sm shadow-lg"
        >
          <FaGithub size={16} />
          <span className="font-medium text-sm">GitHub</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* App Title */}
          <h1 className="text-6xl sm:text-8xl font-bold mb-4 text-white drop-shadow-lg">
            PastePal
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 font-light mb-8 drop-shadow">
            macOS Multiple Clipboard Manager
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-white/95 drop-shadow">
            <p>
              A lightweight menu bar app that provides <strong>10 independent clipboard slots</strong> with fully configurable keyboard shortcuts and persistent settings.
            </p>
            <p>
              Store multiple items simultaneously and access them instantly across all applications with your preferred key combinations.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">10 Clipboard Slots</h3>
              <p className="text-sm text-gray-700">Store up to 10 different clipboard contents simultaneously</p>
            </div>
            <div className="p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Configurable Shortcuts</h3>
              <p className="text-sm text-gray-700">Customize keybinds through intuitive settings interface</p>
            </div>
            <div className="p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Persistent Settings</h3>
              <p className="text-sm text-gray-700">Custom shortcuts saved and restored between sessions</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white/90 hover:bg-white text-gray-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              <FaApple size={24} />
              <span className="text-lg">Download for macOS</span>
            </a>
          </div>

          {/* Quick Start */}
          <div className="mt-12 text-sm text-white/80 drop-shadow">
            <p>Default shortcuts: Cmd+Shift+[1,2,7,8,9] • Fully customizable through Settings interface</p>
          </div>
        </div>
      </div>
    </div>
  );
}