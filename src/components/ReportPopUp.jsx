import React, {useEffect, useRef, useState} from "react";
import {sendReport} from "../services/emailService";
import { FaTimes } from 'react-icons/fa';
import Portal from "./Portal";

const ReportPopUp = ({onClose}) => {
    const [issue,
        setIssue] = useState("");
    const [details,
        setDetails] = useState("");
    const [submitted,
        setSubmitted] = useState(false);

    const handleSend = async() => {
        await sendReport({issue, details});
        setSubmitted(true);
    };

    return (
        <Portal>
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
            <div
                className="bg-[#0d1117] border border-cyan-500 p-6 rounded-xl relative w-[90%] max-w-md shadow-neon animate-zoomInSlow">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-cyan-300 hover:text-red-500">
                    <FaTimes/>
                </button>
                {!submitted
                    ? (
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={issue}
                                onChange={(e) => setIssue(e.target.value)}
                                placeholder="Issue related to?"
                                className="w-full p-2 bg-[#121826] border border-cyan-300 rounded-md text-white"/>
                            <textarea
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder="Please explain"
                                rows={4}
                                className="w-full p-2 bg-[#121826] border border-cyan-300 rounded-md text-white"/>
                            <button
                                onClick={handleSend}
                                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 rounded-md transition">
                                Send
                            </button>
                        </div>
                    )
                    : (
                        <div className="text-center text-cyan-300 font-medium">
                            Sorry for the inconvenience 😓, will look into it ASAP. 🙏
                        </div>
                    )}
            </div>
        </div>
        </Portal>
    );
};


export default ReportPopUp;