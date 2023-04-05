import { Pressable, Text, StyleSheet } from "react-native";

const MyButton = ({ text, onPress }) => (
    <Pressable style={styles.button} onPress={onPress} >
        <Text style={styles.text}>{text}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: "#357da1",
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default MyButton;