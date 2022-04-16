import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import MainScreen from '../components/shared/MainScreen';
import CustomText from '../components/shared/CustomText';
import {Colors} from '../constants/colors';
import {useQuery} from 'react-query';
import {checkAppVersion, getProfileDta} from '../api/Profile';
import CustomTextBold from '../components/shared/CustomTextBold';
import CardButton from '../components/buttons/CardButton';

const app_version = '2.0.0';

const HomeScreen = ({navigation}) => {
  const {isLoading, error, data} = useQuery('ProfileData', getProfileDta);

  useEffect(() => {
    checkAppVersion(app_version).then(result => {
      if (result.status === 'new') {
        alert(result.message);
      }
    });
  }, []);

  const info = ({item}) => {
    return (
      <View style={styles.infoCard}>
        <CustomTextBold style={styles.infoText}>{item.name} :</CustomTextBold>
        <CustomTextBold style={styles.infoText}>{item.value}</CustomTextBold>
      </View>
    );
  };

  return (
    <MainScreen style={styles.container}>
      <CustomTextBold style={styles.title}>ابزارها</CustomTextBold>
      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <CardButton
            icon="shopping-bag"
            title="ساخت سرویس"
            onPress={() => navigation.navigate('CreateService')}
            description="ایجاد حساب کاربری برای کسب و کارهای مختلف"
          />
          <CardButton
            icon="crown"
            title="اشتراک"
            onPress={() => navigation.navigate('SubScription')}
            description="خرید اشتراک برای کسب و کارها"
          />
        </View>
        <View style={styles.gridRow}>
          <CardButton
            icon="paper-plane"
            title="ارسال پیشنهاد"
            onPress={() => navigation.navigate('Suggestion')}
            description="ارسال پیشنهاد خود جهت بهبود برنامه یا گزارش باگ در برنامه"
          />
          <CardButton
            icon="info-circle"
            title="وضعیت پیشنهادات"
            onPress={() => navigation.navigate('SuggestionDetails')}
            description="پیگیری پیشنهادات ارسالی خود به تیم پشتیبانی"
          />
        </View>
      </View>
      <CustomTextBold style={styles.title}>اطلاعات حساب کاربری</CustomTextBold>
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
              data={data}
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

export default HomeScreen;

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
