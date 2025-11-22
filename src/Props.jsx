
import AA from './assets/img.jpg'
import Child from './Child'


let App=()=>{


    // let name = "Lakki sahu"
    // let age = 21


    let myname={
        name:"Lakki sahu",
        age:21,
        city:"bhopal"
    }
    return(
        <>
         {/* react fregment rafc */}
        <h1>Hii !</h1>
        <h1>Home page</h1>
        <img src={AA} alt="" style={{height:'200px', width:'200px'}} />
        {/* <Child myname='Lakki sahu' age='21'/> */}
        {/* <Child myname={name} age={age} city={city}/> */}
        <Child  mydata={myname}/>

        
        </>
    )
}

export default App