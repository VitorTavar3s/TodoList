import { TabLabelContainer, TabLabelCountContainer, TabLabelCountText, TabLabelText } from "./styles";

type Props = {
    title: string,
    count: number,
    tabColor: string
}

export function TabLabel ({title, count, tabColor}:Props){
    return(
        <TabLabelContainer>
            <TabLabelText style={{color:tabColor}}>{title}</TabLabelText>
            <TabLabelCountContainer style={{backgroundColor:tabColor}}>
                <TabLabelCountText>{count}</TabLabelCountText>
            </TabLabelCountContainer>
        </TabLabelContainer>
    );
}
