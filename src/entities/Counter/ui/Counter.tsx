import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { CounterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const incr = () => { dispatch(CounterActions.incremented()); };

    const decr = () => { dispatch(CounterActions.decremented()); };
    /* eslint-disable i18next/no-literal-string */
    return (
        <div>
            <h1 data-testid="value-title">
                value=
                {counterValue}
            </h1>
            <Button data-testid="incr-btn" onClick={incr}>inc</Button>
            <Button data-testid="decr-btn" onClick={decr}>decr</Button>
        </div>
    );
}
