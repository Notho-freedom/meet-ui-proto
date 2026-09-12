export const manifest = {
  screens: {
    scr_pvk1uu: { name: "Home", route: "/", state: { "view": "home" }, position: { "x": 160, "y": 2200 } },
    scr_7poah5: { name: "Campaigns (Invite)", route: "/", state: { "view": "campaigns" }, position: { "x": 7160, "y": 220 } },
    scr_qsigr2: { name: "Meet (Conduct)", route: "/", state: { "view": "meet" }, position: { "x": 160, "y": 220 } },
    scr_kgytu8: { name: "Documentation Studio (Distribute)", route: "/", state: { "view": "reports" }, position: { "x": 8560, "y": 220 } },
    scr_jw5tci: { name: "Calendar", route: "/", state: { "view": "calendar" }, position: { "x": 1560, "y": 220 } },
    scr_zgdkjh: { name: "Contacts", route: "/", state: { "view": "contacts" }, position: { "x": 2960, "y": 220 } },
    scr_lg8vvw: { name: "Documents", route: "/", state: { "view": "documents" }, position: { "x": 4360, "y": 220 } },
    scr_l62zr8: { name: "AI Notes", route: "/", state: { "view": "ai-notes" }, position: { "x": 5760, "y": 220 } }
  },
  sections: {
    sec_af52in: { name: "Main App Modules", x: 0, y: 0, width: 9920, height: 1180 },
    sec_fl8644: { name: "Entry Point", x: 0, y: 1980, width: 1520, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_af52in", children: [
    { kind: "screen", id: "scr_qsigr2" },
    { kind: "screen", id: "scr_jw5tci" },
    { kind: "screen", id: "scr_zgdkjh" },
    { kind: "screen", id: "scr_lg8vvw" },
    { kind: "screen", id: "scr_l62zr8" },
    { kind: "screen", id: "scr_7poah5" },
    { kind: "screen", id: "scr_kgytu8" }]
  },
  { kind: "section", id: "sec_fl8644", children: [
    { kind: "screen", id: "scr_pvk1uu" }]
  }]

};