document.body.innerHTML=`<div class="heading"><h1> BREWARY</h1>
<img class="icon" src="https://tse1.mm.bing.net/th?id=OIP.Ms38yhRD-xCvGRBH7OVvOQHaEo&pid=Api&rs=1&c=1&qlt=95&w=159&h=99">
</div>

<div id="main"></div>`

const getdata=async()=>{
    try {
        let data=await fetch("https://api.openbrewerydb.org/breweries")
        let user=await data.json()
        user.forEach((obj)=>
        display(obj)
             )
        
    } catch (error) {
        
    }
}
function display(obj){
    main.innerHTML+=`<div class="container">
    <h1 class="name"><span>NAME:${obj.name}</span></h1>
    <p class="para"><span>city:${obj.city}</span></p>
    <p class="para"><span>state:${obj.state}</span></p>
    <p class="para"><span>country:${obj.country}</span></p>
    <p class="para"><span>phone:${obj.phone}</span></p>
    
    `
   
  }
  getdata()
