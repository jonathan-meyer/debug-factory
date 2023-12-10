# debug-factory
Factory for creating debug loggers

```TypeScript
import DebugFactory from "debug-factory";

const [log, error] = DebugFactory.getDebuggers("MyApp");

log("This is a log");
error("this is a error");
```

With a custom formatter
  
```TypeScript
const [log, error] = DebugFactory.getDebuggers("Memory", {
  x: (v) => v.toString(16)
});

log("putByte: add:0x%x val:0x%x", address, byte);
```