    function changestyle() {
      let x = document.cookie;
      console.log(x);
      
      if (x == "dark") {
        document.getElementById('stylelink').href = "css/dark.css";
        
      }
      else {
        document.getElementById('stylelink').href = "css/style.css"
      }
    }