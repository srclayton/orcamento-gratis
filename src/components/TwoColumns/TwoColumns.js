function TwoColumns(props) {
	const { labels } = props;
	console.log(labels);
	return (
		<div className="flex flex-wrap gap-5 p-3">
			<div className="w-full md:w-7/12">
				<label htmlFor="company" className="text-blue-800">
					{labels[0].title} {labels[0].required && "*"}
				</label>
				<input
					type={labels[0].type}
					name={labels[0].name}
					id={labels[0].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					require={labels[0].required}
					placeholder={labels[0].placeholder}
				/>
			</div>
			<div className="w-full flex-1">
				<label htmlFor="cpfOrCnpj" className="text-blue-800">
					{labels[1].title} {labels[1].required && "*"}
				</label>
				<input
					type={labels[1].type}
					name={labels[1].name}
					id={labels[1].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={labels[1].required}
					placeholder={labels[1].placeholder}
				/>
			</div>
		</div>
	);
}

export default TwoColumns;
