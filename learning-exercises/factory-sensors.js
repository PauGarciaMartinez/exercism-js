export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) throw new Error('Too humid');
}

export function reportOverheating(temperature) {
  if (temperature === null) throw new ArgumentError('The sensor is broken');
  if (temperature > 500) throw new OverheatingError(temperature);
}

export function monitorTheMachine(actions) {
  const { check, alertDeadSensor, alertOverheating, shutdown } = actions;
  try {
    check();
  } catch(e) {
    const { constructor, temperature } = e;
    switch(constructor) {
      case ArgumentError:
        alertDeadSensor();
        break;
      case OverheatingError:
        temperature < 600 ? alertOverheating() : shutdown();
        break;
      default:
        throw e;
    }
  }
}
