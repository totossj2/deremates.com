import { FiMap, FiCamera, FiBell } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
} from "react-icons/ri";

export const appData: AppData = {
	title: "DeRemate.com",
	description:
		"La app de logística de DeRemate.com optimiza las entregas permitiendo a los repartidores gestionar rutas de forma eficiente mediante escaneo de códigos QR, navegación en tiempo real y confirmación segura de entrega.",
	logo: {
		type: "iframe",
		src: "https://i.pinimg.com/originals/bc/85/0f/bc850fcedb45dce673057d546b0b2810.gif",
	},
	screenshots: {
		iphone: [
			"screenshots/iphone/1.png",
			"screenshots/iphone/2.png",
			"screenshots/iphone/3.png",
			"screenshots/iphone/4.png",
			"screenshots/iphone/5.png",
			"screenshots/iphone/6.png",
			"screenshots/iphone/7.png",
			"screenshots/iphone/8.png",
		],
		ipad: [
			"screenshots/ipad/ipad_1.jpg",
		],
	},
	features: [
		{
			title: "Gestión Eficiente de Rutas",
			description: "Los repartidores pueden escanear códigos QR para activar y gestionar sus rutas de entrega de manera rápida y precisa.",
			icon: FiMap,
		},
		{
			title: "Seguimiento y Confirmación",
			description: "Cada entrega se confirma con un código único proporcionado por el cliente, asegurando un proceso seguro y confiable.",
			icon: FiCamera,
		},
		{
			title: "Notificaciones en Tiempo Real",
			description: "Recibe alertas instantáneas sobre nuevas rutas disponibles o cambios en las entregas pendientes.",
			icon: FiBell,
		}
	],
	faqs: [
		{
			question: "¿Cómo activo una ruta de entrega?",
			answer: "Para activar una ruta, escanea el código QR asociado con el paquete desde la aplicación y sigue las instrucciones en pantalla.",
		},
		{
			question: "¿Qué hago si el código QR no funciona?",
			answer: "Si tienes problemas con el escaneo, intenta limpiar la cámara de tu dispositivo o ingresar el código manualmente si la opción está disponible.",
		},
		{
			question: "¿Cómo confirmo una entrega?",
			answer: "Una vez que llegues al destino, ingresa el código de confirmación proporcionado por el cliente para completar la entrega.",
		}
	],
	storeLinks: {
		apple: "#", // Replace with your App Store link
		google: "#", // Replace with your Google Play link
	},
	socialLinks: [
		{
			url: "#",
			icon: RiInstagramFill,
			label: "Instagram",
		},
		{
			url: "#",
			icon: RiTelegram2Fill,
			label: "Telegram",
		},
		{
			url: "#",
			icon: RiTwitterXFill,
			label: "Twitter",
		},
	],
};
