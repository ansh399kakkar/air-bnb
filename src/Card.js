import './Card.css';
import StarRating from './StarRating';
import im from './p1.jpg';

export default function Card(props){
  let text
  if(props.jokes.spot===0){text="SOLD OUT"}
  else if(props.jokes.location==="online"){text="ONLINE"}
  else{text="AVAILABLE"}

    return(
        <div className="cards ">
            <div class="card" style={{width: "18rem"}}>
            {<div className="badge">{text}</div>}
  <img src={props.jokes.img} class="card-img-top" alt="..." style={{width:"260px" , height:"340px", borderRadius:"10px"}}/>
  <StarRating/>
  <p className="e"><img src={im} alt="err" className="er" style={{width:"20px" ,height:"20px"}}/>
  <span>{props.jokes.rate}</span>
  <span>{props.jokes.tot}</span>
  <span> {props.jokes.country}</span></p>
  <div class="card-body">
    <p class="card-text">{props.jokes.title}</p>
    <div className="p">
    <h3>From ${props.jokes.price}</h3>
    <p>/ person</p>
    </div>
    
  </div>
  
</div>


        </div>
    )
}