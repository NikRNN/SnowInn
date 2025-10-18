// только для тестов в storybook!!!

import { SVGProps, useState } from "react";
import cls from "./DarkIcon.module.scss";

export function DarkIcon(props: SVGProps<SVGSVGElement>) {
    const [hovered, setHovered] = useState(false);

    return (
        <svg
            width={64}
            height={64}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cls.darkIcon}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
        >
            {/* body */}
            <path d="M12 18 C12 10, 36 10, 36 18 C38 32, 10 32, 12 18 Z" fill="#8B5E3C" />

            {/* eyes */}
            <circle cx={18} cy={20} r={4} fill="#fff" />
            <circle cx={30} cy={20} r={4} fill="#fff" />

            {/* маленькие глаза с плавным переходом */}
            <circle
                cx={18}
                cy={20}
                r={hovered ? 0.1 : 1.5}
                fill="#000"
                style={{ transition: "r 0.5s ease" }} // плавное сужение за 0.5s
            />
            <circle
                cx={30}
                cy={20}
                r={hovered ? 0.1 : 1.5}
                fill="#000"
                style={{ transition: "r 0.5s ease" }}
            />

            {/* beak */}
            <path d="M23 23 L25 26 L27 23 Z" fill="#000" />

            {/* wings */}
            <path d="M12 18 Q6 26, 12 34" fill="none" />
            <path d="M36 18 Q42 26, 36 34" fill="none" />

            {/* feet */}
            <line x1={20} y1={34} x2={20} y2={38} />
            <line x1={24} y1={34} x2={24} y2={38} />
            <line x1={28} y1={34} x2={28} y2={38} />
        </svg>
    );
}
