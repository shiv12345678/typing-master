import { Component } from "react";

import "./index.css";

const typingList = [
  {
    id: 1,
    displayText:
      "ar im ba ar im ba",
  },
  {
    id: 2,
    displayText:
      "res ers res ers res ers",
  },
  { id: 3, displayText: "were form were form were form" },
  { id: 4, displayText: "more do more do more do" },
];

class Typing extends Component {
  state = {
    word: "",
    count: 0,
    worPerMin: 0,
    acc: 0,
    status: true,
  };

  changeText = (e) => {
    this.setState({ word: e.target.value });
    const {word,count}=this.state
    if (
        word===typingList[count].displayText
      ) {
         let wordLength=word.split(" ").length
         let wordPerMinute=wordLength/5
         
         let InitialLength=typingList[count].displayText.split(" ").length
         let initialValue=InitialLength/5
         let accuracy=(wordPerMinute*100)/initialValue
        this.setState((prevState) => ({
          count: prevState.count + 1,
          word:'',
          worPerMin: wordPerMinute,
          acc: accuracy
        }));
      }else if(word.length>typingList[count].displayText.length){
        this.setState({status: false})
      }
    
  };
  resetView = () => {
    this.setState({ count: 0, word: "" });
  };
  
  render() {
    const { count, word, worPerMin, acc, status } = this.state;
    const color=status!==true ? 'red-color': null
    if (count === typingList.length) {
      alert("Successfully completed");
      this.resetView()
    }

    return (
      <div className="main-page-container">
        <h1 className="main-heading">Typing-Master</h1>
        <div className="body-container">
          <h3 className="lesson-heading">
            Lesson {`${typingList[count].id}`}/{`${typingList.length}`}
          </h3>
          <div className="system-text-container">
            <p className="text">{typingList[count].displayText}</p>
          </div>
          <textarea
            cols={42}
            className={`text-area ${color}`}
            onChange={this.changeText}
            value={`${word}`}
          />
        </div>
        <div className="bottom-container">
          <div className="wpm-container">
            <h4 className="text">
              WPM : <span>{worPerMin}</span>
            </h4>
          </div>
          <div className="accuracy-container">
            <h4 className="text">
              Accuracy: <span>{acc}</span> %
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Typing;
