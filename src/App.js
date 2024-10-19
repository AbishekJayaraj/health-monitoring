// src/App.js
import React from 'react';
import DataFetchingComponent from './components/DataFetchingComponent';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Health Monitoring System</h1>
        <p>Real-time tracking of your vital signs</p>
      </header>

      <DataFetchingComponent />

      {/* Reference Box */}
      <div className="reference-container">
        <h3>Average range for healthy individuals</h3>
        <ul>
          <li><strong>Heart Rate:</strong> 60 - 100 BPM (beats per minute)</li>
          <li><strong>SpO₂:</strong> 95 - 100% (oxygen saturation)</li>
          <li><strong>Body Temperature:</strong> 36.1 - 37.2 °C (97 - 99 °F)</li>
        </ul>
      </div>

      <footer className="App-footer">
        <p>© 2024 Health Monitoring Device. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
