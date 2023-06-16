import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {

    const handleLoginPress = () => {
        navigation.navigate('Login');
      };
    
      const handleRegisterPress = () => {
        navigation.navigate('Register');
      };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Button title="Login" onPress={handleLoginPress} />
        <Button title="Register" onPress={handleRegisterPress} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });

export default HomeScreen;
