import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/types";
import {
  Input,
  FormContainer,
  Label,
  DateTimeRow,
  DateTimeButton,
  DateTimeText,
  SaveButton,
  CancelButton
} from "./styles";

type AddTaskNavigationProp = StackNavigationProp<RootStackParamList, 'AddTask'>;

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const navigation = useNavigation<AddTaskNavigationProp>()

  const handleAddTask = () => {
    if (!title || !description) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newTask = {
      id: Date.now(), 
      title,
      description,
      status: false, 
      date:date.toISOString(),
    };

    navigation.navigate("Home", { newTask });
    console.log("Tarefa adicionada:", newTask);
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setDate(currentTime);
  };



  return (
    <View style={styles.container}>
      <FormContainer>
        <Label>Title</Label>
        <Input placeholder="Task Name" value={title} onChangeText={setTitle} />
        <Label>Description</Label>
        <Input
          placeholder="Task Description"
          value={description}
          onChangeText={setDescription}
        />
        <Label>Date & Time</Label>
        <DateTimeRow>
          <DateTimeButton onPress={() => setShowDatePicker(true)}>
            <DateTimeText>{date.toLocaleDateString()}</DateTimeText>
          </DateTimeButton>
          <DateTimeButton onPress={() => setShowTimePicker(true)}>
            <DateTimeText>
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </DateTimeText>
          </DateTimeButton>
        </DateTimeRow>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </FormContainer>
      <SaveButton onPress={handleAddTask}>
      <Text style={{ color: '#FFF', fontSize: 16, fontWeight: "bold" }}>Save</Text>
      </SaveButton>
      <CancelButton onPress={() => navigation.goBack()}>
      <Text style={{ color: '#FFF', fontSize: 16, fontWeight: "bold" }}>Cancel</Text>
      </CancelButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
