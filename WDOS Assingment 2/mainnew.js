if (window.location.href == "https://akilz02.github.io/WDOS_Assignment/Home.html") {

    // calander 

    function goBack() {
        window.history.back();
    }

    const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span");
    // getting new date, current year and month
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();
    // storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";
        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }
        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}"  id="num${i}" onclick="getSelectedDay(${i})">${i}</li>`;
        }
        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        daysTag.innerHTML = liTag;
    }
    renderCalendar();
    prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
            // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
            renderCalendar(); // calling renderCalendar function
        });
    });

    ////////////////////////////////////////////////////////
    let dateSetup = new Date();
    let day = dateSetup.getDate();

    let prev = "num" + day;

    function getSelectedDay(i) {

        let selectedDay = document.getElementById(`num${i}`);
        selectedDay.classList.add("active");


        let selectedDefaultDay = document.getElementById(prev);
        selectedDefaultDay.classList.remove("active");

        prev = "num" + i;

        dateSetup = i + '/' + (currMonth + 1) + '/' + currYear;

        document.getElementById('selected-date').innerText = dateSetup;
    }
    ///////////////////////////////////////////////////////////

    // add guest

    let guestcount1 = 0;
    let guestcount2 = 0;
    let guestcount3 = 0;
    let guestcount4 = 0;
    let guestcount5 = 0;

    document.getElementById('g1').innerText = guestcount1;
    document.getElementById('g2').innerText = guestcount2;
    document.getElementById('g3').innerText = guestcount3;
    document.getElementById('g4').innerText = guestcount4;
    document.getElementById('g5').innerText = guestcount5;

    let storageInitial = 0;
    sessionStorage.setItem("sri-lanka-adult", storageInitial);
    sessionStorage.setItem("sri-lanka-child", storageInitial);
    sessionStorage.setItem("for-adult", storageInitial);
    sessionStorage.setItem("for-child", storageInitial);


    function pf1() {

        guestcount1 = guestcount1 + 1;
        document.getElementById('g1').innerText = guestcount1;

        let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
        let peakcount = (sessionStorage.getItem("l-peakcount"));

        document.getElementById('ccc').style.display = "none";
        document.getElementById('sri-ad').style.display = "";
        document.getElementById('sriadult1').innerText = `${guestcount1} SL adult`;
        charge1 = guestcount1 * ((4 * normalh) + (6 * peakcount));
        document.getElementById('sriadult2').innerText = `$${charge1}`;
        sessionStorage.setItem('sri-lanka-adult', charge1);

        let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
        document.getElementById('total2').innerText = `$${sum}`;



    }

    function nf1() {
        if (guestcount1 == 0) {
            guestcount1 = 0;
            document.getElementById('sri-ad').style.display = "none";

        }
        else {
            guestcount1 = guestcount1 - 1;
            document.getElementById('g1').innerText = guestcount1;

            let charge1 = 0;
            let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
            let peakcount = (sessionStorage.getItem("l-peakcount"));

            document.getElementById('ccc').style.display = "none";
            document.getElementById('sri-ad').style.display = "";
            document.getElementById('sriadult1').innerText = `${guestcount1} SL adult`;
            charge1 = guestcount1 * ((4 * normalh) - (6 * peakcount));
            document.getElementById('sriadult2').innerText = `$${charge1}`;
            sessionStorage.setItem('sri-lanka-adult', charge1);

            let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
            document.getElementById('total2').innerText = `$${sum}`;


        }
    }



    function pf2() {
        guestcount2 = guestcount2 + 1;
        document.getElementById('g2').innerText = guestcount2;

        let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
        let peakcount = (sessionStorage.getItem("l-peakcount"));

        document.getElementById('ccc').style.display = "none";
        document.getElementById('sri-ch').style.display = "";
        document.getElementById('srichil1').innerText = `${guestcount2} SL child`;
        charge1 = guestcount2 * ((2 * normalh) + (3 * peakcount));
        document.getElementById('srichild2').innerText = `$${charge1}`;
        sessionStorage.setItem('sri-lanka-child', charge1);

        let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
        document.getElementById('total2').innerText = `$${sum}`;

    }

    function nf2() {
        if (guestcount2 == 0) {
            guestcount2 = 0
            document.getElementById('sri-ch').style.display = "none";

        }
        else {
            guestcount2 = guestcount2 - 1;
            document.getElementById('g2').innerText = guestcount2;

            let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
            let peakcount = (sessionStorage.getItem("l-peakcount"));

            document.getElementById('ccc').style.display = "none";
            document.getElementById('sri-ch').style.display = "";
            document.getElementById('srichil1').innerText = `${guestcount2} SL child`;
            charge1 = guestcount2 * ((2 * normalh) + (3 * peakcount));
            document.getElementById('srichild2').innerText = `$${charge1}`;
            sessionStorage.setItem('sri-lanka-child', charge1);


            let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
            document.getElementById('total2').innerText = `$${sum}`;

        }
    }









    function pf3() {
        guestcount3 = guestcount3 + 1;
        document.getElementById('g3').innerText = guestcount3;

        let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
        let peakcount = (sessionStorage.getItem("l-peakcount"));

        document.getElementById('ccc').style.display = "none";
        document.getElementById('fore-adult').style.display = "";
        document.getElementById('foradult1').innerText = `${guestcount3} Foreigner Adult`;
        charge1 = guestcount3 * ((8 * normalh) + (10 * peakcount));
        document.getElementById('foradult2').innerText = `$${charge1}`;
        sessionStorage.setItem('for-adult', charge1);

        let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
        document.getElementById('total2').innerText = `$${sum}`;

    }


    function nf3() {
        if (guestcount3 == 0) {
            guestcount3 = 0
            document.getElementById('for-adult').style.display = "none";
        }
        else {
            guestcount3 = guestcount3 - 1;
            document.getElementById('g3').innerText = guestcount3;

            let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
            let peakcount = (sessionStorage.getItem("l-peakcount"));

            document.getElementById('ccc').style.display = "none";
            document.getElementById('fore-adult').style.display = "";
            document.getElementById('for-adult1').innerText = `${guestcount3} Foreigner Adult`;
            charge1 = guestcount3 * ((8 * normalh) + (10 * peakcount));
            document.getElementById('for-adult2').innerText = `$${charge1}`;
            sessionStorage.setItem('for-adult', charge1);


            let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
            document.getElementById('total2').innerText = `$${sum}`;
        }
    }


    function pf4() {
        guestcount4 = guestcount4 + 1;
        document.getElementById('g4').innerText = guestcount4;

        let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
        let peakcount = (sessionStorage.getItem("l-peakcount"));

        document.getElementById('ccc').style.display = "none";
        document.getElementById('fore-child').style.display = "";
        document.getElementById('forchild1').innerText = `${guestcount4} Foreigner Child`;
        charge1 = guestcount4 * ((5 * normalh) + (8 * peakcount));
        document.getElementById('forchild2').innerText = `$${charge1}`;
        sessionStorage.setItem('for-child', charge1);

        let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
        document.getElementById('total2').innerText = `$${sum}`;
    }
    function nf4() {
        if (guestcount4 == 0) {
            guestcount4 = 0
            document.getElementById('fore-child').style.display = "none";
        }
        else {
            guestcount4 = guestcount4 - 1;
            document.getElementById('g4').innerText = guestcount4;

            let normalh = (sessionStorage.getItem('final-hour')) - (sessionStorage.getItem('l-peakcount'));
            let peakcount = (sessionStorage.getItem("l-peakcount"));

            document.getElementById('ccc').style.display = "none";
            document.getElementById('fore-child').style.display = "";
            document.getElementById('for-child1').innerText = `${guestcount4} Foreigner Child`;
            charge1 = guestcount4 * ((5 * normalh) + (8 * peakcount));
            document.getElementById('for-child2').innerText = `$${charge1}`;
            sessionStorage.setItem('for-child', charge1);

            let sum = (parseInt(sessionStorage.getItem("sri-lanka-adult")) + parseInt(sessionStorage.getItem("sri-lanka-child")) + parseInt(sessionStorage.getItem("for-adult")) + parseInt(sessionStorage.getItem("for-child")))
            document.getElementById('total2').innerText = `$${sum}`;
        }
    }


    function pf5() {
        guestcount5 = guestcount5 + 1;
        document.getElementById('g5').innerText = guestcount5;
    }
    function nf5() {
        if (guestcount5 == 0) {
            guestcount5 = 0
        }
        else {
            guestcount5 = guestcount5 - 1;
            document.getElementById('g5').innerText = guestcount5;
        }
    }




    // time duration 

    function timeduration() {



        let hour = 0;
        let tstart = 0;
        let tstop = 0;


        let cheb1 = document.getElementById("cb1");
        let box1 = document.getElementById("box1");


        let cheb2 = document.getElementById("cb2");
        let box2 = document.getElementById("box2");


        let cheb3 = document.getElementById("cb3");
        let box3 = document.getElementById("box3");


        let cheb4p = document.getElementById("cb4p");
        let box4p = document.getElementById("box4p");


        let cheb5p = document.getElementById("cb5p");
        let box5p = document.getElementById("box5p");


        let cheb7 = document.getElementById("cb7");
        let box7 = document.getElementById("box7");


        let cheb8 = document.getElementById("cb8");
        let box8 = document.getElementById("box8");


        let cheb9p = document.getElementById("cb9p");
        let box9p = document.getElementById("box9p");


        let cheb10p = document.getElementById("cb10p");
        let box10p = document.getElementById("box10p");


        let cheb11p = document.getElementById("cb11p");
        let box11p = document.getElementById("box11p");


        let cheb6p = document.getElementById("cb6p");
        let box6p = document.getElementById("box6p");


        if (cheb1.checked == true) {
            box1.style.backgroundColor = "red"
        }
        else {
            box1.style.backgroundColor = "blue"
        }



        if (cheb2.checked == true) {
            box2.style.backgroundColor = "red"
        }
        else {
            box2.style.backgroundColor = "blue"
        }




        if (cheb3.checked == true) {
            box3.style.backgroundColor = "red"
        }
        else {
            box3.style.backgroundColor = "blue"
        }




        if (cheb4p.checked == true) {
            box4p.style.backgroundColor = "red"
        }
        else {
            box4p.style.backgroundColor = "blue"
        }




        if (cheb5p.checked == true) {
            box5p.style.backgroundColor = "red"
        }
        else {
            box5p.style.backgroundColor = "blue"
        }




        if (cheb6p.checked == true) {
            box6p.style.backgroundColor = "red"
        }
        else {
            box6p.style.backgroundColor = "blue"
        }




        if (cheb7.checked == true) {
            box7.style.backgroundColor = "red"
        }
        else {
            box7.style.backgroundColor = "blue"
        }





        if (cheb8.checked == true) {
            box8.style.backgroundColor = "red"
        }
        else {
            box8.style.backgroundColor = "blue"
        }





        if (cheb9p.checked == true) {
            box9p.style.backgroundColor = "red"
        }
        else {
            box9p.style.backgroundColor = "blue"
        }




        if (cheb10p.checked == true) {
            box10p.style.backgroundColor = "red"
        }
        else {
            box10p.style.backgroundColor = "blue"
        }





        if (cheb11p.checked == true) {
            box11p.style.backgroundColor = "red"
        }
        else {
            box11p.style.backgroundColor = "blue"
        }




        // 6

        let pekcount = 0;

        if (cheb4p.checked == true && cheb5p.checked == true &&
            cheb6p.checked == true && cheb9p.checked == true &&
            cheb10p.checked == true &&
            cheb11p.checked == true) {
            pekcount = 6;
        }
        else if (
            cheb4p.checked == true && cheb5p.checked == true &&
            cheb6p.checked == true && cheb9p.checked == true &&
            cheb10p.checked == true
        ) { pekcount = 5 }

        else if (
            cheb4p.checked == true && cheb5p.checked == true &&
            cheb6p.checked == true && cheb9p.checked == true

        ) { pekcount = 4 }

        else if (
            cheb4p.checked == true && cheb5p.checked == true &&
            cheb6p.checked == true

        ) { pekcount = 3 }

        else if (
            cheb4p.checked == true && cheb5p.checked == true


        ) { pekcount = 2 }

        else if (
            cheb4p.checked == true


        ) { pekcount = 1 }




        // 5
        else if (cheb5p.checked == true &&
            cheb6p.checked == true && cheb9p.checked == true &&
            cheb10p.checked == true &&
            cheb11p.checked == true) {
            pekcount = 5;
        }
        else if (
            cheb5p.checked == true &&
            cheb6p.checked == true && cheb9p.checked == true &&
            cheb10p.checked == true
        ) { pekcount = 4 }

        else if (
            cheb5p.checked == true &&
            cheb6p.checked == true && cheb9p.checked == true

        ) { pekcount = 3 }

        else if (
            cheb5p.checked == true &&
            cheb6p.checked == true

        ) { pekcount = 2 }

        else if (
            cheb5p.checked == true


        ) { pekcount = 1 }



        // 4

        else if (
            cheb6p.checked == true && cheb9p.checked == true &&
            cheb10p.checked == true &&
            cheb11p.checked == true) {
            pekcount = 4;
        }
        else if (

            cheb6p.checked == true && cheb9p.checked == true &&
            cheb10p.checked == true
        ) { pekcount = 3 }

        else if (

            cheb6p.checked == true && cheb9p.checked == true

        ) { pekcount = 2 }

        else if (

            cheb6p.checked == true

        ) { pekcount = 1 }




        // 3
        else if (
            cheb9p.checked == true &&
            cheb10p.checked == true &&
            cheb11p.checked == true) {
            pekcount = 3;
        }
        else if (

            cheb9p.checked == true &&
            cheb10p.checked == true
        ) { pekcount = 2 }

        else if (

            cheb9p.checked == true

        ) { pekcount = 1 }



        // 2
        else if (

            cheb10p.checked == true &&
            cheb11p.checked == true) {
            pekcount = 2;
        }
        else if (


            cheb10p.checked == true
        ) { pekcount = 1 }



        // 1
        else if (


            cheb11p.checked == true) {
            pekcount = 1;
        } else {
            pekcount = 0;
        }

        sessionStorage.setItem("l-peakcount", pekcount);



        //



        if (cheb1.checked == true) {
            hour += 1;
            if (cheb2.checked == true) {
                hour += 1;
                if (cheb3.checked == true) {
                    hour += 1;
                    if (cheb4p.checked == true) {
                        hour += 1;
                        if (cheb5p.checked == true) {
                            hour += 1;
                            if (cheb6p.checked == true) {
                                hour += 1;
                                if (cheb7.checked == true) {
                                    hour += 1;
                                    if (cheb8.checked == true) {
                                        hour += 1;
                                        if (cheb9p.checked == true) {
                                            hour += 1;
                                            if (cheb10p.checked == true) {
                                                hour += 1;
                                                if (cheb11p.checked == true) {
                                                    hour += 1;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        else if (cheb2.checked == true) {
            hour += 1;
            if (cheb3.checked == true) {
                hour += 1;
                if (cheb4p.checked == true) {
                    hour += 1;
                    if (cheb5p.checked == true) {
                        hour += 1;
                        if (cheb6p.checked == true) {
                            hour += 1;
                            if (cheb7.checked == true) {
                                hour += 1;
                                if (cheb8.checked == true) {
                                    hour += 1;
                                    if (cheb9p.checked == true) {
                                        hour += 1;
                                        if (cheb10p.checked == true) {
                                            hour += 1;
                                            if (cheb11p.checked == true) {
                                                hour += 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }



        else if (cheb3.checked == true) {
            hour += 1;
            if (cheb4p.checked == true) {
                hour += 1;
                if (cheb5p.checked == true) {
                    hour += 1;
                    if (cheb6p.checked == true) {
                        hour += 1;
                        if (cheb7.checked == true) {
                            hour += 1;
                            if (cheb8.checked == true) {
                                hour += 1;
                                if (cheb9p.checked == true) {
                                    hour += 1;
                                    if (cheb10p.checked == true) {
                                        hour += 1;
                                        if (cheb11p.checked == true) {
                                            hour += 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }



        else if (cheb4p.checked == true) {
            hour += 1;
            if (cheb5p.checked == true) {
                hour += 1;
                if (cheb6p.checked == true) {
                    hour += 1;
                    if (cheb7.checked == true) {
                        hour += 1;
                        if (cheb8.checked == true) {
                            hour += 1;
                            if (cheb9p.checked == true) {
                                hour += 1;
                                if (cheb10p.checked == true) {
                                    hour += 1;
                                    if (cheb11p.checked == true) {
                                        hour += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        else if (cheb5p.checked == true) {
            hour += 1;
            if (cheb6p.checked == true) {
                hour += 1;
                if (cheb7.checked == true) {
                    hour += 1;
                    if (cheb8.checked == true) {
                        hour += 1;
                        if (cheb9p.checked == true) {
                            hour += 1;
                            if (cheb10p.checked == true) {
                                hour += 1;
                                if (cheb11p.checked == true) {
                                    hour += 1;
                                }
                            }
                        }
                    }
                }
            }
        }




        else if (cheb6p.checked == true) {
            hour += 1;
            if (cheb7.checked == true) {
                hour += 1;
                if (cheb8.checked == true) {
                    hour += 1;
                    if (cheb9p.checked == true) {
                        hour += 1;
                        if (cheb10p.checked == true) {
                            hour += 1;
                            if (cheb11p.checked == true) {
                                hour += 1;
                            }
                        }
                    }
                }
            }
        }








        else if (cheb7.checked == true) {
            hour += 1;
            if (cheb8.checked == true) {
                hour += 1;
                if (cheb9p.checked == true) {
                    hour += 1;
                    if (cheb10p.checked == true) {
                        hour += 1;
                        if (cheb11p.checked == true) {
                            hour += 1;
                        }
                    }
                }
            }
        }


        else if (cheb8.checked == true) {
            hour += 1;
            if (cheb9p.checked == true) {
                hour += 1;
                if (cheb10p.checked == true) {
                    hour += 1;
                    if (cheb11p.checked == true) {
                        hour += 1;
                    }
                }
            }
        }



        else if (cheb9p.checked == true) {
            hour += 1;
            if (cheb10p.checked == true) {
                hour += 1;
                if (cheb11p.checked == true) {
                    hour += 1;
                }
            }
        }


        else if (cheb10p.checked == true) {
            hour += 1;
            if (cheb11p.checked == true) {
                hour += 1;
            }
        }
        else if (cheb11p.checked == true) {
            hour += 1;
        } else {
            hour = 0;
        }


        sessionStorage.setItem("final-hour", hour);

        let displythour = `${hour} hrs`;
        document.getElementById('selected-duration').innerText = displythour;


        // start and end (time)
        // 7   18

        if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 7;
            tstop = 18;
        }
        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 7;
            tstop = 17;
        }


        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 7;
            tstop = 16;
        }


        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true
        ) {
            tstart = 7;
            tstop = 15;
        }


        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true
        ) {
            tstart = 7;
            tstop = 14;
        }


        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true

        ) {
            tstart = 7;
            tstop = 13;
        }


        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true
        ) {
            tstart = 7;
            tstop = 12;
        }


        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true
            && cheb4p.checked == true

        ) {
            tstart = 7;
            tstop = 11;
        }


        else if (cheb1.checked == true && cheb2.checked == true && cheb3.checked == true

        ) {
            tstart = 7;
            tstop = 10;
        }


        else if (cheb1.checked == true && cheb2.checked == true) {
            tstart = 7;
            tstop = 9;
        }


        else if (cheb1.checked == true) {
            tstart = 7;
            tstop = 8;
        }

        // 8  18

        else if (cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 8;
            tstop = 18;
        }
        else if (cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 8;
            tstop = 17;
        }


        else if (cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 8;
            tstop = 16;
        }


        else if (cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true
        ) {
            tstart = 8;
            tstop = 15;
        }


        else if (cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true
        ) {
            tstart = 8;
            tstop = 14;
        }


        else if (cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true

        ) {
            tstart = 8;
            tstop = 13;
        }


        else if (cheb2.checked == true && cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true
        ) {
            tstart = 8;
            tstop = 12;
        }


        else if (cheb2.checked == true && cheb3.checked == true
            && cheb4p.checked == true

        ) {
            tstart = 8;
            tstop = 11;
        }


        else if (cheb2.checked == true && cheb3.checked == true

        ) {
            tstart = 8;
            tstop = 10;
        }


        else if (cheb2.checked == true) {
            tstart = 8;
            tstop = 9;
        }





        else if (cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 9;
            tstop = 18;
        }
        else if (cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 9;
            tstop = 17;
        }


        else if (cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 9;
            tstop = 16;
        }


        else if (cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true
        ) {
            tstart = 9;
            tstop = 15;
        }


        else if (cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true
        ) {
            tstart = 9;
            tstop = 14;
        }


        else if (cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true

        ) {
            tstart = 9;
            tstop = 13;
        }


        else if (cheb3.checked == true && cheb4p.checked == true
            && cheb5p.checked == true
        ) {
            tstart = 9;
            tstop = 12;
        }


        else if (cheb3.checked == true
            && cheb4p.checked == true

        ) {
            tstart = 9;
            tstop = 11;
        }


        else if (cheb3.checked == true

        ) {
            tstart = 9;
            tstop = 10;
        }





        else if (cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 10;
            tstop = 18;
        }
        else if (cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 10;
            tstop = 17;
        }


        else if (cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 10;
            tstop = 16;
        }


        else if (cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true
        ) {
            tstart = 10;
            tstop = 15;
        }


        else if (cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true
        ) {
            tstart = 10;
            tstop = 14;
        }


        else if (cheb4p.checked == true
            && cheb5p.checked == true && cheb6p.checked == true

        ) {
            tstart = 10;
            tstop = 13;
        }


        else if (cheb4p.checked == true
            && cheb5p.checked == true
        ) {
            tstart = 10;
            tstop = 12;
        }


        else if (cheb4p.checked == true

        ) {
            tstart = 10;
            tstop = 11;
        }







        else if (cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 11;
            tstop = 18;
        }
        else if (cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 11;
            tstop = 17;
        }


        else if (cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 11;
            tstop = 16;
        }


        else if (cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true
        ) {
            tstart = 11;
            tstop = 15;
        }


        else if (cheb5p.checked == true && cheb6p.checked == true
            && cheb7.checked == true
        ) {
            tstart = 11;
            tstop = 14;
        }


        else if (cheb5p.checked == true && cheb6p.checked == true

        ) {
            tstart = 11;
            tstop = 13;
        }


        else if (cheb5p.checked == true
        ) {
            tstart = 11;
            tstop = 12;
        }







        else if (cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 12;
            tstop = 18;
        }
        else if (cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 12;
            tstop = 17;
        }


        else if (cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 12;
            tstop = 16;
        }


        else if (cheb6p.checked == true
            && cheb7.checked == true && cheb8.checked == true
        ) {
            tstart = 12;
            tstop = 15;
        }


        else if (cheb6p.checked == true
            && cheb7.checked == true
        ) {
            tstart = 12;
            tstop = 14;
        }


        else if (cheb6p.checked == true

        ) {
            tstart = 12;
            tstop = 13;
        }




        else if (cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 13;
            tstop = 18;
        }
        else if (cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 13;
            tstop = 17;
        }


        else if (cheb7.checked == true && cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 13;
            tstop = 16;
        }


        else if (cheb7.checked == true && cheb8.checked == true
        ) {
            tstart = 13;
            tstop = 15;
        }


        else if (cheb7.checked == true
        ) {
            tstart = 13;
            tstop = 14;
        }






        else if (cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 14;
            tstop = 18;
        }
        else if (cheb8.checked == true && cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 14;
            tstop = 17;
        }


        else if (cheb8.checked == true && cheb9p.checked == true
        ) {
            tstart = 14;
            tstop = 16;
        }


        else if (cheb8.checked == true
        ) {
            tstart = 14;
            tstop = 15;
        }






        else if (cheb9p.checked == true
            && cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 15;
            tstop = 18;
        }
        else if (cheb9p.checked == true
            && cheb10p.checked == true) {
            tstart = 15;
            tstop = 17;
        }


        else if (cheb9p.checked == true
        ) {
            tstart = 15;
            tstop = 16;
        }




        else if (cheb10p.checked == true && cheb11p.checked == true) {
            tstart = 16;
            tstop = 18;
        }
        else if (cheb10p.checked == true) {
            tstart = 16;
            tstop = 17;
        }




        else if (cheb11p.checked == true) {
            tstart = 17;
            tstop = 18;
        }

        // let tstart = 0;
        // let tstop = 0;


        // 

        let tstartstring = "";
        let tstopstring = "";

        if (tstart == 7) {
            tstartstring = "7.00.am"
        }
        if (tstop == 8) {
            tstopstring = "8.00.am"
        }




        if (tstart == 8) {
            tstartstring = "8.00.am"
        }
        if (tstop == 9) {
            tstopstring = "9.00.am"
        }


        if (tstart == 9) {
            tstartstring = "9.00.am"
        }
        if (tstop == 10) {
            tstopstring = "10.00.am"
        }


        if (tstart == 10) {
            tstartstring = "10.00.am"
        }
        if (tstop == 11) {
            tstopstring = "11.00.am"
        }



        if (tstart == 11) {
            tstartstring = "11.00.am"
        }
        if (tstop == 12) {
            tstopstring = "12.00.pm"
        }



        if (tstart == 12) {
            tstartstring = "12.00.pm"
        }
        if (tstop == 13) {
            tstopstring = "01.00.pm"
        }



        if (tstart == 13) {
            tstartstring = "01.00.pm"
        }
        if (tstop == 14) {
            tstopstring = "02.00.pm"
        }



        if (tstart == 14) {
            tstartstring = "2.00.pm"
        }
        if (tstop == 15) {
            tstopstring = "3.00.pm"
        }



        if (tstart == 15) {
            tstartstring = "3.00.pm"
        }
        if (tstop == 16) {
            tstopstring = "4.00.pm"
        }


        if (tstart == 16) {
            tstartstring = "4.00.pm"
        }
        if (tstop == 17) {
            tstopstring == "5.00.pm"
        }


        if (tstart == 17) {
            tstartstring = "5.00.pm"
        }
        if (tstop == 18) {
            tstopstring = "6.00.pm"
        }



        let finalstring = `${tstartstring} to ${tstopstring}`;

        sessionStorage.setItem('final-time', finalstring);
        document.getElementById('selected-time').innerText = finalstring;



    }


    function settingStorage() {
        sessionStorage.setItem("saved-date", document.getElementById("selected-date").innerText);
        sessionStorage.setItem("saved-time", document.getElementById("selected-time").innerText);
        sessionStorage.setItem("saved-duration", document.getElementById("selected-duration").innerText);
        sessionStorage.setItem("saved-slaCount", document.getElementById("sriadult1").innerText);
        sessionStorage.setItem("saved-slaPrice", document.getElementById("sriadult2").innerText);
        sessionStorage.setItem("saved-slcCount", document.getElementById("srichil1").innerText);
        sessionStorage.setItem("saved-slcPrice", document.getElementById("srichild2").innerText);
        sessionStorage.setItem("saved-foraCount", document.getElementById("foradult1").innerText);
        sessionStorage.setItem("saved-foraPrice", document.getElementById("foradult2").innerText);
        sessionStorage.setItem("saved-forcCount", document.getElementById("forchild1").innerText);
        sessionStorage.setItem("saved-forcPrice", document.getElementById("forchild2").innerText);
        sessionStorage.setItem("saved-total", document.getElementById("total2").innerText);

    }


}

//Details page

if (window.location.href == "https://akilz02.github.io/WDOS_Assignment/Details.html") {

    document.getElementById("selected-date").innerText = sessionStorage.getItem("saved-date");
    document.getElementById("selected-time").innerText = sessionStorage.getItem("saved-time");
    document.getElementById("selected-duration").innerText = sessionStorage.getItem("saved-duration");
    document.getElementById("sriadult1").innerText = sessionStorage.getItem("saved-slaCount");
    document.getElementById("sriadult2").innerText = sessionStorage.getItem("saved-slaPrice");
    document.getElementById("srichil1").innerText = sessionStorage.getItem("saved-slcCount");
    document.getElementById("srichild2").innerText = sessionStorage.getItem("saved-slcPrice");
    document.getElementById("foradult1").innerText = sessionStorage.getItem("saved-foraCount");
    document.getElementById("foradult2").innerText = sessionStorage.getItem("saved-foraPrice");
    document.getElementById("forchild1").innerText = sessionStorage.getItem("saved-forcCount");
    document.getElementById("forchild2").innerText = sessionStorage.getItem("saved-forcPrice");
    document.getElementById("total2").innerText = sessionStorage.getItem("saved-total");


    if ((sessionStorage.getItem("saved-slaPrice") != "$0")) {
        document.getElementById("sri-ad").style.display = "";
    }
    if ((sessionStorage.getItem("saved-slcPrice") != "$0")) {
        document.getElementById("sri-ch").style.display = "";
    }
    if ((sessionStorage.getItem("saved-foraPrice") != "$0")) {
        document.getElementById("fore-adult").style.display = "";
    }
    if ((sessionStorage.getItem("saved-forcPrice") != "$0")) {
        document.getElementById("fore-child").style.display = "";
    }


    function btnSubmit(event) {
        event.preventDefault();
        sessionStorage.setItem("saved-full-name", document.getElementById('full-name').value);
        sessionStorage.setItem("saved-email", document.getElementById('user-email').value);
        sessionStorage.setItem("saved-mobile", document.getElementById('user-mobile').value);
        document.getElementById("purchase-btn").disabled = false;
    }

    // validation

    let check1 = false;
    let check2 = false;
    let check3 = false;
    let check4 = false;


    function btnSubmit(event) {
        event.preventDefault();
        sessionStorage.setItem("saved-full-name", document.getElementById('full-name').value);
        sessionStorage.setItem("saved-email", document.getElementById('user-email').value);
        sessionStorage.setItem("saved-mobile", document.getElementById('user-mobile').value);

        var fullName = document.getElementById("full-name").value;
        var mobileNumber = document.getElementById("user-mobile").value;
        var emailAddress = document.getElementById("user-email").value;
        var emailConfirmAddress = document.getElementById("confirm-email").value;

        var nameRegex = /^[A-Za-z\s]+$/;
        var mobileRegex = /^[0-9+]\d{11,12}$/;
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;




        if (!fullName.match(nameRegex)) {
            document.getElementById("check1").style.display = "";
            return false;
        }

        check1 = true;
        document.getElementById("check1").style.display = "none";







        if (!emailAddress.match(emailRegex)) {
            document.getElementById("check2").style.display = "";
            return false;
        }

        check2 = true;
        document.getElementById("check2").style.display = "none";







        if (!emailConfirmAddress.match(emailAddress)) {
            document.getElementById("check3").style.display = "";
            return false;
        }

        check3 = true;
        document.getElementById("check3").style.display = "none";






        if (!mobileNumber.match(mobileRegex)) {
            document.getElementById("check4").style.display = "";
            return false;
        }

        check4 = true;
        document.getElementById("check4").style.display = "none";

        document.getElementById("purchase-btn").disabled = false;




        if (check1 && check2 && check3 && check4) {
/*                 window.location.href = "https://www.google.com";
 */                console.log(".");
        }


        return true;




    }



    function changeGender(gender) {
        let x = gender.options[gender.selectedIndex].text;
        sessionStorage.setItem("user-gender", x);
    }


    function settingStorage() {
        sessionStorage.setItem("saved-date", document.getElementById("selected-date").innerText);
        sessionStorage.setItem("saved-time", document.getElementById("selected-time").innerText);
        sessionStorage.setItem("saved-duration", document.getElementById("selected-duration").innerText);
        sessionStorage.setItem("saved-slaCount", document.getElementById("sriadult1").innerText);
        sessionStorage.setItem("saved-slaPrice", document.getElementById("sriadult2").innerText);
        sessionStorage.setItem("saved-slcCount", document.getElementById("srichil1").innerText);
        sessionStorage.setItem("saved-slcPrice", document.getElementById("srichild2").innerText);
        sessionStorage.setItem("saved-foraCount", document.getElementById("foradult1").innerText);
        sessionStorage.setItem("saved-foraPrice", document.getElementById("foradult2").innerText);
        sessionStorage.setItem("saved-forcCount", document.getElementById("forchild1").innerText);
        sessionStorage.setItem("saved-forcPrice", document.getElementById("forchild2").innerText);
        sessionStorage.setItem("saved-total", document.getElementById("total2").innerText);
        sessionStorage.setItem("saved-gender", document.getElementById('user-gender').value);

    }


}


// Payment page

if (window.location.href == "https://akilz02.github.io/WDOS_Assignment/Payment.html") {

    document.getElementById("selected-date").innerText = sessionStorage.getItem("saved-date");
    document.getElementById("selected-time").innerText = sessionStorage.getItem("saved-time");
    document.getElementById("selected-duration").innerText = sessionStorage.getItem("saved-duration");
    document.getElementById("sriadult1").innerText = sessionStorage.getItem("saved-slaCount");
    document.getElementById("sriadult2").innerText = sessionStorage.getItem("saved-slaPrice");
    document.getElementById("srichil1").innerText = sessionStorage.getItem("saved-slcCount");
    document.getElementById("srichild2").innerText = sessionStorage.getItem("saved-slcPrice");
    document.getElementById("foradult1").innerText = sessionStorage.getItem("saved-foraCount");
    document.getElementById("foradult2").innerText = sessionStorage.getItem("saved-foraPrice");
    document.getElementById("forchild1").innerText = sessionStorage.getItem("saved-forcCount");
    document.getElementById("forchild2").innerText = sessionStorage.getItem("saved-forcPrice");
    document.getElementById("total2").innerText = sessionStorage.getItem("saved-total");
    document.getElementById("total2").innerText = sessionStorage.getItem("saved-total");


    if ((sessionStorage.getItem("saved-slaPrice") != "$0")) {
        document.getElementById("sri-ad").style.display = "";
    }
    if ((sessionStorage.getItem("saved-slcPrice") != "$0")) {
        document.getElementById("sri-ch").style.display = "";
    }
    if ((sessionStorage.getItem("saved-foraPrice") != "$0")) {
        document.getElementById("fore-adult").style.display = "";
    }
    if ((sessionStorage.getItem("saved-forcPrice") != "$0")) {
        document.getElementById("fore-child").style.display = "";
    }

    document.getElementById("add").value = `PAY $${sessionStorage.getItem("saved-total")}`


}

function settingStorage() {

    sessionStorage.setItem("saved-date", document.getElementById("selected-date").innerText);
    sessionStorage.setItem("saved-time", document.getElementById("selected-time").innerText);
    sessionStorage.setItem("saved-duration", document.getElementById("selected-duration").innerText);
    sessionStorage.setItem("saved-slaCount", document.getElementById("sriadult1").innerText);
    sessionStorage.setItem("saved-slaPrice", document.getElementById("sriadult2").innerText);
    sessionStorage.setItem("saved-slcCount", document.getElementById("srichil1").innerText);
    sessionStorage.setItem("saved-slcPrice", document.getElementById("srichild2").innerText);
    sessionStorage.setItem("saved-foraCount", document.getElementById("foradult1").innerText);
    sessionStorage.setItem("saved-foraPrice", document.getElementById("foradult2").innerText);
    sessionStorage.setItem("saved-forcCount", document.getElementById("forchild1").innerText);
    sessionStorage.setItem("saved-forcPrice", document.getElementById("forchild2").innerText);
    sessionStorage.setItem("saved-total", document.getElementById("total2").innerText);
    sessionStorage.setItem("saved-full-name", document.getElementById('full-name').value);
    sessionStorage.setItem("saved-email", document.getElementById('user-email').value);
    sessionStorage.setItem("saved-mobile", document.getElementById('user-mobile').value);

}



//Conformation page


if (window.location.href == "https://akilz02.github.io/WDOS_Assignment/Conformation.html") {

    document.getElementById("selected-date").innerText = sessionStorage.getItem("saved-date");
    document.getElementById("selected-time").innerText = sessionStorage.getItem("saved-time");
    document.getElementById("selected-duration").innerText = sessionStorage.getItem("saved-duration");
    document.getElementById("sriadult1").innerText = sessionStorage.getItem("saved-slaCount");
    document.getElementById("sriadult2").innerText = sessionStorage.getItem("saved-slaPrice");
    document.getElementById("srichil1").innerText = sessionStorage.getItem("saved-slcCount");
    document.getElementById("srichild2").innerText = sessionStorage.getItem("saved-slcPrice");
    document.getElementById("foradult1").innerText = sessionStorage.getItem("saved-foraCount");
    document.getElementById("foradult2").innerText = sessionStorage.getItem("saved-foraPrice");
    document.getElementById("forchild1").innerText = sessionStorage.getItem("saved-forcCount");
    document.getElementById("forchild2").innerText = sessionStorage.getItem("saved-forcPrice");
    document.getElementById("total2").innerText = sessionStorage.getItem("saved-total");
    document.getElementById("total2").innerText = sessionStorage.getItem("saved-total");
    document.getElementById("full-name").innerText = sessionStorage.getItem("saved-full-name");
    document.getElementById("user-email").innerText = sessionStorage.getItem("saved-email");
    document.getElementById("user-mobile").innerText = sessionStorage.getItem("saved-mobile");
    document.getElementById("user-gender").innerText = sessionStorage.getItem("user-gender");


    if ((sessionStorage.getItem("saved-slaPrice") != "$0")) {
        document.getElementById("sri-ad").style.display = "";
    }
    if ((sessionStorage.getItem("saved-slcPrice") != "$0")) {
        document.getElementById("sri-ch").style.display = "";
    }
    if ((sessionStorage.getItem("saved-foraPrice") != "$0")) {
        document.getElementById("fore-adult").style.display = "";
    }
    if ((sessionStorage.getItem("saved-forcPrice") != "$0")) {
        document.getElementById("fore-child").style.display = "";
    }



}
function settingStorage() {

    sessionStorage.setItem("saved-date", document.getElementById("selected-date").innerText);
    sessionStorage.setItem("saved-time", document.getElementById("selected-time").innerText);
    sessionStorage.setItem("saved-duration", document.getElementById("selected-duration").innerText);
    sessionStorage.setItem("saved-slaCount", document.getElementById("sriadult1").innerText);
    sessionStorage.setItem("saved-slaPrice", document.getElementById("sriadult2").innerText);
    sessionStorage.setItem("saved-slcCount", document.getElementById("srichil1").innerText);
    sessionStorage.setItem("saved-slcPrice", document.getElementById("srichild2").innerText);
    sessionStorage.setItem("saved-foraCount", document.getElementById("foradult1").innerText);
    sessionStorage.setItem("saved-foraPrice", document.getElementById("foradult2").innerText);
    sessionStorage.setItem("saved-forcCount", document.getElementById("forchild1").innerText);
    sessionStorage.setItem("saved-forcPrice", document.getElementById("forchild2").innerText);
    sessionStorage.setItem("saved-total", document.getElementById("total2").innerText);


}


