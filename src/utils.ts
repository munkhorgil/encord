/**
 * Convert number to bytes
 * @param bytes number
 * @param decimals number
 * @returns returns bytes formatted value
 */
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

/**
 * Send REST request
 * @param path - rest route
 * @param method - rest method
 * @returns request response
 */
export const sendRequest = async <T>(
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
): Promise<T> => {
  const response: Response = await fetch(`${process.env.API_URL}/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return (await response.json()) as Promise<T>;
};
