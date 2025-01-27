function Modal({ closeModal, message, title = "Atenção" }) {
	return (
		<div className="fixed inset-0 z-50">
			<div
				className="fixed inset-0 bg-black opacity-50"
				onClick={() => closeModal(false)}
			/>
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-1/2">
					<h2 className="text-xl font-bold mb-4">{title}</h2>
					<p className="mb-4 text-gray-700">{message}</p>
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
						onClick={() => closeModal(false)}
					>
						Fechar
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
