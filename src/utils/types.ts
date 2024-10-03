export type TaskProps = {
    id: number,
    title: string,
    status: boolean,
    onCheck?: () => void;
    onRemove?: () => void;
}

export type RootStackParamList = {
    Principal: undefined;
    Home: undefined;
    Addtask:undefined; 
}
