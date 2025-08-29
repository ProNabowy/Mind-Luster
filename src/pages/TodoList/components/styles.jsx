import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import {
	Button,
	FormControl,
	Stack,
	TableCell,
	TextField,
	Typography,
} from "@mui/material";

export const StyledHeaderContainer = styled("header")(({}) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "12px",
	borderBottom: "1px solid #D1D5DB",
	padding: "24px",
	"@media (max-width: 768px)": {
		flexDirection: "column",
		gap: "12px",
	},
}));

export const StyledInput = styled(TextField)(({}) => ({
	minWidth: "500px",
	"@media (max-width: 768px)": {
		minWidth: "100%",
	},
}));

export const StyledButton = styled(Button)(({}) => ({
	padding: "12px 32px",
	background: "#1264e3",
	textTransform: "capitalize",
	fontWeight: "600",
	borderRadius: "10px",
}));

export const StyledTasksContainer = styled(Stack)(({}) => ({
	padding: "24px",
}));

export const StyledTableCell = styled(TableCell, {
	shouldForwardProp: (prop) => prop !== "hideBorder",
})(({ hideBorder }) => ({
	fontWeight: 700,
	textTransform: "capitalize",
	borderBottom: 0,
	borderRight: hideBorder ? "none" : "1px solid #D1D5DB",
}));

export const StyledBodyTableCell = styled(TableCell, {
	shouldForwardProp: (prop) => prop !== "hideBorder",
})(({ hideBorder }) => ({
	borderBottom: 0,
	borderRight: hideBorder ? "none" : "1px solid #D1D5DB",
}));

export const StyledHiddenTableCell = styled(TableCell, {
	shouldForwardProp: (prop) => prop !== "hideBorder",
})(({ hideBorder }) => ({
	border: "none",
	padding: "8px",
}));

export const StyledCardContainer = styled(Stack)(({}) => ({
	padding: "12px",
	border: "1px solid #D1D5DB",
	borderRadius: "8px",
	boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
	background: "white",
}));
export const StyledCardTitle = styled(Typography)(({}) => ({
	fontsize: "24px",
	fontWeight: 600,
	marginBottom: "4px",
}));

export const StyledActionContainer = styled(Stack)(({}) => ({
	alignItems: "center",
	justifyContent: "end",
	marginTop: "8px",
}));

export const StyledActionButton = styled(LoadingButton)(({}) => ({
	minWidth: "40px",
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

export const StyledFormControl = styled(FormControl)(({}) => ({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: "12px",
	".has-full-width": {
		gridColumn: "1 / -1",
	},
}));

export const StyledCloseButton = styled(Button)(({}) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minWidth: "40px",
	width: "40px",
	height: "40px",
	borderRadius: "50%",
}));
