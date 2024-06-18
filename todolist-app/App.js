import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Edit } from './src/screens/edit_task';
import { TaskList } from './src/screens/task_list';
import Routes from './src/route';

export default function App() {
  return (
    <Routes/>
  );
}
