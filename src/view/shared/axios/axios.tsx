import Axios from 'axios';
import config from 'src/config';
import Qs from 'qs';
import moment from 'moment';

const axios = Axios.create({
  baseURL: config.backendUrl,
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      filter: (prefix, value) => {
        if (
          moment.isMoment(value) ||
          value instanceof Date
        ) {
          return value.toISOString();
        }

        return value;
      },
    });
  },
});

export default axios;
