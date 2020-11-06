class Quizdd{
    constructor(esquerda,direita) {
        this.esquerdaBackup = esquerda;
        this.direitaBackup = direita;
        this.esquerda = esquerda;
        this.ids = ["drag2","drag5","drag4","drag3","drag6","drag7","drag12","drag8","drag1","drag10","drag18","drag11","drag13","drag14","drag15","drag16","drag9","drag17"]
        this.direita= new Array(this.ids.length)
        this.gabarito = [];
    }

    gerarGabarito(document){

        for(let i = 0;i<this.ids.length;i++){
            this.gabarito[i] = document.getElementById(ids[i])
        }
    
    }

    addDireita(item, indice) {
        let index = this.esquerda.indexOf(item);
        if (index == -1) {
            return false;
        }
        this.direita[indice] = item
    }

    isCorrect(){
        let aux = 0;
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
        this.direita = this.direitaBackup;

        for(let i = 0; i<this.esquerda.length; i++){
            esquerda[i].style.display = flex;
            direita[i].firstChild.remove();
            direita[i].className = 'draggable'
        }
    }

}
