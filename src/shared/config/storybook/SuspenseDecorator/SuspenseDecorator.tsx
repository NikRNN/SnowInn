import { Suspense } from "react";

export function SuspenseDecorator(Story: React.ComponentType) {
    return <Suspense>
        <Story />
    </Suspense>
}
