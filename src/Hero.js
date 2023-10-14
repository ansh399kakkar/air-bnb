import image from './pp.png';
import './Hero.css';

export default function Hero(){
    return(
        <section className="hero">
            <img src={image} alt="err" className="im"/>
            <h1 className="p">Online Experiences</h1>
            <p className="pa">Join unique interactive activities led by one-of-a-kind host-all kind without leaving home .</p>
        </section>
    )
} 