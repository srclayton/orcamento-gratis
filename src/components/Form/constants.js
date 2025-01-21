export const issuerNameAndId = [
	{
		title: "Nome",
		required: true,
		type: "text",
		id: "company",
		name: "company",
		placeholder: "Nome do prestador",
	},
	{
		title: "CPF / CNPJ",
		required: true,
		type: "text",
		id: "cpfOrCnpj",
		name: "cpfOrCnpj",
		placeholder: "000.000.000-00",
	},
];

export const issuerEmailAndPhone = [
	{
		title: "Email",
		required: true,
		type: "email",
		id: "email",
		name: "email",
		placeholder: "contato@exemplo.com",
	},
	{
		title: "Telefone",
		required: false,
		type: "text",
		id: "phone",
		name: "phone",
		placeholder: "(41)99999-9999",
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
		id: "cep",
		name: "cep",
		placeholder: "00000-000",
	},
	{
		title: "Logradouro",
		required: true,
		type: "text",
		id: "logradouro",
		name: "logradouro",
		placeholder: "Rua, Avenida, etc.",
	},
	{
		title: "Número",
		required: true,
		type: "text",
		id: "number",
		name: "number",
		placeholder: "123",
	},
	{
		title: "Bairro",
		required: true,
		type: "text",
		id: "district",
		name: "district",
		placeholder: "Bairro",
	},
	{
		title: "Estado",
		required: true,
		type: "text",
		id: "state",
		name: "state",
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
