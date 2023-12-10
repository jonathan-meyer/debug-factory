import debug, { Formatters } from "debug";

export type Debugger = debug.Debugger;

class DebugFactory {
  static getDebugger(name: string, formatters?: Formatters): Debugger {
    debug.formatters = { ...debug.formatters, ...formatters };
    return debug(name);
  }

  static getDebuggers(name: string, formatters?: Formatters): Debugger[] {
    debug.formatters = { ...debug.formatters, ...formatters };
    return [debug(name), debug(`${name}:error`)];
  }
}

export default DebugFactory;
