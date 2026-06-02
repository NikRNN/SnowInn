import { Flex, FlexProps } from "../Flex/Flex"

type HStackProps = Omit<FlexProps, "direction"> //исключил direction из пропсов, т.к. задаю его явно

export function HStack(props: HStackProps) {
    return (
        <Flex direction={"row"} {...props}/>
    );
}
