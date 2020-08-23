import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App()  {
  const nayoks=['razzak','salman','jafor']
  const products=[
    {name:'photoshop', price:'$20'},
    {name:'iuustrator', price:'$10'},
    {name:'pdf reader', price:'$12'},
    


]
const  productNames=products.map(product=>product.name);

console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done223 <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
       <ul>
         {
          nayoks.map(nayok=><li>{nayok}</li>)

         }
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          

          {
           
          products.map(product=><li>{product.name}</li>)

          }

 

       </ul>
      
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person></Person>
       
      
       
      </header>
    </div>
  )

}

function Users(){
const [users, setUsers]=useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data));


},[])
  return (
  <div>
<h3>Dynamic user:{users.name}</h3>
<ul>

{

users.map(users=><li>{users.name}</li>)
}


</ul>

  
  
  </div>



  )





}

function Counter(){
const [count, setCount]=useState(8);
const handleIncrease=()=>setCount(count+1);






return (
  <div>

<h1>count:{count}</h1>

<button onClick={()=>setCount(count-1)}>decrease</button>

<button onClick={()=>setCount(count+1)}>increase</button>


  </div>




 
 
  )




}





function Product(props){

  const productStyle={
 border:'1px solid gray',
 borderRadius:'5px',
 backgroundColor:'lightgray',
 height:'200px',
 width:'200px',
 float:'left',


  }


  
return (
   <div style={productStyle}>
  <h3>{props.product.name}</h3>
<h3>{props.product.price}</h3>

   <button>buy now</button>

</div>




  )


}


function Person(props){

  return (
  <div style={{border:'2px solid red', padding:'10px'}}>
  <h3>my name:{props.name}</h3>
  <h4>my profession:{props.job}</h4>
   

  </div>


  )



}



export default App;