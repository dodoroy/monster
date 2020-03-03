import router from '@/router';
import axios, { AxiosInstance } from 'axios';
import isPlainObject from 'lodash/isPlainObject';
const Cookies =require( 'js-cookie');
const qs =require( 'qs');

// import { clearLoginInfo } from '@/utils';

export declare interface IHttp extends AxiosInstance {
    pendingRequests?: { [propName: string]: Function }; // 当前异步请求队列
    cancelPending?: Function; // 用于终止请求的方法({url method})
}

const http: IHttp = axios.create({
    timeout: 1000 * 180,
    withCredentials: true
});

/**
 * 添加终止请求方法
 */
http.cancelPending = (config: any) => {
    if (http.pendingRequests && http.pendingRequests[`${config.url}&${config.method}`]) {
        http.pendingRequests[`${config.url}&${config.method}`]('canceled'); // 执行取消操作
        delete http.pendingRequests[`${config.url}&${config.method}`];
    }
};

/**
 * 请求拦截
 */
http.interceptors.request.use(
    (config) => {
        // token
        config.headers.token = Cookies.get('token');
        // config.headers.common[‘X-Access-Token’] = store.state.token
        if (config.method === 'get') {
            config.params = {
                ...config.params,
                ...{ _t: new Date().getTime() }
            };
        }
        if (isPlainObject(config.params)) {
            config.params = {
                ...config.params
            };
        }
        if (isPlainObject(config.data)) {
            config.data = {
                ...config.data
            };
            if (/^application\/x-www-form-urlencoded/.test(config.headers['content-type'])) {
                config.data = qs.stringify(config.data);
            }
        }
        if (http.cancelPending) {
            http.cancelPending(config); // 在一个请求发送前执行一下取消操作
            config.cancelToken = new axios.CancelToken((cancelFn: Function) => {
                if (http.pendingRequests) {
                    http.pendingRequests[`${config.url}&${config.method}`] = cancelFn;
                } else {
                    http.pendingRequests = {};
                    http.pendingRequests[`${config.url}&${config.method}`] = cancelFn;
                }
            });
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
    (response) => {
        if (http.cancelPending) {
            http.cancelPending(response.config);
        }
        if (response.data && response.data.code === 401) {
            // 401, token失效
            // clearLoginInfo();
            router.replace({ name: 'login' });
            return Promise.reject(response.data.msg);
        }
        return response.data;
    },
    (error) => {
        if (error && error.response && error.response.status === 401) {
            // clearLoginInfo();
            router.replace({ name: 'login' });
        }
        return Promise.reject(error);
    }
);

export default http;
