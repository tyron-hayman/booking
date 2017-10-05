<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	 function __construct() {
        parent::__construct();
        $this->load->model('user','',TRUE);

	} // function

	public function index()
	{
		if ( $this->session->userdata('logged_in') ) {
			$session_data = $this->session->userdata('logged_in');

			$session_data = $this->session->userdata('logged_in');
			// $levelcheck = $this->user->check_user_level($session_data['email']);


			// $data['username'] = $session_data['email'];

			$this->load->view('parts/header');
			$this->load->view('home');
			$this->load->view('parts/footer');
		} else {
			redirect('/', 'refresh');
		}
	}

	function logout() {

        $this->session->unset_userdata('logged_in');
        session_destroy();
        redirect('home', 'refresh');

    } // function


}
