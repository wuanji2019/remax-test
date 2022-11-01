
import { reLaunch } from 'remax/one';

import { showToast, showLoading, hideLoading, getStorage, setStorage, request as Request } from '@/apis/CrossPlat';


function wrap() {
    const cache: any = {};
    function debounce(fn: any) {
      return (msg: any) => {
        if (cache[msg]) return;
        cache[msg] = true;
        fn(msg);
        setTimeout(() => {
          delete cache[msg];
        }, 2000);
      };
    }
    return debounce;
  }

export default function request(props: any) {
    return new Promise((resolve, reject) => {
        Request({
            url: `${process.env.REMAX_APP_BASE_URL}${props.url}`,
            header: {
                ...props.header
            },
            data: props.data,
            method: props.method,
            async success(response: { data: any; }) {
                const data = response.data;
                const success = data.code === 200 || data.repCode === '0000';
                const config: any = props.config;
                
                if (data.code === 401) {
                    reject();
                }

                if (!config.noError) {
                    if (!success) {
                        wrap()(showToast({ icon: 'error', title: data.msg || data.repMsg}))
                        reject()
                    }
                }

                return resolve({ success, ...data })
            },
            fail() {
                showToast({ icon: 'error', title: 'Request Fail!' });
                reject();
            }
        });
    })
}

export const get = (url: any, data: any) => request({ url, data, method: 'GET'})
export const post = (url: any, data: any) => request({ url, data, method: 'POST'})
export const put = (url: any, data: any) => request({ url, data, method: 'PUT'})
export const del = (url: any, data: any) => request({ url, data, method: 'DELETE'})
