import './App.css'
import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import ClickButton from './ClickEvent'

function App() {

  const fruits=[{id:1,name:"Apple",calorise:200},
                {id:2,name:"Banana",calorise:150},
                {id:3,name:"Coconut",calorise:300},
                {id:4,name:"Orange",calorise:100},
                ];
  const Vegetable =[{id:5,name:"Brocouli",calorise:70},
                {id:6,name:"Potato",calorise:220},
                {id:7,name:"Carrot",calorise:190},
                {id:8,name:"Cabbage",calorise:440},
                ];

  return(
    <>
      <Card/>
      <Button/>
      {/* Props */}
      <Student name="Ram" age={40} isStudent={false}></Student>
      {/* conditional rendering  */}
      <UserGreeting isLoggedIn={true} username="john"/>
      {/* List */}
      <List items={fruits} category="fruits" />
      <List items={Vegetable} category="vegetable" />

      {/* Onclick event */}
       <ClickButton/>
    </>
  )
 }

export default App
