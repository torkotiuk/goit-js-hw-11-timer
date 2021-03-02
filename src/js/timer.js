const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class Timer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  startTimer() {
    setInterval(() => {
      let currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      const time = this.getTimeComponents(deltaTime);
      this.updateTimeInDom(time);
    }, 1000);
  }

  updateTimeInDom(time) {
    const { days, hours, mins, secs } = time;
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timerTest = new Timer({
  // selector: '#timer-1',
  targetDate: new Date('May 1, 2021'),
});

timerTest.startTimer();
