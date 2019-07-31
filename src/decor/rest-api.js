const RestAPI = function (url) {
    return (target) => {
        class RestAPI extends target {
            constructor() {
                super(...arguments);
                this.baseUrl = url ? url : 'http://';
            }
            get() {
                console.log('will use', this.baseUrl)
            }

            getById() {
                console.log('will use', `${this.baseUrl}/${id}`);
            }

            create() {
                console.log('will use', `${this.baseUrl}/${id}`);
            }

            save() {
                console.log('->> will send data to', `${this.baseUrl}`);
            }
        };

        Object.defineProperty(RestAPI, 'name',
            {writable: true, value: target.name});
        Object.defineProperty(RestAPI, 'name',
            {writable: false});
        return RestAPI
    };
};

export default RestAPI;

@RestAPI()
export class BaseRestAPI {
    setBaseUrl(url){
        this.baseUrl = url;
        return this;
    }
}
