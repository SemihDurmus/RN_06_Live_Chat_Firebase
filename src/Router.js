import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {Login, Sign, Timeline} from './pages';

const Stack = createStackNavigator();

function Router() {
  const [hasSession, setSession] = React.useState(false);

  React.useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setSession(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {hasSession ? (
          <>
            <Stack.Screen name="Timeline" component={Timeline} />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign" component={Sign} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
