import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import forgetPassword from '@/assets/forget-password.png';
import LoginIllustration from '@/components/LoginIllustration';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SocialLoginButtons from '@/components/SocialLoginButtons';

import Logo from '@/Logo';

const ForgetPassword = () => {
	const navigate = useNavigate();
	return (
		<main className="flex min-h-screen w-full justify-between px-10 md:gap-10 lg:px-20">
			<form className="w-full max-w-2xl">
				<Logo />
				<section className="space-y-6">
					<div onClick={() => navigate('/login-client')} className="flex cursor-pointer items-center">
						<ChevronLeft />
						<span>Back to login</span>
					</div>
					<div className="space-y-5">
						<h1 className="text-5xl font-semibold">Forget your password?</h1>
						<p>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
					</div>

					<Box
						component="form"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: 2, sm: 2.5, md: 3 },
							width: '100%',
							'& .MuiTextField-root': {
								width: '100%',
							},
							'& .MuiInputLabel-root': {
								fontSize: {
									xs: '0.875rem',
									md: '1rem',
								},
							},
							'& .MuiInputBase-input': {
								fontSize: {
									xs: '0.875rem',
									md: '1rem',
								},
								padding: {
									xs: '0.75rem',
									md: '1rem',
								},
							},
						}}
						noValidate
						autoComplete="off"
					>
						<TextField id="email" label="Email" fullWidth />
					</Box>
					<Button onClick={() => navigate('/verify-code')} className="w-full py-6">
						Submit
					</Button>

					<div className="flex flex-wrap items-center gap-3 py-8 sm:gap-5">
						<Separator className="flex-1" />
						<span className="text-sm whitespace-nowrap text-[#2B2B2B] sm:text-base">Or login with</span>
						<Separator className="flex-1" />
					</div>
					<SocialLoginButtons />
				</section>
			</form>
			<LoginIllustration image={forgetPassword} />
		</main>
	);
};

export default ForgetPassword;
