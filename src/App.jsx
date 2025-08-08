import React from "react";
import ProfileCard from "./components/ProfileCard";
import ChatInterface from "./components/ChatInterface";

function App() {
    return (
        <div
            className="flex flex-col md:flex-row h-screen w-screen bg-[#0c0f1f] text-white font-sans">
            {/* Left Panel */}
            <div
                className="w-full md:w-1/2 h-full border-b md:border-b-0 md:border-r border-[#2f364d] bg-gradient-to-b from-[#0f172a] to-[#0a0e1a] p-6">
                <ProfileCard/>
            </div>

            {/* Right Panel */}
            <div
                className="w-full md:w-1/2 h-full bg-[#0d111c] flex items-center justify-center p-6">
                <ChatInterface/>
            </div>
        </div>
    );
}

export default App;
