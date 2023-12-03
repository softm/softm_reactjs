import debug from 'debug';

const BASE = 'ags-client';
const COLORS = {
  trace: 'lightblue',
  log: 'gray',
  debug: 'black',
  info: 'blue',
  warn: 'pink',
  error: 'red',
  callback: 'red',
  effect: 'red',
};

class Logger {
  constructor(category) {
    this.category = category;
  }

  static create(value) {
    return new Logger(value);
  }

  // eslint-disable-next-line class-methods-use-this
  generateMessage(level, message, source) {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`;
    const createDebug = debug(namespace);

    // Set the colour of the message based on the level
    createDebug.color = COLORS[level];

    const concatMessage = this.category ? `${this.category}> ${message}` : message;

    if (source) {
      createDebug(concatMessage, source);
    } else {
      createDebug(concatMessage);
    }
  }

  trace(message, source) {
    return this.generateMessage('trace', message, source);
  }

  log(message, source) {
    return this.generateMessage('log', message, source);
  }

  debug(message, source) {
    return this.generateMessage('debug', message, source);
  }

  info(message, source) {
    return this.generateMessage('info', message, source);
  }

  warn(message, source) {
    return this.generateMessage('warn', message, source);
  }

  error(message, source) {
    return this.generateMessage('error', message, source);
  }

  callback(message = '>>CALLBACK<<', source) {
    return this.generateMessage('callback', message, source);
  }

  effect(message = '>>EFFECT<<', source) {
    return this.generateMessage('effect', message, source);
  }

  effectOnce(message = '>>ONCE<<', source) {
    return this.generateMessage('effect', message, source);
  }
}

export default Logger;
