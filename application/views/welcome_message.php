<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div id="welcome-container">
	<?php if ( $showLogin == "showLogin" ) { ?>
		<img class="slideUp animate toggleThis" src="<?php echo site_url(); ?>images/plant.svg" alt=""/>
		<h1 class="slideUp animate toggleThis">Welcome back!</h1>
		<h2 class="slideUp animate toggleThis">Use the form below to login.</h2>
	<?php } else { ?>
	<img class="slideUp animate toggleThis" src="<?php echo site_url(); ?>images/coffee.svg" alt=""/>
	<h1 class="slideUp animate toggleThis">Grab a coffee</h1>
	<h2 class="slideUp animate toggleThis">Let's get you started!</h2>
	<div id="welcome_content">
		<div class="loader"></div>
		<a href="#" class="btn btn-primary btn-lg slideUp animate toggleThis" id="install_db_btn">Run Setup</a>
	</div><!-- content -->
	<p class="copyright slideUp animate toggleThis"><?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
	<?php } ?>
</div>
