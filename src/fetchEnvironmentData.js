import sensor from 'node-dht-sensor';

const DTH_11 = 11;
const READ_PIN = 4;

export default (cb) => () => {
  sensor.read(DTH_11, READ_PIN, function (err, temperature, humidity) {
    if (!err) {
      cb({
        temperature,
        humidity
      });
    }
  });
}