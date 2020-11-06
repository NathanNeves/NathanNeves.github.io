class Quizdd4{
    constructor(esquerdadp4,direitadp4) {
        this.esquerdaBackup = esquerdadp4;
        this.direitaBackup = direitadp4;
        this.esquerdadp4 = esquerdadp4;
        this.ids = ["draggg1","draggg2"]
        this.direitadp4 = [];
        this.gabarito = [];
        this.total = 0;
    }

    gerarGabarito(document){

        for(let i = 0;i<this.ids.length;i++){
            this.gabarito[i] = document.getElementById(this.ids[i])
        }
    
    }

    addDireita(drag) {
        let index = this.esquerdadp4.indexOf(drag);
        if (index == -1) {
            return false;
        }
        this.direitadp4.push(drag)
        this.total++
    }

    isCorrect(){
        let aux4 = 0;
        if(this.total != this.ids.length){
            return false;
        }

        if(this.direitadp4[0].id == "draggg1"){
            aux4++;
        }

        if(this.direitadp4[0].id == "draggg2"){
            aux4++;
        }

        if(this.direitadp4[1].id == "draggg1"){
            aux4++;
        }

        if(this.direitadp4[1].id == "draggg2"){
            aux4++;
        }
        
        
        if(aux4 == this.ids.length){
            aux4 = 0;
            return true;
        }
        return false;
    }

    resetAll(){
        this.esquerdadp4 = this.esquerdaBackup;
        this.direitadp4 = []
        this.total = 0
    }

}

const esquerdadp4 = document.querySelectorAll('.draggable3');
const direitadp4 = document.querySelectorAll('.tracejada2');
const esquerdaArraydp4 = [...esquerdadp4];
const direitaArraydp4 = [...direitadp4];

const quiz4 = new Quizdd4(esquerdaArraydp4,direitaArraydp4);

let index4 = -1;
let draggedItemDp4 = null;
let draggedItemCloneDp4 = null;
let aux4 = 0;

for (let i = 0; i < esquerdadp4.length; i++) {
	const drag = esquerdadp4[i];

	drag.addEventListener('dragstart', function () {
        draggedItemCloneDp4 = drag.cloneNode(true);
        draggedItemDp4 = drag;

		setTimeout(function () {
			drag.style.display = 'none';
        }, 0)
	});

	drag.addEventListener('dragend', function () {
        setTimeout(function () {
            if(aux4 == 0){
                drag.style.display = 'flex';
            }else{
                aux4--;
            }
        }, 10)
	})    
}

for (let j = 0; j < direitadp4.length; j ++) {
    const drop = direitadp4[j];

    drop.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    
    drop.addEventListener('dragenter', function (e) {
       e.preventDefault();
        this.className += ' hovered2'
    });

    drop.addEventListener('dragleave', function (e) {
        this.className = 'area tracejada2';
    });

    drop.addEventListener('drop', function (e) {

            console.log('drop');
            aux4++;
            this.append(draggedItemCloneDp4);
            draggedItemCloneDp4.className += ' dragged'
            quiz4.addDireita(draggedItemDp4);
    });
}
