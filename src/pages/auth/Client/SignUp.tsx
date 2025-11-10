import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import signup from '@/assets/user-signup.jpg';
import Logo from '@/Logo';
import LoginIllustration from '@/components/LoginIllustration';
import SocialLoginButtons from '@/components/SocialLoginButtons';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Button } from '@/components/ui/button';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const SignUp = () => {
	const [showPassword, setShowPassowrd] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

	const handleTogglePassword = () => {
		setShowPassowrd((prev) => !prev);
	};

	const handleToggleConfirmPassword = () => {
		setShowConfirmPassword((prev) => !prev);
	};

	return (
		<section className="flex min-h-screen w-full justify-between pb-10 md:items-center md:px-10">
			<LoginIllustration image={signup} />

			<form className="flex w-full flex-col px-23 md:max-w-4xl">
				<Logo className="flex justify-center" />

				<div className="-mt-15 mb-6 space-y-4 text-center md:text-left">
					<h1>Client Sign Up</h1>
					<p>Let’s get you all st up so you can access your personal account.</p>
				</div>
				<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '34ch' } }} noValidate autoComplete="off">
					<div className="flex">
						<TextField id="firstname" label="First Name" />
						<TextField id="lastname" label="Last Name" />
					</div>
					<div className="flex">
						<TextField id="email" label="Email" />
						<TextField
							id="phone"
							label="Phone"
							type="tel"
							slotProps={{
								htmlInput: {
									inputMode: 'numeric',
									pattern: '[0-9]*',
									maxLength: 11,
									onInput: (e: React.FormEvent<HTMLInputElement>) => {
										const input = e.target as HTMLInputElement;
										input.value = input.value.replace(/[^0-9]/g, '');
									},
								},
							}}
						/>
					</div>
				</Box>
				<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }} noValidate autoComplete="off">
					<TextField
						id="password"
						label="Password"
						type={showPassword ? 'text' : 'password'}
						variant="outlined"
						fullWidth
						slotProps={{
							input: {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleTogglePassword} edge="end">
											{showPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
										</IconButton>
									</InputAdornment>
								),
							},
						}}
					/>
					<TextField
						id="confirm"
						label="Confirm Password"
						type={showConfirmPassword ? 'text' : 'confirm'}
						variant="outlined"
						fullWidth
						slotProps={{
							input: {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleToggleConfirmPassword} edge="end">
											{showConfirmPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
										</IconButton>
									</InputAdornment>
								),
							},
						}}
					/>
				</Box>

				<div className="flex items-center gap-2 pt-2">
					<Checkbox id="terms" />
					<Label htmlFor="terms" className="justify-enter flex">
						I agree to all the
						<span className="font-semibold text-primary underline">Terms</span>
						and
						<span className="font-semibold text-primary underline">Privacy Policies</span>
					</Label>
				</div>

				<div className="space-y-5 pt-6">
					<Button className="w-full">Create account </Button>
					<div className="flex justify-center gap-2">
						<p>Already have an account?</p>
						<span className="text-primary underline">Login</span>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-3 py-8 sm:gap-5 sm:py-12">
					<Separator className="flex-1" />
					<span className="text-sm whitespace-nowrap text-[#2B2B2B] sm:text-base">Or login with</span>
					<Separator className="flex-1" />
				</div>

				<SocialLoginButtons />
			</form>
		</section>
	);
};

export default SignUp;
