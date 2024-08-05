let input=document.querySelector("#EnterList")
let list=document.querySelector(".list")
let btn=document.querySelector(".btn")
let val="";
function store(event){
    if(event.key==="Enter"  ){
        addListItem()
    }
}
function addListItem(){
    val=input.value
    if(val!=""){
        input.value=""
        console.log(val)
        let listItem=document.createElement("li")
        let check=document.createElement("input")
        let button=document.createElement("button")
        let box=document.createElement("div")
        list.appendChild(box)
        listItem.innerText=val
        box.appendChild(check)
        box.appendChild(listItem)
        box.appendChild(button)
        check.setAttribute("class","Done")
        check.setAttribute("type","checkbox")
        button.setAttribute("class","Remove")
        button.innerText="remove"
        listItem.setAttribute("class","listItem")
        box.setAttribute("class","box")
        button.addEventListener("click",()=>{
            box.removeChild(check)
            box.removeChild(listItem)
            box.removeChild(button)
        })
        check.addEventListener("click",()=>{
                 listItem.style.textDecorationLine="line-through"
        })
    }
}

function add(event){
          addListItem()
}
btn.addEventListener("click",add)
input.addEventListener("keyup" ,store)
