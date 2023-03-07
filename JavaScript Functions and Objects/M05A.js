

//ref ref: https://javascript.plainenglish.io/a-beginners-guide-to-object-literals-in-javascript-7dea59d3a21d
//ref ref: https://rollbar.com/blog/javascript-constructors/#:~:text=A%20constructor%20is%20a%20special,for%20any%20existing%20object%20properties.


//Austin Stephens
//08/11/2022
//Display knowlage on functions and creation of objects
//JavaScript Week 5





//Part One Creation of literal Object and properties

//Literal Object
 let dogMy = {
    Name: "My Name is Scooby-Doo",
    Breed: "I am a Great Dane",
    Age: "I am 27",
    ShowFrom: "My Show is Scooby-Doo Where Are You"
}


//Outside creation of properties
dogMy.MySound = "My Sound Is Scooby-Dooby-Doo!";


//logging
console.log(dogMy);


//Moving within HTML
document.getElementById("ObjDisplay").innerText = dogMy.Breed + ", " + dogMy.Name + ", " + dogMy.ShowFrom + ", " + dogMy.MySound; 



////*********************** */

//Part Two Cration of constructed Object and propertys

//const varis becasue of single creation for our use case
function NewDog() {
    this.Name = "My Name is Scooby-Doo";
    this.Breed = "I am a Great Dane";
    this.Age = "I am 27";
    this.ShowFrom = "My Show is Scooby-Doo Where Are You";
}

//creating new object variable
var MyDogConst = new NewDog();

//setting talk to true
MyDogConst.CanTalk = true;
//setting the objects greeting
MyDogConst.Greeting = "Hello! do you have a scooby snack?";


//creating the funciton to display the object / with perm to see if an object is true or not
function GreetCheck()
{
    if (MyDogConst.CanTalk = true) {
        document.getElementById("DispCStrut").innerText = 
        "I Can Talk! " + 
        MyDogConst.Name + 
        ", " + 
        MyDogConst.Breed +
        ", " + 
        MyDogConst.Name +
        ", " + 
        MyDogConst.Greeting;
        
    }else
    {
        document.getElementById("DispCStrut").innerText = "I Cannnot Talk! "
    }


}

//hitting function
GreetCheck();
