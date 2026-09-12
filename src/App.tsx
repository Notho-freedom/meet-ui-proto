import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { HomeView } from './pages/HomeView';
import { CampaignsView } from './pages/CampaignsView';
import { MeetView } from './components/MeetView';
import { ReportsView } from './pages/ReportsView';
import { CalendarView } from './pages/CalendarView';
import { ContactsView } from './pages/ContactsView';
import { DocumentsView } from './pages/DocumentsView';
import { AINotesView } from './pages/AINotesView';
import { useScreenInit } from './useScreenInit';
import type { ViewId } from './data/app';
export function App() {
  const init = useScreenInit() as {
    view?: ViewId;
  };
  const [activeView, setActiveView] = useState<ViewId>(init.view ?? 'home');
  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={setActiveView} />;
      case 'campaigns':
        return <CampaignsView />;
      case 'meet':
        return <MeetView />;
      case 'reports':
        return <ReportsView />;
      case 'calendar':
        return <CalendarView />;
      case 'contacts':
        return <ContactsView />;
      case 'documents':
        return <DocumentsView />;
      case 'ai-notes':
        return <AINotesView />;
      default:
        return <HomeView onNavigate={setActiveView} />;
    }
  };
  return (
    <div className="flex h-full w-full flex-col bg-[#060911] text-white">
      <TopBar activeView={activeView} />
      <div className="flex min-h-0 flex-1">
        <Sidebar activeView={activeView} onNavigate={setActiveView} />
        <div className="flex min-w-0 flex-1 flex-col">{renderView()}</div>
      </div>
    </div>);

}