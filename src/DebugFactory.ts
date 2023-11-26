import debug from "debug";

export type Debugger = debug.Debugger;

class DebugFactory {
  static getDebugger(name: string): Debugger {
    return debug(name);
  }

  static getDebuggers(name: string): Debugger[] {
    return [debug(name), debug(`${name}:error`)];
  }
}

export default DebugFactory;
