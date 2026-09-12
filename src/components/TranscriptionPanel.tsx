import React, { useState, Component } from 'react';
import {
  XIcon,
  SlidersHorizontalIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  GavelIcon,
  CheckSquareIcon,
  MessageSquareTextIcon } from
'lucide-react';
import { transcript, liveDecisions, liveActions } from '../data/meeting';
type Tab = 'transcript' | 'decisions' | 'actions';
const tabs: {
  id: Tab;
  label: string;
  icon: ComponentType<{
    className?: string;
  }>;
}[] = [
{
  id: 'transcript',
  label: 'Transcript',
  icon: MessageSquareTextIcon
},
{
  id: 'decisions',
  label: 'Decisions',
  icon: GavelIcon
},
{
  id: 'actions',
  label: 'Actions',
  icon: CheckSquareIcon
}];

function OwnerBadge({
  initials,
  color,
  name,
  time





}: {initials: string;color: string;name: string;time?: string;}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white"
        style={{
          backgroundColor: color
        }}>
        
        {initials}
      </span>
      <span className="text-sm font-semibold text-white">{name}</span>
      {time && <span className="text-[11px] text-slate-500">{time}</span>}
    </div>);

}
export function TranscriptionPanel({ onClose }: {onClose?: () => void;}) {
  const [tab, setTab] = useState<Tab>('transcript');
  return (
    <aside className="flex w-[380px] shrink-0 flex-col border-l border-white/5 bg-[#080c17]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-white">Live AI</h2>
          <span className="rounded-md bg-blue-600/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-400">
            Beta
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close panel"
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
          
          <XIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Tabs */}
      <div
        className="mt-4 flex gap-1 px-4"
        role="tablist"
        aria-label="Live AI panels">
        
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.id)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium transition-colors ${active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
              
              <Icon className="h-3.5 w-3.5" />
              {t.label}
            </button>);

        })}
      </div>

      {/* Transcript tab */}
      {tab === 'transcript' &&
      <>
          <div className="flex items-center justify-between px-5 py-4">
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10">
              English
              <ArrowRightIcon className="h-3.5 w-3.5 text-slate-400" />
              Spanish
              <ChevronDownIcon className="h-4 w-4 text-slate-400" />
            </button>
            <button
            aria-label="Transcription settings"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
            
              <SlidersHorizontalIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 border-b border-white/5 px-5 pb-3">
            <span className="text-xs font-medium text-slate-500">
              Original (English)
            </span>
            <span className="text-xs font-medium text-slate-500">
              Translation (Spanish)
            </span>
          </div>

          <div className="aura-scroll flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-6">
              {transcript.map((entry) =>
            <li key={entry.id} className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="mb-1.5">
                      <OwnerBadge
                    initials={entry.initials}
                    color={entry.color}
                    name={entry.name}
                    time={entry.time} />
                  
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {entry.original}
                    </p>
                  </div>
                  <div className="pt-[30px]">
                    <p className="text-sm leading-relaxed text-slate-400">
                      {entry.translation}
                    </p>
                  </div>
                </li>
            )}
            </ul>
          </div>
        </>
      }

      {/* Decisions tab */}
      {tab === 'decisions' &&
      <div className="aura-scroll flex-1 overflow-y-auto px-5 py-5">
          <ul className="space-y-3">
            {liveDecisions.map((d) =>
          <li
            key={d.id}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            
                <OwnerBadge
              initials={d.ownerInitials}
              color={d.ownerColor}
              name={d.owner}
              time={d.time} />
            
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {d.text}
                </p>
              </li>
          )}
          </ul>
        </div>
      }

      {/* Actions tab */}
      {tab === 'actions' &&
      <div className="aura-scroll flex-1 overflow-y-auto px-5 py-5">
          <ul className="space-y-3">
            {liveActions.map((a) =>
          <li
            key={a.id}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            
                <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white"
              style={{
                backgroundColor: a.ownerColor
              }}>
              
                  {a.ownerInitials}
                </span>
                <div>
                  <p className="text-sm leading-relaxed text-slate-200">
                    {a.text}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Assigned to {a.owner}
                  </p>
                </div>
              </li>
          )}
          </ul>
        </div>
      }

      {/* Footer */}
      <div className="border-t border-white/5 px-5 py-4">
        <p className="text-xs leading-relaxed text-slate-500">
          AI-generated in real time — transcript, decisions and actions may not
          be 100% accurate.
        </p>
      </div>
    </aside>);

}