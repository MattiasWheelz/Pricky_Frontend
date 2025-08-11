import React, {useEffect, useRef, useState} from "react";
import {
    FaLinkedin,
    FaFileAlt,
    FaEnvelope,
    FaPhoneAlt
    // FaPython,
    // FaGithub,
    // FaReact,
    // FaDatabase,
    // FaNodeJs
} from "react-icons/fa";
// import {
//     SiFastapi,
//     SiTailwindcss,
//     SiPandas,
//     SiNumpy,
//     SiVite,
//     SiJavascript,
//     SiTypescript,
//     SiRedux,
//     SiHtml5,
//     SiCss3,
//     SiPostgresql,
//     SiMongodb,
//     SiFirebase,
//     SiDocker,
//     SiJupyter,
//     SiScikitlearn,
//     SiTensorflow,
//     SiOpenai,
//     SiVercel,
//     SiGithubactions,
//     SiNotion
// } from "react-icons/si";

import GlowyTube from "./GlowyTube";
import profileImage from "../resources/profile_image.jpg";
import ReportPopup from "./ReportPopUp";
import ContactPopup from "./ContactPopUp";

// const FloatingIcons = () => {
//     const iconRefs = useRef([]);
//     const containerRef = useRef(null);
//     const [iconPositions,
//         setIconPositions] = useState([]);

//     const icons = [
//         FaPython,
//         FaGithub,
//         FaReact,
//         FaDatabase,
//         FaNodeJs,
//         SiFastapi,
//         SiTailwindcss,
//         SiPandas,
//         SiNumpy,
//         SiVite,
//         SiJavascript,
//         SiTypescript,
//         SiRedux,
//         SiHtml5,
//         SiCss3,
//         SiPostgresql,
//         SiMongodb,
//         SiFirebase,
//         SiDocker,
//         SiJupyter,
//         SiScikitlearn,
//         SiTensorflow,
//         SiOpenai,
//         SiVercel,
//         SiGithubactions,
//         SiNotion
//     ];

//     useEffect(() => {
//         const positions = Array
//             .from({length: 30})
//             .map(() => ({
//                 x: Math.random() * 90,
//                 y: Math.random() * 90,
//                 dx: (Math.random() - 0.5) * 0.5,
//                 dy: (Math.random() - 0.5) * 0.5
//             }));
//         setIconPositions(positions);
//     }, []);

//     useEffect(() => {
//         let animationFrameId;
//         const animate = () => {
//             setIconPositions((prev) => prev.map((pos) => {
//                 let newX = pos.x + pos.dx;
//                 let newY = pos.y + pos.dy;

//                 if (newX < 0 || newX > 95) 
//                     pos.dx *= -1;
//                 if (newY < 0 || newY > 95) 
//                     pos.dy *= -1;
                
//                 return {
//                     ...pos,
//                     x: Math.max(0, Math.min(95, newX)),
//                     y: Math.max(0, Math.min(95, newY))
//                 };
//             }));
//             animationFrameId = requestAnimationFrame(animate);
//         };
//         animationFrameId = requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(animationFrameId);
//     }, []);

//     return (
//         <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
//             {iconPositions.map((pos, index) => {
//                 const Icon = icons[index % icons.length];
//                 return (
//                     <span
//                         key={index}
//                         ref={(el) => (iconRefs.current[index] = el)}
//                         className="absolute text-gray-400 opacity-30"
//                         style={{
//                         left: `${pos.x}%`,
//                         top: `${pos.y}%`,
//                         fontSize: "1rem md:text-1.2rem",
//                         transition: "none"
//                     }}>
//                         <Icon/>
//                     </span>
//                 );
//             })}
//         </div>
//     );
// };

const ProfileCard = () => {
    const [showReportPopup,
        setShowReportPopup] = useState(false);
    const [showContactPopup,
        setShowContactPopup] = useState(false);

    return (
        <div
            className="relative h-full w-full flex flex-col items-center justify-center border border-cyan-400 rounded-2xl p-4 md:p-6 bg-gradient-to-br from-[#0d1117] to-[#0f172a] card-border-glow overflow-hidden">
            <div className="relative z-30 flex flex-col items-center text-center space-y-4">
                <div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cyan-500 overflow-hidden transition-shadow duration-300 group-hover:shadow-neon">
                    <img
                        src={profileImage}
                        alt="Varun Gandhi"
                        className="w-full h-full object-cover"/>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">Varun Gandhi</h1>
                <p className="text-sm md:text-md text-white mt-1 max-w-[80%]">
                    Skills : Python, SQL, Data Analysis, Selenium, Automation, HTML, CSS, React, GCP, AWS, GIT, AI Integrations
                </p>
                <div className="mt-4 space-y-2 md:space-y-3 text-sm md:text-md w-full">
                    <a
                        href="http://www.linkedin.com/in/varun-gandhi84"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline transition">
                        <FaLinkedin className="text-md md:text-lg"/>
                        LinkedIn
                    </a>
                    <a
                        href="https://drive.google.com/drive/folders/1ntaMyM2Iq2xkyX1zKH3eBA19OX5-0PHl?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline transition">
                        <FaFileAlt className="text-md md:text-lg"/>
                        Resume
                    </a>
                    <a
                        href="mailto:varun.gandhi5681@gmail.com"
                        className="text-md flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-200 hover:underline transition">
                        <FaEnvelope className="text-md md:text-lg"/>
                        varun.gandhi5681@gmail.com
                    </a>
                    <a
                        href="tel:+919465433841"
                        className="text-md flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-200 hover:underline transition">
                        <FaPhoneAlt className="text-md md:text-lg"/>
                        +91-9465433841
                    </a>
                </div>
            </div>
            <button
                onClick={() => setShowReportPopup(true)}
                className="absolute bottom-2 left-2 bg-red-600 hover:bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-md shadow-neonRed z-40 text-xs md:text-sm">
                Report Issue
            </button>
            <button
                onClick={() => setShowContactPopup(true)}
                className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 text-black px-2 py-1 md:px-4 md:py-2 rounded-md shadow-neon z-40 text-xs md:text-sm">
                Contact Me
            </button>
            {showReportPopup && <ReportPopup onClose={() => setShowReportPopup(false)}/>}
            {showContactPopup && <ContactPopup onClose={() => setShowContactPopup(false)}/>}
            <div
                className="absolute top-0 left-0 -translate-x-full -translate-y-full animate-zoomInSlow z-0 opacity-50">
                <GlowyTube rotate={-45}/>
            </div>
            <div
                className="absolute top-0 right-0 translate-x-full -translate-y-full animate-zoomInSlow z-0 opacity-50">
                <GlowyTube rotate={45}/>
            </div>
            <div
                className="absolute bottom-0 right-0 translate-x-full translate-y-full animate-zoomInSlow z-0 opacity-50">
                <GlowyTube rotate={135}/>
            </div>
            <div
                className="absolute bottom-0 left-0 -translate-x-full translate-y-full animate-zoomInSlow z-0 opacity-50">
                <GlowyTube rotate={-135}/>
            </div>
        </div>
    );
};

export default ProfileCard;