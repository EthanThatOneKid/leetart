'use client';

import React from 'react';
import Editor from '@monaco-editor/react';

interface EditorPanelProps {
  code: string;
  onChange: (value: string | undefined) => void;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange }) => {
  return (
    <div className="h-full bg-[#1e1e1e] flex flex-col border-r border-white/10">
      <div className="px-4 py-2 bg-zinc-900 border-b border-white/5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">script.js</span>
      </div>
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={onChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 20 }
          }}
        />
      </div>
    </div>
  );
};
