import React, { useState } from 'react';
import type { ComponentType } from 'react';
import {
  MicIcon,
  MicOffIcon,
  VideoIcon,
  VideoOffIcon,
  MonitorUpIcon,
  MessageCircleIcon,
  UsersIcon,
  SparklesIcon,
  PhoneIcon } from
'lucide-react';
interface ControlButtonProps {
  label: string;
  icon: ComponentType<{
    className?: string;
  }>;
  active?: boolean;
  onClick?: () => void;
}
function ControlButton({
  label,
  icon: Icon,
  active,
  onClick
}: ControlButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-16 flex-col items-center gap-1.5 text-slate-300 transition-colors hover:text-white">
      
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${active ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-200 hover:bg-white/10'}`}>
        
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[11px] font-medium">{label}</span>
    </button>);

}
export function ControlBar() {
  const [muted, setMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  return (
    <div className="flex items-center gap-1 rounded-3xl border border-white/5 bg-[#0e1424]/90 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur">
      <ControlButton
        label={muted ? 'Unmute' : 'Mute'}
        icon={muted ? MicOffIcon : MicIcon}
        active={muted}
        onClick={() => setMuted((v) => !v)} />
      
      <ControlButton
        label={videoOff ? 'Start video' : 'Stop video'}
        icon={videoOff ? VideoOffIcon : VideoIcon}
        active={videoOff}
        onClick={() => setVideoOff((v) => !v)} />
      
      <ControlButton label="Share" icon={MonitorUpIcon} />
      <ControlButton label="Chat" icon={MessageCircleIcon} />
      <ControlButton label="Participants" icon={UsersIcon} />
      <ControlButton label="AI Tools" icon={SparklesIcon} />

      <span className="mx-2 h-10 w-px bg-white/10" />

      <button className="flex w-16 flex-col items-center gap-1.5 text-slate-300 transition-colors hover:text-white">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600">
          <PhoneIcon className="h-5 w-5 rotate-[135deg]" />
        </span>
        <span className="text-[11px] font-medium">Leave</span>
      </button>
    </div>);

}