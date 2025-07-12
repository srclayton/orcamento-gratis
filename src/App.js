import Form from "./components/Form/Form";
import "./output.css";
function App() {
	return (
		<div className="App flex flex-row items-center h-screen justify-stretch">
			<div className="w-1/6 hidden md:block"></div>
			<div className="m-auto px-2 md:px-0 text-start">
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
			<div className="md:w-1/6 hidden md:block"></div>
		</div>
	);
}

export default App;
