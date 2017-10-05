<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class VerifyLogin extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('user','',TRUE);
    } // function

    public function index() {

        $this->load->library('form_validation');

        $this->form_validation->set_rules('email', 'email', 'trim|required');
        $this->form_validation->set_rules('password', 'Password', 'trim|required|callback_check_database');

        if ( $this->form_validation->run() == FALSE) {



            $this->load->view('includes/header');
			      $this->load->view('welcome_message');
			      $this->load->view('includes/footer');
        } else {
            redirect('home', 'refresh');
        }

    } // function

    function check_database($password) {

        $email = $this->input->post('email');

        $result = $this->user->login($email, $password);

        if ( $result ) {

            $sess_array = array();
            foreach($result as $row) {

                $sess_array = array('id'=>$row->id,'email'=>$row->email);
                $this->session->set_userdata('logged_in', $sess_array);
            }
            return TRUE;

        } else {

            $this->form_validation->set_message('check_database', 'Invalid email or password');
            return false;

        }

    } // function

}

?>
