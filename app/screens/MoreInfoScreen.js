import React from 'react';
import MainScreen from '../components/shared/MainScreen';
import {useQuery} from 'react-query';
import {getPositionData} from '../api/Profile';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomText from '../components/shared/CustomText';
import CustomTextBold from '../components/shared/CustomTextBold';
import {Colors} from '../constants/colors';
import {magiketProductList} from '../api/magiket';

const info = ({item}) => {
  return (
    <View style={styles.infoCard}>
      <CustomTextBold style={styles.infoText}>{item.name} :</CustomTextBold>
      <CustomTextBold style={styles.infoText}>{item.value}</CustomTextBold>
    </View>
  );
};

const MagiketProductCard = ({item}) => {
  return (
    <View style={styles.magiketCard}>
      <CustomTextBold style={styles.magiketText}>{item.title}</CustomTextBold>
      <CustomTextBold style={styles.magiketText}>
        کمیسیون : {item.commission}
      </CustomTextBold>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.lightGray,
          paddingHorizontal: 5,
          borderRadius: 8,
        }}>
        <CustomText>ثبت سفارش</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const MoreInfoScreen = () => {
  const {isLoading, error, data} = useQuery('PositionData', getPositionData);
  const {
    isLoading: magiketIsLoading,
    error: magiketError,
    data: magiketProducts,
  } = useQuery('MagiketProductList', magiketProductList);

  return (
    <MainScreen>
      <View style={{flex: 1}}>
        <CustomTextBold style={styles.title}>
          درجه : {data?.position ? data.position : 'ثبت نشده'}
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
      </View>
      <View style={{flex: 1}}>
        <CustomTextBold style={styles.title}>پروژه های مجیکت</CustomTextBold>
        {magiketError && (
          <View>
            <CustomText>خطا در دریافت اطلاعات</CustomText>
          </View>
        )}
        {magiketIsLoading && (
          <View>
            <CustomText>دریافت اطلاعات</CustomText>
          </View>
        )}
        {magiketProducts && (
          <FlatList
            data={magiketProducts}
            renderItem={MagiketProductCard}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </MainScreen>
  );
};

export default MoreInfoScreen;

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
  magiketCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    margin: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
  },
  magiketText: {},
});
