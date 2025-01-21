import Form from "./components/Form/Form";
import "./output.css";
function App() {
	return (
		<div className="App">
			<div className="m-auto w-full md:w-4/6 px-2 md:px-0 text-start">
				<h1 className="p-7 text-5xl font-bold text-blue-800">
					Monte o seu
					<p className=" ">
						Orçamento{" "}
						<span className="rounded-xl bg-blue-800 text-white pt-2 px-2">
							Grátis
						</span>
					</p>
				</h1>

				<Form />
			</div>
		</div>
	);
}

export default App;
