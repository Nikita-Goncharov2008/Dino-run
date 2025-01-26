const WIDTH=480
const HEIGHT =360 

let svg = SVG('block').size(WIDTH, HEIGHT)

let background = svg.image('./images/desert.png').size(WIDTH,HEIGHT)
let dino = svg.image('./images/dino1.png').size(WIDTH/5-5, HEIGHT/5).move(0, HEIGHT/2)
let cactus = svg.image('./images/cactus2.png').size(WIDTH/5-100, HEIGHT/5-10).move(WIDTH+100, HEIGHT/2+10)

let schet = 0
let ochki = svg.text('0').fill('white').font({size:50}).move(WIDTH-80, 35)
console.log(ochki)
let loose=false

let move=()=>{
    if(jump){
        dino.dy(S)
        S=S+1
        if(dino.y()>=HEIGHT/2){
            jump=false
        }
    }
    cactus.dx(-10)
    if(cactus.x()+cactus.width()<0){
        cactus.x(WIDTH)
        schet++
        console.log(ochki)
        ochki.text(schet.toString())
    }

    if(dino.x()+dino.width()-15>cactus.x()&&dino.x()<cactus.x()&&dino.y()+dino.height()>cactus.y()){
        alert('динозаврик не способен дальше функционировать')
        background.load('./images/desertGO.png')
        clearInterval(interval)
    }

}
let jump=false
let S=0
let interval=setInterval(move,40)

function dinoAnimation(){
    let test=dino.x()+dino.width()-15>cactus.x()&&dino.x()<cactus.x()&&dino.y()+dino.height()>cactus.y()
    if(!test&&!jump){
        if(dino.src=='./images/dino1.png'){
            dino.load('./images/dino2.png')
        }else if(dino.src=='./images/dino2.png'){
            dino.load('./images/dino3.png')
        }else{
            dino.load('./images/dino1.png')
        }
    }



}

document.addEventListener('keydown', ()=>{
    if(event.keyCode==32&&jump==false){
        S=-15
        jump=true
    }

})

setInterval(dinoAnimation,150)

