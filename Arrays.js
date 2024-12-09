const array=[19,18,30,10,17,7,28,9];
max= Math.max(...array);

const EvenArr=[];
const OddArr=[];

len= array.length;
document.write("The maximum num = "+max+" ");


for(i=0;i<len;i++)
{
    if(array[i]%2==0)
    {
        EvenArr.push(array[i]);}
    else
    {
        OddArr.push(array[i]);}
}


document.write("<br>Even Numbers= ")
for(i=0;i<EvenArr.length;i++){
    document.write(EvenArr[i]+ ",");
}

document.write("<br>Odd Numbers= ")
for(i=0;i<OddArr.length;i++){
    document.write(OddArr[i]+ ",");
}