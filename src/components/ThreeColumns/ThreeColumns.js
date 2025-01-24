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
			<div className="w-full md:w-2/5">
				<label htmlFor="company" className="text-blue-800">
					{data[0].title} {data[0].required && "*"}
				</label>
				<input
					type={data[0].type}
					name={data[0].name}
					id={data[0].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(data[0].required)}
					placeholder={data[0].placeholder}
				/>
			</div>
			<div className="w-full md:w-2/12">
				<label htmlFor="cpfOrCnpj" className="text-blue-800">
					{data[1].title} {data[1].required && "*"}
				</label>
				<input
					value={value}
					onChange={handleChange}
					type={data[1].type}
					name={data[1].name}
					id={data[1].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(data[1].required)}
					placeholder={data[1].placeholder}
				/>
			</div>
			<div className="w-full flex-1 pl-2">
				<label htmlFor="cpfOrCnpj" className="text-blue-800">
					{data[2].title} {data[2].required && "*"}
				</label>
				<input
					type={data[2].type}
					name={data[2].name}
					id={data[2].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(data[2].required)}
					placeholder={data[2].placeholder}
				/>
			</div>
		</div>
	);
}

export default ThreeColumns;
