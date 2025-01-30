import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { moneyApplyMask } from "../../utils/masks";

function ProductInput(props) {
	const { data, setData } = props;

	const [formData, setFormData] = useState({
		productService: "",
		quantity: 0,
		price: null,
		discount: "0",
		total: "0",
	});

	const [modalAlert, setModalAlert] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// Add useEffect for cleanup
	useEffect(() => {
		return () => {
			setModalAlert(false);
			setErrorMessage("");
		};
	}, []);

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
			let { price, discount, total } = updatedFormData;
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
			if (discount > grossAmount) {
				setErrorMessage("Desconto não pode ser maior que o valor total");
				setModalAlert(true);
				return prevState;
			}
			return updatedFormData;
		});
	};
	const handleAddProduct = () => {
		if (formData.productService === "") {
			setErrorMessage("Produto/Serviço é obrigatório");
			setModalAlert(true);
			return;
		} else if (formData.price === null) {
			setErrorMessage("Preço é obrigatório");
			setModalAlert(true);
			return;
		} else if (formData.quantity <= 0) {
			setErrorMessage("Quantidade deve ser maior que zero");
			setModalAlert(true);
			return;
		} else if (formData.total === "") {
			setErrorMessage("Total não pode ser zero");
			setModalAlert(true);
			return;
		}

		setData([...data, formData]);
		setFormData({
			productService: "",
			quantity: 0,
			price: "0",
			discount: "0",
			total: "0",
		});
	};

	return (
		<div className="flex flex-wrap gap-5 p-3">
			{modalAlert && (
				<Modal closeModal={setModalAlert} message={errorMessage} />
			)}
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
					placeholder="0"
					min={1}
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
