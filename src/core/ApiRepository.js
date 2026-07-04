class ApiRepository {

    constructor() {
        this.apis = [];
    }

    /**
     * Store all APIs
     */
    setApis(apis) {
        this.apis = apis;
    }

    /**
     * Return all APIs
     */
    getAll() {
        return this.apis;
    }

    /**
     * Find APIs by HTTP Method
     */
    findByMethod(method) {
        return this.apis.filter(api =>
            api.method === method.toUpperCase()
        );
    }

    /**
     * Find API by Path
     */
    findByPath(path) {
        return this.apis.find(api =>
            api.path === path
        );
    }

    /**
     * Total APIs
     */
    count() {
        return this.apis.length;
    }

}

module.exports = new ApiRepository();