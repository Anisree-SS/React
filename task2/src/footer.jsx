import React from "react";
function Footer(){
    const year=new Date().getFullYear();
    return(
        <>
            <footer className="footerStyle">
                <center>
                    <span>Copyright &copy; {year}</span> 
                </center>
            </footer>
        </>
    )
}

export default Footer;