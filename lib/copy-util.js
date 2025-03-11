import { readFile, writeFile } from 'fs/promises';
import EventEmitter from 'events';

// EventEmitter -- events

export function copyFile(source, destination) {
  const emitter = new EventEmitter();

  // non blocking IO
  readFile(source, { encoding: 'utf-8'})
    .then((data) => {
      emitter.emit('readSuccess', data);
      return writeFile(destination, data);
    }, (err) => {
      emitter.emit('readError', err);
      // return a rejected promise
      return Promise.reject();
    })
    .then(() => {
      emitter.emit('writeSuccess');
    }, (err) => {
      // the rejected promise from the first then block
      // comes here
      if (err) {
        emitter.emit('writeError', err);
      }
    });

  return emitter;
}