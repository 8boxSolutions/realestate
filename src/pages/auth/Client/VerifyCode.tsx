import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Logo from '@/Logo';
import verifyCode from '@/assets/verify-code.png';
import LoginIllustration from '@/components/LoginIllustration';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const VerifyCode = () => {
	const navigate = useNavigate();
	const [showCode, setShowCode] = useState<boolean>(false);
	const handleToggleCode = () => {
		setShowCode((prev) => !prev);
	};
	return (
		<main className="flex min-h-screen w-full justify-between px-10 md:gap-10 lg:px-20">
			<form className="w-full max-w-3xl">
				<Logo className="flex justify-center" />
				<section className="space-y-6">
					<div onClick={() => navigate('/login-client')} className="flex cursor-pointer items-center">
						<ChevronLeft />
						<span>Back to login</span>
					</div>
					<div className="space-y-5">
						<h1 className="font-semibold md:text-5xl">Forget your password?</h1>
						<p>An authentication code has been sent to your email.</p>
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
						<TextField
							id="code"
							label="Enter Code"
							type={showCode ? 'text' : 'password'}
							variant="outlined"
							fullWidth
							slotProps={{
								input: {
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleToggleCode} edge="end">
												{showCode ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
											</IconButton>
										</InputAdornment>
									),
								},
							}}
						/>
						<div className="flex">
							<span>Didn't recieve a code?</span>
							<span className="text-primary underline">Resend</span>
						</div>

						<Button onClick={() => navigate('/set-password')} className="text-md w-full py-6">
							Verify
						</Button>
					</Box>
				</section>
			</form>
			<LoginIllustration image={verifyCode} />
		</main>
	);
};

export default VerifyCode;
