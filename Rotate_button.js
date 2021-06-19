function ChangeColor()
{
    document.getElementById('btn1').style.backgroundColor = 'Red';

}    
function ChangeColor2()
{
    document.getElementById('btn1').style.backgroundColor = 'Green';
    
}
function ChangeColor3()
{
    document.getElementById('btn1').style.backgroundColor = 'Yellow';
    
}
function Swap()
{
    var color1 = document.getElementById('btn1').style.backgroundColor;
    var color2 = document.getElementById('btn2').style.backgroundColor;
    var color3 = document.getElementById('btn3').style.backgroundColor;

// 1 2 3
// 3 2 1
// 3 1 2
// =>
// 3 1 2
      // console.log(color1);
//       console.log(color2);
//       console.log(color3);

    var temp = color1
    color1 = color3
    color3 = temp

    temp = color2
    color2 = color3
    color3 = temp

    // console.log(color1);
    // console.log(color2);
    // console.log(color3);

    document.getElementById('btn1').style.backgroundColor = color1;
    document.getElementById('btn2').style.backgroundColor = color2;
    document.getElementById('btn3').style.backgroundColor = color3;


    
}
function reset()
{
    document.getElementById("btn1").style.backgroundColor = "";
    document.getElementById("btn2").style.backgroundColor = "";
    document.getElementById("btn3").style.backgroundColor = "";
}


function ChangeColor()  
{  
     document.getElementById('btn1').style.backgroundColor='Red';  
     
}                 
function ChangeColor2()  
{  
     document.getElementById('btn2').style.backgroundColor='Green';  
     
       
}  
function ChangeColor3()  
{  
     document.getElementById('btn3').style.backgroundColor='Yellow';
       
}  
