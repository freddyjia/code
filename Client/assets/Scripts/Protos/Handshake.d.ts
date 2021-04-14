import * as $protobuf from "protobufjs";
/** Properties of a HandshakeRequest. */
export interface IHandshakeRequest {

    /** HandshakeRequest uid */
    uid: string;

    /** HandshakeRequest token */
    token: string;
}

/** Represents a HandshakeRequest. */
export class HandshakeRequest implements IHandshakeRequest {

    /**
     * Constructs a new HandshakeRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IHandshakeRequest);

    /** HandshakeRequest uid. */
    public uid: string;

    /** HandshakeRequest token. */
    public token: string;

    /**
     * Creates a new HandshakeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HandshakeRequest instance
     */
    public static create(properties?: IHandshakeRequest): HandshakeRequest;

    /**
     * Encodes the specified HandshakeRequest message. Does not implicitly {@link HandshakeRequest.verify|verify} messages.
     * @param m HandshakeRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHandshakeRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HandshakeRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HandshakeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HandshakeRequest;
}

/** Properties of a HandshakeResponse. */
export interface IHandshakeResponse {

    /** HandshakeResponse statusCode */
    statusCode: number;

    /** HandshakeResponse errorMsg */
    errorMsg?: (string|null);
}

/** Represents a HandshakeResponse. */
export class HandshakeResponse implements IHandshakeResponse {

    /**
     * Constructs a new HandshakeResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IHandshakeResponse);

    /** HandshakeResponse statusCode. */
    public statusCode: number;

    /** HandshakeResponse errorMsg. */
    public errorMsg: string;

    /**
     * Creates a new HandshakeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HandshakeResponse instance
     */
    public static create(properties?: IHandshakeResponse): HandshakeResponse;

    /**
     * Encodes the specified HandshakeResponse message. Does not implicitly {@link HandshakeResponse.verify|verify} messages.
     * @param m HandshakeResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHandshakeResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HandshakeResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HandshakeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): HandshakeResponse;
}
