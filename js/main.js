$(document).ready(function(){
  $('#menue4').click(function(){
          if($('.sub-menue').is(':hidden')){
            $('.sub-menue').slideDown();
            }else{
            $('.sub-menue').slideUp();
            }
      })
  $('#personal-setting').click(function(){
          if($('.content').is(':hidden')){
          $('.content').css('display','block');
          }
      })
});

function recbutton() {
      var note = document.getElementById("note");
      if (note.disabled){
        document.getElementById("priset").removeAttribute('disabled');
        document.getElementById("priset").removeAttribute('style');
        document.getElementById("note").removeAttribute('disabled');
      }else{
        document.getElementById("priset").style.background = "#EBEBE4";
        document.getElementById("priset").disabled = "disabled";
        document.getElementById("note").disabled = "disabled";
      }
      document.getElementById("forepass").style.display = "none";
      document.getElementById("newpass").style.display = "none";
      document.getElementById("conpass").style.display = "none";
}

function confirm(){
  var newpass = document.getElementById("pass1").value;
  var conpass = document.getElementById("pass2").value;
  var forepass = document.getElementById("pass2").value;
  if (forepass = 'null' && newpass.length > 0 ) {
    alert('请输入原密码！')
    return false;
  }
  if (newpass != conpass) {
    alert("两次输入的密码不一致，请核实！");
    return false;
  }
}

function pasbutton() {
  document.getElementById("forepass").style.display = "block";
  document.getElementById("newpass").style.display = "block";
  document.getElementById("conpass").style.display = "block";
  document.getElementById("priset").style.background = "#EBEBE4";
  document.getElementById("priset").disabled = "disabled";
  document.getElementById("note").disabled = "disabled";
  confirm();
}
