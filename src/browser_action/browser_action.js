let schedule;
let mbg = document.createElement("img");
mbg.src = "mbg.jpg";
let tbg = document.createElement("img");
tbg.src = "tbg.jpg";
let wbg = document.createElement("img");
wbg.src = "wbg.jpg";
let thbg = document.createElement("img");
thbg.src = "thbg.jpg";
let fbg = document.createElement("img");
fbg.src = "fbg.jpg";
let sbg = document.createElement("img");
sbg.src = "sbg.jpg";
let wkDay;
let bgArr = [mbg.src, tbg.src, wbg.src, thbg.src, fbg.src, sbg.src];
let container = document.getElementById("container");
$(document).on('ready', () => {
    $.ajax({
        type: 'GET',
        url: 'http://slack-server.elasticbeanstalk.com/calendar/LA/20',
        success: function (data, status) {
            var currentTime = new Date();
            wkDay = currentTime.getDay();
            console.log(wkDay);
            document.body.style.backgroundImage = `url(${bgArr[wkDay-1]})`;
            let currDate = currentTime.toString().slice(4, 15);
            let counter = 0;
            while (currDate !== Object.entries(data)[counter][0]) {
                counter++;
            }
            for (let i = counter, j = 0; i < 2 + counter; i++, j++) {
                let dayBox = document.getElementById(`day${j}`);
                let today = Object.entries(data)[i][1];
                let newDate = document.createElement("div");
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
                newDate.appendChild(document.createTextNode(Object.entries(data)[i][0].slice(0,6)));
                document.getElementById(`title${j}`).appendChild(newDate);


            }

            return data;
        }
    });
    $(".btn").hover(function(){
        $('#title0').toggleClass("tmrw");
        $('#day0').toggleClass("tmrw");
        $('#title1').toggleClass("tmrw");
        $('#day1').toggleClass("tmrw");
        $('body').css('background-image', `url(${bgArr[wkDay]})`);
    }, function(){
        $('#title0').removeClass("tmrw");
        $('#day0').removeClass("tmrw");
        $('#title1').removeClass("tmrw");
        $('#day1').removeClass("tmrw");
        $('body').css('background-image', `url(${bgArr[wkDay-1]})`);
    })
});



