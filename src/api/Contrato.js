// Contrato.js
import axios from 'axios';

export async function buscarContratoPorId(id) {
  try {
    const response = await axios.get(`api/contrato?id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
