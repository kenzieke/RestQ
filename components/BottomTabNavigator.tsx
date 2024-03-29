// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/build/Ionicons';

import SleepTrackerScreen from '../app/screens/SleepTracker';
import HealthTrackerScreen from '../app/screens/HealthTracker';
import WeeklyGoals from '../app/screens/WeeklyGoals';
import ResourceLibraryScreen from '../app/screens/ResourceLibrary';
import WeeklyLessonsScreen from '../app/screens/WeeklyLessonsScreen';

type screenType={
  SleepTrackerScreen:undefined,
  HealthTrackerScreen:undefined,
  WeeklyGoals:undefined,
  ResourceLibraryScreen:undefined,
  WeeklyLessonsScreen:undefined,
}

const Tab = createBottomTabNavigator<screenType>();
const Stack = createStackNavigator();

function SleepTrackerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SleepTrackerScreen"
        component={SleepTrackerScreen}
        options={{ title: 'Sleep Tracker' }}
      />
      {/* other screens specific to this stack */}
    </Stack.Navigator>
  );
}

function HealthTrackerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HealthTrackerScreen"
        component={HealthTrackerScreen}
        options={{ title: 'Health Tracker' }}
      />
      {/* other screens specific to this stack */}
    </Stack.Navigator>
  );
}

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            height: 60,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
          tabBarShowLabel:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'SleepTrackerScreen') {
              iconName = focused
                ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'HealthTrackerScreen') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'WeeklyGoals') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'WeeklyLessonsScreen') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'ResourceLibraryScreen') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            }

            // Modify this to return custom icons
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#52796F',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      <Tab.Screen
        name="SleepTrackerScreen"
        component={SleepTrackerStack}
        options={{ tabBarLabel: 'Sleep Tracker' }}
      />
      <Tab.Screen
        name="HealthTrackerScreen"
        component={HealthTrackerStack}
        options={{ title: 'Health Tracker' }}
      />
      <Tab.Screen
        name="WeeklyLessonsScreen"
        component={WeeklyLessonsScreen}
        options={{ title: 'Weekly Lessons' }}
      />
      <Tab.Screen
        name="WeeklyGoals"
        component={WeeklyGoals}
        options={{ title: 'Weekly Goals' }}
      />
      <Tab.Screen
        name="ResourceLibraryScreen"
        component={ResourceLibraryScreen}
        options={{ title: 'Resource Library' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
// export default { SleepTrackerStack, HealthTrackerStack, BottomTabNavigator };