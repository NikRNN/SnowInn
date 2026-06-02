import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction"> //исключил direction из пропсов, т.к. задаю его явно

export function VStack(props: VStackProps) {
    const {alignContent = "start"} = props
    return (
        <Flex direction={"column"} {...props} alignContent={alignContent}/>
    );
}
