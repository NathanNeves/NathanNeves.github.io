
class Modal1 {
    constructor(swalObj,isHtml){
        this.swal = swalObj;
        this.swalConfigs = {
            background: '#f1cd3c',
            customClass:{
                closeButton:'botaoFechar',
                content:'contentText',

            },
            width: "70%"

        };
        this.isHtml = isHtml;
        this.content = {
            showConfirmButton:false,
            showCloseButton: true,
            backdrop: "rgba(255,255,255, 0.3)"
        }
        this.swalContent = {
            text:'',
            ...this.content

        }
        this.swalHtmlContent = {
            html:'',
            ...this.content
        }
    }

    setText(content) {
        if (!this.isHtml) {
            this.swalContent.text = content;
        }
            this.swalHtmlContent.html =  content;
    }

    fire(){
        let content = !this.isHtml ? this.swalContent : this.swalHtmlContent;
        return this.swal.mixin(this.swalConfigs).fire(content);
    }

}