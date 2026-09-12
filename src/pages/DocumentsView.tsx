import React from 'react';
import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  FileTextIcon,
  SheetIcon,
  PresentationIcon,
  FileIcon,
  PlayCircleIcon,
  UploadIcon,
  MoreHorizontalIcon,
  UsersIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { documents, type DocItem } from '../data/app';
const typeConfig: Record<
  DocItem['type'],
  {
    icon: ComponentType<{
      className?: string;
    }>;
    label: string;
    color: string;
    bg: string;
  }> =
{
  doc: {
    icon: FileTextIcon,
    label: 'Document',
    color: '#3b82f6',
    bg: 'bg-blue-500/15'
  },
  sheet: {
    icon: SheetIcon,
    label: 'Spreadsheet',
    color: '#10b981',
    bg: 'bg-emerald-500/15'
  },
  slides: {
    icon: PresentationIcon,
    label: 'Slides',
    color: '#f59e0b',
    bg: 'bg-amber-500/15'
  },
  pdf: {
    icon: FileIcon,
    label: 'PDF',
    color: '#ef4444',
    bg: 'bg-red-500/15'
  },
  recording: {
    icon: PlayCircleIcon,
    label: 'Recording',
    color: '#8b5cf6',
    bg: 'bg-violet-500/15'
  }
};
function DocCard({ doc }: {doc: DocItem;}) {
  const cfg = typeConfig[doc.type];
  const Icon = cfg.icon;
  return (
    <div className="group flex flex-col rounded-2xl border border-white/5 bg-[#080c17] p-4 transition-colors hover:border-white/10">
      <div className="flex items-start justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${cfg.bg}`}>
          
          <Icon
            className="h-5 w-5"
            style={{
              color: cfg.color
            }} />
          
        </span>
        <button
          aria-label="Document options"
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 opacity-0 transition hover:bg-white/5 hover:text-white group-hover:opacity-100">
          
          <MoreHorizontalIcon className="h-4 w-4" />
        </button>
      </div>

      <h3 className="mt-4 line-clamp-2 text-sm font-semibold text-white">
        {doc.name}
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        {cfg.label} · {doc.size}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <span className="text-xs text-slate-400">{doc.updated}</span>
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <UsersIcon className="h-3.5 w-3.5" />
          {doc.shared}
        </span>
      </div>
    </div>);

}
export function DocumentsView() {
  return (
    <div className="aura-scroll h-full overflow-y-auto px-8 py-7">
      <PageHeader
        title="Documents"
        subtitle={`${documents.length} files shared with you`}
        actions={
        <button className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500">
            <UploadIcon className="h-4 w-4" />
            Upload
          </button>
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
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {documents.map((d) =>
        <DocCard key={d.id} doc={d} />
        )}
      </motion.div>
    </div>);

}