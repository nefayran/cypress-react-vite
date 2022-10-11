import { Plugin } from 'vite';

declare global {
    var __coverage__: any;
}
interface IstanbulPluginOptions {
    include?: string | string[];
    exclude?: string | string[];
    extension?: string | string[];
    requireEnv?: boolean;
    cypress?: boolean;
    checkProd?: boolean;
    forceBuildInstrument?: boolean;
    cwd?: string;
    nycrcPath?: string;
}
declare function istanbulPlugin(opts?: IstanbulPluginOptions): Plugin;

export { IstanbulPluginOptions, istanbulPlugin as default };
