import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
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
import { TasksContext } from "../../context/tasksContext";

export default function AddTask() {

  const {tasks, setTasks} = useContext(TasksContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const navigation = useNavigation()

  const handleAddTask = () => {
    if (!title || !description) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      date:date.toISOString(),
      status: false,
      archived: false
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    navigation.goBack();
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
