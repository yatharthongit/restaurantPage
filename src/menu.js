export function menu(){

const item1=document.createElement("h2");
item1.textContent="Pizza";
const item2=document.createElement("h2");
item2.textContent="Burger";
const item3=document.createElement("h2");
item3.textContent="Spaghetti";

const container=document.getElementById("content");
container.innerHTML="";
container.appendChild(item1);
container.appendChild(item2);
container.appendChild(item3);

}

