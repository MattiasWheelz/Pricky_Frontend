import React from "react";
import ProfileCard from "./components/ProfileCard";
import ChatInterface from "./components/ChatInterface";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#0c0f1f] text-white font-sans overflow-hidden">
      {/* Top Panel (ProfileCard) */}
      <div className="w-full h-auto md:h-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#2f364d] bg-gradient-to-b from-[#0f172a] to-[#0a0e1a] p-4 md:p-6 overflow-y-auto">
        <ProfileCard />
      </div>

      {/* Bottom Panel (ChatInterface) */}
      <div className="w-full h-auto md:h-full md:w-1/2 bg-[#0d111c] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;