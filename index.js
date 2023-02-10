var emailidd = document.getElementById("emailidd");
var passsword1 = document.getElementById("passsword1");
var logbtn = document.getElementById("logbtn");
var musicc = document.getElementById("musicc");
var musicc1 = document.getElementById("musicc1");
var musicc2 = document.getElementById("musicc2");

logbtn.addEventListener("click", function () {
  var logform = document.getElementById("logform");
  var bankinner = document.getElementById("bankinner");
  var myemail = "anasbashir114@gmail.com";
  var mypass = 123;
  if (myemail == emailidd.value && mypass == passsword1.value) {
    logform.style.display = "none";
    bankinner.style.display = "block";
    musicc.play();
    alert("Login Success");
  } else {
    alert("Wrong Password");
  }
});

var addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function () {
  var depamout = document.getElementById("depamout").innerHTML;
  var pers1 = parseInt(depamout);
  var dipoinpt = document.getElementById("dipoinpt").value;
  var pers2 = parseInt(dipoinpt);
  var result = pers1 + pers2;
  document.getElementById("depamout").innerHTML = result;
  var crbalance = document.getElementById("crbalance").innerHTML;
  var parsedepos = parseInt(crbalance);
  var total = pers2 + parsedepos;
  document.getElementById("crbalance").innerHTML = total;
  musicc1.play();
});

var withdrawbtn = document.getElementById("withdrawbtn");
withdrawbtn.addEventListener("click", function () {
  var withdtn = document.getElementById("withdtn").innerHTML;
  var withpers = parseInt(withdtn);
  var withinpt = document.getElementById("withinpt").value;
  var withparsinpt = parseInt(withinpt);
  var withresult = withpers + withparsinpt;
  document.getElementById("withdtn").innerHTML = withresult;

  var crbalance = document.getElementById("crbalance").innerHTML;
  var parsedepos = parseInt(crbalance);

  var currentMunis = parsedepos - withparsinpt;
  document.getElementById("crbalance").innerHTML = currentMunis;
  musicc2.play();
});
