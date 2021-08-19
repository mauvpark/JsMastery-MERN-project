/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Input = ({
	name,
	half,
	label,
	handleChange,
	autoFocus,
	handleShowPassword,
	type,
}) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				name={name}
				onChange={handleChange}
				variant="outlined"
				required
				fullWidth
				label={label}
				autoFocus={autoFocus}
				type={type}
				InputProps={
					name === `password`
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={handleShowPassword}
										>
											{type === "password" ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								),
						  }
						: null
				}
			/>
		</Grid>
	);
};

export default Input;
