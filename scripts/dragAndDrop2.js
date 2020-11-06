

class Quizdd2{
    constructor(esquerdadp2,direitadp2) {
        this.esquerdaBackup = esquerdadp2;
        this.direitaBackup = direitadp2;
        this.esquerdadp2 = esquerdadp2;
        this.ids = ["dragg2","dragg5"]
        this.direitadp2 = [];
        this.gabarito = [];
        this.total = 0;
    }

    gerarGabarito(document){

        for(let i = 0;i<this.ids.length;i++){
            this.gabarito[i] = document.getElementById(this.ids[i])
        }
    
    }

    addDireita(drag) {
        let index = this.esquerdadp2.indexOf(drag);
        if (index == -1) {
            return false;
        }
        this.direitadp2.push(drag)
        this.total++
    }

    isCorrect(){
        let aux2 = 0;
        if(this.total != this.ids.length){
            return false;
        }

        if(this.direitadp2[0].id == "dragg2"){
            aux2++;
            console
        }

        if(this.direitadp2[0].id == "dragg5"){
            aux2++;
        }

        if(this.direitadp2[1].id == "dragg2"){
            aux2++;
        }

        if(this.direitadp2[1].id == "dragg5"){
            aux2++;
        }
        
        
        if(aux2 == this.ids.length){
            aux2 = 0;
            return true;
        }
        return false;
    }

    resetAll(){
        this.esquerdadp2 = this.esquerdaBackup;
        this.direitadp2 = []
        this.total = 0
    }

}

const esquerdadp2 = document.querySelectorAll('.draggable2');
const direitadp2 = document.querySelectorAll('.tracejada');
const esquerdaArraydp2 = [...esquerdadp2];
const direitaArraydp2 = [...direitadp2];

const quiz2 = new Quizdd2(esquerdaArraydp2,direitaArraydp2);

let index2 = -1;
let draggedItemDp2 = null;
let draggedItemCloneDp2 = null;
let aux2 = 0;
let cont = 0;

for (let i = 0; i < esquerdadp2.length; i++) {
	const drag = esquerdadp2[i];

	drag.addEventListener('dragstart', function () {
        draggedItemCloneDp2 = drag.cloneNode(true);
        draggedItemDp2 = drag;

		setTimeout(function () {
			drag.style.display = 'none';
        }, 0)
	});

	drag.addEventListener('dragend', function () {
        setTimeout(function () {
            if(aux2 == 0){
                drag.style.display = 'flex';
            }else{
                aux2--;
            }
        }, 10)
	})    
}

for (let j = 0; j < direitadp2.length; j ++) {
    const drop = direitadp2[j];

    drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.className = 'area tracejada2';
    });
    
    drop.addEventListener('dragenter', function (e) {
        if(cont<2){
            e.preventDefault();
            this.className += ' hovered2'
        }
    });

    drop.addEventListener('dragleave', function (e) {
        if(cont<2){
            this.className = 'area tracejada2';
        }
    });

    drop.addEventListener('drop', function (e) {

        if(cont<2){
            this.className = 'area tracejada2';
            console.log('drop');
            aux2++;
            this.append(draggedItemCloneDp2);
            draggedItemCloneDp2.className += ' dragged'
            cont++
            quiz2.addDireita(draggedItemDp2);
        }
    });
}
