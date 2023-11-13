# interactivestorytelling
Hello this is our first project regarding a website which is focused on the topic of storytelling.
In this we are also trying to make it user interactive by taking their choices and proceeding further in the story.
.title {
    height: 100vh;
    width: 100%;
    background-image: url("https://cdn.imgchest.com/files/b49zcke89ky.png");
}

.heading {
    transition-delay: 2s;
    position: absolute;
    margin-top: 250px;
    margin-left: 290px;

}

.heading h1 {
    color: white;
    font-size: 70px;
    margin: 0px;
    font-family: cursive;
    margin-left: 0px;
    text-align: center;
    margin-right: 150px;
}

.heading h2 {
    color: beige;
    font-size: 30px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.btn{
    background-color: green;
    font-size: 31px;
    border-radius: 4px;
    color: white;
    padding: 15px 35px;
    border: none;
    cursor: pointer;
    position: absolute;
    margin-left: 400px;
    margin-top: 50px;
    viewport-fit: 
    
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.btn:hover{
    color: black;
    font-size: 35px;
}
.image1{
    height:100vh;
    width:100%;
    border: none;
    position: absolute;
    z-index: -1;
    margin-left: 0%;
}

.intro{
    height:100vh;
    width:100%;
    position: relative;
}

.image2 {
    margin-left: 800px;
    margin-top: 192px;
   
  }
   @keyframes walk {
    0%   {background-position: 0px; }
    /* 10%  {right:200px; }
    30%   {right:300px; }
    50%  { right:400px; }
    70%  {right:500px; }
    85%  {right: 600px;} */
    100%  {background-position:1000px;}
  }
   
  /* The element to apply the animation to */
  .image2 {
   
    position: relative;
    width: 125px;
    height: 220px;
    animation: walk 1s steps(8) infinite,
               forward 5s linear infinite
    
     animation-name: example;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
     
  }
  @keyframes forward{
    0% {transform:translateX(-100px);}
    100% {transform: translateX(1200px);}
  }


.para{
    position: absolute;
    
    color:white;
    font-size:xx-large;
    
    top: 50px;
    bottom: 100px;
    transition-timing-function:ease-in-out;
    transition-duration: 4s;

    
}

.third page{
    width: 80%;
    height: 90vh;
    max-width: 1600px;
    max-height: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center ;
}
.map {
    height: calc(50%-20px);
    width: 30%;
    min-height: 200px;
    min-width: 300px;
    margin: 10px;
    overflow: hidden;

}
.map image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s;

}
