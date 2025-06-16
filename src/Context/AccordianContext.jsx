import { Children } from "react";
import { createContext } from "react";

export const accordianContext = createContext();

const AccordianContextProvider=({children})=>{

    const data = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI in React."
    },
    {
      question: "What is state?",
      answer: "State is a built-in object that stores property values that belong to a component."
    }
  ];

  const value = {
    data
  }

    return (
        <accordianContext.Provider value={value}>
            {children}
        </accordianContext.Provider>
    )
}

export default AccordianContextProvider;