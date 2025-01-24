function FiveColumns(props) {
	const { labels } = props;
	return (
		<div className="flex flex-wrap gap-5 p-3">
			<div className="w-full md:w-1/6">
				<label htmlFor={labels[0].name} className="text-blue-800">
					{labels[0].title} {labels[0].required && "*"}
				</label>
				<input
					type={labels[0].type}
					name={labels[0].name}
					id={labels[0].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(labels[0].required)}
					placeholder={labels[0].placeholder}
				/>
			</div>
			<div className="w-full md:w-2/5">
				<label htmlFor={labels[1].name} className="text-blue-800">
					{labels[1].title} {labels[1].required && "*"}
				</label>
				<input
					type={labels[1].type}
					name={labels[1].name}
					id={labels[1].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(labels[1].required)}
					placeholder={labels[1].placeholder}
				/>
			</div>
			<div className="w-full md:w-1/12">
				<label htmlFor={labels[2].name} className="text-blue-800">
					{labels[2].title} {labels[2].required && "*"}
				</label>
				<input
					type={labels[2].type}
					name={labels[2].name}
					id={labels[2].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(labels[2].required)}
					placeholder={labels[2].placeholder}
				/>
			</div>
			<div className="w-full flex-1">
				<label htmlFor={labels[3].name} className="text-blue-800">
					{labels[3].title} {labels[3].required && "*"}
				</label>
				<input
					type={labels[3].type}
					name={labels[3].name}
					id={labels[3].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(labels[3].required)}
					placeholder={labels[3].placeholder}
				/>
			</div>
			<div className="w-full md:w-1/12">
				<label htmlFor={labels[4].name} className="text-blue-800">
					{labels[4].title} {labels[4].required && "*"}
				</label>
				<input
					type={labels[4].type}
					name={labels[4].name}
					id={labels[4].id}
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={Boolean(labels[4].required)}
					placeholder={labels[4].placeholder}
				/>
			</div>
		</div>
	);
}

export default FiveColumns;
