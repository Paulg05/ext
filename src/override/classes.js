class Calendar {
    constructor(schedule) {
        this.weeks = [];
        this.days = [];
        this.events = [];
    }
    
}
class Event {
    constructor(data) {
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.description = data.description;
    }
}

class Day {
  constructor(name) {
    this.name = name;
    this.events = [];
    this.addEvent = (eventData) => {
      this.events.push(new Event(eventData));
    }
    this.orderEvents = () => {
      //go through events and sort them by start and end time
    }
  }
}

class Week {
  constructor(number) {
    this.days = [];
    this.addDay = (name) => {
      const day = new Day(name);
      this.days.push(day);
    }
  }
}