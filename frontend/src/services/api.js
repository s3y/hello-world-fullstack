const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function fetchMessage() {
  const response = await fetch(`${API_BASE_URL}/api/message`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
