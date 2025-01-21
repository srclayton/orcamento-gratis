import FiveColumns from "../FiveColumns/FiveColumns";
import TwoColumns from "../TwoColumns/TwoColumns";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import {
	issuerNameAndId,
	issuerEmailAndPhone,
	issuerAddress,
	clientNameAndId,
	clientEmailAndPhone,
	clientAddress,
} from "./constants";
function Form() {
	return (
		<form action="" className="border-2 shadow-2xl rounded-lg p-5">
			<h2 className="text-2xl text-blue-800 font-bold">Dados do Emissor</h2>
			<TwoColumns labels={issuerNameAndId} />
			<ThreeColumns labels={issuerEmailAndPhone} />
			<FiveColumns labels={issuerAddress} />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			<h2 className="text-2xl text-blue-800 font-bold">Dados do Cliente</h2>
			<TwoColumns labels={clientNameAndId} />
			<TwoColumns labels={clientEmailAndPhone} />
			<FiveColumns labels={clientAddress} />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			{/* <h2 className="text-2xl text-blue-800 font-bold">Itens do Orçamento</h2>
			<div className="flex flex-wrap gap-5 p-3">
				<div className="w-full">
					<label htmlFor="company" className="text-blue-800">
						Produto / Serviço *
					</label>
					<input
						type="text"
						name="productService"
						id="productService"
						className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
						require
						placeholder="Produto ou serviço"
					/>
				</div>
			</div> */}
		</form>
	);
}

export default Form;
