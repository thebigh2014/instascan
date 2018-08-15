/// <reference types="node" />
import Camera from "./Camera";
import { ScanPayload } from ".";
import { EventEmitter } from "events";
export default class ScanProvider {
    scanPeriod: number;
    captureImage: boolean;
    refractoryPeriod: number;
    camera: Camera;
    private _emitter;
    private _video;
    private _canvas;
    private _context;
    private _active;
    private _lastResult;
    private _refractoryTimeout;
    private _reader;
    constructor(emitter: EventEmitter, video: HTMLVideoElement, captureImage: boolean, scanPeriod: number, refractoryPeriod: number);
    start(): void;
    stop(): void;
    scan(): Promise<ScanPayload>;
    private analyze;
    private doScan;
}
//# sourceMappingURL=ScanProvider.d.ts.map