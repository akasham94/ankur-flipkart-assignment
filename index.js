
var reviewarr = [];
var obj = {};
function Changereview(ider){
      var elem = document.getElementById(ider).innerHTML = 
        `Something new hascome`;
}



function Addreview(){
  if(obj.review.length() == 0){
    obj.rating = 0;
   obj.review = "";
  }
var a = document.getElementById("ratings").textContent;
var review = document.getElementById("w3mission").value;
console.log(review);
  obj = {
  rating: count,
  review: review
}
console.log(obj);
reviewarr.push(obj)

console.log(reviewarr[0].review);
}
var count = 0;
var review = document.getElementById("w3mission").textContent;
function countstars(){ 
  for(var i =0;i<5;i++){
document.getElementsByClassName("fa fa-star")[0].classList.toggle("checked")
count++;  
  }
}
function calcrating(){
  //document.getElementById("writerating").innerHTML = 
}