function photography() {
  let firstName = prompt("What is your name?");
  let lastName = prompt("What is your surname?");
  let email = prompt("What is your email address?");

  if (firstName.length) {
    alert(
      "Thank you, " +
        firstName +
        " " +
        lastName +
        "." +
        " We'll chat soon via email🤗!"
    );
  } else {
    alert("Sorry, we can't contact you🫤!");
  }
}

let photographyButton = document.querySelector("button");
photographyButton.addEventListener("click", photography);
