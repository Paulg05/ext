let schedule;
let container = document.getElementById("container");
$(document).on('ready', () => {
    $.ajax({
        type: 'GET',
        url: 'http://slack-server.elasticbeanstalk.com/calendar/LA/20',
        success: function (data, status) {
            var currentTime = new Date();
            let currDate = currentTime.toString().slice(4, 15);
            let counter = 0;
            while (currDate !== Object.entries(data)[counter][0]) {
                counter++;
            }
            for (let i = counter, j = 0; i < 4 + counter; i++, j++) {
                let dayBox = document.getElementById(`day${j}`);
                let today = Object.entries(data)[i][1];
                let newDay = document.createElement("div");
                newDay.className = "day";
                newDay.appendChild(document.createTextNode(Object.entries(data)[i][0]));
                dayBox.append(newDay);
                for (let k = 0; k < today.length; k++) {
                    let newEvent = document.createElement("div");
                    newEvent.className = "event";
                    newEvent.appendChild(document.createTextNode(Object.entries(data)[i][1][k].summary));
                    dayBox.append(newEvent);
                }
            }
            // console.log(Object.entries(data));

            //console.log('currentTime = ' + currentTime.toString().slice());

            let paste = Object.entries(data)[0];
            let myCal = new Calendar(data);
            // document.body.append(JSON.stringify(paste.summary));
            return data;
        }
    });
});

