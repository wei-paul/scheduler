import { useState } from "react";


export default function useVisualMode(initial) { 
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (mode, replace = false) {
    
    if (replace) {
      history.splice(history.length -1 ,0,mode)
      history.pop();
      setHistory(history);
    } else {
      history.push(mode);
    } 
    setMode(mode);
    
  }

  const back = function () {
    
    if (history.length < 2) {
      return history;
    }
    history.pop();
    setHistory(history);
    setMode(history[history.length - 1]);
    
  };
   
    return {
      mode,
      transition,
      back
    };
}

