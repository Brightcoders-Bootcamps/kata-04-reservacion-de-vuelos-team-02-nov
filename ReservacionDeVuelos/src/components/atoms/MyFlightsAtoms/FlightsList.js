import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';
import FlightsListItem from './FlightsListItem';
import {FlightsListConstants} from '../../../utils/Constants';

const FlightsList = () => {
  const renderItem = ({item}) => <FlightsListItem item={item} />;
  return (
    <View style={styles.ListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={FlightsListConstants.flightDataExperimental}
        keyExtractor={(flight) => flight.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FlightsList;
