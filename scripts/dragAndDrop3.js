const modalDrag2 = document.querySelector('#modalDrag2');
const closeDrag2 = document.querySelector('.closeDrag2');

// Event
closeDrag2.addEventListener('click', closeModalDrag2);
window.addEventListener('click', outsideClickDrag2);

// Open
function openModalDrag2() {
    modalDrag2.style.display = 'flex';
}

// Close
function closeModalDrag2() {
    modalDrag2.style.display = 'none';
}

// Close If Outside Click
function outsideClickDrag2(e) {
  if (e.target == modalDrag2) {
    modalDrag2.style.display = 'none';
  }
}


class Quizdd3{
    constructor(etica,qualidade,alternativas) {
        this.eticaBackup = etica;
        this.qualidadeBackup = qualidade;
        this.alternativasBackup = alternativas;
        this.alternativas = alternativas;
        this.idsEtica = ["draglist1","draglist3","draglist6","draglist7","draglist8"]
        this.idsQualidade = ["draglist2","draglist4","draglist5","draglist9","draglist10"]
        this.etica = [];
        this.qualidade = [];
        this.gabaritoEtica = [];
        this.gabaritoQualidade = [];
        this.total = 0;
    }

    gerarGabarito(document){

        for(let i = 0;i<5;i++){
            this.gabaritoEtica[i] = document.getElementById(this.idsEtica[i])
            this.gabaritoQualidade[i] = document.getElementById(this.idsQualidade[i])
        }
    
    }

    addEtica(item) {
        let index = this.alternativas.indexOf(item);
        if (index == -1) {
            return false;
        }
        this.etica.push(item)
        this.total++
    }

    addQualidade(item) {
        let index = this.alternativas.indexOf(item);
        if (index == -1) {
            return false;
        }
        this.qualidade.push(item)
        this.total++
    }

    isCorrect(){
        console.log(this.gabaritoEtica)
        console.log(this.gabaritoQualidade)
        let aux = 0;
        if(this.total != 10){
            return false;
        }
        for(let i = 0; i<this.etica.length;i++){
            for(let j = 0; j<5;j++){
                if(this.etica[i].id == this.gabaritoEtica[j].id){
                    aux++;
                }
            }
            
        }

        for(let i = 0; i<this.qualidade.length;i++){
            for(let j = 0; j<5;j++){
                if(this.qualidade[i].id == this.gabaritoQualidade[j].id){
                    aux++;
                }
            }
        }
            

        
        
        if(aux == 10){
            return true;
        }
        return false;
    }

    resetAll(){
        this.alternativas = this.alternativasBackup;
        this.etica = []
        this.qualidade = []
        this.total = 0
    }

}

const alternativas = document.querySelectorAll('.dragitem');
const etica = document.querySelectorAll('#dropetica');
const qualidade = document.querySelectorAll('#dropquali');
const alternativasArray = [...alternativas];
const eticaArray = [...etica];
const qualidadeArray = [...qualidade];

const quiz3 = new Quizdd3(eticaArray,qualidadeArray,alternativasArray);

let index3 = -1;
let draggedItemDp3 = null;
let draggedItemCloneDp3 = null;
let aux3 = 0;

for (let i = 0; i<alternativas.length; i++) {
	const drag =  alternativas[i];

	drag.addEventListener('dragstart', function () {
        draggedItemCloneDp3 = drag.cloneNode(true);
        draggedItemDp3 = drag;

		setTimeout(function () {
			drag.style.display = 'none';
        }, 0)
	});

	drag.addEventListener('dragend', function () {
        setTimeout(function () {
            if(aux3 == 0){
                drag.style.display = 'flex';
            }else{
                aux3--;
            }
        }, 10)
	})    
}

for (let j = 0; j < etica.length; j ++) {
    const drop = etica[j];

    drop.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    
    drop.addEventListener('dragenter', function (e) {

        e.preventDefault();
        this.className += ' drophovered'
    
    });

    drop.addEventListener('dragleave', function (e) {

        this.className = 'dropetica';

    });

    drop.addEventListener('drop', function (e) {
        console.log('drop');
        aux3++;
        this.append(draggedItemCloneDp3);
        this.className = 'dropetica';
        draggedItemCloneDp3.className += ' draggedEtica'
        quiz3.addEtica(draggedItemDp3);
    });
}

for (let k = 0; k < qualidade.length; k++) {
    const drop = qualidade[k];

    drop.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    
    drop.addEventListener('dragenter', function (e) {

        e.preventDefault();
        this.className += ' drophovered'
    
    });

    drop.addEventListener('dragleave', function (e) {

        this.className = 'dropqualidade';

    });

    drop.addEventListener('drop', function (e) {
        console.log('drop');
        aux3++;
        this.append(draggedItemCloneDp3);
        this.className = 'dropqualidade';
        draggedItemCloneDp3.className += ' draggedQualidade'

        quiz3.addQualidade(draggedItemDp3);
    });
}
