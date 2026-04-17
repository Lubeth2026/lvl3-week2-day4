


import pets from '../../pets'
import './App.css'
import PetCard from './PetCard'

function App() {
//Example Number 1//  
   //const words = ["Pizza", "Banana", "Apple"];
   //const jsx = words.map(word => <p>{word}</p>)

//Example Number 2//
   //const foods = [
    //{name: "Pizza", price: 1.99},
    //{name: "Pickles", price: 0.99},
    //{name: "Apples", price: 2.09},
   //];
   // const names = foods.map((food) => <p>{food.name}</p>);
   //console.log(names);

//Benson's Data Pets Example//
//MAP Benson Pet Example//
const pet = {
  type: "dog",
  name: "Milo",
  breed: "Beagle",
  age: 2,
  description: ""
}
   
  return (
    <>
    <h1>Pet Adoption Center</h1>
    {pets.map(pet => (
    <PetCard key={pet.id} name={pet.name} type={pet.type} breed={pet.breed} age={pet.age} description={pet.description} image={pet.image}/>
    ))}
      
    </>
  )
}

export default App
