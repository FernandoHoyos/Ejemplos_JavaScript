//Redeclaring a Variable Using let
//Redeclarar una variable usando let
  <p id="demo27"></p>
  <script>
    let x4 = 10;
    // Here x is 10
    {
      let x4 = 2;
      // Here x is 2
    }
    // Here x is 10
    document.getElementById("demo27").innerHTML = x4;
  </script>