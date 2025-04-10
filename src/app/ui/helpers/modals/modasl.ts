import Swal from 'sweetalert2';

export function showSuccessMessage(title: string, text: string) {
  Swal.fire({
    icon: 'success',
    title,
    text,
    showConfirmButton: false,
    timer: 1500
  });
}

export function showErrorMessage(error: any) {
  console.error('Error:', error);
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Ocurrió un problema al procesar la solicitud.',
  });
}
