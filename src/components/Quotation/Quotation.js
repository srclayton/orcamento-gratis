import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
function Quotation() {
	//eslint-disable-next-line
	let total = 0;
	const location = useLocation();
	const { formData, items } = location.state;
	const componentRef = useRef(null);
	const quotationNumber =
		new Date().getFullYear() +
		("00000" + Math.floor(Math.random() * 100000)).slice(-3);
	const printFn = useReactToPrint({
		contentRef: componentRef,
		documentTitle: `Orçamento ${quotationNumber}`,
	});

	return (
		<>
			<div
				ref={componentRef}
				className="w-11/12 m-auto px-2 md:px-0 text-start"
			>
				<div className="mt-12 flex border-l-4 border-blue-400 justify-center items-center pl-4">
					<div className="w-full md:w-2/3 ">
					<p className="uppercase font-bold text-2xl">
						{formData.issuer}
						<br />
						{formData.issuerCpfOrCnpj}
					</p>
					<p>
						{formData.issuerLogradouro}, {formData.issuerNumber} {" "}
						- {formData.issuerCity} - {formData.issuerState}
					</p>
					<p>
						{formData.issuerEmail} - {formData.issuerPhone}
					</p>
					<p>{formData.site}</p>
					</div>
					<div className="w-full md:flex-1 flex flex-col items-end">
						<p>
							Orçamento nº
							{quotationNumber}
						</p>
						<p>
							{new Date().toLocaleString("pt-BR", {
								year: "numeric",
								month: "short",
								day: "numeric",
								hour: "numeric",
								minute: "numeric",
								second: "numeric",
							})}
						</p>
						<img
							src="https://placehold.co/100"
							alt=""
							className="rounded w-auto"
						/>
					</div>
				</div>
				<div className="px-20 mt-10">
					<hr />
				</div>
				<div className="mt-10 flex items-stretch">
					<div className="w-full md:w-2/3">
					<p className="uppercase font-bold text-lg">
						{formData.client}
						<br />
						{formData.clientCpfOrCnpj}
					</p>
					<p>
						{formData.clientLogradouro}, {formData.clientNumber} {" "}
						- {formData.clientCity} - {formData.clientState}
					</p>
					<p>
						{formData.clientEmail} - {formData.clientPhone}
					</p>
					</div>
					<div className="w-full md:flex-1 flex flex-col items-end">
						<p>Validade: 30 dias</p>
					</div>
				</div>
				<div className="px-20 mt-10">
					<hr />
				</div>
				<div className="mt-10">
					<table className="w-full text-center">
						<thead>
							<tr>
								<th>Descrição</th>
								<th>Quantidade</th>
								<th>Valor Unitário</th>
								<th>Valor Total</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item, index) => (
								<tr key={index} className="border-b-2">
									<td>{item.productService}</td>
									<td>{item.quantity}</td>
									<td>{item.price}</td>
									<td>{item.total}</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="3">Total</td>
								<td>
									{items.map((item) => {
										total += parseFloat(
											item.total.replace(/[R$\s.]+/g, "").replace(",", ".")
										);
										return null;
									})}
									{items
										.reduce(
											(acc, item) =>
												acc +
												parseFloat(
													item.total.replace(/[R$\s.]+/g, "").replace(",", ".")
												),
											0
										)
										.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
				<div className="mt-16 flex  items-stretch">
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center">
						<hr className="w-1/2" />
					<p>{formData.issuer}</p>
					</div>

					<div className="w-full md:flex-1 flex flex-col items-center justify-center">
						<hr className="w-1/2" />
					<p className="font-bold">{formData.client}</p>
					</div>
				</div>
			</div>
			<button
				className="bg-blue-400 text-white px-4 py-2 mt-4"
				onClick={printFn}
			>
				Imprimir
			</button>
		</>
	);
}
export default Quotation;
