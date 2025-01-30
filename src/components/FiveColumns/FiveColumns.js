import { useState } from "react";
import { cepApplyMask } from "../../utils/masks";
import cepApi from "../../lib/api";
function FiveColumns(props) {
	const { data, identifier } = props;
	const [value, setValue] = useState("");

	function handleChange(event) {
		const { value } = event.target;
		const onlyNumbers = value.replace(/\D/g, "");
		if (onlyNumbers.length === 8) {
			cepApi.get(`${onlyNumbers}/json`).then((response) => {
				const { data } = response;
				if (data.erro) return;
				document.getElementById(`${identifier}Logradouro`).value =
					data.logradouro;
				document.getElementById(`${identifier}District`).value = data.bairro;
				document.getElementById(`${identifier}State`).value = data.uf;
			});
		}
		if (onlyNumbers.length > 8) return;
		return setValue(cepApplyMask(onlyNumbers));
	}
	return (
		<div className="flex flex-wrap gap-5 p-3">
			{data.map((item, index) => (
				<div
					key={index}
					className={`w-full ${
						index === 0
							? "md:w-1/6"
							: index === 1
							? "md:w-2/5"
							: index === 2
							? "md:w-1/12"
							: index === 3
							? "flex-1"
							: "md:w-1/12"
					}`}
				>
					<label htmlFor={item.name} className="text-blue-800">
						{item.title} {item.required && "*"}
					</label>
					<input
						{...(item.hasMask && {
							value: value,
							onChange: handleChange,
						})}
						type={item.type}
						name={item.name}
						id={item.id}
						className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
						required={Boolean(item.required)}
						placeholder={item.placeholder}
					/>
				</div>
			))}
		</div>
	);
}

export default FiveColumns;
