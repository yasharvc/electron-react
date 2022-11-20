import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import FourKIcon from "@mui/icons-material/FourK";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";

function SvgMaterialIcons() {
	return (
		<Grid container sx={{ color: "text.primary" }}>
			<Grid item xs={4}>
				<Typography>Filled</Typography>
			</Grid>
			<Grid item xs={8}>
				<DeleteIcon />
				<DeleteForeverIcon />
			</Grid>
			<Grid item xs={4}>
				<Typography>Outlined</Typography>
			</Grid>
			<Grid item xs={8}>
				<DeleteOutlinedIcon />
				<DeleteForeverOutlinedIcon />
			</Grid>
			<Grid item xs={4}>
				<Typography>Rounded</Typography>
			</Grid>
			<Grid item xs={8}>
				<DeleteRoundedIcon />
				<DeleteForeverRoundedIcon />
			</Grid>
			<Grid item xs={4}>
				<Typography>Two Tone</Typography>
			</Grid>
			<Grid item xs={8}>
				<DeleteTwoToneIcon />
				<DeleteForeverTwoToneIcon />
			</Grid>
			<Grid item xs={4}>
				<Typography>Sharp</Typography>
			</Grid>
			<Grid item xs={8}>
				<DeleteSharpIcon />
				<DeleteForeverSharpIcon />
			</Grid>
			<Grid item xs={4}>
				<Typography>Edge-cases</Typography>
			</Grid>
			<Grid item xs={8}>
				<ThreeDRotationIcon />
				<FourKIcon />
				<ThreeSixtyIcon />
			</Grid>
		</Grid>
	);
}
function BasicButtons() {
	return (
		<Stack spacing={2} direction="row">
			<Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="outlined">Outlined</Button>
		</Stack>
	);
}

function App() {
	return (
		<div className="App">
			<BasicButtons />
			<SvgMaterialIcons />
		</div>
	);
}

export default App;
