import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Stack, Button, Badge } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (!task) {
            alert("Please enter a task before adding");
            return;
        }
        setTasks([...tasks, { task, isDone: false }]);
        setTask('');
    };

    const deleteTask = index => {
        setTasks(tasks.filter((t, i) => i !== index));
    };

    const markAsDone = index => {
        setTasks(
            tasks.map((t, i) => {
                if (i === index) {
                    return { ...t, isDone: true };
                }
                return t;
            })
        );
    };
    const clearAll = () => {
        setTasks([]);
    };
    return (
            <ScrollView>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={task}
                    onChangeText={text => setTask(text)}
                    placeholder="Add task"
                />

                <Button style={[styles.button, styles.buttonText]} onPress={addTask} title="" trailing={props => <Icon style={{color:"green",marginRight:10}}name="send" {...props} />} />
            </View>
                {tasks.length ? (
                    <ScrollView>
                        {tasks.map((t, i) => (
                            <View key={i} style={[styles.taskContainer, t.isDone && styles.done]}>
                                <Text>{t.task}</Text>
                                <View style={styles.actionsContainer}>
                                    <TouchableOpacity style={styles.actionButton} onPress={() => deleteTask(i)}>
                                        <Text style={styles.actionText}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.actionButton} onPress={() => markAsDone(i)}>
                                        <Text style={styles.actionText}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                ) : (
                    <Text style={styles.emptyText}>No tasks. Add new tasks to start</Text>
                )}
                {tasks.length > 0 && (
                    <Button style={styles.clearButton} onPress={clearAll} title="Clear All" />
                )}
        </View>
            </ScrollView> 
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // color:"white",
        marginBottom: 60,
        backgroundColor: "#9999999999999999999999999999999999999999922",
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
        color: 'white',
    },
    input: {
        borderWidth: 2,
        borderColor: '#333',
        fontSize: 15,
        padding: 10,
        flex: 1,
        width: '80%',
        borderRadius:20,
    },
    button: {
        borderRadius:0,
        // backgroundColor: 'red',
        width: '20%',
        fontSize:10,
        color:"white",
        borderWidth:2,
        padding: 10,
        marginLeft:10,
        marginTop:5,
        marginBottom:10
    },
    buttonText: {
        backgroundColor: "#999",
        color: "white"
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#333',
        marginTop: 10,
        // width: '80%',
        backgroundColor: "white",

        height:70,

    },
    actionsContainer: {
        flexDirection: 'row'
    },
    actionButton: {
        backgroundColor: '#333',
        padding: 10,
        marginLeft: 10
    },
    actionText: {
        color: 'red'
    },
    done: {
        backgroundColor: '#33cc33'
    },
    emptyText: {
        fontSize: 20,
        textAlign: "center",
        padding: 20,
        color:"red"
    }, clearButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "red",
        borderRadius: 5,
        alignSelf: "center"
    },
    clearButtonText: {
        color: "white",
        fontWeight: "bold"
    },
});
