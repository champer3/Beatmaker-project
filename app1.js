class Drumkit{
    constructor(){
        this.pads = document.querySelectorAll(".pad")
        this.playBtn = document.querySelector(".play")
        this.index = 0
    }
    activePad(e){
        e.target.classList.toggle("active")
    }
    repeater(){
        let step = this.index % 8
        const activeBars = document.querySelectorAll(`.b${step}`)
        activeBars.forEach(bar =>{
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`
        })
        this.index++
    }
    start(interval){
        setInterval(()=>{
            this.repeater()
        }, interval)
    }
}

const drumkit = new Drumkit()

drumkit.pads.forEach(pad =>{
    pad.addEventListener('click', function(e){
        drumkit.activePad(e)
    })
})

drumkit.playBtn.addEventListener("click", ()=>{
    drumkit.start()
})














// const user = {
//   firstName: "stephen",
//   lastName: "okunola",
//   age: 25,
//   school: "OAU",
// };

// // Procedural Programming

// const padss = document.querySelectorAll(".pad")

// padss.forEach((pads) => {
//   pads.addEventListener("click", function () {
//     console.log("clicked")
//   })
// })

// // Object Oriented Programmimg
// const padObject = {
//   padss: document.querySelectorAll(".pad"),
//   clickUp() {
//     console.log("clicked")
//   },
// }

// padObject.padss.forEach((pads) => {
//   pads.addEventListener("click", function () {
//     padObject.clickUp()
//   })
// })


