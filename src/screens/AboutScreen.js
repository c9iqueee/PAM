import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>You're in Details</Text>
            <Button 
                title='Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:"center"
    },
})