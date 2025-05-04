export const isValidInput = (value: string): boolean => {
    if (typeof value !== 'string') return false;
  
    const trimmed = value.trim();
  
    if (!trimmed) return false; // empty or whitespace
  
    // Disallow URLs
    const urlPattern = /https?:\/\/|www\./i;
    if (urlPattern.test(trimmed)) return false;
  
    // Disallow HTML tags
    const htmlTagPattern = /<[^>]*>/g;
    if (htmlTagPattern.test(trimmed)) return false;
  
    // Optional: Disallow input that's only symbols
    const alphaNumericPattern = /[a-zA-Z0-9]/;
    if (!alphaNumericPattern.test(trimmed)) return false;
  
    return true;
  };
  