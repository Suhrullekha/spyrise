function TextButton (props){
    console.log(props); 
    return(
        <button>
            {props.children}
        </button>
    )
}

export default TextButton; 