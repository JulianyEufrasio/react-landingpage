import '../assets/Css/Hero.css';

function Hero(){
    return(
        <main>
            <div className="text">
                <p className="main-text">
                    You feet deserve the best
                </p>
                <p className='text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, velit. Qui debitis animi veniam, sunt molestiae error. Aliquam, consequatur voluptatum?</p>

                <div className="btns-sec">
                    <button type="button" className='main-btn'>Shop now</button>
                    <button type="button" className='out-btn'>Category</button>
                </div>
            </div>
            
            <img src="../../public/imgs/shoes.png" alt="Shoes" />
        </main>
    );
}


export default Hero;