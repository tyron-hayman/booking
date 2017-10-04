<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div id="welcome-container">
	<img src="<?php echo site_url(); ?>images/coffee.svg" alt=""/>
	<h1>Grab a coffee</h1>
	<h2>Let's get you started!</h2>
	<div id="welcome_content">
		<div class="loader"></div>
		<a href="#" class="btn btn-primary btn-lg" id="install_db_btn">Run Setup</a>
	</div><!-- content -->
	<p class="copyright"><?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
</div>
