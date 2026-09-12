import React, { useState } from 'react';
import { VideoGrid } from './VideoGrid';
import { ControlBar } from './ControlBar';
import { TranscriptionPanel } from './TranscriptionPanel';
export function MeetView() {
  const [showTranscription, setShowTranscription] = useState(true);
  return (
    <div className="flex min-h-0 flex-1">
      <main className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex-1 overflow-hidden p-4 pb-28">
          <VideoGrid />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-5">
          <div className="pointer-events-auto">
            <ControlBar />
          </div>
        </div>
      </main>

      {showTranscription &&
      <TranscriptionPanel onClose={() => setShowTranscription(false)} />
      }
    </div>);

}