const { readFileSync } = require("fs");
const { performance, PerformanceObserver } = require("perf_hooks");

const obs = new PerformanceObserver(items => {
  console.log(items.getEntries());

  performance.clearMarks();
});

obs.observe({ entryTypes: ["measure"] });

performance.mark("BigFileStart");
readFileSync("./big.txt");
performance.mark("BigFileEnd")

performance.measure("Big File", "BigFileStart", "BigFileEnd")

performance.mark("SmallFileStart")
readFileSync("./small.txt")
performance.mark("SmallFileEnd")

performance.measure("Small File", "SmallFileStart", "SmallFileEnd")


