const input = document.querySelector(".Boton-input");
const tasklist = document.querySelector(".listadetareas ul");
const mensaje = document.querySelector(".listadetareas");

let tareaSs = [];



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
}
function createHTML(){
    if (tareaSs.length > 0) {
        tareaSs.forEach (tarea => {
            const li = document.createElement("li");
            li.innerHTML = '${tarea.tarea} <span tarea-id="${tarea.id}" >X</span>';
            
            tasklist.appendChild(li);
        });

    }

}
function showError (error){
    const mensajeERROR = document.createElement ("p");
    mensajeERROR.textContent = error;
    mensajeERROR.classList.add ("error");
    mensaje.appendChild(mensajeERROR);
    setTimeout(() => { 
    mensajeERROR.remove();
    },1800);



    console.log (error)
}