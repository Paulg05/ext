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
            for (let i = counter, j = 0; i < 2 + counter; i++, j++) {
                let dayBox = document.getElementById(`day${j}`);
                let today = Object.entries(data)[i][1];
                let newDate = document.createElement("span");
                newDate.className = "date";
                
                for (let k = 0; k < today.length; k++) {
                    let myData = Object.entries(data)[i][1][k];

                    let newEvent = document.createElement("div");
                    let eventTime = document.createElement("div");
                    let summ = document.createElement("div");
                    newEvent.className = "event";
                    eventTime.className = "eventTime";
                    summ.className = "summ";
                    eventTime.appendChild(document.createTextNode(myData.start.dateTime.slice(11,16)));
                    summ.appendChild(document.createTextNode(myData.summary));
                    newEvent.appendChild(eventTime);
                    newEvent.appendChild(summ);
                    dayBox.append(newEvent);
                   
                }
                if (dayBox.id == "day1") {
                    dayBox.style.display = "none";
                    newDate.style.display = "none";
                }
                newDate.appendChild(document.createTextNode(Object.entries(data)[i][0].slice(0,6)));
                document.getElementById(`title${j}`).appendChild(newDate);


            }

            return data;
        }
    });
});

