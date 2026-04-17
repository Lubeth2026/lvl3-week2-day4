
export default function PetCard({name, type, breed, age, description, image}){
 return(
    <>
    <section>
        <img src={image} alt={description} />
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{breed}</p>
        <p>{age} years old</p>
        <p>{description}</p>
    </section>
    </>
 )
}