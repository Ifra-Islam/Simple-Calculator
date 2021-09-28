function cal(val){
  document.getElementById('calculations').value+= val;

}
function solve(){
  let x =document.getElementById('calculations').value
  let y =eval(x)
  document.getElementById('calculations').value =y
}
function clr(){
document.getElementById('calculations').value =" "
}