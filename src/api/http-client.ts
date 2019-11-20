export class HttpClient {
  public static async makeRequest<T>(request: Request): Promise<T> {
    const response = await fetch(request);

    if (response.ok && response.type) return JSON.parse(await response.text());

    return Promise.reject(
      JSON.parse(`{
        "ok": "false",
        "data": { "message": "${response.statusText}" }
      }`),
    );
  }

  public static async get<T>(endpoint: string, headers = {}): Promise<T> {
    const request = new Request(endpoint, {
      body: null,
      headers,
      method: 'GET',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }

  public static async post<T>(
    endpoint: string,
    headers = {},
    body: object = {},
  ): Promise<T> {
    const request = new Request(endpoint, {
      body: JSON.stringify(body),
      headers,
      method: 'POST',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }

  public static async put(
    endpoint: string,
    headers = {},
    body: object = {},
  ): Promise<unknown> {
    const request = new Request(endpoint, {
      body: JSON.stringify(body),
      headers,
      method: 'PUT',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }

  public static async delete(endpoint: string, headers = {}): Promise<unknown> {
    const request = new Request(endpoint, {
      body: null,
      headers,
      method: 'DELETE',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }
}
