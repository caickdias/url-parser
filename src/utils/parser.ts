const splitURL = (url: string) => {
    const [BASE_URL, RESOURCE] = url.split(/(?<!\/)\/(?!\/)/g) || null;
    const [SCHEME, HOSTNAME] = BASE_URL.split('//') || null;
    const [SUBDOMAIN, DOMAIN, TLD] = HOSTNAME.split('.') || null;
    const [PATH, QUERY] = RESOURCE.split('?') || null;    
    const ARGS: Record<string, string> = {}

    QUERY && QUERY.split('&')
        .forEach(arg => {
            const [key, value] = arg.split('=');
            ARGS[key] = value;
        });
        
    return {
        "baseURL": BASE_URL,
        "resource": RESOURCE,
        "scheme": SCHEME,
        "hostname": HOSTNAME,
        "subdomain": SUBDOMAIN,
        "domain": `${DOMAIN}.${TLD}`,
        "tld": TLD,
        "path": PATH,
        "query": QUERY,
        "args": ARGS,
    }; 
}

export {
    splitURL,
}