import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { Formik } from 'formik';
import { SignUpSchema } from '../utils/valditionSchemas';

const getPasswordStrength = (password: string): string => {
  if (!password) return '';
  if (password.length < 6) return 'Weak';
  if (/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) return 'Strong';
  return 'Medium';
};

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  const [passwordStrength, setPasswordStrength] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={() => {
          alert('Sign Up Successful!');
          navigation.navigate('Login');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <Image source={require('../../assets/images/signup.png')} style={styles.topImage} />
            <Text style={styles.title}>Create Your Account</Text>

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
              onChangeText={(text) => {
                handleChange('password')(text);
                setPasswordStrength(getPasswordStrength(text));
              }}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholderTextColor="#aaa"
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            {passwordStrength && (
              <Text style={[styles.passwordStrength, styles[passwordStrength.toLowerCase()]]}>
                Password Strength: {passwordStrength}
              </Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate('Login')}
              >
                Log In
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
  topImage: { width: 150, height: 150, alignSelf: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 20, textAlign: 'center' },
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
  passwordStrength: { fontSize: 14, fontWeight: 'bold', marginBottom: 15 },
  weak: { color: 'red' },
  medium: { color: 'orange' },
  strong: { color: 'green' },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footerText: { textAlign: 'center', marginTop: 10, fontSize: 16, color: 'black' },
  linkText: { color: 'black', fontWeight: 'bold',fontSize:20 },
});

export default SignUpScreen;
