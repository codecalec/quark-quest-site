var combinedMoving = [
  { transform: 'rotate(0deg)'}, 
  { transform: 'rotate(90deg)'}
]
var combinedTiming = {
  duration: 10*9000,
  iterations: Infinity
}
const animBlocks = document.getElementsByClassName("anim-block");

for (let i = 0; i < animBlocks.length; i++) {
    animBlocks[i].animate(
      combinedMoving, 
      combinedTiming
    )
}

var blockMoving = [
  { transform: 'translate3D(0, 0, 0)'}, 
  { transform: 'translate3D(+100%, 0, 0)'}
];

var blockTiming = {
  duration: 9000,
  iterations: Infinity
}

const blocks = document.getElementsByClassName("block");

for (let i = 0; i < blocks.length; i++) {
    blocks[i].animate(
      blockMoving, 
      blockTiming
    )
}
