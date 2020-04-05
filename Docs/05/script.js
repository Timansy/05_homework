
$(document).ready(function () {


    //const moment = require("moment");

    console.log(moment());

    //Create a table to fold the available hours
    var table = (`
    <table>
        <thead>
            <tr>
            <th scope="col">Time</th>
            <th scope="col">| Event Description</th>
            <th scope="col">| <i class="fas fa-save"></i></th>
          </tr>
        </thead> 
        <tbody id="schedule"></tbody>
    </table>
`);

    $(".container").append(table);

    startHour = 7;
    endHour = 18;
    //create the row objects 
    //each object will have an Hour, an Input, A CheckBox, A Save Button

    for (var i = startHour; i < endHour; i++) {

        var defaultValue = "";
        if (localStorage.getItem(`hour_${i}_input`) !== null) {
            defaultValue = localStorage.getItem(`hour_${i}_input`);
        }
        var mymoment = moment().startOf('day').hours(i).valueOf();
        console.log(mymoment > moment());
        row = ` 
        <tr id="hour_${i}_row">
            <!-- <th scope="row">${moment().format('h:mm')}</th> -->
            <th scope="row" id="hour_${i}_hour">${moment(mymoment).format('h:mm')}</th>
            <td><textarea name="message" id="hour_${i}_input" maxlength="200" rows="2" cols="100">${defaultValue}</textarea></td>
            <td><button class="fas fa-save save-button"  id="hour_${i}-save"></button></td>
        </tr>
    `;
        $("#schedule").append(row);
        if (mymoment < moment()) {
            $(`#hour_${i}_row`).addClass("done").removeClass("undone");
        } else {
            $(`#hour_${i}_row`).removeClass("done").addClass("undone");
        }
    }

    $(".save-button").click(function () {
        var str = $(this).attr('id');

        var mySubString = str.substring(
            str.lastIndexOf("_") + 1,
            str.lastIndexOf("-")
        );
        console.log($(`#hour_${mySubString}_input`).val());
        localStorage.setItem(`hour_${mySubString}_input`, $(`#hour_${mySubString}_input`).val());

    })

    //create the row objects 
    //each object will have an Hour, an Input, A CheckBox, A Save Button





});

