/*const draggables = document.querySelectorAll('.draggable');
const dropables = document.querySelectorAll('.dropable');

let item = null;
//Event Listeners

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', ()=>{

        item = draggable;
        draggable.className +=' hold';
        setTimeout(() => (draggable.className = 'desabilitado'), 0);
        draggable.parentElement.className = 'dropable';
        let clone = draggable.lastChild.cloneNode(true);
        draggable.parentElement.appendChild(clone)
    
    })
    draggable.addEventListener('dragend', ()=>{
        draggable.className = 'draggable'
        draggable.parentElement.className = ' ';
        draggable.parentElement.lastChild.remove();
    })

    dropables.forEach(dropable =>{
        dropable.addEventListener('dragenter', e=>{
            e.preventDefault();
            dropable.className += ' hovered';
        });
        dropable.addEventListener('dragover', e=>{
            e.preventDefault();
        });
        dropable.addEventListener('dragleave', e=>{
            this.className = 'dropable';
        });
        dropable.addEventListener('drop', e=>{
            this.className = ' '
            this.append(item)
        });
    })
})*/

class Quizdd{
    constructor(esquerda,direita) {
        this.esquerdaBackup = esquerda;
        this.direitaBackup = direita;
        this.esquerda = esquerda;
        this.ids = ["drag2","drag5","drag4","drag3","drag6","drag7","drag12","drag8","drag1","drag10","drag18","drag11","drag13","drag14","drag15","drag16","drag9","drag17"]
        this.direita= new Array(this.ids.length)
        this.gabarito = [];
        this.total = 0;
    }

    gerarGabarito(document){

        for(let i = 0;i<this.ids.length;i++){
            this.gabarito[i] = document.getElementById(this.ids[i])
        }
    
    }

    addDireita(item, indice) {
        let index = this.esquerda.indexOf(item);
        if (index == -1) {
            return false;
        }
        this.direita[indice] = item
        this.total++
    }

    isCorrect(){
        let aux = 0;
        if(this.total != this.ids.length){
            return false;
        }
        for(let i = 0; i<this.ids.length;i++){
            if(this.direita[i].id == this.gabarito[i].id){
                aux++;
            }
        }
        
        if(aux == this.ids.length){
            return true;
        }
        return false;
    }

    resetAll(){
        this.esquerda = this.esquerdaBackup;
        this.direita = new Array(this.ids.length)
        this.total = 0
    }

}

const esquerda = document.querySelectorAll('.draggable');
const direita = document.querySelectorAll('.dropable');
const esquerdaArray = [...esquerda];
const direitaArray = [...direita];

const quiz = new Quizdd(esquerdaArray,direitaArray);

let index = -1;
let draggedItem = null;
let draggedItemClone = null;
let parent = null;
let aux = 0;

for (let i = 0; i < esquerda.length; i++) {
	const item = esquerda[i];

	item.addEventListener('dragstart', function () {
        draggedItemClone = item.cloneNode(true);
        draggedItem = item;
        parent = item.parentElement
		setTimeout(function () {
			item.style.display = 'none';
        }, 0)
        parent.className = 'dropable';
        let clone = item.lastChild.cloneNode(true);
        parent.appendChild(clone)
	});

	item.addEventListener('dragend', function () {
        setTimeout(function () {
            if(aux == 0){
                item.style.display = 'flex';
                parent.lastChild.remove();
                parent.className=''
            }else{
                aux--;
            }
        }, 10)
	})

	
    
    const body = document.querySelector('body')
    
}

for (let j = 0; j < direita.length; j ++) {
    const list = direita[j];

    list.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    
    list.addEventListener('dragenter', function (e) {
        if(!this.classList.contains('.dropped')){
            e.preventDefault();
            this.className += ' hovered'
        }
    });

    list.addEventListener('dragleave', function (e) {
        if(!this.classList.contains('.dropped')){
            this.className = 'dropable';
        }
    });

    list.addEventListener('drop', function (e) {

        if(!this.classList.contains('.dropped')){
            console.log('drop');
            aux++;
            this.append(draggedItemClone);
            draggedItemClone.parentElement.className = ' '
            draggedItemClone.className += ' dragged'
            this.className += ' dropped'

            index = direitaArray.indexOf(list);
            quiz.addDireita(draggedItem,index);
        }
    });
}

