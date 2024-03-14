console.log("hello here");

for(var i=0;i<10;i++){

for(var j=0;j<5;j++){

    console.log(i,j);
}

}

var counter=7;
while(counter>=0){

    console.log(" Mujeeb ",counter);

    counter = counter-1;
}

var cube="ABCDEF";

for(var i=0;i<6;i++){
var styles="font-size:40px;border-radius:10px:border:1px solid blue;background:pink;color:purple";

console.log("%c"+cube[i],styles);
}

function add2num(a,b){

   
    var c=a+b;
    console.log("Sum of a and b is",c);
}
var c=5;

var d=2;
add2num(c,d);

//key matching 
function letterfinder(word,match){

    var condition1=typeof(word)=='string' && word.length>=2;
    var condition2=typeof(match)=='string' && match.length==1;
    
if(condition1&&condition2){
    for(var i=0;i<=word.length;i++){
        if(word[i]==match){
            console.log("letter found at " + (i+1) + "position");
            break;
        }
        else{
            console.log("Letter  not found");
            break;
        }
    }
}
else{
    console.log("conditions not met please correct the parameters");
}

}


letterfinder("abdullah","mm");

// object literals
//method # 1
var student={}
student.name="abdullah";
student.class="BS";
student.age=21;

console.log("Students name=",student.name);
console.log("Students class=",student.class);
console.log("Students age=",student.age);

//var x=input("enter a number");
//console.log("value of x is",x);

//method # 2

var data={

    student:"abdullah",
    section:"B",
    age:15,

}

console.log("Students name=",data.student);
console.log("Students section=",data.section);
console.log("Students age=",data.age);

//method #3
var ghar={

    
}
ghar["marla"]=10;
ghar["jagga"]="shah Maqsood";
ghar["rent"]=50000;


console.log("Size of ghar=",ghar["marla"]+"marlas");
console.log("Location of house=",ghar["jagga"]);
console.log("rent of house=",ghar["rent"]);


//method4 mixed object literals

var room={
chairs:3,
table:2,
bed:4

}

room.space="20ft";
room.cupboards=3;
room["kettle"]=1;

console.log("Chairs in room",room.chairs);

console.log("tables in room",room["table"]);
console.log("beds in room ",room.bed);
console.log("space of room",room["space"]);
console.log("kettles in room",room.kettle);


//Arrrays
var fruits=[];
fruits.push("guava");
fruits.push("watermelon");
fruits.push("leechi");
fruits.push("apple");

fruits.pop();
console.log(fruits);


//Function of array builders 
function arraybuilder(one,two,three){

    arr=[];
    arr.push(one);
    arr.push(two);
    arr.push(three);

    console.log(arr);
}

arraybuilder("guava","orange","watermelon");


//Math functions

dec=Math.random();

console.log(dec);
console.log(dec*10);

var dec1=1.99;
console.log(Math.ceil(dec1));

console.log(Math.floor(dec1));

//string as arrays

var greetings="hello";
var name="Abdullah";


console.log(name.length);
console.log(name[0]);
for(var i=0;i<name.length;i++){

    console.log(name[i]);
}

console.log(greetings + name);

console.log(greetings.concat(name));

console.log("wor".concat("ld"));

console.log(name.charAt(1));

console.log(name.indexOf("a"));

console.log(name.lastIndexOf("a"));
console.log(name.toUpperCase());

//practice 

var clothes=[];
clothes.push("pent");
clothes.push("shirt");
clothes.push("Shalwar");
clothes.push("Kamees");
clothes.push("Kurta");

clothes.pop();

clothes.push("pajamas");

console.log(clothes);


//practice of object literals

var favcar={};
favcar.color="red";
favcar["convertible"]=true;
console.log(favcar);
favcar["model"]="2019";
console.log(favcar);
console.log(favcar["color"]);
console.log(favcar.convertible);

favcar.variant=function(){

    console.log("hybrid model")
}

console.log(favcar.variant);

console.log(favcar)

//ERROR HANDLING using TRY CATCH method
try{
    console.log(a+b);
}
catch(err){

    console.log(err);
    console.log("This was  a reference errror");
}

console.log("this code still runs");


function add2num(a,b){

    //console.log(a+b);

    try{

        if(typeof(a)!='number'){

            throw new ReferenceError(); 
        }
        else if(typeof(a)!='number'){

            throw new ReferenceError("The second argument is not a number"); 
        }
        else{

            console.log(a+b);
        }
    }

    catch(err){
       console.log("Error",err);
    }
        

    }

add2num(5,"5");
console.log("It still works" );


console.log('Hello')
//Functional programming(In which data is declared seperately and function on data is performed seperately)

var currency1=100;
var currency2=0;
var rate=75;

function exchange(currency,d_rate){

    return d_rate*currency;
}

currency2=exchange(currency1,rate);
console.log(currency2);

var currency3=exchange(currency2,10);
console.log(currency3);

//recursive Functions

var encounter1=3;
var encounter2=2;
function recursive3(){
   
   
   

if(encounter1==0){

    console.log("encounter2=",encounter2)
   
    if(encounter2==0){
        return
    }
    else{    encounter2=encounter2-1;       
    recursive3();
   
}



}
else{console.log("encounter1=",encounter1)
    encounter1=encounter1-1;
    recursive3();
    
}


}

recursive3()




var counter1=3;
var counter2=2;

function recursive3(){

    console.log(counter1)
    counter1=counter1-1;

if(counter1==0){

        return;

}
else{
    recursive3();
}

}
 
recursive3()



//OOPs Concept(we group data and  functionalities as properties and methods inside object)
var virtualpet={
    sleepy:true,

    nap:function(){

        virtualpet["sleepy"]=false;
    }
}
console.log(virtualpet["sleepy"]);
virtualpet.nap();
console.log(virtualpet["sleepy"]);



function add2num(a,b){

    console.log(a+b);

}

function randomnum(){

    return Math.floor((Math.random()*10)+1)
}

function specificnum(){

    return 42
}

var userandom=false;

var getnumber;

if(userandom){
    getnumber=randomnum();
}
else{

    getnumber=specificnum();
}

add2num(getnumber,getnumber);
console.log(add2num);
