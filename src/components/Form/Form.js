import FiveColumns from "../FiveColumns/FiveColumns";
import TwoColumns from "../TwoColumns/TwoColumns";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import {
	issuerNameAndId,
	issuerEmailAndPhone,
	issuerAddress,
	clientNameAndId,
	clientEmailAndPhone,
	clientAddress
} from "./constants";
import ProductInput from "../ProductInput/ProductInput";
import Table from "../Table/Table";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form() {
	const [items, setItems] = useState([]);
	const navigate = useNavigate();
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);

		// Converte FormData para objeto simples
		const formObj = {};
		for (const [key, value] of formData.entries()) {
			formObj[key] = value;
		}

		navigate("/quotation", {
			state: {
				formData: formObj,
				items: items,
			},
		});
	}
	return (
		<form
			className="border-2 shadow-2xl rounded-lg p-5"
			onSubmit={handleSubmit}
		>
			<h2 className="text-2xl text-blue-800 font-bold">Dados do Emissor</h2>
			<TwoColumns data={issuerNameAndId} />
			<ThreeColumns data={issuerEmailAndPhone} />
			<FiveColumns data={issuerAddress} identifier="issuer" />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			<h2 className="text-2xl text-blue-800 font-bold">Dados do Cliente</h2>
			<TwoColumns data={clientNameAndId} />
			<TwoColumns data={clientEmailAndPhone} />
			<FiveColumns data={clientAddress} identifier="client" />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			<h2 className="text-2xl text-blue-800 font-bold">Itens do Orçamento</h2>
			<ProductInput data={items} setData={setItems} />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			<Table data={items} setData={setItems} />
			<div className="w-2/3 mx-auto py-10">
				<hr />
			</div>
			<div className="flex justify-end">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit"
				>
					Enviar
				</button>
			</div>
		</form>
	);
}

export default Form;
