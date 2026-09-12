import React from 'react';
import { MoreHorizontalIcon } from 'lucide-react';
import type { Participant } from '../data/meeting';
function SpeakingBars() {
  return (
    <span className="flex items-end gap-[2px]" aria-hidden>
      {[0, 1, 2].map((i) =>
      <span
        key={i}
        className="w-[3px] rounded-full bg-blue-400"
        style={{
          height: '10px',
          animation: `aura-bar 1s ease-in-out ${i * 0.15}s infinite`
        }} />

      )}
      <style>{`
        @keyframes aura-bar {
          0%, 100% { transform: scaleY(0.4); opacity: 0.6; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </span>);

}
function engagementTone(value: number) {
  if (value >= 85)
  return {
    dot: 'bg-emerald-400',
    label: 'High engagement'
  };
  if (value >= 70)
  return {
    dot: 'bg-blue-400',
    label: 'Engaged'
  };
  return {
    dot: 'bg-amber-400',
    label: 'Drifting'
  };
}
export function VideoTile({ participant }: {participant: Participant;}) {
  const engagement =
  typeof participant.engagement === 'number' ?
  engagementTone(participant.engagement) :
  null;
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-800 ring-1 ring-white/5">
      <img
        src={participant.image}
        alt={participant.name}
        className="h-full w-full object-cover" />
      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {engagement &&
      <div
        className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm"
        title={`${engagement.label} · ${participant.engagement}%`}>
        
          <span className={`h-2 w-2 rounded-full ${engagement.dot}`} />
          <span className="text-[11px] font-medium text-white/90">
            {participant.engagement}%
          </span>
        </div>
      }

      <button
        aria-label={`Options for ${participant.name}`}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/60 hover:text-white group-hover:opacity-100">
        
        <MoreHorizontalIcon className="h-4 w-4" />
      </button>

      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-black/45 px-2.5 py-1.5 backdrop-blur-sm">
        <span className="text-sm font-medium text-white">
          {participant.name}
        </span>
        {participant.speaking && <SpeakingBars />}
      </div>
    </div>);

}