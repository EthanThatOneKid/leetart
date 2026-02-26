'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CodeRunnerProps {
  code: string;
}

export const CodeRunner: React.FC<CodeRunnerProps> = ({ code }) => {
  const [srcDoc, setSrcDoc] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const doc = `
        <!DOCTYPE html>
        <html>
        <head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"></script>
          <style>
            body {
              margin: 0;
              padding: 0;
              overflow: hidden;
              background: #141414;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            canvas {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
              box-shadow: 0 0 20px rgba(0,0,0,0.5);
            }
          </style>
        </head>
        <body>
          <script>
            // Capture errors
            window.onerror = function(msg, url, lineNo, columnNo, error) {
              console.error(msg, lineNo, columnNo);
              return false;
            };

            // Execute user code
            try {
              ${code}
            } catch (err) {
              console.error(err);
            }

            // Handle p5.js auto-restart if needed
            if (window.setup) {
              new p5();
            }
          </script>
        </body>
        </html>
      `;
      setSrcDoc(doc);
    }, 800);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [code]);

  return (
    <div className="w-full h-full bg-[#141414] rounded-lg overflow-hidden border border-white/10 relative">
      <iframe
        title="preview"
        srcDoc={srcDoc}
        className="w-full h-full border-none"
        sandbox="allow-scripts"
      />
    </div>
  );
};
