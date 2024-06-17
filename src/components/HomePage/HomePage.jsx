import './HomePage.css';
import image1 from '../../assets/githubicon.png' 
import linked from '../../assets/linkedin.png'


function HomePage(){
    return (
    <div className='homepage_container' id='homepage_container'>
        <div className='homepage_left'>
            <p className='homepage_heading'>
                <span className='red_color'>Hi,</span> my name is 
            </p>
            <p className='homepage_left_h2'>
            Rahul Bhat
            </p>
            <p className='homepage_left_h3'>
                Student at <span className='red_color'>LPU</span>
            </p>
            <p className='homepage_desc_left'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem delectus blanditiis dolorum voluptas, itaque quas quo optio suscipit atque numquam quasi libero maiores vitae eum accusantium nobis expedita doloribus qui?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas beatae fugit amet sapiente enim iste quisquam ipsa vitae tenetur ad sunt rerum minima molestias placeat, veritatis explicabo eos ipsum dolor.
            </p>
        <div>
        <a href="https://github.com/Rahul151004" target='_blank'>
        <img src={image1} alt="Image" className='homepage_logo'/>
        </a>
        <a href="https://www.linkedin.com/in/rahulsbhat/" target='_blank'>
        <img src={linked} alt="Image" className='homepage_logo'/>
        </a>
        </div>
        <a href="mailto:rbhat5480@gmail.com">
            <button className='homepage_left_button'>Get in Touch</button>
        </a>
        </div>

        <div className='homepage_right'>
            <img src='https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif' alt="Programming image" />
        </div>    
    </div>
    )
}

export default HomePage;