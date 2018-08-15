export default class Camera {
    id: string;
    name: string;
    private _stream;
    constructor(id: string, name: string);
    start(): Promise<MediaStream>;
    stop(): void;
    static getCameras(): Promise<Camera[]>;
    static ensureAccess(): Promise<void>;
    static wrapErrors<T>(fn: () => Promise<T>): Promise<T>;
}
//# sourceMappingURL=Camera.d.ts.map