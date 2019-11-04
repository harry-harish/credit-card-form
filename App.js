/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.card}>
            <View style={styles.top}>
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/img/tiny_logo.png',
                }}
              />
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/img/tiny_logo.png',
                }}
              />
            </View>
            <View style={styles.cardNo}>
              <Text style={styles.cardNoText}>#### #### ####</Text>
            </View>
            <View style={styles.footer}>
              <View>
                <Text style={styles.label}>Card Holder</Text>
                <Text style={styles.text}>FULL NAME</Text>
              </View>
              <View>
                <Text style={styles.label}>Expires</Text>
                <Text style={styles.text}>MM/YY</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 380,
    height: 230,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 10,
    padding: 15,
    backgroundColor: Colors.dark,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNo: {
    marginTop: 25,
  },
  cardNoText: {
    paddingHorizontal: 5,
    color: Colors.white,
    fontWeight: '800',
    fontSize: 25,
    letterSpacing: 5,
  },
  footer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: Colors.lighter,
    fontWeight: '100',
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
