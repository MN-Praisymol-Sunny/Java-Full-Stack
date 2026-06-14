let greetings=["GOOD MORNING","GOOD AFTERNOON","GOOD EVENING","GOOD NIGHT"];
let num=0;
function greet_afternoon()
{
    let text=document.getElementById("greet");
    num+=1;
    if(num>3){
        num=0;
    }
    text.innerText=greetings[num];
    console.log("greetings"+num)
}
function turn_on(){
    let light=document.getElementById("on")
    light.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5fnqYC1g8Q2YZyxE6ybFsTaE9kJxEhMd0A&s";
    

}
function turn_off()
{
    let light=document.getElementById("on");
    light.src="https://www.shutterstock.com/image-vector/glowing-turned-off-electric-light-600w-763805278.jpg";

}
function Change_color(){
    let color=document.getElementById("cap");
    color.style.backgroundColor="black";
    let txt1=document.getElementById("Data");
    txt1.style.backgroundColor="white";
    let txt2=document.getElementById("greet");
    txt2.style.backgroundColor="white";

}
