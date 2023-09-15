var a=[];
var n=parseInt(prompt("enter the size of the array"));
var prime
var b=[]
for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");




for(let i=0;i<a.length;i++){
    
    for(j=2;j<a[i];j++){
        prime=true;
        if(a[i]%j==0){
            prime=false;
            break
        }
       
    }
    if(prime==true){
        b.push(a[i]);
       
    }
}
document.write("the prime number in the given array is="+b)