import cof from "./coffee.png";

export function home(){

    const heading=document.createElement("h1");
    const para=document.createElement("p");
    const image=document.createElement("img");
    const container=document.querySelector("#content");

    heading.textContent="Seven Deadly Sins";
    para.textContent="A favorite after-work hangout for laborers, Tifa's coctails and cooking are big hits among the neighborhood people. After hours, though, the place turns into a hideout for the anti-Shinra militant group Avalanche.";
    image.src=cof;
    container.appendChild(heading);
    container.appendChild(para);
    container.appendChild(image);
}