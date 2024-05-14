import { useState } from "react";

function useInput(validateValueFanc){
   
    const [inputValue, setInputValue] = useState();
    const isValueValid = validateValueFanc(inputValue);
    const isInputInvalid = !isValueValid

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);

      };

      const styles = isInputInvalid ? 'invalid' : 'input';
      return{
        value: inputValue,
        hasError: isInputInvalid,
        isValid: isValueValid,
        styles,
        inputChangeHandler: inputChangeHandler,
      }

}

export default useInput;