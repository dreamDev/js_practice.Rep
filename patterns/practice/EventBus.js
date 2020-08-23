class EventBus {
  handlers = [];

  subscribe(event, cb) {
    this.handlers.push({ event, cb });
  }

  unsubscribe(event) {
    this.handlers = this.handlers.filter((e) => e.event != event);
  }

  emit(event) {
    this.handlers.forEach((el) => {
      if (event === el.event) el.cb();
    });
  }
}

const bus = new EventBus();

bus.subscribe("onCheck", () => console.log("onCheck emitted!"));
bus.subscribe("onCheck", () => console.log("anoter onCheck emitted!"));
bus.subscribe("onSayHello", () => console.log("onSayHello emitted!"));

console.log(bus);

bus.emit("onCheck");
bus.unsubscribe("onCheck");

console.log(bus);
