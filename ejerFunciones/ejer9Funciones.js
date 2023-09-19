//Serie Fibonacci con Recursividad: 1.1.2.3.5.8…

function Fibonacci(n){

    if (n <2) {
        return n;
    }
    return Fibonacci(n-2) + Fibonacci(n-1);

}
function primeros(n){
for(let i=n;i>=0;i--){
    console.log (Fibonacci(n-i))
}}
primeros(10)





