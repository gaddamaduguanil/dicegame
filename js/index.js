var n1=Math.floor(Math.random()*6 )+ 1;

var randomdiceimage ="dice"+n1+".png";
var randomsourceimage="images/"+randomdiceimage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomsourceimage);

var n2=Math.floor(Math.random()*6)+1;
var randomsourceimage2="images/dice"+n2+".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomsourceimage2);

if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(n1<n2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Draw";
}



