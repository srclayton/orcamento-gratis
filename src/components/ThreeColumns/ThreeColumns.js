import { useState } from "react";
import { phoneApplyMask } from "../../utils/masks";
function ThreeColumns(props) {
	const { data } = props;
	const [value, setValue] = useState("");

	function handleChange(event) {
		const { value } = event.target;
		const onlyNumbers = value.replace(/\D/g, "");
		if (onlyNumbers.length > 11) return;
		return setValue(phoneApplyMask(onlyNumbers));
	}

	return (
		<div className="flex flex-wrap gap-4 p-3">
			{data.map((item, index) => (
				<div
					key={index}
					className={`w-full ${
						index === 0 ? "md:w-2/5" : index === 1 ? "md:w-2/12" : "flex-1 pl-2"
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

export default ThreeColumns;
