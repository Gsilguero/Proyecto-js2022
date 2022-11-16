const input = document.querySelector("#input-tarea");
const tasklist = document.querySelector("#listadetareas");
///const mensaje = document.querySelector("#listadetareas");

let tareaSs = [];



eventListeners(); 


function eventListeners (){
    document.addEventListener("DOMContentLoaded", () => {

        tareaSs = JSON.parse(localStorage.getItem("tareaSs")) || [];
    
        createHTML(); 

    });

    tasklist.addEventListener("click", borrarTarea);

}

function borrarTarea (e){

    if (e.target.tagName == "SPAN") {
        const BorrarID = parseInt(e.target.getAttribute("tarea-id"));
        tareaSs = tareaSs.filter(tarea => tarea.id !== BorrarID);
        createHTML();



    }
}




/******function ADDbotonBORRAR () {
    const BORRARbtn = document.createElement("boton");

    BORRARbtn.textContent = "X";
    BORRARbtn.className = "BORRARbtn";

    BORRARbtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
    ul.removeChild(item);
});

    return BORRARbtn


 } ********/


function agregartarea (){
    const tarea = input.value;

    if ( tarea === "") {

        showError("Esta tarea esta VACIA...");
        return;
    }
    const TareaOBJ = {
        tarea,
        id: Date.now()
    }
    tareaSs = [...tareaSs, TareaOBJ]


    createHTML ()
    input.value = "";
}




function createHTML(){

    clearHTML();
    
    if (tareaSs.length > 0) {
        tareaSs.forEach (tarea => {
            const li = document.createElement("li");
            li.innerHTML = `${tarea.tarea} <span tarea-id="${tarea.id}" >X</span>`;
            
            tasklist.appendChild(li);
        });

    }

    sincronizationStorage();

}









function sincronizationStorage (){
    localStorage.setItem("tareaSs", JSON.stringify(tareaSs));
}










function BorrarTODO (){  

    tareaSs = [];
    createHTML();

}


function showError (error){
    const mensajeERROR = document.createElement ("p");
    mensajeERROR.textContent = error;
    mensajeERROR.classList.add ("error");
    tasklist.appendChild(mensajeERROR);
    setTimeout(() => { 
    mensajeERROR.remove();
    },1800);



    console.log (error)
}


function clearHTML (){

listadetareas.innerHTML = "";

}