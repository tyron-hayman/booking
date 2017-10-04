<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('parts/header');
		$this->load->view('welcome_message');
		$this->load->view('parts/footer');
	}

	public function user_setup() {

		$this->load->view('parts/header');
		$this->load->view('user_setup');
		$this->load->view('parts/footer');

	}

	public function run_initial_setup() {

		if ( !$this->db->table_exists('booking_schedule') ) {
			if ( $this->db->query('CREATE TABLE booking_schedule ( id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, booking_date TEXT NOT NULL, booking_by TEXT NOT NULL, booking_content TEXT NOT NULL)') ) {
				echo '<a href="' . site_url() . 'welcome/user_setup" class="btn btn-primary btn-lg" id="">Almost there, one more step!</a>';
			} else {
				echo '<p>There was an error while creating the database table</p>';
			}
		} else {
			echo '<p style="margine: 0;!important">Looks like the setup was already done.</p><a style="margine: 0;!important" href="' . site_url() . 'welcome/user_setup" class="btn btn-primary btn-lg" id="">Let\'s continue!</a>';
		}

	}

}
