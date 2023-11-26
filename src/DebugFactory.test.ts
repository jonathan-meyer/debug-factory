import DebugFactory from "./DebugFactory";

describe("DebugFactory Tests", () => {
  test("passes a basic sanity check", () => {
    const log = DebugFactory.getDebugger("test");
    log.enabled = true;
    log.log = () => {};

    expect(() => log("hello world")).not.toThrow();
  });

  test("test getDebugger", () => {
    const log = DebugFactory.getDebugger("test");
    log.enabled = true;

    const messages = [];
    log.log = (...args) => messages.push(args);

    log("this is a test");
    log("this is a test");

    expect(messages.length).toBe(2);
  });

  describe("test getDebuggers", () => {
    const [log, error] = DebugFactory.getDebuggers("test");

    test("log", () => {
      expect(log.namespace).toBe("test");
    });

    test("error", () => {
      expect(error.namespace).toBe("test:error");
    });
  });
});
