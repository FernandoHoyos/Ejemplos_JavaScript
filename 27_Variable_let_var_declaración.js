//Variables let y var.

//Variable let
//No se puede volver a re-declarar
  <code>
    let x = "John Doe";
    let x = 0;
</code>

//Redeclarar una variable usando var
  <p id="demo26"></p>
  <code>
      // Here x3 is 10
      var  x3 = 10;
      {  
      var x3 = 2;
      // Here x3 is 2
      }
      // Here x3 is 2
      document.getElementById("demo26").innerHTML = x3;
    </code>
  <script>
    var x3 = 10;
    // Here x3 is 10
    {
      var x3 = 2;
      // Here x3 is 2
    }
    // Here x3 is 2
    document.getElementById("demo26").innerHTML = x3;
  </script>