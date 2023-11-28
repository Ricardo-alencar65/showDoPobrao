import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({ navigation }) {

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userEmail');
        await AsyncStorage.removeItem('userId');
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.boxWelcome}>
            <Text style={{ color: "#ffffff", paddingTop: 100, marginBottom: 20, fontSize: 32 }}>Quiz conhecimentos gerais</Text>
            <Text style={styles.textTitle}>Seja bem vindo</Text>
            <Text style={styles.textBody}>Pronto para aprender?</Text>
            <TouchableOpacity style={styles.buttonWelcome} onPress={() => { navigation.navigate('EscolhaAreaScreen'); }}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <Image style={styles.imageWelcome} source={require('../../../assets/quiz.png')} alt="Início do Quiz" />
        </View>
    );
}

const styles = StyleSheet.create({
    boxWelcome: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 500,
        flex: 1,
        marginTop: 100,
    },
    textTitle: {
        justifyContent: "center",
        marginBottom: 28,
        color: "#fff",
        fontSize: 24
    },
    textBody: {
        justifyContent: "center",
        color: "#8435de",
        marginBottom: 20,
        fontSize: 16
    },
    buttonWelcome: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(132, 53, 222, 1)',
        borderRadius: 50,
        borderWidth: 0,
        borderColor: 'transparent',
        width: 100,
        height: 48,
        marginBottom: 15, // Adicionado espaço entre os botões
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonLogout: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255, 0, 0, 1)', // Vermelho para o botão de logout
        borderRadius: 50,
        borderWidth: 0,
        borderColor: 'transparent',
        width: 100,
        height: 48
    },
    imageWelcome: {
        maxWidth: '100%',
        resizeMode: 'contain',
        paddingTop: 100
    }
});
