
import fetchEnvironmentData from './fetchEnvironmentData';

export default () => {
  return new Promise((resolve, reject) => {
    fetchEnvironmentData()
      .then(({ temperature, humidity }) => {
        resolve(`temperatura ${temperature} ℃, humedad ${humidity} %`);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
