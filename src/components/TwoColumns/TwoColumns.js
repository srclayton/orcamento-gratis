import { useState } from "react";
import { cpfApplyMask, cnpjApplyMask, phoneApplyMask } from "../../utils/masks";
function TwoColumns(props) {
	const { data } = props;
	const [value, setValue] = useState("");

	function handleChange(event) {
		const { value } = event.target;
		const onlyNumbers = value.replace(/\D/g, "");
		if (data[1].mask === "id") {
			switch (onlyNumbers.length) {
				case 11:
					return setValue(cpfApplyMask(onlyNumbers));
				case 14:
					return setValue(cnpjApplyMask(onlyNumbers));
				default:
					if (onlyNumbers.length > 14) return;
					else return setValue(onlyNumbers);
			}
		}
		if (onlyNumbers.length > 11) return;
		return setValue(phoneApplyMask(onlyNumbers));
	}

	return (
		<div className="flex flex-wrap gap-5 p-3">
			{data.map((label, index) => {
				return (
					<div
						className={`w-full ${index < 1 ? "md:w-7/12" : "flex-1"}`}
						key={label.id}
					>
						<label htmlFor={label.name} className="text-blue-800">
							{label.title} {label.required && "*"}
						</label>
						<input
							type={label.type}
							name={label.name}
							id={label.id}
							{...(label.hasMask && {
								value: value,
								onChange: handleChange,
							})}
							className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
							required={Boolean(label.required)}
							placeholder={label.placeholder}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default TwoColumns;
