$("#polzunok").slider({
    animate: "slow",
    range: "min",
    value: 50,
    step: 25,
    max: 100,
});

$(".selector").slider({
    change: function (event, ui) {

    }
});

$("#polzunok").slider({
    animate: "slow",
    range: "min",
    value: 50,
    slide: function (event, ui) {
        $("#result-polzunok").text(ui.value);
    }
});
$("#result-polzunok").text($("#polzunok").slider("value"));

