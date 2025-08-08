import React from "react";
import ProfileCard from "./components/ProfileCard";
import ChatInterface from "./components/ChatInterface";

function App() {
    return (
        <div
            className="flex flex-col md:flex-row h-screen w-screen bg-[#0c0f1f] text-white font-sans overflow-hidden">
            {/* Left/Top Panel (ProfileCard) */}
            <div
                className="w-full md:w-1/2 h-full border-r md:border-r-0 md:border-b border-[#2f364d] bg-gradient-to-b from-[#0f172a] to-[#0a0e1a] p-4 md:p-6 overflow-y-auto">
                <ProfileCard/>
            </div>

            {/* Right/Bottom Panel (ChatInterface) */}
            <div
                className="w-full md:w-1/2 h-full bg-[#0d111c] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
                <ChatInterface/>
            </div>
        </div>
    );
}

export default App;