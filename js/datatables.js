$(document).ready(function() {
  $.getJSON("../data/robo_data.json", function(data) {
    console.log(data);
    var userData = data;
    var table = $("#test").DataTable({
      data: userData,
      columns: [
        { data: "user_name" },
        { data: "user_job_title" },
        { data: "user_picture" },
        { data: "user_shirt_size" }
      ],
      select: {
        style: "single"
      }
    });


    table.on("select", function() {
      // console.log(  table.rows({selected: true}).data()[0])
      var getSelection = table.rows({ selected: true }).data()[0];
      localStorage.setItem("getSelection", JSON.stringify([getSelection]));
      console.log(getSelection);
      window.location.href = "single_selection.html";
      console.log(localStorage);
    });
  });
});
