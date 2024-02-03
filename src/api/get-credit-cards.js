import { api } from '@/lib/axios';

export async function getCreditCard() {
    const response = await api.get('creditCards');
    return response.data;
}
