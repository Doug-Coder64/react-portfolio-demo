import './Contact.scss';

import React, { setState, useRef } from 'react';

import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_cann2ib';
const TEMPLATE_ID = 'template_0mpjdy2';
const USER_ID = 'user_ZUCOcVfnk0c1lgIisruKa';

function Contact() {
	const form = useRef();

	const handlePageChange = (e) => {
		e.preventDefault();
		if (!e.target.value) {
			e.target.classList.add('is-invalid');
		} else {
			e.target.classList.remove('is-invalid');
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();
		if (
			form.current.email.value &&
			form.current.name.value &&
			form.current.message.value
		) {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
				(result) => {
					if (result.user) console.log(result);
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		}
	};
	return (
		<div>
			<form className='Form m-5' ref={form} onSubmit={sendEmail}>
				<label className='form-label'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					className='form-control'
					onBlur={handlePageChange}
					required
				/>
				<label className='form-label'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					className='form-control'
					onBlur={handlePageChange}
					required
				/>
				<label className='form-label'>Message</label>
				<textarea
					name='message'
					id='message'
					className='form-control'
					onBlur={handlePageChange}
					required
				/>
				<input type='submit' value='Send' className='btn' />
			</form>
		</div>
	);
}

export default Contact;
