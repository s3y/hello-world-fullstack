export async function fetchMessage() {
  const response = await fetch('/api/message');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
