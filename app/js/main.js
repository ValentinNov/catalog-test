
$(function () {

    $('.catalog__filter-btn').on('click', function () {
        $('.col-filters').slideToggle();
        $('.col-filters').toggleClass('col-filters--active');
    })


    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });



});


