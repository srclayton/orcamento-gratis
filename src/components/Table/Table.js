function Table(props) {
	const { data, setData } = props;
	//eslint-disable-next-line
	let total = 0;
	return (
		<table className="w-full border-2 text-center">
			<thead>
				<tr className="bg-slate-100 text-blue-800">
					<th>Item</th>
					<th>Descrição</th>
					<th>Quantidade</th>
					<th>Valor Unitário</th>
					<th>Desconto</th>
					<th>Valor Total</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index} className="border-b-2">
						<td>{index + 1}</td>
						<td>{item.productService}</td>
						<td>{item.quantity}</td>
						<td>{item.price}</td>
						<td>{item.discount}</td>
						<td>{item.total}</td>
						<td>
							<button
								type="button"
								className="text-red-500 font-bold text-lg px-2"
								onClick={() => {
									if (setData) {
										setData(data.filter((_, i) => i !== index));
									}
								}}
								aria-label="Remover item"
							>
								×
							</button>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr className="bg-slate-100 text-blue-800">
					<td colSpan="6">Total</td>
					<td>
						{data.map((item) => {
							total += parseFloat(
								item.total.replace(/[R$\s.]+/g, "").replace(",", ".")
							);
							return null;
						})}
						{data
							.reduce(
								(acc, item) =>
									acc +
									parseFloat(
										item.total.replace(/[R$\s.]+/g, "").replace(",", ".")
									),
								0
							)
							.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
					</td>
				</tr>
			</tfoot>
		</table>
	);
}

export default Table;
