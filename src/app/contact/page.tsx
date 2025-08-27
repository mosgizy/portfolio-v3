'use client';

import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [form, setForm] = useState({
		email: '',
		subject: '',
		message: '',
		name: '',
	});
	const [inputsValid, setInputsValid] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [loading, setLoading] = useState(false);

	const checkValidEmail = useCallback(() => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		setIsValidEmail(emailRegex.test(form.email));
	}, [form]);

	const handleInput = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			setForm((prev) => ({ ...prev, [name]: value }));
			checkValidEmail();
		},
		[form]
	);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			emailjs.init(process.env.NEXT_PUBLIC_emailjs as string);
			if (form.email && form.subject && form.message && isValidEmail) {
				const result = await emailjs.send(
					process.env.NEXT_PUBLIC_serviceId as string,
					process.env.NEXT_PUBLIC_templateId as string,
					{
						from_name: form.name.trim(),
						from_email: form.email.trim(),
						subject: form.subject.trim(),
						message: form.message.trim(),
						to_email: 'moshood521@gmail.com',
					}
				);

				// console.log(result);

				if (result.text === 'OK') {
					setForm({ name: '', email: '', subject: '', message: '' });
				}
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (form.subject !== '' && form.message !== '' && isValidEmail) {
			setInputsValid(true);
		}
	}, [form]);

	return (
		<section>
			<h2 className="font-bold text-2.6xl mb-3 capitalize">Contact Me</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-12">
				<label htmlFor="name" className="flex flex-col gap-1">
					<span className="font-medium text-xl capitalize">name</span>
					<input
						type="text"
						id="name"
						name="name"
						value={form.name}
						autoComplete="off"
						onChange={handleInput}
						className="!bg-neutral-100 border border-tertiary-900 text-neutral-200 rounded-lg px-5 py-3 outline-none"
					/>
				</label>
				<label htmlFor="email" className="flex flex-col gap-1">
					<span className="font-medium text-xl capitalize">email address</span>
					<input
						type="email"
						id="email"
						name="email"
						value={form.email}
						onChange={handleInput}
						autoComplete="off"
						className="!bg-neutral-100 border border-tertiary-900 text-neutral-200 rounded-lg px-5 py-3 outline-none"
					/>
				</label>
				<label htmlFor="subject" className="flex flex-col gap-1">
					<span className="font-medium text-xl capitalize">subject</span>
					<input
						type="text"
						id="subject"
						name="subject"
						value={form.subject}
						autoComplete="off"
						onChange={handleInput}
						className="!bg-neutral-100 border border-tertiary-900 text-neutral-200 rounded-lg px-5 py-3 outline-none"
					/>
				</label>
				<label htmlFor="message" className="flex flex-col gap-1">
					<span className="font-medium text-xl capitalize">message</span>
					<textarea
						id="message"
						name="message"
						value={form.message}
						autoComplete="off"
						onChange={handleInput}
						className="!bg-neutral-100 border border-tertiary-900 text-neutral-200 rounded-lg px-5 py-3 outline-none min-h-44"
					/>
				</label>
				<div className="flex justify-end w-full">
					<button
						disabled={!inputsValid}
						className={`${
							inputsValid ? 'bg-secondary-700' : 'bg-tertiary-300'
						} font-bold font-merri-waether-sans text-xl text-neutral-100 capitalize px-16 py-2 border-2 border-tertiary-300 outline-none rounded-lg max-w-max mt-1 cursor-pointer`}
					>
						{loading ? <div className="loader"></div> : 'submit'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Contact;
