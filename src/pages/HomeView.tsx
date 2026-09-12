import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  SendIcon,
  VideoIcon,
  FileOutputIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  TrendingDownIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import {
  pillars,
  pipelineSteps,
  dashboardStats,
  type ViewId } from
'../data/app';
const pillarIcons = {
  invite: SendIcon,
  conduct: VideoIcon,
  distribute: FileOutputIcon
};
const pillarTarget: Record<string, ViewId> = {
  invite: 'campaigns',
  conduct: 'meet',
  distribute: 'reports'
};
interface HomeViewProps {
  onNavigate: (view: ViewId) => void;
}
export function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="aura-scroll h-full overflow-y-auto px-8 py-7">
      <PageHeader
        title="Welcome back, Alex"
        subtitle="The full meeting lifecycle — Invite, Conduct, Distribute — on autopilot." />
      

      {/* Stats */}
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
        className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        
        {dashboardStats.map((s) =>
        <div
          key={s.id}
          className="rounded-2xl border border-white/5 bg-[#080c17] p-5">
          
            <p className="text-sm text-slate-400">{s.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{s.value}</p>
            <p
            className={`mt-1 flex items-center gap-1 text-xs font-medium ${s.positive ? 'text-emerald-400' : 'text-red-400'}`}>
            
              {s.positive ?
            <TrendingUpIcon className="h-3.5 w-3.5" /> :

            <TrendingDownIcon className="h-3.5 w-3.5" />
            }
              {s.delta}
            </p>
          </div>
        )}
      </motion.div>

      {/* Pipeline */}
      <motion.section
        initial={{
          opacity: 0,
          y: 8
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.3,
          delay: 0.05
        }}
        className="mt-6 rounded-2xl border border-white/5 bg-[#080c17] p-6"
        aria-label="Meeting lifecycle pipeline">
        
        <h2 className="text-sm font-semibold text-white">
          One unified pipeline
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Forms → emails → invitations → calls → meeting room → report.
          Everything in one place.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {pipelineSteps.map((step, i) =>
          <Fragment key={step}>
              <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200">
                {step}
              </span>
              {i < pipelineSteps.length - 1 &&
            <ArrowRightIcon className="h-4 w-4 text-slate-600" />
            }
            </Fragment>
          )}
        </div>
      </motion.section>

      {/* Pillars */}
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
          duration: 0.3,
          delay: 0.1
        }}
        className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        
        {pillars.map((p) => {
          const Icon = pillarIcons[p.id];
          return (
            <button
              key={p.id}
              onClick={() => onNavigate(pillarTarget[p.id])}
              className="group flex flex-col rounded-2xl border border-white/5 bg-[#080c17] p-6 text-left transition-colors hover:border-white/10">
              
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${p.color}22`
                }}>
                
                <Icon
                  className="h-5 w-5"
                  style={{
                    color: p.color
                  }} />
                
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {p.label}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>
              <ul className="mt-4 space-y-2">
                {p.steps.map((step) =>
                <li
                  key={step}
                  className="flex items-center gap-2 text-sm text-slate-300">
                  
                    <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: p.color
                    }} />
                  
                    {step}
                  </li>
                )}
              </ul>
              <span
                className="mt-5 flex items-center gap-1 text-sm font-medium transition-colors"
                style={{
                  color: p.color
                }}>
                
                Open
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>);

        })}
      </motion.div>
    </div>);

}