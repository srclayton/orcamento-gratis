function TwoColumns(props) {
	const { labels } = props;
	return (
		<div className="flex flex-wrap gap-5 p-3">
			{labels.map((label) => {
				return (
					<div
						className={`w-full ${
							label.id === "company" ||
							label.id === "client" ||
							label.id === "clientEmail"
								? "md:w-7/12"
								: "flex-1"
						}`}
						key={label.id}
					>
						<label htmlFor={label.name} className="text-blue-800">
							{label.title} {label.required && "*"}
						</label>
						<input
							type={label.type}
							name={label.name}
							id={label.id}
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
