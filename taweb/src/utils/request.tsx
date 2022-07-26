import React from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

// noinspection HttpUrlsUsage
export const host = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'api'

interface Config extends AxiosRequestConfig {
  initState?: any,
  isManual?: boolean
}

export function useHttp(url: string, config: Config = {}) {
  const [state, setState] = React.useState(config.initState === undefined ? {} : config.initState);
  const [loading, setLoading] = React.useState(!config.isManual);
  const [hasError, setHasError] = React.useState<boolean | AxiosResponse>(false);

  const http = React.useCallback(async (i?, p?, d?) => {
    try {
      setLoading(true);
      let res = await axios.request({
        method: config.method || 'GET',
        url: host + url + (i ? `/${i}` : ''),
        params: p || config.params,
        data: d || config.data,
        withCredentials: true
      });
      setHasError(false);
      setState(res.data);
      return res.data;

    } catch (e) {
      let res: AxiosResponse = e.response;
      message.error(res.data.error)
      setHasError(res);
      throw res;

    } finally {
      setLoading(false);
    }
  }, [config.data, config.method, config.params, url]);

  React.useEffect(() => {
    if (!config.isManual) {
      http()
    }
    return () => { };
  }, [config.isManual, http]);

  return { state, loading, hasError, http, setState };
}
