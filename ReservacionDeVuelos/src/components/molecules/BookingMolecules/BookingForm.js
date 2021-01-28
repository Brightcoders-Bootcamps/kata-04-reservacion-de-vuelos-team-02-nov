import React from 'react'
import { View, Text } from 'react-native'
import BookingInput from '../../atoms/BookingAtoms/BookingInput'
import BookingButton from '../../atoms/BookingAtoms/BookingButton'
import { styles } from '../../../styles/BookingStyles'

const BookingForm = () => {
    return (
        <View style= {styles.ContainerForm}>
            <BookingInput/>
            <BookingButton/>
        </View>
    )
}

export default BookingForm
