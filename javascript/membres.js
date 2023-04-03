
let voirmembres=document.querySelector('.contener-membres');


if(voirmembres){

   fetch("javascript/membres.json")
    .then((reponse)=>reponse.json())
    .then((membres)=>{
        console.log(membres);
        let mesmembres=membres;

        for(let mmembre of mesmembres){

            voirmembres.innerHTML+=`
            <div class="membres">
                <div class="img-membre">
                <img src="${mmembre.picture}" alt="Photo membre" />
                </div>
                <div>
                <h3>${mmembre.name}</h3>
                </div>
            </div>
        `            
        }
    
    });
}
