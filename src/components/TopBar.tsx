import React from 'react';
import {
  SettingsIcon,
  LayoutGridIcon,
  ChevronDownIcon,
  UsersIcon } from
'lucide-react';
import type { ViewId } from '../data/app';
const viewTitles: Record<ViewId, string> = {
  home: 'Home',
  campaigns: 'Campaigns',
  meet: 'Quarterly Product Review',
  reports: 'Documentation Studio',
  calendar: 'Calendar',
  contacts: 'Contacts',
  documents: 'Documents',
  'ai-notes': 'AI Notes'
};
function AuraLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path
            d="M12 3C7 3 3 7 3 12s4 9 9 9c3.5 0 6.5-2 8-5-1.5 1.2-3.4 2-5.5 2A7 7 0 0 1 12 3Z"
            fill="currentColor" />
          
        </svg>
      </div>
      <span className="text-lg font-semibold text-white">Aura</span>
    </div>);

}
export function TopBar({ activeView }: {activeView: ViewId;}) {
  const isMeet = activeView === 'meet';
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-[#080c17] px-6">
      <div className="flex items-center gap-6">
        <AuraLogo />
        <div className="flex items-center gap-4">
          <h1 className="text-base font-semibold text-white">
            {viewTitles[activeView]}
          </h1>
          {isMeet &&
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="flex items-center gap-2 text-xs font-medium text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                Recording
              </span>
              <span className="h-3.5 w-px bg-white/10" />
              <span className="flex items-center gap-1 text-xs font-medium text-slate-300">
                <UsersIcon className="h-3.5 w-3.5" />6
              </span>
            </div>
          }
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          aria-label="Settings"
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
          
          <SettingsIcon className="h-5 w-5" />
        </button>
        <button
          aria-label="Apps"
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
          
          <LayoutGridIcon className="h-5 w-5" />
        </button>
        <button className="ml-1 flex items-center gap-1.5 rounded-full p-0.5 pr-1.5 transition-colors hover:bg-white/5">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
            alt="Your avatar"
            className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" />
          
          <ChevronDownIcon className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </header>);

}