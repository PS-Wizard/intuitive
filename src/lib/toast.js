// src/lib/toast.js
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export function showToast({ 
	title, 
	icon = 'info', 
	undoLink = null, 
	timer = 3000,
	showUndo = false // <-- explicitly control showing Undo button
}) {
	Swal.fire({
		title: title,
		icon: icon,
		timer: timer,
		timerProgressBar: true,
		toast: true,
		position: 'bottom-end', // ⬅️ bottom right
		showConfirmButton: showUndo,
		confirmButtonText: 'Undo',
		background: '#f9f9f9', // lighter bg (like Tailwind's gray-100)
		color: '#111827', // dark text (like Tailwind's gray-900)
		customClass: {
			popup: 'border-2 border-black rounded-lg p-4 shadow-md',
		},
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	}).then((result) => {
		if (result.isConfirmed && undoLink) {
			window.location.href = undoLink;
		}
	});
}

export function showConfirm({ title, icon = 'warning', confirmText = 'Yes', cancelText = 'No', onConfirm }) {
	Swal.fire({
		title: title,
		icon: icon,
		showCancelButton: true,
		confirmButtonText: confirmText,
		cancelButtonText: cancelText,
		background: '#f7f7f7',
		color: '#111827',
		customClass: {
			popup: 'text-lg font-bold rounded-lg p-6 shadow-md border-2 border-black',
		},
	}).then((result) => {
		if (result.isConfirmed && onConfirm) {
			onConfirm();
		}
	});
}
