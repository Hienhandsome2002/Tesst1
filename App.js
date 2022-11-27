
import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
const data = [
  {
    name: 'Nạp nhiên liệu tiếp theo',
    distance: '14 km',
    date: '04 thg 12',
    type: '1 km trước'
  },
  {
    name: 'Vận chuyển hàng hóa',
    distance: '11 km',
    date: '24 thg 11',
    type: '1,000,000đ'
  },
  {
    name: 'Nạp nhiên liệu',
    distance: '6 km',
    date: '20 thg 11',
    type: '88,000đ'
  },
  {
    name: 'Vận chuyển nhiên liệu',
    distance: '10km',
    date: '30 tg 10',
    type: '200,000đ'
  },
  {
    name: 'Vận chuyển nhiên liệu',
    distance: '10km',
    date: '30 tg 10',
    type: '200,000đ'
  }
]

const renderItem = ({ item }) => {
  return (
    <View style={{ marginVertical:32}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={{}}>
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 17, color: 'black', fontWeight: '500', }}>{item.name}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>{item.distance}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center',marginLeft:20 }}>
          <View>
            <Text style={{ fontSize: 15 }}>{item.date}</Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 15, color: '#FF9999' }}>{item.type}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
      </View>
    </View>
  )
}
const App = () => {
  return (
    <View style={styles.container}>
      <View style = {{}}>
        <StepIndicator customStyles={customStyles}
          direction="vertical"
          >
        </StepIndicator>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}>
        </FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  indicatorContainer: {

  }
});

export default App;
