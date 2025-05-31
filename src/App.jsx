import React from 'react';
import './App.css';
import GreetingCard from './components/GreetingCard';
import ProfileInfo from './components/ProfileInfo';
import SkillList from './components/SkillList';

function App() {
  return (
    <>
      <div className="app">
        <GreetingCard />
        <div className="content-row">
          <ProfileInfo />
          <SkillList />
        </div>
      </div>

      <footer className="footer">
        TUGAS Bootcamp FE Per2 &copy; 2025 Fuadi Dhiyaulhaq
      </footer>
    </>
  );
}

export default App;
