import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Head from "./components/Head";
import {TodoApp} from "./components/Todo";
const App = () => {
 return (
    <View style={{marginTop:20,}}>
      <StatusBar style="auto" />
      <Head />
      <TodoApp/>
    </View>
  );
};


export default App;
