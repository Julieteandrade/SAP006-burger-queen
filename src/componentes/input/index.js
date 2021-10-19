import "./input.css";
const Input = (props) => {
  const classes = `input ${props.variant}`;
  return (
    <input className={classes} placeholder={props.placeholder}/>
      
  
  );
};

export default Input;