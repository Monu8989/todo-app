let form=document.querySelector("form")
let input=document.querySelector("input")
let ul=document.querySelector("ul")

const Todorun=(e)=>{
    e.preventDefault()
    let li=document.createElement("li")
    li.innerText=input.value
    li.className="list-group-item rounded-0"
   let btn=document.createElement("button")
   btn.innerText="Delete"
   btn.className="btn btn-danger btn-sm rounded-0 float-end"
   li.appendChild(btn)
    ul.appendChild(li)
    form.reset()
}


form.addEventListener("submit",Todorun)


const delbtn=(e)=>{
if(e.target.className ==="btn btn-danger btn-sm rounded-0 float-end"){
    let li=e.target.parentElement
    if(window.confirm("Are you sure???")){
        ul.removeChild(li)
    }
    
}
}


ul.addEventListener("click",delbtn)



let button=document.querySelector("#btn01")
// let container=document.querySelectorAll("container")
// console.log("container");
let count=0
const ChangeTheme=()=>{
   if (count % 2==0) {
    form.className="container-fluid p-5  bg-dark"
   } else {
      form.className="container-fluid p-5  "
   } 
   count++
}
button.addEventListener("click",ChangeTheme)


