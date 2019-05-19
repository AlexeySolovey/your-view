<?php
	function open_case(){
		$form = $_REQUEST['data']; 
		send_open_case_mail($form);
		wp_die();
	}

	function send_open_case_mail($form){
		$to= get_option('admin_email').', soloveyalexey3@gmail.com';

		$subject        = "New feedback";
		$message 		= '<h3> Тип сообщения: </h3>' . $form['Feedbacks'] . '<br/>';
		$message	   .= '<b> Имя клиента:   </b>'   . $form['fName']     . '<br/>';
		$message	   .= '<b> Телефон:  	  </b>'   . $form['phone']     . '<br/>';

		if($form['calucate']) {
			$message   .= '<br/><br/>==========<br/><br/>';
			$message   .= '<b> Cкидка:  	  </b>'   . $form['calucate']['discount']     . '<br/>';
			foreach($form['calucate']['doorInfo'] as $key => $value) {
				if($value['title'] == 'Комплектующие') {
					$message   .= '<b>'.$value['title'].': </b>'.implode(", ", $value['data']) .'<br/>'; 
					continue;
				}
			    $message   .= '<b>'.$value['title'].': </b>'.$value['data'].'<br/>';
			}			
		}

		$headers = array(
			"From: Новая заявка  <info@vid.ua>",
			"MIME-Version: 1.0;",
			"Content-Type: text/html; charset=UTF-8;"
		);

		print_r($form);

		if(wp_mail($to, $subject, $message, $headers)) {
			echo 'success';
			//send_open_case_user_mail($form);
		}else{
			echo 'not success!';
		}
	}

	function send_open_case_user_mail( $form ) {
		$subject = 'Вас приветствует GIC Canada Global immigration corp';
		$to      = $form['open_case_email'];
		ob_start();
		require_once( get_template_directory() . '/parts/mails/open-case-user-mail.php' );
		$message = ob_get_contents();
		ob_end_clean();

		$headers = array(
			//"From: noreply@giccanadaimmigration.com;",
			"Return-Path: noreply@giccanadaimmigration.com;",
			"MIME-Version: 1.0;",
			"Content-Type: text/html; charset=UTF-8;"
		);

		if(wp_mail( $to, $subject, $message, $headers )) {
			echo 'success user-mail';
		}else{
			echo 'not success user-mail!';
		}
	}

	add_action('wp_ajax_nopriv_open_case', 'open_case' );
	add_action('wp_ajax_open_case', 'open_case' );