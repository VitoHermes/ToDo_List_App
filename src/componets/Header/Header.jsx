import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className='flex justify-center items-center flex-col p-4 h-[200px] bg-gray-700'>
            <img className='logo w-[126px] h-[48px] mb-2' src={logo} alt="logo" />
        </header>
    )
}

export default Header;