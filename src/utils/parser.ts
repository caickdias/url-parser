import { Preferences, SplittedUrl } from "../types";

const splitURL = (url: string) => {
    const [BASE_URL, RESOURCE] = url.split(/(?<!\/)\/(?!\/)/g) || null;
    const [SCHEME, HOSTNAME] = BASE_URL.split('//') || null;
    const [SUBDOMAIN, DOMAIN, TLD] = (HOSTNAME || '').split('.');
    const [PATH, QUERY] = (RESOURCE || '').split('?') || null;    
    const ARGS: Record<string, string> = {}
    
    QUERY && QUERY.split('&')
    .forEach(arg => {
        const [key, value] = arg.split('=');
        ARGS[key] = value;
    });
        
   return {
        "baseUrl": BASE_URL,
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

const generateParsedStringUrl = (urlObject: SplittedUrl, preferences: Preferences) => {
    
    const { baseUrl, resource, scheme, hostname, subdomain, domain, tld, path, query, args } = urlObject;
    const { hideKeys, plainText, showBaseUrl, showResource, showScheme, showHostname, showSubdomain, showDomain, showTld, showPath, showQuery, showArgs } = preferences;
    
    let response = '{';

    //i should make this in a loop someday
    (baseUrl && showBaseUrl) && (response += `\n\t${(!hideKeys ? 'baseUrl : ' : '')}"${baseUrl}",`);
    (resource && showResource) && (response += `\n\t${(!hideKeys ? 'resource : ' : '')}"${resource}",`);
    (scheme && showScheme) && (response += `\n\t${(!hideKeys ? 'scheme : ' : '')}"${scheme}",`);
    (hostname && showHostname) && (response += `\n\t${(!hideKeys ? 'hostname: ' : '')}"${hostname}",`);
    (subdomain && showSubdomain) && (response += `\n\t${(!hideKeys ? 'subdomain: ' : '')}"${subdomain}",`);
    (domain && showDomain) && (response += `\n\t${(!hideKeys ? 'domain: ' : '')}"${domain}",`);
    (tld && showTld) && (response += `\n\t${(!hideKeys ? 'tld: ' : '')}"${tld}",`);
    (path && showPath) && (response += `\n\t${(!hideKeys ? 'path: ' : '')}"${path}",`);
    (query && showQuery) && (response += `\n\t${(!hideKeys ? 'query: ' : '')}"${query}",`);
    (args && Object.keys(args).length > 0 && showArgs) && (response += `\n\t${(!hideKeys ? 'args: {' : '')}${        
        Object.entries(args).map(arg => {                        
            return `\n\t\t${arg[0]} : "${arg[1]}"`
        })
    }\n\t},`);
    
    response += '\n}';

    if(plainText){
        return response.replace(/{|}|"|,|\t|/g, '')
    }

    return response;
}

export {
    splitURL,
    generateParsedStringUrl,
}