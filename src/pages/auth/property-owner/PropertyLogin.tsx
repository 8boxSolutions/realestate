import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from '@/Logo';
import SocialLoginButtons from '@/components/SocialLoginButtons';
import LoginIllustration from '@/components/LoginIllustration';
import userIcon from '@/assets/user-login.png';
const PropertyLogin = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassowrd] = useState<boolean>(false);
	const handleTogglePassword = () => {
		setShowPassowrd((prev) => !prev);
	};
	return (
		<section className="flex min-h-screen w-full justify-between gap-8 px-4 py-10 md:items-center md:gap-12 lg:px-20 lg:py-0">
			<form className="flex w-full flex-col justify-center p-4 md:max-w-3xl md:p-8">
				<Logo className="flex justify-center" />

				<div className="mb-6">
					<h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">Property Owner Login</h1>
					<p className="text-sm text-gray-600 sm:text-base md:text-lg">Login to access your Real Estate account</p>
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
					<TextField id="email" label="Email" variant="outlined" fullWidth />
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
				</Box>

				{/* REMEMBER + FORGET */}
				<div className="flex items-start justify-between gap-4 pt-5 sm:flex-row sm:items-center sm:gap-0">
					<div className="flex items-center gap-2">
						<Checkbox id="remember" />
						<Label htmlFor="remember" className="text-sm sm:text-base">
							Remember me
						</Label>
					</div>
					<a
						onClick={() => navigate('/property-for-pass')}
						className="cursor-pointer text-sm text-primary underline sm:text-base"
					>
						Forget Password
					</a>
				</div>

				{/* BUTTON LOGIN + SIGNUP */}
				<div className="space-y-5 pt-8 sm:pt-10">
					<Button 
						className="w-full py-2.5 text-sm sm:py-3 sm:text-base"
						onClick={() => navigate('/property-home')}>Login
					</Button>

					<div className="flex flex-wrap justify-center gap-1 text-sm sm:text-base">
						<p>Don’t have an account?</p>
						<a
							onClick={() => navigate('/property-register')}
							className="cursor-pointer font-semibold text-primary underline"
						>
							Sign up/List Your Property
						</a>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-3 py-8 sm:gap-5 sm:py-12">
					<Separator className="flex-1" />
					<span className="text-sm whitespace-nowrap text-[#2B2B2B] sm:text-base">Or login with</span>
					<Separator className="flex-1" />
				</div>

				<SocialLoginButtons />
			</form>

			<LoginIllustration image={userIcon} />
		</section>
	);
};

export default PropertyLogin;
