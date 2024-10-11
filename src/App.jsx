import React, { useState } from "react";
// import { collection,  } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
function App(){
  const [id,setId]=useState(0);
  const [food,setFood]=useState([]);
  const [price,setPrice]=useState(0);
  const [item,setItem]=useState("");

const getData=async ()=>{
  
  let arr=[];
  const querySnapshot = await getDocs(collection(db, "foods"));
  querySnapshot.forEach((doc) => {
    
    arr.push(doc.data());
  });
  // console.log(arr)
  setFood(arr);
  setId(arr.length)
  console.log(id)
  arr.forEach((temp)=>{
    console.log(temp.Item) 
  })
}

const add=async ()=>{
  const docRef = await addDoc(collection(db, "foods"), {
    Item: item,
    Price: price
  });
  setItem("")
  setPrice('')
  console.log("Document written with ID: ", docRef.id);
  console.log(item +" "+price)
}
  
  return <div className="main">
    <h3>Item</h3>
    <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
    <h3>Price</h3>
    <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>

    <button onClick={add}>submit</button>
    <button onClick={getData}>Get Data</button>
  </div>
}
export default App;