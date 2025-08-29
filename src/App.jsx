import { Stack } from "@mui/material";
import { Fragment, Suspense } from "react";
import useHandleRoutes from "./routes/routes";

function App() {
	const { routes } = useHandleRoutes();

	return (
		<Fragment>
			<Suspense fallback={"Loading"}>
				<Stack
					component={"main"}
					sx={{
						minHeight: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{routes}
				</Stack>
			</Suspense>
		</Fragment>
	);
}

export default App;
