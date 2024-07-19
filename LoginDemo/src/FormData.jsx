import InputTag from "./InputTag";
function Register(props){
    return(
        <form className="form">
            <InputTag type="text" placeholder="Username" />
            <InputTag type="password" placeholder="Password" />
            {!props.isRegister && <InputTag type="password" placeholder="Confirm Password" /> }
            <button type="submit">{props.isRegister?"Login":"Register"}</button>
        </form>
    )
}

export default Register;