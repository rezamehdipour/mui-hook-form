import { TextField } from "@mui/material";

// React Hook Form
import { Controller } from "react-hook-form";

const TextInput = ({ name, control, rules, label = "" }) => {
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
				<TextField
					value={value}
					onChange={onChange}
					label={label}
					error={error}
					helperText={error ? error.message : null}
					size="normal"
					fullWidth
					variant="standard"
				/>
			)}
		/>
	);
};

export default TextInput;
