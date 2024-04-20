import profile from './assets/image3.jpeg'
function Card(){
    return(
        <div className="card">
           <img src={profile} alt="Profile Picture" className='cardImage'>
           </img>
           <h2 className='card-title'>Sima Thapa</h2>
           <p className='card-text'>I am learning React</p>
        </div>
    );
}
export default Card