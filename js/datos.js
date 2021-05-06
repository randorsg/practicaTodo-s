class ListadeTareas {

    constructor(pTitulo, pPrioridad) {
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
        this.completado = false;
    }

    completarTarea() {
        this.completado = true;
    }

    borrarTarea() {
        this.titulo = "";
        this.prioridad = "";
        this.completado = true;
    }


    pintarTarea(divPintar) {

        let div = document.createElement('div');
        let p = document.createElement('p');
        let btnRemove = document.createElement('button');
        div.classList.add(this.prioridad);


        let pText = document.createTextNode(this.titulo);
        p.appendChild(pText);
        btnRemove.classList.add(`btn-close`);

        div.appendChild(p);
        div.appendChild(btnRemove);

        switch (this.prioridad) {

            case '1':
                div.style.backgroundColor = 'red'
                div.className = this.prioridad + ' d-flex justify-content-between';

                break;
            case '2':
                div.style.backgroundColor = 'green'
                div.className = this.prioridad + ' d-flex justify-content-between';

                break;
            case '3':
                div.style.backgroundColor = 'violet'
                div.className = this.prioridad + ' d-flex justify-content-between';

                break;
        }

        divPintar.appendChild(div);

        btnRemove.addEventListener('click', (event) => {

            this.completarTarea();
            div.parentNode.removeChild(div);
            listaDeElementos.splice(event.target, 1);
        })
    }
}