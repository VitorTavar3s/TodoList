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
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function AddTask() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const navigation = useNavigation()

  const taskValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
    description: Yup.string().required("Description is required!")
  });

  /* const handleAddTask = () => {
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
   };*/

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
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={taskValidationSchema}
        onSubmit={(values) => {
          const newTask = {
            id: Date.now(),
            title: values.title,
            description: values.description,
            date: date.toISOString(),
            status: false,
            archived: false
          };
          setTasks([...tasks, newTask]);
          /*setTitle("");
          setDescription("");*/
          navigation.goBack();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <FormContainer>
            <Label>Title</Label>
            <Input
              placeholder="Task Name"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            {touched.title && errors.title && (
              <Text style={styles.errorText}>{errors.title}</Text>
            )}
            <Label>Description</Label>
            <Input
              placeholder="Task Description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
            />
            {touched.description && errors.description && (
              <Text style={styles.errorText}>{errors.description}</Text>
            )}
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
            <SaveButton onPress={handleSubmit}>
              <Text style={{ color: '#FFF', fontSize: 16, fontWeight: "bold" }}>Save</Text>
            </SaveButton>
            <CancelButton onPress={() => navigation.goBack()}>
              <Text style={{ color: '#FFF', fontSize: 16, fontWeight: "bold" }}>Cancel</Text>
            </CancelButton>
          </FormContainer>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  }
});
