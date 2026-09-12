export interface Participant {
  id: string;
  name: string;
  initials: string;
  color: string;
  image: string;
  speaking?: boolean;
  muted?: boolean;
  /** Live engagement signal 0-100 (anonymized, respectful) */
  engagement?: number;
}

export interface TranscriptEntry {
  id: string;
  name: string;
  initials: string;
  color: string;
  time: string;
  original: string;
  translation: string;
}

export interface LiveDecision {
  id: string;
  text: string;
  owner: string;
  ownerColor: string;
  ownerInitials: string;
  time: string;
}

export interface LiveAction {
  id: string;
  text: string;
  owner: string;
  ownerColor: string;
  ownerInitials: string;
}

export const liveDecisions: LiveDecision[] = [
{
  id: 'ld1',
  text: 'Prioritize enterprise retention for the Q3 roadmap.',
  owner: 'Alex Morgan',
  ownerColor: '#6366f1',
  ownerInitials: 'AM',
  time: '09:19 AM'
},
{
  id: 'ld2',
  text: 'Validate pricing model v3 through customer interviews.',
  owner: 'Priya Shah',
  ownerColor: '#10b981',
  ownerInitials: 'PS',
  time: '09:22 AM'
},
{
  id: 'ld3',
  text: 'Share the enterprise engagement report with leadership.',
  owner: 'Casey Miller',
  ownerColor: '#8b5cf6',
  ownerInitials: 'CM',
  time: '09:24 AM'
}];


export const liveActions: LiveAction[] = [
{
  id: 'la1',
  text: 'Draft the Q3 retention roadmap',
  owner: 'Alex Morgan',
  ownerColor: '#6366f1',
  ownerInitials: 'AM'
},
{
  id: 'la2',
  text: 'Schedule pricing validation interviews',
  owner: 'Riley Thomas',
  ownerColor: '#0ea5e9',
  ownerInitials: 'RT'
},
{
  id: 'la3',
  text: 'Update the growth metrics dashboard',
  owner: 'Jordan Williams',
  ownerColor: '#f59e0b',
  ownerInitials: 'JW'
}];


export const participants: Participant[] = [
{
  id: 'alex',
  name: 'Alex Morgan',
  initials: 'AM',
  color: '#6366f1',
  image:
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  speaking: true,
  engagement: 96
},
{
  id: 'priya',
  name: 'Priya Shah',
  initials: 'PS',
  color: '#10b981',
  image:
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  engagement: 88
},
{
  id: 'jordan',
  name: 'Jordan Williams',
  initials: 'JW',
  color: '#f59e0b',
  image:
  'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80',
  engagement: 74
},
{
  id: 'taylor',
  name: 'Taylor Bennett',
  initials: 'TB',
  color: '#ec4899',
  image:
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  engagement: 91
},
{
  id: 'casey',
  name: 'Casey Miller',
  initials: 'CM',
  color: '#8b5cf6',
  image:
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  engagement: 62
},
{
  id: 'riley',
  name: 'Riley Thomas',
  initials: 'RT',
  color: '#0ea5e9',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  engagement: 80
}];


export const transcript: TranscriptEntry[] = [
{
  id: 't1',
  name: 'Alex Morgan',
  initials: 'AM',
  color: '#6366f1',
  time: '09:15 AM',
  original:
  "Thanks everyone for joining. Let's kick off our quarterly product review.",
  translation:
  'Gracias a todos por unirse. Iniciemos nuestra revisión trimestral del producto.'
},
{
  id: 't2',
  name: 'Priya Shah',
  initials: 'PS',
  color: '#10b981',
  time: '09:16 AM',
  original: "Sure. I'll start with a quick overview of Q2 performance.",
  translation:
  'Claro. Comenzaré con una breve descripción del rendimiento del segundo trimestre.'
},
{
  id: 't3',
  name: 'Jordan Williams',
  initials: 'JW',
  color: '#f59e0b',
  time: '09:18 AM',
  original: 'Overall, we exceeded our user growth targets by 12%.',
  translation:
  'En general, superamos nuestras metas de crecimiento de usuarios en un 12%.'
},
{
  id: 't4',
  name: 'Taylor Bennett',
  initials: 'TB',
  color: '#ec4899',
  time: '09:20 AM',
  original: "That's great to hear. What about engagement metrics?",
  translation:
  'Es genial escucharlo. ¿Qué hay de las métricas de participación?'
},
{
  id: 't5',
  name: 'Casey Miller',
  initials: 'CM',
  color: '#8b5cf6',
  time: '09:21 AM',
  original:
  'Engagement improved across all key segments, especially in enterprise.',
  translation:
  'La participación mejoró en todos los segmentos clave, especialmente en empresas.'
},
{
  id: 't6',
  name: 'Riley Thomas',
  initials: 'RT',
  color: '#0ea5e9',
  time: '09:23 AM',
  original: "Excellent progress team. Let's discuss Q3 priorities.",
  translation:
  'Excelente progreso equipo. Hablemos de las prioridades del tercer trimestre.'
}];