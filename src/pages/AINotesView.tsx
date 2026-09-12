import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  ClockIcon,
  UsersIcon,
  CalendarIcon,
  ShareIcon,
  DownloadIcon,
  CheckIcon,
  LightbulbIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import {
  noteMeta,
  noteSummary,
  noteHighlights,
  actionItems as initialActions } from
'../data/app';
export function AINotesView() {
  const [actions, setActions] = useState(initialActions);
  const toggle = (id: string) =>
  setActions((prev) =>
  prev.map((a) =>
  a.id === id ?
  {
    ...a,
    done: !a.done
  } :
  a
  )
  );
  const doneCount = actions.filter((a) => a.done).length;
  return (
    <div className="aura-scroll h-full overflow-y-auto px-8 py-7">
      <PageHeader
        title="AI Notes"
        subtitle="Auto-generated summary from your latest meeting"
        actions={
        <>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
              <ShareIcon className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500">
              <DownloadIcon className="h-4 w-4" />
              Export
            </button>
          </>
        } />
      

      <motion.div
        initial={{
          opacity: 0,
          y: 8
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.3
        }}
        className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        
        {/* Main column */}
        <div className="space-y-5 lg:col-span-2">
          {/* Meeting meta card */}
          <div className="rounded-2xl border border-white/5 bg-[#080c17] p-6">
            <h2 className="text-lg font-semibold text-white">
              {noteMeta.title}
            </h2>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {noteMeta.date}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" />
                {noteMeta.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <UsersIcon className="h-4 w-4" />
                {noteMeta.participants} participants
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-2xl border border-white/5 bg-[#080c17] p-6">
            <div className="mb-3 flex items-center gap-2">
              <SparklesIcon className="h-4 w-4 text-blue-400" />
              <h3 className="text-sm font-semibold text-white">AI Summary</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {noteSummary}
            </p>
          </div>

          {/* Highlights */}
          <div className="rounded-2xl border border-white/5 bg-[#080c17] p-6">
            <div className="mb-4 flex items-center gap-2">
              <LightbulbIcon className="h-4 w-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-white">
                Key highlights
              </h3>
            </div>
            <ul className="space-y-3">
              {noteHighlights.map((h) =>
              <li key={h.id} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {h.text}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Action items sidebar */}
        <div className="rounded-2xl border border-white/5 bg-[#080c17] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Action items</h3>
            <span className="text-xs text-slate-500">
              {doneCount}/{actions.length}
            </span>
          </div>
          <ul className="space-y-3">
            {actions.map((a) =>
            <li key={a.id}>
                <button
                onClick={() => toggle(a.id)}
                className="flex w-full items-start gap-3 rounded-xl p-2 text-left transition-colors hover:bg-white/5">
                
                  <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${a.done ? 'border-blue-500 bg-blue-600 text-white' : 'border-white/20 text-transparent'}`}>
                  
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex-1">
                    <span
                    className={`block text-sm ${a.done ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                    
                      {a.text}
                    </span>
                    <span className="mt-1.5 flex items-center gap-1.5">
                      <span
                      className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-semibold text-white"
                      style={{
                        backgroundColor: a.ownerColor
                      }}>
                      
                        {a.ownerInitials}
                      </span>
                      <span className="text-xs text-slate-500">{a.owner}</span>
                    </span>
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </motion.div>
    </div>);

}