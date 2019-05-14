export const VALIDATORS = {
	email : [
		{
			errorName : 'required',
			message   : 'Email Address is required.',
		},
		{
			errorName : 'email',
			message   : 'Not a valid email.',
		},
	],

	password : [
		{
			errorName : 'required',
			message   : 'Password is required.',
		},
		{
			errorName : 'minlength',
			message   : 'Password must be at least 6 characters.',
		},
		{
			errorName : 'pattern',
			message   : 'Password must contain numbers, uppercase letters and lowercase letters.',
		},
	],
};
