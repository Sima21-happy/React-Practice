import './App.css'
import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
function App() {
  return(
    <>
      <Card/>
      <Button/>
      <Student name="Ram" age={40} isStudent={false}></Student>
      <UserGreeting isLoggedIn={true} username="john"/>
    </>
  )
 }

export default App
