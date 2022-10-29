const input = document.querySelector("input");
const ADDbutton = document.querySelector(".ADDbutton");
const ul = document.querySelector("ul");
const VACIO = document.querySelector(".VACIO");

ADDbutton.addEventListener("click", (e)=> 

    {
        e.preventDefault();

        const text = input.value;
        if (text !== "") {  

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(ButtonBorrar());
        ul.appendChild(li);

        input.value = "";
        VACIO.style.display = "none";
        } 
    }

);

function ButtonBorrar () {
    const Borrar = document.createElement("button");
    Borrar.textContent = "—";
    Borrar.className = "quit";

    Borrar.addEventListener("click", (e) => 
    
        {
            const itemB = e.target.parentElement; 
            ul.removeChild(itemB);
            const itemC = document.querySelectorAll("li");
            
            if (itemC.length === 0) {
                VACIO.style.display = "block";
            }

        }
    )
    
    return Borrar;

}