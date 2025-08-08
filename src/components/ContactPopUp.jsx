import React, {useEffect, useRef, useState} from "react";
import {sendReport} from "../services/emailService";
import {FaTimes} from 'react-icons/fa';
import Portal from "./Portal";

const ContactPopUp = ({onClose}) => {
    const [name,
        setName] = useState("");
    const [email,
        setEmail] = useState("");
    const [subject,
        setSubject] = useState("");
    const [submitted,
        setSubmitted] = useState(false);

    const handleSend = async() => {
        await sendReport({name, email, subject, type: "contact"});
        setSubmitted(true);
    };

    return (
        <Portal>
            <div
                className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                <div
                    className="bg-[#0d1117] border border-cyan-500 p-3 md:p-6 rounded-xl relative w-[90%] max-w-md md:max-w-lg shadow-neon animate-zoomInSlow">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-cyan-300 hover:text-red-500 text-lg md:text-xl">
                        <FaTimes/>
                    </button>
                    {!submitted
                        ? (
                            <div className="space-y-2 md:space-y-4">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Superhero Alias"
                                    className="w-full p-1 md:p-2 bg-[#121826] border border-cyan-300 rounded-md text-white text-sm md:text-base"/>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Secret Email"
                                    className="w-full p-1 md:p-2 bg-[#121826] border border-cyan-300 rounded-md text-white text-sm md:text-base"/>
                                <textarea value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Tell Me Your Epic Saga or Just Say Hi (No Boring Stuff, Plz! 😁)" rows={3} // Reduced from 4 for mobile
                                    className="w-full p-1 md:p-2 bg-[#121826] border border-cyan-300 rounded-md text-white text-sm md:text-base"/>
                                <button
                                    onClick={handleSend}
                                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-1 md:py-2 rounded-md transition text-sm md:text-base">
                                    Send
                                </button>
                            </div>
                        )
                        : (
                            <div className="text-center text-green-300 font-medium text-sm md:text-base">
                                Thank you for reaching out! Will respond shortly 😊📬
                            </div>
                        )}
                </div>
            </div>
        </Portal>
    );
};

export default ContactPopUp;