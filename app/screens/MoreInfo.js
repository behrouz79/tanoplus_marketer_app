import React from 'react';
import MainScreen from '../components/shared/MainScreen';
import {useQuery} from 'react-query';
import {getPositionData} from '../api/Profile';
import {FlatList, StyleSheet, View} from 'react-native';
import CustomText from '../components/shared/CustomText';
import CustomTextBold from '../components/shared/CustomTextBold';
import {Colors} from '../constants/colors';

const info = ({item}) => {
  return (
    <View style={styles.infoCard}>
      <CustomTextBold style={styles.infoText}>{item.name} :</CustomTextBold>
      <CustomTextBold style={styles.infoText}>{item.value}</CustomTextBold>
    </View>
  );
};

const MoreInfo = () => {
  const {isLoading, error, data} = useQuery('PositionData', getPositionData);
  return (
    <MainScreen>
      <CustomTextBold style={styles.title}>
        درجه : {data?.position}
      </CustomTextBold>
      <View style={styles.informationContainer}>
        <View style={styles.information}>
          <View style={{paddingTop: 8}} />
          {error && (
            <View>
              <CustomText>خطا در دریافت اطلاعات</CustomText>
            </View>
          )}
          {isLoading && (
            <View>
              <CustomText>دریافت اطلاعات</CustomText>
            </View>
          )}
          {data && (
            <FlatList
              data={data.data}
              renderItem={info}
              keyExtractor={(item, index) => index}
            />
          )}
          <View style={{paddingBottom: 8}} />
        </View>
      </View>
    </MainScreen>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    marginLeft: 24,
    color: Colors.title,
    fontSize: 14,
  },
  container: {
    textAlign: 'center',
  },
  informationContainer: {
    flex: 1,
  },
  information: {
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    marginHorizontal: 24,
    marginVertical: 5,
    minHeight: 50,
  },
  infoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  infoText: {
    fontSize: 14,
  },
  grid: {
    flexDirection: 'column',
    flex: 1,
    maxHeight: '50%',
    marginHorizontal: 16,
  },
  gridRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
