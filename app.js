
// CHAPTER 38-42
// Q1
// var a=prompt("enter value of a");
// var b=prompt("Enter value of b");
// function power(c,d){
//     var i=parseInt(c);
//     var y=parseInt(d);
// alert("Raised Power"+Math.pow(i,y));
// }
// power(a,b);

// Q2

// var year=prompt("Enter a year ");
// function leapyear(y){
// if(y%400==0 || y%100==0 || y%4==0){
//     alert(y+" is a leap Year");
// }
// else{
//     alert(y+" is not a leap year");
// }
// }
// leapyear(year);

// Q3
// var S;
// var a=5;
// var b=9
// var c=10;
// function forS(){
// S=(a+b+c)/2;
// document.write("Value of S: "+S);
// }
// function area(){
//    var  area=S*(S-a)*(S-b)*(S-c);
//    document.write("<br>"+" Area of Triangle: "+area);

// }
// forS();
// area();

// Q4
// var i=+prompt("Enter first subject marks out of 100");
// var j=+prompt("Enter second subject marks out of 100");
// var k=+prompt("Enter third subject marks out of 100");
// var avg;
// var per;
// function average(){
// avg=(i+j+k)/3;
// document.write("Average is "+avg);
// }
// function percentage(){
// per=((i+j+k)/300)*100;
// document.write("<br>"+"Percentage is "+per);
// }
// function mainFunction(){
// average();
// percentage();
// }
// mainFunction();

// Q5
// var a=prompt("Enter a Name");
// var c=prompt("Enter a letter to get code");
// function index(){
//     var cd=a.indexOf(c);
//     document.write("First index of letter "+cd);
// }
// index();

// Q6

// var st="Syed Ahsan Ali";
// var vowels=['a','e','i','o','u'];

// function revowel(){
//     for(var i=0; i<vowels.length;i++){
//         var ss=st.length;
//         for(var j=0;j<ss.length;j++){
// if(vowels[i]==st.charAt(j)){
// st=st.slice(0,j).concat(string.slice(j+1,ss));
// j--;
// ss--;
// }

//         }
//     }
//     document.write(st);
// }
// revowel();

// Q7

// var a="Pleases read this application and give me gratuity"
// var s=a.toLowerCase();
// console.log(s);
// var count=0;
// var cc=0;

// for(var i=0;i<s.length;i++){
//     switch(s.charAt(i)) {
//         case "a":
//             count++;
//             break;
//             case "e":
//                 cc++
//                 break;
            
//              }
// }
    
// document.write("Vowel a comes "+count+" in given string");
// document.write("<br>"+"Vowel e comes "+cc+" in given string");


// document.write("Occurence of vowel a "+count);
// document.write("<br>"+"Occurence of vowel e "+cc);
// Q8
// var a=+prompt("Enter the distance between two cities in Km");
// function meter(){
// document.write("Meters: "+(a*1000));
// }
// function feet(){
//     document.write("<br>"+"Feet: "+(a*3280.8));
// }
// function inches(){
//     var i=(a*1000);
//     document.write("<br>"+"Inches: "+(i*39.3701));
// }
// function centimeters(){
//     var i=(a*1000);
//     var z=(i*39.3701);
//     document.write("<br>"+"Centimeters: "+(z*2.54));
// }
// meter();
// feet();
// inches();
// centimeters();

// Q9
// var a=prompt("Enter Employee Name");
// var c=+prompt("How many hours you over timed");

// if(c==20){
// document.write("Mr "+a+" your over-timed amoount is "+c*6000+" as u worked fractional hours ");
// }
// else if(c==40){
//     document.write("<br>"+"Mr "+a+" your over-timed salary is "+c*12000);
// }
// else{
//     document.write("Enter valid Hours");
// }

// Q10
// var a=prompt("Enter amount to withdraw");

// function withdraw(){
// var h=((a)/100);
// var f=((a%100)/50);
// var t=(((a%100)%50)/10);
// document.write("You will have "+Math.floor(h)+" hundreds "+Math.floor(f)+" fifty "+Math.floor(t)+" tens ");
// }
// withdraw();


// CHAPTER 43-48
// Q1
// function linka(){
//     alert("Linked is clicked");
// }

// Q2
// function thanks(){
//     alert("Thanks for buyting phone from us");
// }

// Q3
// function deleteRow(btn) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//   }

// Q4
// function changebef(){
//     var a=document.getElementById("img");
//     a.src='3.jpg';
// }

// function changeaf(){
//     var a=document.getElementById("img");
//     a.src='1.jpg';
// }

// Q5
// var count=0;
// function inc(){
//     var a=document.getElementById("head");
// count++;
//     a.innerHTML=count;
// }
// function dec(){
//     var a=document.getElementById("head");
// count--;
//     a.innerHTML=count;
// }

// CHAPTER 49-52
// Q1
// var a1;
// function display(){
//     var a=document.getElementById("f1");
//     var c=a.value;
//     var b=document.getElementById("f2");
//     a1=b.value;
//     document.write("Username : "+c+"<br>"+"Password : "+a1);
// }

// Q2
// var text;
// var p;
// function readMore(){
//     text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, aspernatur at! Repellat, temporibus eaque. Magni dicta nesciunt corrupti distinctio molestiae unde? Consectetur quod voluptate, rem expedita veritatis neque ducimus nostrum?";
//      p=document.getElementById("pera");
// p.innerText=text;
// }

// Q3
// var a;
// var b;
// var z=0;
// var y=1;
// var l1=[];
// var l2=[];
// function fetch(){
    

//     var table=document.getElementById("mytable");
//         var row=table.insertRow(y);
//         l1[z]=document.getElementById("f1").value;
//         l2[z]=document.getElementById("f2").value;
//         var cell1=row.insertCell(0);
//         var cell2=row.insertCell(1);
//         cell1.innerHTML = l1[z];
//         cell2.innerHTML =l2[z];
//         y++;
//         z++;
// }