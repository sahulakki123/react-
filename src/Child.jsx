

const Child = ({mydata}) => {


  return (
    <>
    <h1>Home Child</h1>
    <div style={{border:'5px'}}>

    
    <p>My name is {mydata.name}</p>
    <p>My age is {mydata.age}</p>
    <p>My city is {mydata.city}</p>
    </div>
    
    </>
  )
}

export default Child 