export async function getMessages(locale) {
  return (await import(`./messages/${locale}.json`)).default;
}

export function getTranslations(messages) {
  return function t(key, params) {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== 'string') {
      return key;
    }
    
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] || match;
      });
    }
    
    return value;
  };
}

