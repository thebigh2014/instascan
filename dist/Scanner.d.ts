/// <reference types="node" />
import { ScannerOptions, ScanPayload } from ".";
import { EventEmitter } from "events";
export default class Scanner extends EventEmitter {
    video: HTMLVideoElement;
    backgroundScan: boolean;
    private _continuous;
    private _mirror;
    private _scanProvider;
    private _fsm;
    constructor(opts: ScannerOptions);
    scan(): Promise<ScanPayload>;
    start(): Promise<void>;
    stop(): Promise<void>;
    camera: any;
    captureImage: any;
    scanPeriod: any;
    refractoryPeriod: any;
    continuous: any;
    mirror: any;
    private enableScan;
    private disableScan;
    private configureVideo;
    private createStateMachine;
}
//# sourceMappingURL=Scanner.d.ts.map