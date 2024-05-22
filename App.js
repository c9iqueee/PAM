import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/Components/Title';
import Form from './src/Components/Form';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>

    //   <Stack.Screen
    //     name="Login"
    //     component={LoginScreen}
    //   />
      
    //   <Stack.Screen
    //     name="Home"
    //     component={HomeScreen}
    //   />
         
    //   <Stack.Screen
    //     name="Detalhes"
    //     component={DetailsScreen}
    //   />

    //   <Stack.Screen
    //     name="About"
    //     component={AboutScreen}
    //   />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Text>
        <Title/>
        <Form/>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
