;(function() {
  var lychrel = {
    concat : '',
    holder: '',
    isNumber: function (o) {
      return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
    },
    reverse: function(s) {
      return s.split("").reverse().join("");
    },
    lychrel: function(num, count) {
      lychrel.concat+=count+". "+num+" + " + lychrel.reverse(num.toString());
      lychrel.concat+=" = "+ (num+parseInt(lychrel.reverse(num.toString())) )+"</br>";
      num += parseInt(lychrel.reverse(num.toString()));
      
      if( num == lychrel.reverse(num.toString())) { 
        lychrel.concat+= "</br>The palyndrome for "+lychrel.holder+ " is "+num+", formed after "+count;
        lychrel.concat+= count > 1 ?  " iterations" :  " iteration";
        lychrel.concat+= ".</br></br>";
        return num; 
      }
      else {
        lychrel.lychrel(num,count+1);
      }
      return num;
    },
    calculate: function() {
      lychrel.concat="</br>";

      var number = document.getElementById("number").value;
      if (lychrel.isNumber(number)) {
        lychrel.holder = number;
        lychrel.lychrel(parseInt(number),1);
        document.getElementById("results").innerHTML=lychrel.concat;
      }
      else {
        alert("That was not a number. Try again.");
      }
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', lychrel.calculate);
  }, false);
})();