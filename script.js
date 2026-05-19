function addReview(){

   let text =
      document.getElementById("review").value;

   let output =
      document.getElementById("output");

   if(text === ""){
      alert("Please write a review");
      return;
   }

   let p = document.createElement("p");

   p.innerText = text;

   output.appendChild(p);

   document.getElementById("review").value = "";
}