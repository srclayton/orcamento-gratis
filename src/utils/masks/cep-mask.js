export function cepApplyMask(value) {
	return value.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2");
}
