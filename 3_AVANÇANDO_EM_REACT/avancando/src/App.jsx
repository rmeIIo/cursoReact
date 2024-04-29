import { Fragment, useState } from 'react'
import './App.css'

import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const [count, setCount] = useState(0)

  const name = "João"

  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 345346},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 23576}
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, name: "Matheus", job: "Programador", age: 31},
    {id: 2, name: "Maria", job: "Advogada", age: 40},
    {id: 3, name: "Josias", job: "Reporter", age: 66},
    {id: 4, name: "Miguel", job: "Estudante", age: 16},

  ]

  return (
    <>
      <h1>Avançando em React</h1>

      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/>
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branca" newCar={false}/>

      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} />
      ))}

      <Fragments propFragment="teste" />
      <Container myValue="teste">
        <p>Este é o conteúdo</p>
      </Container>

      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      {users.map((user) => (
        <UserDetails 
        key={user.id} 
        name={user.name} 
        job={user.job} 
        age={user.age}/>
      ))}
    </>
  )
}

export default App
