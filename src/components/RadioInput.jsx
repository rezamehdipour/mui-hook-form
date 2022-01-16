import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const RadioInput = ({ name, control, rules, options, label = "" }) => {
	const generateRadioOptions = () => {
		return options.map((singleOption) => (
			<FormControlLabel value={singleOption.value} label={singleOption.label} control={<Radio />} />
		));
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
				<FormControl component="fieldset" fullWidth>
					<FormLabel component="legend">{label}</FormLabel>
					<RadioGroup value={value} onChange={onChange} row>
						{generateRadioOptions()}
					</RadioGroup>
					{error && (
						<Typography align="left" fullWidth sx={{ fontSize: "12px", color: "#d32f2f" }}>
							{error.message}
						</Typography>
					)}
				</FormControl>
			)}
		/>
	);
};

export default RadioInput;
