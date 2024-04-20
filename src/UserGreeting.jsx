function UserGreeting(props){
  
       return(props.isLoggedIn?<h2>welcome{props.username}</h2> :"please Logged in")    
        
}
export default UserGreeting