import {
  fetchEnvironmentDataAndRunActions,
} from '../src/scheduleRangeActions';

import turnOnPinMock from '../src/turnOnPin';
import fetchEnvironmentData from '../src/fetchEnvironmentData';

jest.mock('../src/fetchEnvironmentData', () => jest.fn().mockImplementation(() => {
  return Promise.resolve({
    temperature: 30,
    humidity: 60,
  });
}));

jest.mock('../src/turnOnPin', () => jest.fn().mockImplementation(() => true));

test('should run range actions', () => {
  fetchEnvironmentDataAndRunActions();
  expect(fetchEnvironmentData).toBeCalled();
  console.log(turnOnPinMock.mock);
});