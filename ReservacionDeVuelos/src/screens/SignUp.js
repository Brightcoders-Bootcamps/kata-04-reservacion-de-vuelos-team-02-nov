import React from 'react'
import { View, Text } from 'react-native'
import {styles} from '../styles/SignUpStyles'
import Form from '../components/atoms/SignUpForm'
import SignUpTitle from '../components/atoms/SignUpTitle'
import SignUpButtons from '../components/atoms/SignUpButtons';
const SignUp = () => {
    return (
        <View style={styles.SignUpContainer}>
            <SignUpTitle />
            <Form />
            <SignUpButtons />
        </View>
    )
}

export default SignUp
