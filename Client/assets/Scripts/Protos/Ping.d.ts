import * as $protobuf from "protobufjs";
/** Properties of a PingReq. */
export interface IPingReq {

    /** PingReq timestamp */
    timestamp: (number|Long);
}

/** Represents a PingReq. */
export class PingReq implements IPingReq {

    /**
     * Constructs a new PingReq.
     * @param [p] Properties to set
     */
    constructor(p?: IPingReq);

    /** PingReq timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new PingReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingReq instance
     */
    public static create(properties?: IPingReq): PingReq;

    /**
     * Encodes the specified PingReq message. Does not implicitly {@link PingReq.verify|verify} messages.
     * @param m PingReq message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPingReq, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingReq message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PingReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PingReq;
}

/** Properties of a PingRes. */
export interface IPingRes {

    /** PingRes currentTime */
    currentTime: string;
}

/** Represents a PingRes. */
export class PingRes implements IPingRes {

    /**
     * Constructs a new PingRes.
     * @param [p] Properties to set
     */
    constructor(p?: IPingRes);

    /** PingRes currentTime. */
    public currentTime: string;

    /**
     * Creates a new PingRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingRes instance
     */
    public static create(properties?: IPingRes): PingRes;

    /**
     * Encodes the specified PingRes message. Does not implicitly {@link PingRes.verify|verify} messages.
     * @param m PingRes message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPingRes, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingRes message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PingRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PingRes;
}
