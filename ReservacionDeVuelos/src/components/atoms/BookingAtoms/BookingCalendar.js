import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../styles/BookingStyles';
import {colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';

export default class BookingCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const minDate = new Date();
    
    return (
      <View style={styles.Calendar}>
        <CalendarPicker
          previousComponent={
            <Icon name="left" color={colors.Purple} size={30}></Icon>
          }
          nextComponent={
            <Icon name="right" color={colors.Purple} size={30}></Icon>
          }
          weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
          textStyle={{
            fontSize: 18,
          }}
          dayLabelsWrapper="false"
          selectedDayTextColor={colors.white}
          width={400}
          todayBackgroundColor={colors.white}
          todayTextStyle={colors.black}
          selectedDayColor={colors.Purple}
          onDateChange={this.onDateChange}
          minDate={minDate}
          restrictMonthNavigation={true}
        />

        <View>
          <Text>{startDate}</Text>
        </View>
      </View>
    );
  }
}
