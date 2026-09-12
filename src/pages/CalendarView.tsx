import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  VideoIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import {
  weekDays,
  weekDates,
  todayIndex,
  calendarHours,
  calendarEvents } from
'../data/app';
function toMinutes(t: string) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}
const DAY_START = 8 * 60;
const HOUR_HEIGHT = 64; // px per hour
export function CalendarView() {
  return (
    <div className="aura-scroll h-full overflow-y-auto px-8 py-7">
      <PageHeader
        title="Calendar"
        subtitle="July 13 – 19, 2026"
        actions={
        <>
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              <button
              aria-label="Previous week"
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white">
              
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <span className="px-1 text-xs font-medium text-slate-300">
                This week
              </span>
              <button
              aria-label="Next week"
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white">
              
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
            <button className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500">
              <PlusIcon className="h-4 w-4" />
              New meeting
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
        className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-[#080c17]">
        
        {/* Day headers */}
        <div className="grid grid-cols-[56px_repeat(7,1fr)] border-b border-white/5">
          <div />
          {weekDays.map((d, i) =>
          <div
            key={d}
            className="flex flex-col items-center gap-1 py-3 text-center">
            
              <span className="text-xs font-medium text-slate-500">{d}</span>
              <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${i === todayIndex ? 'bg-blue-600 text-white' : 'text-slate-300'}`}>
              
                {weekDates[i]}
              </span>
            </div>
          )}
        </div>

        {/* Time grid */}
        <div className="grid grid-cols-[56px_repeat(7,1fr)]">
          {/* Hour labels */}
          <div>
            {calendarHours.map((h) =>
            <div
              key={h}
              style={{
                height: HOUR_HEIGHT
              }}
              className="relative border-b border-white/5 pr-2 text-right">
              
                <span className="absolute right-2 -top-2 text-[11px] text-slate-500">
                  {h}:00
                </span>
              </div>
            )}
          </div>

          {/* Day columns */}
          {weekDays.map((_, dayIdx) =>
          <div key={dayIdx} className="relative border-l border-white/5">
              {calendarHours.map((h) =>
            <div
              key={h}
              style={{
                height: HOUR_HEIGHT
              }}
              className="border-b border-white/5" />

            )}

              {calendarEvents.
            filter((e) => e.day === dayIdx).
            map((e) => {
              const top =
              (toMinutes(e.start) - DAY_START) / 60 * HOUR_HEIGHT;
              const height =
              (toMinutes(e.end) - toMinutes(e.start)) / 60 * HOUR_HEIGHT;
              return (
                <button
                  key={e.id}
                  style={{
                    top,
                    height: Math.max(height - 4, 28),
                    backgroundColor: `${e.color}22`,
                    borderColor: `${e.color}66`
                  }}
                  className="absolute inset-x-1 overflow-hidden rounded-lg border p-2 text-left transition-transform hover:scale-[1.02]">
                  
                      <span
                    className="absolute left-0 top-0 h-full w-1 rounded-l-lg"
                    style={{
                      backgroundColor: e.color
                    }} />
                  
                      <div className="ml-1">
                        <p className="truncate text-xs font-semibold text-white">
                          {e.title}
                        </p>
                        <p className="mt-0.5 truncate text-[10px] text-slate-400">
                          {e.start} – {e.end}
                        </p>
                        {e.live &&
                    <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-red-500/20 px-1.5 py-0.5 text-[9px] font-medium text-red-300">
                            <VideoIcon className="h-2.5 w-2.5" /> Live now
                          </span>
                    }
                      </div>
                    </button>);

            })}
            </div>
          )}
        </div>
      </motion.div>
    </div>);

}