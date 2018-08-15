import { Result } from "@zxing/library";
export default class ZxingWrapper {
    private _reader;
    private _lastUsedDeviceId;
    constructor(scanPeriod?: number);
    private reset;
    decodeFromVideoElement(videoElement: HTMLVideoElement): Promise<Result>;
}
//# sourceMappingURL=ZxingWrapper.d.ts.map