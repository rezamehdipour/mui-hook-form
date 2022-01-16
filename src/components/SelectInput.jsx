import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";

// React Hook Form
import { Controller } from "react-hook-form";

const SelectInput = ({ name, control, rules, options, label }) => {
	const generateSingleOptions = () => {
		return options.map((option) => {
			return (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			);
		});
	};

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
				<FormControl variant="standard" size={"small"} fullWidth error={error}>
					<InputLabel>{label}</InputLabel>
					<Select onChange={onChange} value={value} fullWidth>
						{generateSingleOptions()}
					</Select>
					{error && <FormHelperText>{error.message}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};

export default SelectInput;
