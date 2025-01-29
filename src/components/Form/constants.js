export const issuerNameAndId = [
	{
		title: "Nome",
		required: true,
		type: "text",
		id: "issuer",
		name: "issuer",
		placeholder: "Nome do prestador",
		hasMask: false,
	},
	{
		title: "CPF / CNPJ",
		required: true,
		type: "text",
		id: "issuerCpfOrCnpj",
		name: "issuerCpfOrCnpj",
		placeholder: "000.000.000-00",
		hasMask: true,
		mask: "id",
	},
];

export const issuerEmailAndPhone = [
	{
		title: "Email",
		required: true,
		type: "email",
		id: "issuerEmail",
		name: "issuerEmail",
		placeholder: "contato@exemplo.com",
	},
	{
		title: "Telefone",
		required: false,
		type: "text",
		id: "issuerPhone",
		name: "issuerPhone",
		placeholder: "(41)99999-9999",
		hasMask: true,
	},
	{
		title: "Site",
		required: false,
		type: "text",
		id: "site",
		name: "site",
		placeholder: "www.exemplo.com",
	},
];

export const issuerAddress = [
	{
		title: "CEP",
		required: true,
		type: "text",
		id: "issuerCep",
		name: "issuerCep",
		placeholder: "00000-000",
		hasMask: true,
	},
	{
		title: "Logradouro",
		required: true,
		type: "text",
		id: "issuerLogradouro",
		name: "issuerLogradouro",
		placeholder: "Rua, Avenida, etc.",
	},
	{
		title: "Número",
		required: true,
		type: "text",
		id: "issuerNumber",
		name: "issuerNumber",
		placeholder: "123",
	},
	{
		title: "Bairro",
		required: true,
		type: "text",
		id: "issuerDistrict",
		name: "issuerDistrict",
		placeholder: "Bairro",
	},
	{
		title: "Estado",
		required: true,
		type: "text",
		id: "issuerState",
		name: "issuerState",
		placeholder: "PR",
	},
];

export const clientNameAndId = [
	{
		title: "Nome",
		required: true,
		type: "text",
		id: "client",
		name: "client",
		placeholder: "Nome do cliente",
	},
	{
		title: "CPF / CNPJ",
		required: true,
		type: "text",
		id: "clientCpfOrCnpj",
		name: "clientCpfOrCnpj",
		placeholder: "000.000.000-00",
		hasMask: true,
		mask: "id",
	},
];

export const clientEmailAndPhone = [
	{
		title: "Email",
		required: false,
		type: "email",
		id: "clientEmail",
		name: "clientEmail",
		placeholder: "contato@exemplo.com",
	},
	{
		title: "Telefone",
		required: false,
		type: "text",
		id: "clientPhone",
		name: "clientPhone",
		placeholder: "(41)99999-9999",
		hasMask: true,
		mask: "phone",
	},
];

export const clientAddress = [
	{
		title: "CEP",
		required: false,
		type: "text",
		id: "clientCep",
		name: "clientCep",
		placeholder: "00000-000",
		hasMask: true,
	},
	{
		title: "Logradouro",
		required: false,
		type: "text",
		id: "clientLogradouro",
		name: "clientLogradouro",
		placeholder: "Rua, Avenida, etc.",
	},
	{
		title: "Número",
		required: false,
		type: "text",
		id: "clientNumber",
		name: "clientNumber",
		placeholder: "123",
	},
	{
		title: "Bairro",
		required: false,
		type: "text",
		id: "clientDistrict",
		name: "clientDistrict",
		placeholder: "Bairro",
	},
	{
		title: "Estado",
		required: false,
		type: "text",
		id: "clientState",
		name: "clientState",
		placeholder: "PR",
	},
];
