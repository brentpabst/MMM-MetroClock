Module.register("MMM-MetroClock", {
    // Default module config
    defaults: {
        // Add your module configuration options here
    },

    // Define required scripts.
	getScripts () {
		return ["moment.js", "moment-timezone.js", "suncalc.js"];
	},

    getStyles: function() {
        return [this.file("MMM-MetroClock.css")];
    },

    getTemplate: function() {
        return "MMM-MetroClock.njk";
    },

    // Add all the data to the template.
	getTemplateData () {
        return {
            now: moment(),
        };
    },

    // Override start method
    start: function() {
        // Perform any necessary setup or initialization
		Log.info(`Starting module: ${this.name}`);

        // Schedule update interval.
		this.second = moment().second();
		this.minute = moment().minute();

        const delayCalculator = (reducedSeconds) => {
			const EXTRA_DELAY = 50; // Deliberate imperceptible delay to prevent off-by-one timekeeping errors

			return 1000 - moment().milliseconds() + EXTRA_DELAY;
        };

        const timer = () => {
			this.updateDom();

			this.second = moment().second();
            if (this.second !== 0) {
                setTimeout(timer, delayCalculator(0));
                return;
            }

            // If minute changed or seconds isn't displayed send CLOCK_MINUTE-notification
            this.minute = moment().minute();

			setTimeout(timer, delayCalculator(0));
		};

		// Set the initial timeout with the amount of seconds elapsed as
		// reducedSeconds, so it will trigger when the minute changes
		setTimeout(timer, delayCalculator(this.second));

		// Set locale.
		moment.locale(config.language);
    },
});