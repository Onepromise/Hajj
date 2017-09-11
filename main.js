  (function(){

    const config = {
      apiKey: "AIzaSyBQpuHgmm0_ByUXHWO4FFVEOBxvfPNPcpc",
      authDomain: "hajwebsite-89cb0.firebaseapp.com",
      databaseURL: "https://hajwebsite-89cb0.firebaseio.com",
      projectId: "hajwebsite-89cb0",
      storageBucket: "hajwebsite-89cb0.appspot.com",
    };
    firebase.initializeApp(config);
    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");

    //add login event
    btnLogin.addEventListner('click', e =>{
      //Get email and pass
      const email =txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));

    });

  }());
