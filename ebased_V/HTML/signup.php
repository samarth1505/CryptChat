<?php
include_once 'dbconnect.php';
$error = false;

if ( isset($_POST['sign']) ) {
  $name = trim($_POST['name']);
  $name = strip_tags($name);
  $name = htmlspecialchars($name);

  $email = trim($_POST['email']);
  $email = strip_tags($email);
  $email = htmlspecialchars($email);

  $phone = trim($_POST['phone']);
  $phone = strip_tags($phone);
  $phone = htmlspecialchars($phone);

  $pass = trim($_POST['pass']);
  $pass = strip_tags($pass);
  $pass = htmlspecialchars($pass);

  $usr = trim($_POST['usr']);
  $usr = strip_tags($usr);
  $usr = htmlspecialchars($usr);

  if(empty($pass)){
      $error = true;
      $errMSG = "Please Enter a Password";
    }
   if(empty($usr)){
      $error = true;
      $errMSG = "Please Enter a Username";
    } 

  if((strlen($pass) < 6) &&($error == false)) {
    $error = true;
    $errMSG = "Password Must have atleast 6 Characters";
  }
  

  $password = hash('sha256', $pass);

    $query = "SELECT email FROM chat_users WHERE email='$email'";
    $result = mysqli_query($conn,$query);
    $count = mysqli_num_rows($result);
    if($count!=0){
      $error = true;
      $errMSG = "Provided EMail already Exists";
    }

 
  $query = "SELECT username FROM login WHERE username='$usr'";
    $result = mysqli_query($conn,$query);
    $count = mysqli_num_rows($result);
    if($count!=0){
      $error = true;
      $errMSG = "Provided Username already Exists";
    }

  
if(!$error){
    $query = "INSERT INTO chat_users(name,email,phone) VALUES('$name','$email','$phone')";
    $query2 = "INSERT INTO login(username,password, email) VALUES('$usr', '$password', '$email')";
    $res = mysqli_query($conn,$query);
    $res1 = mysqli_query($conn,$query2);
    if(($res)&&($res1)) {
          $success = "Account Created Successfully";
    } else {
      $errMSG = "Something went Wrong, Try Again Later ☹️";
    }
} 
}
?>


    <html>

    <head>
        <title>Crypt Chat &nbsp;&nbsp;💬</title>
        <link rel="stylesheet" type="text/css" href="..\CSS\create_personnel.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="..\CSS\header.css">
        <link rel="stylesheet" type="text/css" href="..\CSS\footer.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">
        <script src="..\javascript\home.js"></script>
    </head>

    <body>

        <div class="main-container">
            <div class="inner-container-join">
                <h1 class="app-name">Crypt&nbspChat</h1>
                <h3 class="app-label">Register</h3>
                <div class="h-line"></div>
                <br><br>
                <div class = "joining-form">
                  <center>
                <form method="post" action="<?php $_SERVER[ 'PHP_SELF'] ?>">

                    <input type="text" name="name" placeholder="Enter Name">
                    <input type="text" name="email" placeholder="Enter Email">

                    <input type="tel" name="phone" pattern="[0-9]{10}" placeholder="Phone Number">

                    <input type="text" name="usr" placeholder="Enter Username">
                    <input type="password" name="pass" placeholder="Enter Password">

                    <br><br>
                    <input type="submit" name="sign" class="send-btn join-btn" style="background-color: #28856f; border: none; width: 110px" value="Sign up">

                    <p><pre style="font-family: 'Ubuntu', sans-serif; font-size: 1.2rem; color: white;">Already have an account?    <a href="user_login.php" style="text-decoration: none; color: #28856f;">Login Now</a></pre></p>
                    
                    <?php if(isset($errMSG)) {?>
                    <span style="color:red; font-family: 'Ubuntu', sans-serif;"><?php echo $errMSG; ?></span><br><br>
                    <?php } ?>
                    <?php if(isset($success)) {?>
                    <span style="color: red; font-family: 'Ubuntu', sans-serif;"><?php echo $success; ?></span><br><br>
                    <?php } ?>
                </form>
                  </center>
                </div>
            </div>
        </div>
        </div>
    </body>
    </html>