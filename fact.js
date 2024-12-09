let x= prompt("Enter a number\n");

fact=1;

for(i=1;i<=x;i++)
{
    fact= fact*i;
}    

document.write("The factorial of "+x+" = "+ fact);