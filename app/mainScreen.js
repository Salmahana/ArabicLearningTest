import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Illustration Section */}
      <View style={styles.illustrationContainer}>
        <Image
          source={ require('../assets/images/flag.webp')} // Replace with your illustration image
          style={styles.illustration}
        />
      </View>

      {/* Title and Subtitle Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Start Learning Arabic</Text>
        <Text style={styles.subtitle}>
          Begin your journey from lesson one, with interactive and guided learning.
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.footerLink}>SIGN IN</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  illustrationContainer: {
    width: '100%',
    alignItems: 'center',
  },
  illustration: {
    width: '90%',
    height: 250,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  signUpButton: {
    width: '80%',
    backgroundColor: '#FFC107', // Yellow color
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  signInButton: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFC107',
  },
  signInText: {
    fontSize: 16,
    color: '#FFC107',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  footerLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
