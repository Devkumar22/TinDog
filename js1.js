
  let acceptButton = document.getElementById("accept");
  acceptButton.onclick = () => {
    if (document.getElementById("firstName").value == "") {
      alert("Enter first name");
      return;
    }
    if (document.getElementById("lastName").value == "") {
      alert("Enter Last name");
      return;
    }
    if (document.getElementById("email").value == "") {
      alert("Enter email");
      return;
    }
    if (document.getElementById("confirmEmail").value == "") {
      alert("Please confirm email");
      return;
    }
    if (document.getElementById("pass").value == "") {
      alert("Enter password");
      return;
    }
  }
