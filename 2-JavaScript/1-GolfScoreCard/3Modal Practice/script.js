(function () {
    $(".modal").show();
})();

function closeModal(element) {
    // $(".modal").fadeOut();
    $(element).parent().parent().parent().fadeOut();
}