import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SearchIcon,
  PlusIcon,
  VideoIcon,
  MessageCircleIcon,
  StarIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { contacts, type Contact } from '../data/app';
const statusConfig: Record<
  Contact['status'],
  {
    label: string;
    dot: string;
    text: string;
  }> =
{
  online: {
    label: 'Online',
    dot: 'bg-emerald-400',
    text: 'text-emerald-400'
  },
  'in-meeting': {
    label: 'In a meeting',
    dot: 'bg-red-400',
    text: 'text-red-400'
  },
  away: {
    label: 'Away',
    dot: 'bg-amber-400',
    text: 'text-amber-400'
  },
  offline: {
    label: 'Offline',
    dot: 'bg-slate-500',
    text: 'text-slate-500'
  }
};
function ContactCard({ contact }: {contact: Contact;}) {
  const status = statusConfig[contact.status];
  return (
    <div className="group flex flex-col rounded-2xl border border-white/5 bg-[#080c17] p-5 transition-colors hover:border-white/10">
      <div className="flex items-start justify-between">
        <div className="relative">
          <img
            src={contact.image}
            alt={contact.name}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10" />
          
          <span
            className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full ring-2 ring-[#080c17] ${status.dot}`} />
          
        </div>
        {contact.favorite &&
        <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" />
        }
      </div>

      <h3 className="mt-3 text-base font-semibold text-white">
        {contact.name}
      </h3>
      <p className="text-sm text-slate-400">{contact.role}</p>
      <p className="mt-0.5 text-xs text-slate-500">{contact.email}</p>

      <div className="mt-2 flex items-center gap-1.5 text-xs font-medium">
        <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
        <span className={status.text}>{status.label}</span>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-500">
          <VideoIcon className="h-4 w-4" />
          Call
        </button>
        <button
          aria-label={`Message ${contact.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
          
          <MessageCircleIcon className="h-4 w-4" />
        </button>
      </div>
    </div>);

}
export function ContactsView() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () =>
    contacts.filter(
      (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.role.toLowerCase().includes(query.toLowerCase())
    ),
    [query]
  );
  return (
    <div className="aura-scroll h-full overflow-y-auto px-8 py-7">
      <PageHeader
        title="Contacts"
        subtitle={`${contacts.length} people in your workspace`}
        actions={
        <button className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500">
            <PlusIcon className="h-4 w-4" />
            Add contact
          </button>
        } />
      

      <div className="relative mt-6 max-w-sm">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search contacts…"
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
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {filtered.map((c) =>
        <ContactCard key={c.id} contact={c} />
        )}
      </motion.div>

      {filtered.length === 0 &&
      <p className="mt-16 text-center text-sm text-slate-500">
          No contacts match “{query}”.
        </p>
      }
    </div>);

}