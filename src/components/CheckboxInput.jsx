import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText } from "@mui/material";

// React Hook Form
import { Controller } from "react-hook-form";

const CheckboxInput = ({ name, control, rules, label }) => {
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
				<FormControl sx={{ m: 3 }} component="fieldset" variant="standard" error={error}>
					<FormLabel component="legend">توافق نامه</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox value={value} onChange={onChange} />}
							label={label}
						/>
					</FormGroup>
					{error && <FormHelperText>{error.message}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};

export default CheckboxInput;
