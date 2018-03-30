import React, { Component } from 'react';
import DraftEditorRawExample from './DraftEditorRawExample';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Commands (mac / windows)</h3>
        <ul>
            <li>Bold: cmd+b / ctrl+b</li>
            <li>Italic: cmd+i / ctrl+i</li>
            <li>Underline: cmd+u / ctrl+u</li>
        </ul>
        <div>
          <DraftEditorRawExample />
        </div>
      </div>
    );
  }
}

export default App;
