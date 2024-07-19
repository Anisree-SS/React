function Footer(){
    const year=new Date().getFullYear();
    return(
        <>
            <footer >
                <center>
                    <p>Copyright &copy; {year}</p> 
                </center>
            </footer>
        </>
    )
}

export default Footer;