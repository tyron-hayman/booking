<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div id="welcome-container">
	<img src="<?php echo site_url(); ?>images/book.svg" alt=""/>
	<h1>Almost done!</h1>
	<h2>You will need to provide some details so we can complete the setup and cusomization.</h2>
	<div id="welcome_content_last">
		<div class="loader"></div>
    <?php echo form_open(site_url() . 'VerifyLogin'); ?>
 		 <input type="text" size="20" id="name" name="name" placeholder="Name*" autocomplete="off"/>
     <input type="text" size="20" id="email" name="email" placeholder="Email*" autocomplete="off"/>
 	 	 <input type="password" size="20" id="password" name="password" placeholder="Password"/>
     <input type="password" size="20" id="password_conf" name="password_conf" placeholder="Confirm password"/>
 	 	 <button id="loginbtn" class="btn btn-primary btn-lg" type="submit">Finish Setup</button>
 	 	</form>
	</div><!-- content -->
	<p class="copyright"><?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
</div>
