import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Logo from '@/Logo';
import LoginIllustration from '@/components/LoginIllustration';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import setPassword from '@/assets/setPassword.png';

const SetPassword = () => {
	const navigate = useNavigate();
	const [showCreatePassoword, setShowCreatePassword] = useState<boolean>(false);
	const [showReEnterPassword, setShowReEnterPassword] = useState<boolean>(false);

	const handleToggleCreatePassword = () => {
		setShowCreatePassword((prev) => !prev);
	};
	const handleToggleReEnterPassword = () => {
		setShowReEnterPassword((prev) => !prev);
	};

	return (
		<main className="flex min-h-screen w-full justify-between px-10 md:gap-10 lg:px-20">
			<form className="w-full max-w-3xl">
				<Logo className="flex justify-center" />
				<section className="space-y-6">
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
							label="Create Password"
							type={showCreatePassoword ? 'text' : 'password'}
							variant="outlined"
							fullWidth
							slotProps={{
								input: {
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleToggleCreatePassword} edge="end">
												{showCreatePassoword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
											</IconButton>
										</InputAdornment>
									),
								},
							}}
						/>

						<TextField
							id="code"
							label="Re-enter Password"
							type={showReEnterPassword ? 'text' : 'password'}
							variant="outlined"
							fullWidth
							slotProps={{
								input: {
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleToggleReEnterPassword} edge="end">
												{showReEnterPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
											</IconButton>
										</InputAdornment>
									),
								},
							}}
						/>
					</Box>
					<Button onClick={() => navigate('/login-client')} className="text-md w-full py-6">
						set Password
					</Button>
				</section>
			</form>
			<LoginIllustration image={setPassword} />
		</main>
	);
};

export default SetPassword;
