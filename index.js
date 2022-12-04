
function run (){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");


}
run();

function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
        if(nbr%i === 0) return false;
    return nbr > 1;
}


let i = 0;
// let nbr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
let nbr = [];

setInterval(() => {

    if(nbrPremier(i)){
        nbr.push(i);
        console.log(nbr);

        for(let j = 0; j < nbr.push; j++){
            if(nbr[j] % i === 0){
                // sound.play("fa.mp3");
            }
        }
    }

    i++
}, 1000);
