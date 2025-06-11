export function saveToStorage(data) {
  localStorage.setItem('transactions', JSON.stringify(data));
}

export function getFromStorage() {
  const saved = localStorage.getItem('transactions');
  return saved ? JSON.parse(saved) : [];
}
