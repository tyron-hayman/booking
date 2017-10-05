<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div id="welcome-container">
	<img class="slideUp animate toggleThis" src="<?php echo site_url(); ?>images/book.svg" alt=""/>
	<h1 class="slideUp animate toggleThis">Almost done!</h1>
	<h2 class="slideUp animate toggleThis">Just a few needed details</h2>
	<div id="welcome_content_last">
		<div class="loader"></div>
    <?php echo form_open(site_url() . 'VerifyLogin'); ?>
 		 <input class="slideUp animate toggleThis" type="text" size="20" id="name" name="name" placeholder="Name*" autocomplete="off"/>
     <input class="slideUp animate toggleThis" type="text" size="20" id="email" name="email" placeholder="Email*" autocomplete="off"/>
 	 	 <input class="slideUp animate toggleThis" type="password" size="20" id="password" name="password" placeholder="Password"/>
     <input class="slideUp animate toggleThis" type="password" size="20" id="password_conf" name="password_conf" placeholder="Confirm password"/>
 	 	 <button id="user_setup_btn" class="btn btn-primary btn-lg slideUp animate toggleThis" type="submit">Finish Setup</button>
 	 	</form>
	</div><!-- content -->
	<p class="copyright slideUp animate toggleThis"><?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
</div>
