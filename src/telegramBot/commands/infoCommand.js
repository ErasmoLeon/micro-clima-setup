
import fetchEnvironmentData from '../../sensors/fetchEnvironmentData';

export default () => new Promise((resolve, reject) => {
  fetchEnvironmentData()
    .then(({ temperature, humidity }) => {
      resolve(`temperatura ${temperature} ℃, humedad ${humidity} %`);
    })
    .catch((error) => {
      reject(error);
    });
});
