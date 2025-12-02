

const Child = ({name,age,city, im}) => {


  return (
    <>
    <h1>Home Child</h1>
    <div className="border-2 w-40 justify-around hover:bg-gray-400 cursor-pointer">

    <img src={im} alt="" className="w-2xl flex" />
    
    <p>My name is {name}</p>
    <p>My age is {age}</p>
    <p>My city is {city}</p>
    </div>
    
    </>
  )
}

export default Child 