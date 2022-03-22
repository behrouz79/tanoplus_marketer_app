import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import MainScreen from '../components/shared/MainScreen';
import CustomText from '../components/CustomText';
import {Colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useQuery} from 'react-query';
import {getProfileDta} from '../api/Profile';

const HomeScreen = ({navigation}) => {
  const {isLoading, error, data} = useQuery('ProfileData', getProfileDta);

  const info = ({item}) => {
    return (
      <View style={styles.infoCard}>
        <CustomText style={styles.infoText}>{item.name}</CustomText>
        <CustomText style={styles.infoText}>{item.value}</CustomText>
      </View>
    );
  };

  return (
    <MainScreen style={styles.container}>
      <CustomText style={styles.title}>ابزارها</CustomText>
      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <TouchableOpacity
            style={[styles.cardContainer, {}]}
            onPress={() => navigation.navigate('CreateService')}>
            <Icon name="shopping-bag" size={40} color={Colors.title} />
            <CustomText style={styles.cardTitle}>ساخت سرویس</CustomText>
            <CustomText style={styles.subTitle}>
              ایجاد حساب کاربری برای کسب و کارهای مختلف
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardContainer, {}]}
            onPress={() => navigation.navigate('SubScription')}>
            <Icon name="crown" size={40} color={Colors.title} />
            <CustomText style={styles.cardTitle}>اشتراک</CustomText>
            <CustomText style={styles.subTitle}>
              خرید اشتراک برای کسب و کارها
            </CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.gridRow}>
          <TouchableOpacity
            style={[styles.cardContainer, {}]}
            onPress={() => navigation.navigate('Suggestion')}>
            <Icon name="paper-plane" size={40} color={Colors.title} />
            <CustomText style={styles.cardTitle}>ارسال پیشنهاد</CustomText>
            <CustomText style={styles.subTitle}>
              ارسال پیشنهاد خود جهت بهبود برنامه یا گزارش باگ در برنامه
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardContainer, {}]}
            onPress={() => navigation.navigate('SuggestionDetails')}>
            <Icon name="info-circle" size={40} color={Colors.title} />
            <CustomText style={styles.cardTitle}>وضعیت پیشنهادات</CustomText>
            <CustomText style={styles.subTitle}>
              پیگیری پیشنهادات ارسالی خود به تیم پشتیبانی
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
      <CustomText style={styles.title}>اطلاعات حساب کاربری</CustomText>
      <View style={styles.information}>
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
            data={data}
            renderItem={info}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </MainScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
  title: {
    marginLeft: 24,
    color: Colors.title,
    fontSize: 14,
  },
  cardContainer: {
    padding: 15,
    margin: 10,
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    width: '50%',
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 15,
    textAlign: 'center',
  },
  information: {
    backgroundColor: Colors.lightGray,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  infoCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  infoText: {
    fontSize: 14,
  },
  grid: {
    flexDirection: 'column',
    flex: 1,
    maxHeight: '50%',
  },
  gridRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
