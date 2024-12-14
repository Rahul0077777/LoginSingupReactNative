import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { LoginSchema } from '../utils/valditionSchemas';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState('');

  useEffect(() => {
    const loadRememberedEmail = async () => {
      const email = await AsyncStorage.getItem('rememberedEmail');
      if (email) {
        setRememberedEmail(email);
        setRememberMe(true);
      }
    };
    loadRememberedEmail();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}
    >
      <Formik
        initialValues={{ email: rememberedEmail, password: '' }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          if (rememberMe) {
            await AsyncStorage.setItem('rememberedEmail', values.email);
          } else {
            await AsyncStorage.removeItem('rememberedEmail');
          }
          alert('Login Successful!');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <Image source={require('../../assets/images/login.jpg')} style={styles.topImage} />
            <Text style={styles.title}>Welcome Back!</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              placeholderTextColor="#aaa"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholderTextColor="#aaa"
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Remember Me</Text>
              <Switch
                value={rememberMe}
                onValueChange={(value) => setRememberMe(value)}
                trackColor={{ false: '#767577', true: '#6200ee' }}
                thumbColor={rememberMe ? '#fff' : '#f4f3f4'}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Don’t have an account?{' '}
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate('SignUp')}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  topImage: { width: 250, height: 250, alignSelf: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  error: { color: 'red', fontSize: 12, marginBottom: 10 },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  switchLabel: { fontSize: 16, color: 'black' },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footerText: { textAlign: 'center', marginTop: 10, fontSize: 14, color: 'black' },
  linkText: { color: 'black', fontWeight: 'bold' },
});

export default LoginScreen;
