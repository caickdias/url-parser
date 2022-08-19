export type SplittedUrl = {
    baseUrl: string;
    resource: string;
    scheme: string;
    hostname: string;
    subdomain: string;
    domain: string;
    tld: string;
    path: string;
    query: string;
    args: string;
}

export type Preferences = {
    hideKeys: boolean;
    plainText: boolean;
    showBaseUrl: boolean;
    showResource: boolean;
    showScheme: boolean;
    showHostname: boolean;
    showSubdomain: boolean;
    showDomain: boolean;
    showTld: boolean;
    showPath: boolean;
    showQuery: boolean;
    showArgs: boolean;
}