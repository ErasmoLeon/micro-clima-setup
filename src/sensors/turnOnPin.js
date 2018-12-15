import { Gpio } from 'onoff';

export default (pinNumber, seconds) => {
  const miliseconds = seconds * 1000;
  const gpioInterruptor = new Gpio(pinNumber, 'out');

  const gpioInterval = setInterval(() => {
    gpioInterruptor.writeSync(1);
  }, miliseconds);

  setTimeout(() => {
    clearInterval(gpioInterval);
    gpioInterruptor.writeSync(0);
    gpioInterruptor.unexport();
  }, miliseconds);
};
