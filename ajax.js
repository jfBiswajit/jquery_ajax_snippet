$.ajax({
  url: 'auto_attendance',
  method: 'GET',
  data: {
    dataOne: 'valueOne',
    dataTwo: 'valueTwo',
  },
  success: function (response) {
    console.log(response);
  },
  dataType: 'json',
});
