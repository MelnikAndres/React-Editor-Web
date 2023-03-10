export class ElementoData{
    tipo
    texto
    id
    styles
    link
    items
    constructor(tipo, texto, id, styles, link, items) {
        this.tipo = tipo;
        this.texto = texto;
        this.id = id;
        this.styles = styles;
        this.link = link;
        this.items = items;
        this.linkListener = null;
        this.reseter = null;
        this.imagen = "";
    }
    deleteId(){
        this.id = null;
    }
    setText(newText){
        this.texto = newText;
        if(this.reseter){
            this.reseter()
        }
    }
    setLink(newLink){
        this.link = newLink
        if(this.linkListener){
            this.linkListener()
        }
    }
    setColor(newColor){
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === "color"){
                newStyles["color"] = newColor + value.substring(value.length-2,value.length)
            }else{
                newStyles[key] = value
            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    setBgColor(newColor){
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === "backgroundColor"){
                newStyles["backgroundColor"] = newColor + value.substring(value.length-2,value.length)
            }else{
                newStyles[key] = value
            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    changeAlign(){
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === "left"){
                newStyles["left"] = value==="50%"?"0":"50%"
            }else if (key==="transform"){
                newStyles["transform"] = value==="translate(-50%,0)"?"translate(0,0)":"translate(-50%,0)"
            }else if(key==="textAlign"){
                newStyles["textAlign"] = value==="left"?"center":"left"
            }else{
                newStyles[key]=value
            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    setImagen(file){
        this.imagen = URL.createObjectURL(file);
        if(this.reseter){
            this.reseter()
        }
    }
    changeMargin(side, marginValue){
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === side){
                newStyles[side] = marginValue +"px";
            }else{
                newStyles[key]=value

            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    changeRadius(side, radiusValue){
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === side){
                newStyles[side] = radiusValue + "px";
            }else{
                newStyles[key]=value

            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    changeShadow(shadowValue){
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === "boxShadow"){
                newStyles["boxShadow"] = shadowValue;
            }else{
                newStyles[key]=value
            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    changeSize(tipo, sizeValue){
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === tipo){
                if(sizeValue ==="fit-content"){
                    newStyles[tipo] = sizeValue;
                }else{
                    if(tipo === "height"){
                        newStyles[tipo] = sizeValue + "px";
                    }else{
                        newStyles[tipo] = sizeValue + "px";
                    }

                }
            }else{
                newStyles[key]=value
            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    changeOpacity(opacityValue){
        const newValue = (opacityValue/1000) * 10
        let newStyles = {};

        for (const [key, value] of Object.entries(this.styles)) {
            if(key === "opacity"){
                newStyles["opacity"] = newValue;
            }else{
                newStyles[key]=value
            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
    changeOpacityField(opacityValue, tipo){
        let newValue = Number(opacityValue).toString(16);
        if(newValue.length === 1){
            newValue = "0"+newValue;
        }
        let newStyles = {};
        for (const [key, value] of Object.entries(this.styles)) {
            if(key === tipo){
                newStyles[tipo] = value.substring(0, value.length-2) + newValue;
            }else{
                newStyles[key]=value
            }
        }
        this.styles = newStyles;
        if(this.reseter){
            this.reseter()
        }
    }
}