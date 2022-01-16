import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import {
	Paper,
	Typography,
	Grid,
	FormControl,
	TextField,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Button,
} from "@mui/material";

// Components
import TextInput from "./components/TextInput";
import RadioInput from "./components/RadioInput";
import DateInput from "./components/DateInput";
import SelectInput from "./components/SelectInput";

// React Hook Form
import { useForm } from "react-hook-form";

// CSS
import "./rtl.scss";
import CheckboxInput from "./components/CheckboxInput";

const theme = createTheme({
	direction: "rtl",
	palette: {
		primary: {
			light: "#34d399",
			main: "#10b981",
			dark: "#059669",
			contrastText: "white",
		},
	},
	typography: {
		fontFamily: "Noto Sans Arabic, sans-serif",
	},
	components: {
		MuiTextField: {},
	},
});

const Form = (props) => {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			gender: "",
			birthdate: "",
		},
	});

	const handleOnSubmit = (a) => console.log(a);

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="sm">
				<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
					<Typography variant="h4" align="center">
						فرم ثبت‌نام
					</Typography>
				</Paper>

				<FormControl component="form" fullWidth onSubmit={handleSubmit(handleOnSubmit)}>
					<Grid container spacing={5}>
						{/* First name */}
						<Grid item xs={12} sm={6}>
							<TextInput
								name="firstName"
								control={control}
								rules={{
									required: "نام را وارد کنید.",
									minLength: { value: 3, message: "باید بیشتر از 3 کاراکتر باشد." },
								}}
								label="نام"
							/>
						</Grid>
						{/* Last name */}
						<Grid item xs={12} sm={6}>
							<TextInput
								name="lastName"
								control={control}
								rules={{
									required: "نام خانوادگی را وارد کنید.",
									minLength: { value: 3, message: "باید بیشتر از 3 کاراکتر باشد." },
								}}
								label="نام خانوادگی"
							/>
						</Grid>
						{/* Gender */}
						<Grid item xs={12} sm={6}>
							<RadioInput
								name="gender"
								control={control}
								rules={{ required: "جنسیت را انتخاب کنید." }}
								options={[
									{
										label: "آقا",
										value: "male",
									},
									{
										label: "خانم",
										value: "female",
									},
								]}
								label="جنسیت"
							/>
						</Grid>
						{/* Birthdate */}
						<Grid item xs={12} sm={6}>
							<DateInput
								name="birthdate"
								control={control}
								rules={{ required: "تاریخ را وارد کنید." }}
								label="تاریخ تولد"
							/>
						</Grid>
						{/* Country */}
						<Grid item xs={12} sm={6}>
							<SelectInput
								name="birthdate"
								control={control}
								rules={{ required: "یک کشور را انتخاب کنید." }}
								options={[
									{
										label: "ایران",
										value: "iran",
									},
									{
										label: "یمن",
										value: "yemen",
									},
									{
										label: "گرجستان",
										value: "gregoria",
									},
								]}
								label="کشور"
							/>
						</Grid>
						{/* Checkboxes */}
						<CheckboxInput
							name="agreement"
							control={control}
							rules={{ required: "باید توافق نامه را بپزیرید." }}
							label="توافقنامه را خوانده و میپذیرم."
						/>
					</Grid>

					<Button variant="contained" sx={{ mt: 5 }} type="submit">
						ارسال
					</Button>
				</FormControl>
			</Container>
		</ThemeProvider>
	);
};

export default Form;
