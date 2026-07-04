    const axios = require("axios");

    class HttpClient {

        constructor() {

            this.client = axios.create({
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json"
                }
            });

        }

        async get(url, headers = {}) {

            return this.client.get(url, {
                headers
            });

        }

        async post(url, body = {}, headers = {}) {

            return this.client.post(
                url,
                body,
                { headers }
            );

        }

        async put(url, body = {}, headers = {}) {

            return this.client.put(
                url,
                body,
                { headers }
            );

        }

        async delete(url, headers = {}) {

            return this.client.delete(
                url,
                { headers }
            );

        }

    }

    module.exports = new HttpClient();