import "./button.css"
const Button = (props) => {
    const classes = `button  ${props.variant}`;
return (
    <button className={classes}>
   {props.children}
    </button>
)

}

export default Button;