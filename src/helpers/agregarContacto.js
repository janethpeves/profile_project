import vCard from "vcards-js";

export function agregarContacto(
	nombre = "Nombre del Contacto",
	apellido = "Apellido del Contacto",
	email = "correo@ejemplo.com",
	celular = "123456789"
) {
	// Crear un nuevo vCard
	const vCardContacto = vCard();

	// Configurar los detalles del contacto
	vCardContacto.firstName = nombre;
	vCardContacto.lastName = apellido;
	vCardContacto.email = email;
	vCardContacto.cellPhone = celular; // Número de teléfono

	// Generar el archivo vCard en formato de texto
	const vCardTexto = vCardContacto.getFormattedString();

	// Crear un objeto Blob para el archivo vCard
	const blob = new Blob([vCardTexto], { type: "text/vcard" });

	// Crear un enlace de descarga y simular un clic para descargar el archivo
	const link = document.createElement("a");
	link.href = window.URL.createObjectURL(blob);
	link.setAttribute("download", `${nombre}-sempiterno.vcf`);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
