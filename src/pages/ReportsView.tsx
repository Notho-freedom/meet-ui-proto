import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SearchIcon,
  FileTextIcon,
  DownloadIcon,
  ClockIcon,
  UsersIcon,
  CalendarIcon,
  CheckSquareIcon,
  GavelIcon,
  SparklesIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { reports, type MeetingReport, type ExportFormat } from '../data/app';
function ExportButtons({ formats }: {formats: ExportFormat[];}) {
  return (
    <div className="flex flex-wrap gap-2">
      {formats.map((f) =>
      <button
        key={f}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10">
        
          <DownloadIcon className="h-3.5 w-3.5" />
          {f}
        </button>
      )}
    </div>);

}
function ReportDetail({ report }: {report: MeetingReport;}) {
  return (
    <div>
      {/* Branded header */}
      <div
        className="rounded-t-2xl border border-white/5 p-6"
        style={{
          backgroundColor: `${report.accent}1a`
        }}>
        
        <div className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{
              backgroundColor: report.accent
            }}>
            
            <FileTextIcon className="h-4 w-4 text-white" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Aura · Branded report
          </span>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-white">
          {report.title}
        </h2>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="h-4 w-4" />
            {report.date}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4" />
            {report.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon className="h-4 w-4" />
            {report.participants}
          </span>
        </div>
      </div>

      <div className="space-y-5 rounded-b-2xl border border-t-0 border-white/5 bg-[#080c17] p-6">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <SparklesIcon className="h-4 w-4 text-blue-400" />
            <h3 className="text-sm font-semibold text-white">
              Executive summary
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            {report.summary}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 text-slate-300">
              <GavelIcon className="h-4 w-4" />
              <span className="text-sm">Decisions</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">
              {report.decisions}
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckSquareIcon className="h-4 w-4" />
              <span className="text-sm">Action items</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">
              {report.actions}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-white">Export</h3>
          <ExportButtons formats={report.formats} />
        </div>
      </div>
    </div>);

}
export function ReportsView() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(reports[0].id);
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return reports;
    return reports.filter(
      (r) =>
      r.title.toLowerCase().includes(q) ||
      r.summary.toLowerCase().includes(q) ||
      r.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [query]);
  const selected = reports.find((r) => r.id === selectedId)!;
  return (
    <div className="aura-scroll h-full overflow-y-auto px-8 py-7">
      <PageHeader
        title="Documentation Studio"
        subtitle="Every meeting becomes a branded, searchable knowledge asset." />
      

      <div className="relative mt-6 max-w-md">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search reports, transcripts, keywords…"
          className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/60" />
        
      </div>

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
        
        {/* Archive list */}
        <div className="space-y-3 lg:col-span-2">
          {filtered.map((r) => {
            const isSelected = r.id === selectedId;
            return (
              <button
                key={r.id}
                onClick={() => setSelectedId(r.id)}
                aria-pressed={isSelected}
                className={`w-full rounded-2xl border p-5 text-left transition-colors ${isSelected ? 'border-blue-500/50 bg-[#0b1120]' : 'border-white/5 bg-[#080c17] hover:border-white/10'}`}>
                
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${r.accent}22`
                    }}>
                    
                    <FileTextIcon
                      className="h-5 w-5"
                      style={{
                        color: r.accent
                      }} />
                    
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-white">
                      {r.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-400">
                      {r.summary}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span>{r.date}</span>
                      <span>·</span>
                      <span>{r.decisions} decisions</span>
                      <span>·</span>
                      <span>{r.actions} actions</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {r.keywords.map((k) =>
                      <span
                        key={k}
                        className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                        
                          {k}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>);

          })}
          {filtered.length === 0 &&
          <p className="py-16 text-center text-sm text-slate-500">
              No reports match “{query}”.
            </p>
          }
        </div>

        {/* Detail */}
        <div>
          <ReportDetail report={selected} />
        </div>
      </motion.div>
    </div>);

}