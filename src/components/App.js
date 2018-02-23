import React from "react";
import "../stylesheets/main.scss";
import InputResults from './InputResults/input_results_container';
import OtherContent from './OtherContent/other_content';
// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="container">
         <div className="input-result">
           <InputResults />
         </div>
         <div className="other-content">
           <OtherContent />
         </div>
      </div>
    );
  }
}
