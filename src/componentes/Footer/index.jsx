import "./Footer.css";

const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='https://github.com/eCuevaChristian'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://github.com/eCuevaChristian'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://github.com/eCuevaChristian'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <span >
        Desarrollado por 
        <a className="desarrollado" href="https://github.com/eCuevaChristian">
        Christian Cueva
        </a> 
        </span>
        <img className="logo" src='/img/Logo.png' alt='org' /> 
    </footer>
}
export default Footer;