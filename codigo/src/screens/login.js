import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry={true} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.forgotPassword}>Cadastro</Text>
            </TouchableOpacity>
            <Image style={styles.logo} source={require('../../assets/quiz.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        color: '#fff',
        marginBottom: 30,
    },
    input: {
        width: '80%',
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        fontSize: 16,
        color: '#000',
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: 'rgba(132, 53, 222, 1)',
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    forgotPassword: {
        color: '#fff',
        marginTop: 15,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 30,
    },
});