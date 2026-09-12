import React, { Component } from 'react';
import {
  LayoutDashboardIcon,
  SendIcon,
  VideoIcon,
  CalendarIcon,
  UsersIcon,
  FileOutputIcon,
  FileTextIcon,
  SparklesIcon,
  MoreHorizontalIcon,
  ChevronLeftIcon } from
'lucide-react';
import type { ViewId } from '../data/app';
interface NavItem {
  id: ViewId | 'more';
  label: string;
  icon: ComponentType<{
    className?: string;
  }>;
}
// Grouped by the three product pillars; a null entry renders a separator.
const navGroups: (NavItem | null)[] = [
{
  id: 'home',
  label: 'Home',
  icon: LayoutDashboardIcon
},
null,
{
  id: 'campaigns',
  label: 'Invite',
  icon: SendIcon
},
{
  id: 'meet',
  label: 'Meet',
  icon: VideoIcon
},
{
  id: 'reports',
  label: 'Reports',
  icon: FileOutputIcon
},
null,
{
  id: 'calendar',
  label: 'Calendar',
  icon: CalendarIcon
},
{
  id: 'contacts',
  label: 'Contacts',
  icon: UsersIcon
},
{
  id: 'documents',
  label: 'Documents',
  icon: FileTextIcon
},
{
  id: 'ai-notes',
  label: 'AI Notes',
  icon: SparklesIcon
},
{
  id: 'more',
  label: 'More',
  icon: MoreHorizontalIcon
}];

interface SidebarProps {
  activeView: ViewId;
  onNavigate: (view: ViewId) => void;
}
export function Sidebar({ activeView, onNavigate }: SidebarProps) {
  return (
    <aside className="flex w-24 shrink-0 flex-col items-center justify-between border-r border-white/5 bg-[#080c17] py-6">
      <nav className="flex w-full flex-col items-center gap-1 px-3">
        {navGroups.map((item, i) => {
          if (item === null) {
            return (
              <span key={`sep-${i}`} className="my-1.5 h-px w-8 bg-white/5" />);

          }
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() =>
              item.id !== 'more' && onNavigate(item.id as ViewId)
              }
              aria-current={isActive ? 'page' : undefined}
              className={`group flex w-full flex-col items-center gap-1.5 rounded-2xl py-3 transition-colors ${isActive ? 'bg-blue-600/15 text-blue-400' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
              
              <Icon className="h-5 w-5" />
              <span className="text-[11px] font-medium leading-none">
                {item.label}
              </span>
            </button>);

        })}
      </nav>

      <button className="flex items-center gap-1.5 rounded-full px-2 py-2 text-xs font-medium text-slate-400 transition-colors hover:text-slate-200">
        <ChevronLeftIcon className="h-4 w-4" />
        Collapse
      </button>
    </aside>);

}