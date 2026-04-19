import {
    ErrorInfo, ReactNode, Component, Suspense,
} from "react";
import { PageError } from "widgets/PageError/index.js";
// import { withTranslation } from 'react-i18next'; - если хотим экспортировать с переводом

interface ErrorBoundaryProps {
    children: ReactNode;

   }

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info:ErrorInfo) {
        console.log(
            error,

            info.componentStack,

        );
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        return children;
    }
}

// export default withTranslation()(ErrorBoundary) так писать на случай, если хочу экспортировать с переводом
export default ErrorBoundary;
