import type {Proxy} from './util/model';

export let PORT = 8080; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [
    {
        domain: "proxydzg.zeabur.app",
        url: "https://www.google.com/",
        enable: true
    }
                              ];
