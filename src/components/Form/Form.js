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
import ProductInput from "../ProductInput/ProductInput";
function Form() {
	return (
		<form action="" className="border-2 shadow-2xl rounded-lg p-5">
			<h2 className="text-2xl text-blue-800 font-bold">Dados do Emissor</h2>
			<TwoColumns data={issuerNameAndId} />
			<ThreeColumns data={issuerEmailAndPhone} />
			<FiveColumns data={issuerAddress} />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			<h2 className="text-2xl text-blue-800 font-bold">Dados do Cliente</h2>
			<TwoColumns data={clientNameAndId} />
			<TwoColumns data={clientEmailAndPhone} />
			<FiveColumns data={clientAddress} />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			<h2 className="text-2xl text-blue-800 font-bold">Itens do Orçamento</h2>
			<ProductInput />
		</form>
	);
}

export default Form;
