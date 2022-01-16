// MUI
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import { DesktopDatePicker } from "@mui/lab";
import { TextField } from "@mui/material";

// React Hook Form
import { Controller, useFormContext } from "react-hook-form";

const DATE_FORMAT = "yyyy-mm-dd";

const DateInput = ({ name, control, rules, label }) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({
				field: { onChange, onBlur, value, name, ref },
				fieldState: { invalid, isTouched, isDirty, error },
				formState,
			}) => (
				<LocalizationProvider dateAdapter={DateAdapter}>
					<DesktopDatePicker
						asdasd={console.log(error)}
						name={name}
						value={value}
						onChange={onChange}
						label={label}
						inputFormat={DATE_FORMAT}
						renderInput={(params) => (
							<TextField
								{...params}
								error={error}
								helperText={error ? error.message : null}
								fullWidth
								variant="standard"
							/>
						)}
					/>
				</LocalizationProvider>
			)}
		/>
	);
};

export default DateInput;
