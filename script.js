var promptName = prompt("what is your name?");

if (promptName === "eze") {
  console.log("hello Eze");
} else {
  console.log("who are you!!!");
}

 var list = [
   {
     name: "jerkery",
     post: "js is the best thing in the world."
   },
   {
    name: "errrky",
    post: "js is the best thing in the world!!!."
  },
  {
    name: "berkie",
    post: "js is the best thing in the world!!!!67678787."
  },
 ];

 var listLength = list.length;

 for( i=0; i < listLength; i++){
   console.log(list[i].name);
 }

//  function declaration

function printPost() {
  for( i=0; i < listLength; i++){
    console.log("printPost",list[i].post);
  }
}

printPost();

// function expression 
var nameAndPost = function(){
  for( i=0; i < listLength; i++){
    console.log("nameAndPost",list[i].name, list[i].post);
  }
};

nameAndPost();