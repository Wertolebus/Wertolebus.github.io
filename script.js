for(let i=1; i<6; i++){
    let _ = document.createElement("img");
    let __ = document.createElement("div");
    __.className = "grid-element";
    _.src = "./img/" + i + ".png";
    document.querySelector(".grid").appendChild(__);
    __.appendChild(_)
}