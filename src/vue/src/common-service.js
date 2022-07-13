export const deepCopy = (item) => item ? JSON.parse(JSON.stringify(item)) : null;

export const uniqueId = () => (Math.random().toString(36) + Date.now().toString(36)).substr(2); 