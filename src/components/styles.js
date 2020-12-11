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

export const postitem = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#cfd8dc',
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: 'flex-start',
  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#9c27b0',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  bodyContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  time: {
    color: 'white',
    fontStyle: 'italic',
  },
});

export const post_input = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b0bec5',
  },
  inputContainer: {
    flex: 1,
  },
  button: {},
});

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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#78909c',
  },
});

export const topicModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10,
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
