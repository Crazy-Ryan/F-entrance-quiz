import React, { Component } from 'react';
import './App.scss';
import StudentList from '../Component/StudentList/StudentList';
import StudentGroup from '../Component/StudentGroup/StudentGroup';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <StudentGroup />
        <StudentList />
      </div>
    );
  }
}

export default App;
