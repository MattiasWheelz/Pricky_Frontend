import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {FaUserAstronaut, FaRobot} from "react-icons/fa";
import {FiCopy, FiCheck} from "react-icons/fi";

const ChatInterface = () => {
    const [messages,
        setMessages] = useState([
        {
            from: "bot",
            text: "🤖 Greetings! I'm your AI assistant. Ask me anything about Varun.",
            time: new Date()
        }
    ]);
    const [input,
        setInput] = useState("");
    const [inputError,
        setInputError] = useState(null);
    const [loading,
        setLoading] = useState(false);
    const [copiedIndex,
        setCopiedIndex] = useState(null);
    const chatRef = useRef(null);
    const sessionIdRef = useRef(null);
    const [errorShake,
        setErrorShake] = useState(false);

    useEffect(() => {
        let storedSession = localStorage.getItem("chat_session_id");
        if (!storedSession) {
            storedSession = crypto.randomUUID();
            localStorage.setItem("chat_session_id", storedSession);
        }
        sessionIdRef.current = storedSession;
    }, []);

    const handleSend = async() => {
        const trimmed = input.trim();
        const wordCount = trimmed
            .split(/\s+/)
            .length;

        if (!trimmed || loading) 
            return;
        
        if (wordCount > 60) {
            setInputError("❌ Please don't exceed the word limit! I have limited tokens 😅");
            setErrorShake(true);
            setTimeout(() => setErrorShake(false), 600); // reset shake
            return;
        }

        setInputError(null); // Clear previous error

        const userMsg = {
            from: "user",
            text: trimmed,
            time: new Date()
        };
        setMessages((prev) => [
            ...prev,
            userMsg
        ]);
        setInput("");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:8000/chat", {
                message: trimmed,
                session_id: sessionIdRef.current
            });

            const botReply = res.data.response || "🤖 Sorry, I couldn't generate a reply.";
            const botMsg = {
                from: "bot",
                text: botReply,
                time: new Date()
            };
            setMessages((prev) => [
                ...prev,
                botMsg
            ]);
        } catch (error) {
            const errorMsg = {
                from: "bot",
                text: "⚠️ Oops! Something went wrong while contacting the server.",
                time: new Date()
            };
            setMessages((prev) => [
                ...prev,
                errorMsg
            ]);
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (date) => {
        const d = new Date(date);
        return d.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const handleCopy = async(text, index) => {
        try {
            await navigator
                .clipboard
                .writeText(text);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 1500);
        } catch (err) {
            console.error("❌ Failed to copy:", err);
        }
    };

    useEffect(() => {
        chatRef.current
            ?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    return (
        <div
            className="relative h-full w-full flex flex-col
    border border-red-500 rounded-2xl p-6
    bg-gradient-to-br from-[#0d1117] to-[#0f172a]
    animate-glowRed shadow-neonRed overflow-hidden">
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div
                        key={`${msg
                        .from}-${idx}-${msg
                        .text
                        .slice(0, 8)}`}
                        className={`flex w-full ${msg.from === "user"
                        ? "justify-end"
                        : "justify-start"}`}>
                        <div
                            className={`flex items-end gap-2 max-w-[75%] ${msg.from === "user"
                            ? "flex-row-reverse"
                            : ""}`}>
                            {/* Avatar with animation */}
                            <div
                                className={`text-xl transition duration-300 ${msg.from === "user"
                                ? "animate-float group-hover:scale-110"
                                : "animate-glow group-hover:scale-110"}`}>
                                {msg.from === "user"
                                    ? <FaUserAstronaut/>
                                    : <FaRobot/>}
                            </div>

                            {/* Chat bubble */}
                            <div
                                className={`px-4 py-3 rounded-2xl relative shadow-md break-words whitespace-pre-wrap group transition-all duration-300 ${msg.from === "user"
                                ? "bg-[#1e1f23] text-white rounded-br-none border border-[#3b3b3b]"
                                : "bg-[#162135] text-[#d2d2d2] rounded-bl-none border border-[#253048]"}`}>
                                {msg.text}

                                {/* Copy button for bot messages */}
                                {msg.from === "bot" && (
                                    <button
                                        onClick={() => handleCopy(msg.text, idx)}
                                        className="absolute top-2 right-2 text-xs text-gray-400 hover:text-white transition"
                                        title="Copy">
                                        {copiedIndex === idx
                                            ? <FiCheck/>
                                            : <FiCopy/>}
                                    </button>
                                )}

                                {/* Timestamp */}
                                <div className="text-[11px] mt-1 text-gray-400 font-mono">
                                    {msg.from === "user"
                                        ? "You"
                                        : "AI Assistant"}
                                    • {formatTime(msg.time)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Loading bubble */}
                {loading && (
                    <div className="flex justify-start w-full">
                        <div className="flex items-end gap-2 max-w-[75%]">
                            <div className="text-xl animate-glow">
                                <FaRobot/>
                            </div>
                            <div
                                className="px-4 py-2 rounded-2xl bg-[#162135] text-[#d2d2d2] animate-pulse">
                                Thinking...
                            </div>
                        </div>
                    </div>
                )}
                <div ref={chatRef}/>
            </div>

            {/* Input + Error section */}
            <div className="p-4 border-t border-[#3a3b3f] bg-[#0f172a] flex flex-col gap-2">
                {/* Input and button in a row */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Ask about Varun..."
                        value={input}
                        onChange={(e) => {
                        setInput(e.target.value);
                        if (inputError) 
                            setInputError(null);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        className="flex-1 px-4 py-2 rounded-xl bg-[#162135] text-white outline-none focus:ring-2 focus:ring-[#0074f0]"/>

                    <button
                        onClick={handleSend}
                        disabled={loading}
                        className={`px-5 py-2 rounded-xl text-white font-semibold transition-all duration-300 ${loading
                        ? "bg-[#4b5563] cursor-not-allowed"
                        : "bg-[#0074f0] hover:bg-blue-600"}`}>
                        {loading
                            ? "..."
                            : "Send"}
                    </button>
                </div>

                {/* Error message BELOW input */}
                {inputError && (
                    <div
                        className={`text-red-400 text-xs font-mono ml-1 ${errorShake
                        ? "animate-shakeGlow"
                        : ""}`}>
                        {inputError}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatInterface;
