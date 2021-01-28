import React from 'react'
import { View, Text } from 'react-native'
import {BookingConstants} from '../../../utils/Constants';
import {styles} from '../../../styles/BookingStyles';

const BookingTitle = (props) => {
    return (
        <View>
            <Text style={styles.FlightTitle}>{props.title}</Text>
        </View>
    )
}

export default BookingTitle
