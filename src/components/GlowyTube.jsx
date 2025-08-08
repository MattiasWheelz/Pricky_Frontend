import React from "react";

const GlowyTube = ({
    rotate = 0
}) => (
    <svg viewBox="0 0 100 100" width="120" // Reduced from 160 for mobile
    height="120" // Reduced from 160 for mobile
    style={{
        transform: `rotate(${rotate}deg)`
    }} className="pointer-events-none zigzag-path">
        <defs>
            <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#00ffff" stopOpacity="0.05"/>
            </linearGradient>
        </defs>
        <path d="M 0 50 L 20 30 L 40 70 L 60 30 L 80 70 L 100 50" fill="none" stroke="url(#zigzagGradient)" strokeWidth="2" // Reduced from 3 for mobile
            strokeLinecap="round"/>
    </svg>
);

export default GlowyTube;