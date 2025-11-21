<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars($_POST['name']);
    $email    = htmlspecialchars($_POST['email']);
    $phone    = htmlspecialchars($_POST['phone']);
    $service  = htmlspecialchars($_POST['service']);
    $date     = htmlspecialchars($_POST['date']);
    $time     = htmlspecialchars($_POST['time']);

    // MVP: Store in a text file (can be upgraded to MySQL later) 
    $file = fopen("appointments.txt", "a");
    fwrite($file, "Name: $name | Email: $email | Phone: $phone | Service: $service | Date: $date | Time: $time\n");
    fclose($file);

    echo "<h2>Appointment Confirmed!</h2>";
    echo "<p>Thank you, $name. Your appointment for <strong>$service</strong> on <strong>$date at $time</strong> has been scheduled.</p>";
    echo "<a href='index.html'>Back to Home</a>";
}
?>