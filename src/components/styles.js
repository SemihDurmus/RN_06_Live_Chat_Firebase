//-------------LOGIN/SIGN UP----------------

import {StyleSheet, Dimensions} from 'react-native';

export const input = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  textInput: {
    padding: 10,
    fontSize: 18,
  },
});

export const regular_button = StyleSheet.create({
  container: {
    backgroundColor: '#D91622',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 24,
    width: Dimensions.get('window').width * 0.4,
    alignSelf: 'center',
    shadowColor: '#7f8c8d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export const outlined_button = StyleSheet.create({
  container: {
    backgroundColor: '#ff6b6b',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ff6b6b',
    width: Dimensions.get('window').width * 0.4,
    alignSelf: 'center',
    shadowColor: '#7f8c8d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

//-------------TIMELINE----------------
export const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#90a4ae',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#78909c',
  },
});

export const postitem = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#cfd8dc',

    marginHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 'auto',
  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#dcdde1',
    backgroundColor: '#f5f6fa',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginTop: 2,
  },
  username: {
    fontWeight: 'bold',
    color: '#3c6382',
    marginRight: 10,
  },
  time: {
    color: '#3c6382',
    fontStyle: 'italic',
    fontSize: 11,
  },
  bodyContainer: {
    padding: 5,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: '#b8e994',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  postText: {
    fontSize: 18,
  },
});

export const post_input = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingBottom: 6,
    paddingTop: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#b0bec5',
  },
  inputContainer: {
    flex: 1,
  },
});

export const topicModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10,
  },
  title: {
    color: '#9a0007',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topicItemContainer: {
    padding: 10,
  },
  topicItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#78909c',
  },
});
