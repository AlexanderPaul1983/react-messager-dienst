import LogoRed from '../LogoRed.jpg'

const Header = () => {
    return (
        <header className='header'>
            <img src={LogoRed} alt='logo'></img>
            <div className='div-on-header'></div>
        </header>
    )
};

export default Header;