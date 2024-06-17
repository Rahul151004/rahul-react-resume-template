import './Navbar.css';

function Navbar(){

    var name='<RB/>';
    return (
    <div className='navbar_container'>
        <div className='navbar_left'>
            {name}
        </div>
        <div className='navbar_right'>
        <a href='#homepage_container'>About</a>
        <a href='#techstack_container'>Tools</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#'>Resume</a>
        </div>    
    </div>)
}

export default Navbar;

