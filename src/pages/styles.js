import {StyleSheet, Dimensions} from 'react-native';

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  logoText: {
    color: '#D91622',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export const timelinePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd8dc',
  },
});
