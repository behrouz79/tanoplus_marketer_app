import React from 'react';
import MainScreen from '../components/shared/MainScreen';
import {useQuery} from 'react-query';
import {getSubsets} from '../api/subsets';
import {FlatList, StyleSheet, View} from 'react-native';
import CustomTextBold from '../components/shared/CustomTextBold';
import {Colors} from '../constants/colors';
import RowView from '../components/shared/RowView';

const info = ({item}) => {
  return (
    <View style={styles.infoCard}>
      <CustomTextBold style={styles.infoText}>{item.name} :</CustomTextBold>
      <CustomTextBold style={styles.infoText}>{item.value}</CustomTextBold>
    </View>
  );
};

const child = item => {
  return (
    <>
      <View style={{flex: 1}}>
        {item.message ? (
          <RowView style={{width: '95%', alignSelf: 'center'}}>
            <CustomTextBold style={styles.title}>{item.message}</CustomTextBold>
            <CustomTextBold style={styles.title}>{item.name}</CustomTextBold>
            <CustomTextBold style={styles.title}>{item.phone}</CustomTextBold>
          </RowView>
        ) : (
          <>
            <RowView style={{width: '95%', alignSelf: 'center'}}>
              <CustomTextBold style={styles.title}>
                {item.position}
              </CustomTextBold>
              <CustomTextBold style={styles.title}>{item.name}</CustomTextBold>
              <CustomTextBold style={styles.title}>{item.phone}</CustomTextBold>
            </RowView>
            <View style={styles.informationContainer}>
              <View style={styles.information}>
                <View style={{paddingTop: 8}} />
                <FlatList
                  data={item.data}
                  renderItem={info}
                  keyExtractor={(item, index) => index}
                />
                <View style={{paddingBottom: 8}} />
              </View>
            </View>
          </>
        )}
      </View>
      <View style={{height: 1, backgroundColor: Colors.title}}></View>
    </>
  );
};

const SubsetsScreen = () => {
  const {isError, isLoading, data} = useQuery('Subsets', getSubsets, {
    cacheTime: 1,
  });

  return (
    <MainScreen>
      <FlatList
        data={data}
        renderItem={item => child(item.item)}
        keyExtractor={(item, index) => index}
      />
    </MainScreen>
  );
};

export default SubsetsScreen;

const styles = StyleSheet.create({
  title: {
    flex: 1,
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
