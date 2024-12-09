let x= prompt("Enter a number\n");

let i= 0;


while(x>1)
{
    x/=10;
    i++;
}


document.write("No.of digits= "+ i);