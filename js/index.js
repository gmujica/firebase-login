firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('user_div').style.display = 'block';
      document.getElementById('login_div').style.display = 'none';

        var user = firebase.auth().currentUser;

        if(user != null) {
            var email_id = user.email;
            document.getElementById('user_para').innerHTML = "welcome User : " + email_id;
        }

    } else {
      // No user is signed in.
      document.getElementById('user_div').style.display = 'none';
      document.getElementById('login_div').style.display = 'block';
    }
  });

function login() {
    var user_data = document.getElementById('email_field').value;
    var pass_data = document.getElementById('password_field').value;

    firebase.auth().signInWithEmailAndPassword(user_data, pass_data).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert('Error: ' + errorMessage);
      });
}

function logout() {
    firebase.auth().signOut();

    document.getElementById('email_field').value = '';
    document.getElementById('password_field').value = '';

    
}