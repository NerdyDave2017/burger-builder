import React from "react";
import "./Input.css";

const Input = (props) => {
  let inputElement = null;
  const inputClasses = ["InputElement"];

  if (props.touched && props.invalid && props.shouldValidate) {
    inputClasses.push(" Invalid");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  //   default:
  //     inputElement = (
  //       <input className="InputElement" {...props.elementConfig} />
  //     );
  //     break;
  // }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
