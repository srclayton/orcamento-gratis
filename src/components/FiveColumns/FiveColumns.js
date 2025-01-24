function FiveColumns(props) {
	const { data } = props;
	return (
		<div className="flex flex-wrap gap-5 p-3">
			<div className="w-full md:w-1/6">
				<label htmlFor={data[0].name} className="text-blue-800">
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
			<div className="w-full md:w-2/5">
				<label htmlFor={data[1].name} className="text-blue-800">
					{data[1].title} {data[1].required && "*"}
				</label>
				<input
					type={data[1].type}
					name={data[1].name}
					id={data[1].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(data[1].required)}
					placeholder={data[1].placeholder}
				/>
			</div>
			<div className="w-full md:w-1/12">
				<label htmlFor={data[2].name} className="text-blue-800">
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
			<div className="w-full flex-1">
				<label htmlFor={data[3].name} className="text-blue-800">
					{data[3].title} {data[3].required && "*"}
				</label>
				<input
					type={data[3].type}
					name={data[3].name}
					id={data[3].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(data[3].required)}
					placeholder={data[3].placeholder}
				/>
			</div>
			<div className="w-full md:w-1/12">
				<label htmlFor={data[4].name} className="text-blue-800">
					{data[4].title} {data[4].required && "*"}
				</label>
				<input
					type={data[4].type}
					name={data[4].name}
					id={data[4].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(data[4].required)}
					placeholder={data[4].placeholder}
				/>
			</div>
		</div>
	);
}

export default FiveColumns;
