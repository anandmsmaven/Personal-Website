 /**
     * Purpose: Function to send the mail
     * @param data (STRING): Name, Email, Message, Subject
     */
<?php
	//php class to send the mails
	require_once('PHPMailerAutoload.php');
	if(isset($_POST['submit']))
	{
		   //Fetch all the fields from the contact form
		   $name=stripslashes($_POST['name']);
		   $email=stripslashes($_POST['email']);
	       $message=stripslashes($_POST['message']);
	       $subject=stripslashes($_POST['subject']);
		   
		   // Instantiate new class
	       $mail = new PHPMailer;
		   $mail->AddAddress('anandmsmaven@gmail.com'); //All the mails will be recieved to this emailID
		   $mail->Subject = "Contact through website ";
		   $mail->IsHTML(TRUE);
		   $mail->Body = " <div>
                            <header>
                            <h1>Contact Details</h1>
							</header>
							<article>
							  <h1>$name</h1>
							  <br>
							  <h3>$subject</h3>
							  <br>
							  <p>$message</p>
							</article>
							<footer></footer>
							</div>";

		   $mail->Send();
    }
?>


