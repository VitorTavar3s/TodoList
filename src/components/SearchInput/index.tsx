import { InputContainer, SearchInputButton, SearchTextInput } from "./styles";
import { Feather } from '@expo/vector-icons'

type Props = {
    onPress: () => void;
    onChangeText: (text: string) => void;
    value: string;
}

export function SearchInput ({onPress, onChangeText, value}:Props){
    return(
        <InputContainer>
            <SearchTextInput
                placeholder='Digite a tarefa'
                placeholderTextColor ='gray'
                keyboardType='default'
                value={value}
                onChangeText={onChangeText}
            />
            <SearchInputButton onPress={onPress}>
                <Feather name="search" size={24} color="gray" />
            </SearchInputButton>
        </InputContainer>
    );
}