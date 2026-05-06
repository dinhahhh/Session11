let year = prompt("Please input the year");
if(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0)
{
 alert("Leap year");
}else
{
alert("Not leap year");
}
