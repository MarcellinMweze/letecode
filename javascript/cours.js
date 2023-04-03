

let voircours=document.querySelector('.grid-box');


if(voircours){

   fetch("javascript/cours.json")
    .then((reponse)=>reponse.json())
    .then((cours)=>{
        console.log(cours);
        let mescours=cours;

        for(let mcours of mescours){

            voircours.innerHTML+=`
            <div class="grid-item">
                <div class="img">
                <img src="${mcours.picture}" alt="" class="img-logo" />
                </div>
                <div class="text">
                <h3>${mcours.intitule}</h3>
                <p>${mcours.temps} heures</p>
                </div>
            </div>
        `            
        }
    
    });
}
