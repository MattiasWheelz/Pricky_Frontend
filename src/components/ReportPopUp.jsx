import React, { useState } from "react";
import { sendReport } from "../services/emailService";
import { FaTimes } from 'react-icons/fa';
import Portal from "./Portal";

const ReportPopUp = ({ onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [issue, setIssue] = useState("");
    const [details, setDetails] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!name.trim()) newErrors.name = "Name cannot be empty.";
        if (!issue.trim()) newErrors.issue = "Issue cannot be empty.";
        if (!details.trim()) newErrors.details = "Details cannot be empty.";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "Email cannot be empty.";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format (e.g. john@example.com).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSend = async () => {
        if (!validate()) return;

        await sendReport({ name, email, issue, details });
        setSubmitted(true);
    };

    return (
        <Portal>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                <div className="bg-[#0d1117] border border-cyan-500 p-3 md:p-6 rounded-xl relative w-[90%] max-w-md md:max-w-lg shadow-neon animate-zoomInSlow">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-cyan-300 hover:text-red-500 text-lg md:text-xl"
                    >
                        <FaTimes />
                    </button>

                    {!submitted ? (
                        <div className="space-y-2 md:space-y-4">
                            {/* Name */}
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full p-1 md:p-2 bg-[#121826] border border-cyan-300 rounded-md text-white text-sm md:text-base"
                            />
                            {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}

                            {/* Email */}
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="w-full p-1 md:p-2 bg-[#121826] border border-cyan-300 rounded-md text-white text-sm md:text-base"
                            />
                            {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}

                            {/* Issue */}
                            <input
                                type="text"
                                value={issue}
                                onChange={(e) => setIssue(e.target.value)}
                                placeholder="Issue related to?"
                                className="w-full p-1 md:p-2 bg-[#121826] border border-cyan-300 rounded-md text-white text-sm md:text-base"
                            />
                            {errors.issue && <p className="text-red-400 text-xs">{errors.issue}</p>}

                            {/* Details */}
                            <textarea
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder="Please explain"
                                rows={3}
                                className="w-full p-1 md:p-2 bg-[#121826] border border-cyan-300 rounded-md text-white text-sm md:text-base"
                            />
                            {errors.details && <p className="text-red-400 text-xs">{errors.details}</p>}

                            {/* Send Button */}
                            <button
                                onClick={handleSend}
                                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-1 md:py-2 rounded-md transition text-sm md:text-base"
                            >
                                Send
                            </button>
                        </div>
                    ) : (
                        <div className="text-center text-cyan-300 font-medium text-sm md:text-base">
                            Sorry for the inconvenience 😓, will look into it ASAP. 🙏
                        </div>
                    )}
                </div>
            </div>
        </Portal>
    );
};

export default ReportPopUp;
