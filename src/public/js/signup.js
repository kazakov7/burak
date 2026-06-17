console.log("Signup frontend javascript file");
$(function () {});
function validateSignUpForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();

  if (memberNick == "" || memberPhone == "" || memberPassword == "") {
    alert("please, insert all required unputs!");
    return false;
  }
  if (memberPassword != confirmPassword) {
    alert("Password differse, pleaase check!");
    return false;
  }
}
