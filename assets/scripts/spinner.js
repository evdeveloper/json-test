(function ($) {
    $.fn.spinner = function () {
        this.each(function () {
            var el = $(this);
            var input = el.find("input[type=number]");

// add elements
//             el.wrap('<span class="spinner"></span>');
//             el.before('<span class="sub">-</span>');
//             el.after('<span class="add">+</span>');
            //input.prop('onchange')();
// substract
            el.on('click', '.down', function () {
                 if (input.val() >= 2){
                         input.val(function (i, oldval) {
                             return --oldval;
                         });
                          input.prop('onchange')();
                 }

            });

// increment
            el.on('click', '.up', function () {
                // if (el.val() < parseInt(el.attr('max')))
                input.val(function (i, oldval) {
                        return ++oldval;
                    });
                 input.prop('onchange')();
            });
        });
    };
})(jQuery);

