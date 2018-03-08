let schedule;
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
            for (let i = counter; i < 2 + counter; i++) {
                let today = Object.entries(data)[i][1];
                for (let j = 0; j < today.length; j++) {
                    document.body.append(Object.entries(data)[i][1][j].summary);
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

