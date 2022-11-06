import { Base64 } from "js-base64";

/**
 * @desc 解密参数
 * @param ciphertext 密文
 */
function decodeParams(ciphertext: string): string {
  return Base64.decode(ciphertext);
}

/**
 * @desc 加密参数
 * @param plaintext 明文
 */
function encodeParams(plaintext: string): string {
  return Base64.encode(plaintext);
}

export { decodeParams };
export { encodeParams };
