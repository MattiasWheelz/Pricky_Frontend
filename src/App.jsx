import React from "react";
import ProfileCard from "./components/ProfileCard";
import ChatInterface from "./components/ChatInterface";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-[#0c0f1f] text-white font-sans">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full border-r border-[#2f364d] bg-gradient-to-b from-[#0f172a] to-[#0a0e1a] p-6 overflow-y-auto">
        <ProfileCard />
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#0d111c] flex items-center justify-center p-6 overflow-y-auto">
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;
