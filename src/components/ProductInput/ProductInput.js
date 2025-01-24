import { useState } from "react";

import { moneyApplyMask } from "../../utils/masks";

function ProductInput() {
	const [formData, setFormData] = useState({
		productService: "",
		quantity: 0,
		price: null,
		discount: "0",
		total: "0",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (
			name === "productService" ||
			(formData.price === null && name === "quantity")
		)
			return setFormData({
				...formData,
				[name]: value,
			});

		setFormData((prevState) => {
			const updatedFormData = { ...prevState, [name]: value };
			let { quantity, price, discount, total } = updatedFormData;
			price = moneyApplyMask(price);
			discount = moneyApplyMask(discount);

			const grossAmount = parseFloat(
				(
					parseFloat(price.replace(/\./g, "").replace(",", ".")) *
					updatedFormData.quantity
				).toFixed(2)
			);
			const discountOrZero =
				parseFloat(discount.replace(/\./g, "").replace(",", ".")) > 0
					? parseFloat(discount.replace(/\./g, "").replace(",", "."))
					: 0;
			const netAmount = parseFloat((grossAmount - discountOrZero).toFixed(2));
			total = netAmount.toLocaleString("pt-BR", {
				style: "currency",
				currency: "BRL",
			});
			updatedFormData.price = price;
			updatedFormData.discount = discount;
			updatedFormData.total = total;
			if (discount > grossAmount) window.alert("alguma coisa");
			return updatedFormData;
		});
	};
	const handleAddProduct = () => {
		console.log("Product added", formData);
	};
	return (
		<div className="flex flex-wrap gap-5 p-3">
			<div className="w-full">
				<label htmlFor="company" className="text-blue-800">
					Produto / Serviço *
				</label>
				<input
					value={formData.productService}
					onChange={handleChange}
					type="text"
					name="productService"
					id="productService"
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={true}
					placeholder="Produto ou serviço"
				/>
			</div>
			<div className="w-1/12">
				<label htmlFor="quantity" className="text-blue-800">
					Qntd *
				</label>
				<input
					value={formData.quantity}
					onChange={handleChange}
					type="number"
					name="quantity"
					id="quantity"
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={true}
					placeholder="0"
				/>
			</div>
			<div className="w-2/12">
				<label htmlFor="price" className="text-blue-800">
					Valor unitário *
				</label>
				<input
					value={formData.price}
					onChange={handleChange}
					type="text"
					name="price"
					id="price"
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					required={true}
					placeholder="0.00"
				/>
			</div>
			<div className="w-2/12">
				<label htmlFor="discount" className="text-blue-800">
					Desconto
				</label>
				<input
					value={formData.discount}
					onChange={handleChange}
					type="text"
					name="discount"
					id="discount"
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					placeholder="0.00"
				/>
			</div>
			<div className="w-2/12">
				<label htmlFor="total" className="text-blue-800">
					Total
				</label>
				<input
					value={formData.total}
					type="text"
					name="total"
					id="total"
					className="w-full p-2 border-2 border-none rounded-lg bg-slate-100"
					disabled
					placeholder={formData.total.toString()}
				/>
			</div>
			<div className="flex-1">
				<button
					onClick={handleAddProduct}
					type="button"
					className="w-full bg-blue-700 text-white p-2  mt-6 rounded-lg font-extrabold"
				>
					Adicionar
				</button>
			</div>
		</div>
	);
}

export default ProductInput;
