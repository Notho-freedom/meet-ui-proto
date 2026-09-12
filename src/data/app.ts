import { participants } from './meeting';

export type ViewId =
'home' |
'campaigns' |
'meet' |
'calendar' |
'contacts' |
'reports' |
'documents' |
'ai-notes';

/* ---------- Calendar ---------- */

export interface CalendarEvent {
  id: string;
  title: string;
  start: string; // "09:00"
  end: string; // "09:45"
  day: number; // 0-6 (Mon-Sun)
  color: string;
  attendees: number;
  live?: boolean;
}

export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const weekDates = [13, 14, 15, 16, 17, 18, 19];
export const todayIndex = 2; // Wed

export const calendarHours = Array.from({ length: 10 }, (_, i) => 8 + i); // 8..17

export const calendarEvents: CalendarEvent[] = [
{
  id: 'e1',
  title: 'Quarterly Product Review',
  start: '09:00',
  end: '10:00',
  day: 2,
  color: '#3b82f6',
  attendees: 6,
  live: true
},
{
  id: 'e2',
  title: 'Design Sync',
  start: '11:00',
  end: '11:45',
  day: 0,
  color: '#8b5cf6',
  attendees: 4
},
{
  id: 'e3',
  title: 'Growth Standup',
  start: '09:30',
  end: '10:00',
  day: 1,
  color: '#10b981',
  attendees: 8
},
{
  id: 'e4',
  title: 'Roadmap Planning',
  start: '13:00',
  end: '14:30',
  day: 3,
  color: '#f59e0b',
  attendees: 5
},
{
  id: 'e5',
  title: '1:1 with Priya',
  start: '15:00',
  end: '15:30',
  day: 2,
  color: '#ec4899',
  attendees: 2
},
{
  id: 'e6',
  title: 'Customer Interview',
  start: '10:30',
  end: '11:15',
  day: 4,
  color: '#0ea5e9',
  attendees: 3
},
{
  id: 'e7',
  title: 'Engineering Review',
  start: '14:00',
  end: '15:00',
  day: 1,
  color: '#6366f1',
  attendees: 7
}];


/* ---------- Contacts ---------- */

export interface Contact {
  id: string;
  name: string;
  initials: string;
  color: string;
  image: string;
  role: string;
  email: string;
  status: 'online' | 'in-meeting' | 'away' | 'offline';
  favorite?: boolean;
}

const statusPool: Contact['status'][] = [
'in-meeting',
'online',
'in-meeting',
'away',
'online',
'offline'];

const roles = [
'Product Manager',
'Design Lead',
'Growth Analyst',
'Engineering Manager',
'UX Researcher',
'Account Executive'];


export const contacts: Contact[] = participants.map((p, i) => ({
  id: p.id,
  name: p.name,
  initials: p.initials,
  color: p.color,
  image: p.image,
  role: roles[i % roles.length],
  email: `${p.name.split(' ')[0].toLowerCase()}@aura.io`,
  status: statusPool[i % statusPool.length],
  favorite: i < 2
}));

/* ---------- Documents ---------- */

export interface DocItem {
  id: string;
  name: string;
  type: 'doc' | 'sheet' | 'slides' | 'pdf' | 'recording';
  owner: string;
  updated: string;
  size: string;
  shared: number;
}

export const documents: DocItem[] = [
{
  id: 'd1',
  name: 'Q2 Product Review — Notes',
  type: 'doc',
  owner: 'Alex Morgan',
  updated: '2 hours ago',
  size: '48 KB',
  shared: 6
},
{
  id: 'd2',
  name: 'Growth Metrics Dashboard',
  type: 'sheet',
  owner: 'Jordan Williams',
  updated: 'Yesterday',
  size: '1.2 MB',
  shared: 4
},
{
  id: 'd3',
  name: 'Q3 Roadmap Deck',
  type: 'slides',
  owner: 'Priya Shah',
  updated: '2 days ago',
  size: '5.8 MB',
  shared: 8
},
{
  id: 'd4',
  name: 'Enterprise Engagement Report',
  type: 'pdf',
  owner: 'Casey Miller',
  updated: '3 days ago',
  size: '820 KB',
  shared: 3
},
{
  id: 'd5',
  name: 'Product Review — Recording',
  type: 'recording',
  owner: 'Aura AI',
  updated: '4 days ago',
  size: '312 MB',
  shared: 6
},
{
  id: 'd6',
  name: 'User Research Findings',
  type: 'doc',
  owner: 'Taylor Bennett',
  updated: 'Last week',
  size: '96 KB',
  shared: 5
},
{
  id: 'd7',
  name: 'Pricing Model v3',
  type: 'sheet',
  owner: 'Riley Thomas',
  updated: 'Last week',
  size: '640 KB',
  shared: 2
},
{
  id: 'd8',
  name: 'Onboarding Flow Slides',
  type: 'slides',
  owner: 'Priya Shah',
  updated: '2 weeks ago',
  size: '4.1 MB',
  shared: 7
}];


/* ---------- AI Notes ---------- */

export interface NoteHighlight {
  id: string;
  text: string;
}

export interface ActionItem {
  id: string;
  text: string;
  owner: string;
  ownerColor: string;
  ownerInitials: string;
  done: boolean;
}

export const noteMeta = {
  title: 'Quarterly Product Review',
  date: 'Wednesday, July 15 · 09:00 AM',
  duration: '58 min',
  participants: 6
};

export const noteSummary =
'The team reviewed Q2 performance, highlighting a 12% beat on user growth targets and broad-based engagement gains — with enterprise leading the way. Discussion then turned toward setting Q3 priorities around retention and enterprise expansion.';

export const noteHighlights: NoteHighlight[] = [
{ id: 'h1', text: 'User growth exceeded targets by 12% in Q2.' },
{
  id: 'h2',
  text: 'Engagement improved across all key segments, strongest in enterprise.'
},
{
  id: 'h3',
  text: 'Q3 focus shifting to retention and enterprise expansion.'
},
{
  id: 'h4',
  text: 'Pricing model v3 to be validated with customer interviews.'
}];


export const actionItems: ActionItem[] = [
{
  id: 'a1',
  text: 'Draft Q3 retention roadmap',
  owner: 'Alex Morgan',
  ownerColor: '#6366f1',
  ownerInitials: 'AM',
  done: false
},
{
  id: 'a2',
  text: 'Share enterprise engagement report with leadership',
  owner: 'Casey Miller',
  ownerColor: '#8b5cf6',
  ownerInitials: 'CM',
  done: true
},
{
  id: 'a3',
  text: 'Schedule customer interviews for pricing validation',
  owner: 'Riley Thomas',
  ownerColor: '#0ea5e9',
  ownerInitials: 'RT',
  done: false
},
{
  id: 'a4',
  text: 'Update growth metrics dashboard for Q3',
  owner: 'Jordan Williams',
  ownerColor: '#f59e0b',
  ownerInitials: 'JW',
  done: false
}];


/* ---------- Pillars / Pipeline (Home) ---------- */

export interface PillarStage {
  id: 'invite' | 'conduct' | 'distribute';
  label: string;
  tagline: string;
  steps: string[];
  color: string;
}

export const pillars: PillarStage[] = [
{
  id: 'invite',
  label: 'Invite',
  tagline: 'Industrialize registrations with Campaigns.',
  steps: ['Google Form', 'Confirmation emails', 'AI voice reminders'],
  color: '#3b82f6'
},
{
  id: 'conduct',
  label: 'Conduct',
  tagline: 'Never lose a word with live AI meetings.',
  steps: ['Live transcription', 'Decisions & actions', 'Engagement signals'],
  color: '#8b5cf6'
},
{
  id: 'distribute',
  label: 'Distribute',
  tagline: 'Professional reports that build team memory.',
  steps: ['AI summaries', 'Branded exports', 'Searchable archive'],
  color: '#10b981'
}];


export const pipelineSteps = [
'Forms',
'Emails',
'Invitations',
'AI calls',
'Meeting room',
'Report'];


export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

export const dashboardStats: DashboardStat[] = [
{
  id: 's1',
  label: 'Active campaigns',
  value: '4',
  delta: '+2 this week',
  positive: true
},
{
  id: 's2',
  label: 'Registrants confirmed',
  value: '312',
  delta: '84% rate',
  positive: true
},
{
  id: 's3',
  label: 'No-show rate',
  value: '9%',
  delta: '-14 pts',
  positive: true
},
{
  id: 's4',
  label: 'Reports generated',
  value: '27',
  delta: '+6 this month',
  positive: true
}];


/* ---------- Invite: Campaigns ---------- */

export type CampaignStatus = 'active' | 'scheduled' | 'completed' | 'draft';

export interface Campaign {
  id: string;
  name: string;
  audience: string;
  status: CampaignStatus;
  meetingDate: string;
  formConnected: boolean;
  formName: string;
  registered: number;
  confirmed: number;
  attended: number;
  emailsSent: number;
  callsPlaced: number;
  callsAnswered: number;
  accent: string;
}

export const campaigns: Campaign[] = [
{
  id: 'c1',
  name: 'Q3 Awareness Event',
  audience: 'NGO partners & press',
  status: 'active',
  meetingDate: 'Jul 22, 2026 · 18:00',
  formConnected: true,
  formName: 'Awareness Event Signup',
  registered: 214,
  confirmed: 186,
  attended: 0,
  emailsSent: 214,
  callsPlaced: 186,
  callsAnswered: 152,
  accent: '#3b82f6'
},
{
  id: 'c2',
  name: 'Product Onboarding Webinar',
  audience: 'New enterprise customers',
  status: 'active',
  meetingDate: 'Jul 18, 2026 · 15:00',
  formConnected: true,
  formName: 'Webinar Registration',
  registered: 98,
  confirmed: 81,
  attended: 0,
  emailsSent: 98,
  callsPlaced: 81,
  callsAnswered: 74,
  accent: '#8b5cf6'
},
{
  id: 'c3',
  name: 'Candidate Pre-Screening',
  audience: '30 shortlisted candidates',
  status: 'scheduled',
  meetingDate: 'Jul 25, 2026 · 10:00',
  formConnected: true,
  formName: 'Interview Availability',
  registered: 30,
  confirmed: 22,
  attended: 0,
  emailsSent: 30,
  callsPlaced: 0,
  callsAnswered: 0,
  accent: '#f59e0b'
},
{
  id: 'c4',
  name: 'Spring Training Cohort',
  audience: 'Virtual classroom · 120 students',
  status: 'completed',
  meetingDate: 'Jun 30, 2026 · 09:00',
  formConnected: true,
  formName: 'Cohort Enrollment',
  registered: 132,
  confirmed: 120,
  attended: 111,
  emailsSent: 132,
  callsPlaced: 120,
  callsAnswered: 104,
  accent: '#10b981'
}];


export interface Registrant {
  id: string;
  name: string;
  initials: string;
  color: string;
  email: string;
  confirmed: boolean;
  callStatus: 'answered' | 'no-answer' | 'pending' | 'not-called';
}

export const registrants: Registrant[] = [
{
  id: 'r1',
  name: 'Amelia Nguyen',
  initials: 'AN',
  color: '#6366f1',
  email: 'amelia.n@partner.org',
  confirmed: true,
  callStatus: 'answered'
},
{
  id: 'r2',
  name: 'Diego Ramos',
  initials: 'DR',
  color: '#10b981',
  email: 'diego.r@press.io',
  confirmed: true,
  callStatus: 'answered'
},
{
  id: 'r3',
  name: 'Fatima Al-Sayed',
  initials: 'FA',
  color: '#f59e0b',
  email: 'fatima@ngo-net.org',
  confirmed: false,
  callStatus: 'no-answer'
},
{
  id: 'r4',
  name: 'Lucas Meyer',
  initials: 'LM',
  color: '#ec4899',
  email: 'lucas.meyer@media.fr',
  confirmed: true,
  callStatus: 'answered'
},
{
  id: 'r5',
  name: 'Priya Kapoor',
  initials: 'PK',
  color: '#8b5cf6',
  email: 'priya.k@partner.org',
  confirmed: false,
  callStatus: 'pending'
},
{
  id: 'r6',
  name: 'Noah Andersson',
  initials: 'NA',
  color: '#0ea5e9',
  email: 'noah.a@press.se',
  confirmed: true,
  callStatus: 'answered'
},
{
  id: 'r7',
  name: 'Sofia Bianchi',
  initials: 'SB',
  color: '#ef4444',
  email: 'sofia.b@ngo-net.org',
  confirmed: false,
  callStatus: 'not-called'
},
{
  id: 'r8',
  name: 'Yara Haddad',
  initials: 'YH',
  color: '#14b8a6',
  email: 'yara.h@partner.org',
  confirmed: true,
  callStatus: 'answered'
}];


/* ---------- Distribute: Reports (Documentation Studio) ---------- */

export type ExportFormat = 'PDF' | 'HTML' | 'DOCX';

export interface MeetingReport {
  id: string;
  title: string;
  date: string;
  duration: string;
  participants: number;
  summary: string;
  decisions: number;
  actions: number;
  keywords: string[];
  formats: ExportFormat[];
  accent: string;
}

export const reports: MeetingReport[] = [
{
  id: 'rep1',
  title: 'Quarterly Product Review',
  date: 'Jul 15, 2026',
  duration: '58 min',
  participants: 6,
  summary:
  'Reviewed Q2 performance — a 12% beat on user growth and broad engagement gains led by enterprise. Set Q3 priorities around retention and enterprise expansion.',
  decisions: 4,
  actions: 4,
  keywords: ['growth', 'retention', 'enterprise', 'Q3'],
  formats: ['PDF', 'HTML', 'DOCX'],
  accent: '#3b82f6'
},
{
  id: 'rep2',
  title: 'NGO Awareness — Partner Briefing',
  date: 'Jul 12, 2026',
  duration: '42 min',
  participants: 11,
  summary:
  'Aligned partners on messaging, logistics, and the multilingual outreach plan for the awareness event. Confirmed branded recap distribution the same evening.',
  decisions: 3,
  actions: 5,
  keywords: ['NGO', 'outreach', 'multilingual', 'event'],
  formats: ['PDF', 'HTML'],
  accent: '#10b981'
},
{
  id: 'rep3',
  title: 'Weekly Engineering Stand-up',
  date: 'Jul 10, 2026',
  duration: '18 min',
  participants: 7,
  summary:
  'Sprint progress on the transcription pipeline. Two blockers resolved, action items auto-assigned and pushed to the team channel.',
  decisions: 2,
  actions: 6,
  keywords: ['sprint', 'transcription', 'blockers'],
  formats: ['PDF', 'DOCX'],
  accent: '#8b5cf6'
},
{
  id: 'rep4',
  title: 'Candidate Interview — L. Meyer',
  date: 'Jul 8, 2026',
  duration: '35 min',
  participants: 3,
  summary:
  'Structured pre-screening with quotes, scores, and a hiring recommendation. Exported in the standard panel format for consistent review.',
  decisions: 1,
  actions: 2,
  keywords: ['hiring', 'interview', 'scoring'],
  formats: ['PDF', 'DOCX'],
  accent: '#f59e0b'
},
{
  id: 'rep5',
  title: 'Spring Cohort — Session 4',
  date: 'Jun 30, 2026',
  duration: '90 min',
  participants: 120,
  summary:
  'Full training session with multilingual transcription and engagement tracking. Recording plus branded recap became the official course material.',
  decisions: 2,
  actions: 3,
  keywords: ['training', 'classroom', 'engagement'],
  formats: ['PDF', 'HTML', 'DOCX'],
  accent: '#0ea5e9'
},
{
  id: 'rep6',
  title: 'Roadmap Planning Workshop',
  date: 'Jun 24, 2026',
  duration: '72 min',
  participants: 9,
  summary:
  'Prioritized the H2 roadmap across three workstreams. Decisions attributed to owners and archived for future reference.',
  decisions: 5,
  actions: 8,
  keywords: ['roadmap', 'planning', 'H2', 'priorities'],
  formats: ['PDF', 'HTML', 'DOCX'],
  accent: '#ec4899'
}];