import React, { useState } from 'react';
import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  FileSpreadsheetIcon,
  MailCheckIcon,
  PhoneCallIcon,
  CheckCircle2Icon,
  XCircleIcon,
  ClockIcon,
  CircleDashedIcon,
  UsersIcon,
  CalendarIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import {
  campaigns,
  registrants,
  type Campaign,
  type CampaignStatus,
  type Registrant } from
'../data/app';
const statusStyle: Record<CampaignStatus, string> = {
  active: 'bg-emerald-500/15 text-emerald-400',
  scheduled: 'bg-blue-500/15 text-blue-400',
  completed: 'bg-slate-500/15 text-slate-400',
  draft: 'bg-amber-500/15 text-amber-400'
};
function FunnelBar({ campaign }: {campaign: Campaign;}) {
  const pct = (n: number) =>
  campaign.registered ? Math.round(n / campaign.registered * 100) : 0;
  const rows = [
  {
    label: 'Registered',
    value: campaign.registered,
    color: '#3b82f6',
    width: 100
  },
  {
    label: 'Confirmed',
    value: campaign.confirmed,
    color: '#10b981',
    width: pct(campaign.confirmed)
  },
  {
    label:
    campaign.status === 'completed' ? 'Attended' : 'Reminded (AI calls)',
    value:
    campaign.status === 'completed' ?
    campaign.attended :
    campaign.callsAnswered,
    color: '#8b5cf6',
    width: pct(
      campaign.status === 'completed' ?
      campaign.attended :
      campaign.callsAnswered
    )
  }];

  return (
    <div className="space-y-2.5">
      {rows.map((r) =>
      <div key={r.label}>
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="text-slate-400">{r.label}</span>
            <span className="font-medium text-slate-200">{r.value}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
            <div
            className="h-full rounded-full"
            style={{
              width: `${r.width}%`,
              backgroundColor: r.color
            }} />
          
          </div>
        </div>
      )}
    </div>);

}
const callIcon = {
  answered: {
    icon: CheckCircle2Icon,
    cls: 'text-emerald-400',
    label: 'Confirmed by call'
  },
  'no-answer': {
    icon: XCircleIcon,
    cls: 'text-red-400',
    label: 'No answer'
  },
  pending: {
    icon: ClockIcon,
    cls: 'text-amber-400',
    label: 'Call pending'
  },
  'not-called': {
    icon: CircleDashedIcon,
    cls: 'text-slate-500',
    label: 'Not called yet'
  }
};
function AutomationRow({
  icon: Icon,
  title,
  detail,
  done







}: {icon: ComponentType<{className?: string;}>;title: string;detail: string;done: boolean;}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="truncate text-xs text-slate-400">{detail}</p>
      </div>
      <span
        className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${done ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'}`}>
        
        {done ? 'Automated' : 'Scheduled'}
      </span>
    </div>);

}
function CampaignDetail({ campaign }: {campaign: Campaign;}) {
  return (
    <div className="space-y-5">
      {/* Automation pipeline */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-white">
          Registration funnel
        </h3>
        <div className="space-y-2">
          <AutomationRow
            icon={FileSpreadsheetIcon}
            title="Google Form connected"
            detail={campaign.formName}
            done={campaign.formConnected} />
          
          <AutomationRow
            icon={MailCheckIcon}
            title="Branded confirmation emails"
            detail={`${campaign.emailsSent} sent automatically`}
            done={campaign.emailsSent > 0} />
          
          <AutomationRow
            icon={PhoneCallIcon}
            title="AI voice reminders (Vapi)"
            detail={
            campaign.callsPlaced > 0 ?
            `${campaign.callsAnswered}/${campaign.callsPlaced} confirmed by call` :
            'Runs the day before the meeting'
            }
            done={campaign.callsPlaced > 0} />
          
        </div>
      </div>

      {/* Registrants */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Registrants</h3>
          <span className="text-xs text-slate-500">
            Deduplicated · {campaign.registered}
          </span>
        </div>
        <ul className="divide-y divide-white/5 overflow-hidden rounded-xl border border-white/5">
          {registrants.map((r: Registrant) => {
            const call = callIcon[r.callStatus];
            const CallIcon = call.icon;
            return (
              <li
                key={r.id}
                className="flex items-center gap-3 bg-white/[0.02] px-3 py-2.5">
                
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                  style={{
                    backgroundColor: r.color
                  }}>
                  
                  {r.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {r.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">{r.email}</p>
                </div>
                {r.confirmed &&
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                    Confirmed
                  </span>
                }
                <span title={call.label} className={call.cls}>
                  <CallIcon className="h-4 w-4" />
                </span>
              </li>);

          })}
        </ul>
      </div>
    </div>);

}
export function CampaignsView() {
  const [selectedId, setSelectedId] = useState(campaigns[0].id);
  const selected = campaigns.find((c) => c.id === selectedId)!;
  return (
    <div className="aura-scroll h-full overflow-y-auto px-8 py-7">
      <PageHeader
        title="Campaigns"
        subtitle="Industrialize registrations — one pipeline from form to meeting room."
        actions={
        <button className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500">
            <PlusIcon className="h-4 w-4" />
            New campaign
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
        className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        
        {/* Campaign list */}
        <div className="space-y-3 lg:col-span-2">
          {campaigns.map((c) => {
            const isSelected = c.id === selectedId;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                aria-pressed={isSelected}
                className={`w-full rounded-2xl border p-5 text-left transition-colors ${isSelected ? 'border-blue-500/50 bg-[#0b1120]' : 'border-white/5 bg-[#080c17] hover:border-white/10'}`}>
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1 h-9 w-1 rounded-full"
                      style={{
                        backgroundColor: c.accent
                      }} />
                    
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {c.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">
                        {c.audience}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          {c.meetingDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <UsersIcon className="h-3.5 w-3.5" />
                          {c.registered} registered
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ${statusStyle[c.status]}`}>
                    
                    {c.status}
                  </span>
                </div>
                <div className="mt-4">
                  <FunnelBar campaign={c} />
                </div>
              </button>);

          })}
        </div>

        {/* Detail panel */}
        <div className="rounded-2xl border border-white/5 bg-[#080c17] p-6">
          <div className="mb-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Campaign detail
            </p>
            <h2 className="mt-1 text-lg font-semibold text-white">
              {selected.name}
            </h2>
          </div>
          <CampaignDetail campaign={selected} />
        </div>
      </motion.div>
    </div>);

}