$('#accordionExample').collapse({
  toggle: false
})

$("#fbButton").on("click", function () {
  swal({
    title: "Leave this site?",
    text: "If you click 'OK', you will be redirected to https://facebook.com",
    type: "warning",
    showCancelButton: true,
    confirmButtonClass: "btn-danger",
    confirmButtonText: "OK",
    closeOnConfirm: false
  },
    function () {
      window.location.href = 'https://www.facebook.com/';
    });
});


$("#GooButton").on("click", function () {
  swal({
    title: "Leave this site?",
    text: "If you click 'OK', you will be redirected to https://google.com",
    type: "warning",
    showCancelButton: true,
    confirmButtonClass: "btn-danger",
    confirmButtonText: "OK",
    closeOnConfirm: false
  },
    function () {
      window.location.href = 'https://www.google.com/';
    });
});

$('.dropify').dropify();

$("#SubButton").on("click", function () {
  swal("Good job!", "You are registered!", "success");
  $("input").val("");
  $('.dropify-clear').click();
});