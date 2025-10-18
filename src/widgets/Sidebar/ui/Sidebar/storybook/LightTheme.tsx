// только для тестов в storybook!!!

import { SVGProps } from "react";

import cls from "./LightIcon.module.scss";

export function LightIcon(props: SVGProps<SVGSVGElement>) {
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
            className={cls.lightIcon}
            {...props}
        >
            <circle
                cx={24}
                cy={20}
                r={8}
                fill="#FFD93B"
                className={cls.bulb}
            />
            <path d="M20 20q4 4 8 0" />
            <rect x={21} y={28} width={6} height={3} rx={1.5} fill="none" />
            <rect x={21} y={32} width={6} height={2} rx={1} fill="none" />
        </svg>
    );
}
