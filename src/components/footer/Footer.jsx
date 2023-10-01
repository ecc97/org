import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{backgroundImage: 'url(/img/footer.png)'}}>
        <div className='redes'>
            <a href="https://linkedin/in/edwin-carmona-c" target='_blank'>
                <img src="/img/linkedin.png" alt="Linkedin" />
            </a>
            <a href="https://twitter.com/ecckyo97" target='_blank'>
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://github.com/ecc97" target='_blank'>
                <img src="/img/github.png" alt="Github" />
            </a>
        </div>
        <img src="/img/logo.png" alt="org" />
        <strong>Desarrollado por ECC97</strong>
    </footer>
}

export default Footer