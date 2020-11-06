
class Menu{
    constructor(array){
        this.menuArray = array;
    }
    changeaArray(array){
        this.menuArray = array;
    }
    generateTooltip(){
        let array = [];

        array.push(`<span style="display: block" onClick="window.location.href='./index.html'" class="menuHover">Menu Principal</span><br>`);

        for(let item of this.menuArray){
            array.push(`<span style="display: block" onClick="trocarSlide(${item.refe})" class="menuHover">${item.nome}</span><br>`);
        }
        return `<div>${array.join(" ")} <span id="bibliografia" style="display: block" onClick="bibliografia()" class="menuHover">Referências bibliográficas</span><br><span id="creditos" style="display: block" onClick="creditos()" class="menuHover">Ficha Catalográfica</span></div>`;
    }



}




