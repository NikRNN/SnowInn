import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button.js";
import { CounterActions } from "../model/slice/CounterSlice.js";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue.js";

export function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const incr = () => { dispatch(CounterActions.incremented()); };

    const decr = () => { dispatch(CounterActions.decremented()); };

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
