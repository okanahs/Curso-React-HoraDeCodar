function Calculos() {
    function soma(a,b,c){
        return a + b + c;
      }
    
      function subt (a,b,c){
        return a - b - c;
      }
    
      function multi (a,b,c){
        return a * b * c;
      }
    
      function divis (a,b){
        return a / b;
      }
    return (
        <div>
            <p>Soma: {soma(2, 2, 3)}</p>
            <p>Subtração: {subt(10, 2, 3)}</p>
            <p>Multiplicação: {multi(10, 2, 3)}</p>
            <p>Divisão: {divis(10, 2)}</p>
        </div>
    )
}

export default Calculos