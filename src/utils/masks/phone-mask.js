export function phoneApplyMask(value) {
	return value
		.replace(/\D/g, "")
		.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
}
