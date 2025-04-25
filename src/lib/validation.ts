export const validateTodoInput = (text: string): { isValid: boolean; error?: string } => {
  if (!text.trim()) {
    return { isValid: false, error: "Task cannot be empty" };
  }
  
  if (/^\s+$/.test(text)) {
    return { isValid: false, error: "Task cannot be all whitespace" };
  }

  if (/^[^a-zA-Z0-9À-ỹ\s]+$/.test(text)) {
    return { isValid: false, error: "Task cannot be all special characters" };
  }

  return { isValid: true };
};