const fullMarks = document.querySelector(".full-marks");
const obtainedMarks = document.querySelector(".obtained-marks");
const percentage = document.querySelector(".percentage");

const Percentage = () =>{
    let fullMark = fullMarks.value;
    let obtainedMark = obtainedMarks.value;
    percentage.innerHTML = `${obtainedMark * 100/fullMark}%` ;
}

fullMarks.addEventListener("input", Percentage);
obtainedMarks.addEventListener("input", Percentage);


const rank = document.querySelector(".rank");
const participents = document.querySelector(".participents");
const percentile = document.querySelector(".percentile");

 const Percentile = () =>{
    let Rank = rank.value;
    let Participents = participents.value;
    let p = ((Participents - Rank)/Participents) * 100;
    percentile.innerHTML = `${p.toFixed(2)}%`;
}

participents.addEventListener("input",Percentile);
rank.addEventListener("input",Percentile);
