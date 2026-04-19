// api/contact.php
mail('hello@elaravoss.com', 'New Inquiry', $_POST['message'], "From: {$_POST['email']}");