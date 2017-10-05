<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class User extends CI_Model {

    function login($email, $password) {

        $this->db->select('id, email, password');
        $this->db->from('users');
        $this->db->where('email', $email);
        $this->db->where('password', MD5($password));
        $this->db->limit(1);

        $query = $this->db->get();

        if ( $query->num_rows() == 1 ) {
            return $query->result();
        } else {
            return false;
        }

    }// function

    function check_user_level($username) {

	    $userlevel;
	    $result = $this->db->query('SELECT * FROM users WHERE username = "' . $username . '" LIMIT 1');
		$doorInfo = $result->row();
		$data = $doorInfo->admin;

		if ( $data == 1) {
			$userlevel = "admin";
		} else {
			$userlevel = "user";
		}

		return $userlevel;

    } // function

}// class
?>
