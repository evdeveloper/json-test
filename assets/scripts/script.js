

var Spinner = {
    changeValue: function (_this) {

        var $spinner_container = $(_this).parents(".stepper");

        var $spinner_value = $spinner_container.find('.product__count');

        var value = parseInt($spinner_value.val());

        //var $photoAllCount = $("#countPhoto");
        //var countAllPhotos = parseInt($photoAllCount.text());
        //$photoAllCount.text("gfg");


        if ($(_this).hasClass('up')) {
            $spinner_value.val(++value);
            Item.changeCost(_this, value);
        }
        else if ($(_this).hasClass('down') && value > 1) {
            $spinner_value.val(--value);
            Item.changeCost(_this, value);
        }
        $spinner_container.attr('data-value', value);
    },
};

var Item = {

    changeCost: function (_this, count) {
        var $containerFirst = $(_this).parents(".products_page");
        var itemConfig = JSON.parse($containerFirst.attr('data-product-config'));


        var $containerInfoPriceGold = $(_this).parents(".product").find(".product_price_club_card");
        var $containerInfoPriceDefault = $(_this).parents(".product").find(".product_price_default");


        var $containerInfoPriceGoldSpan = $containerInfoPriceGold.find(".goldPrice");
        var $containerInfoPriceRetailSpan = $containerInfoPriceDefault.find(".retailPrice");

        // $containerInfoPriceGoldSpan.text(count);
        // alert($containerFirst.attr("data-mode"));
        if ($containerFirst.attr("data-mode") === undefined || $containerFirst.attr("data-mode") === "gold") {

            $containerInfoPriceGoldSpan.text((itemConfig.priceGoldAlt * count));
            $containerInfoPriceRetailSpan.text((itemConfig.priceRetailAlt * count));
        }
        else {
            $containerInfoPriceGoldSpan.text((itemConfig.priceGold * count));
            $containerInfoPriceRetailSpan.text((itemConfig.priceRetail * count));
        }


    },

    changeCostTemplate: function (_this, mode) {

        var $containerFirst = $(_this).parents(".products_page");

        var $containerParent = $(_this).parents(".unit--wrapper");
        var infoInn = $(_this).find(".unit--infoInn");
        $containerParent.find(".unit--select").removeClass("unit--active");
        $(_this).addClass("unit--active");

        var $containerInfoPriceGold = $(_this).parents(".product").find(".product_price_club_card");
        var $containerInfoPriceDefault = $(_this).parents(".product").find(".product_price_default");

        var $containerInfoPriceGoldSpan = $containerInfoPriceGold.find(".goldPrice");
        var $containerInfoPriceRetailSpan = $containerInfoPriceDefault.find(".retailPrice");

        var itemConfig = JSON.parse($(_this).parents(".products_page").attr('data-product-config'));

        var $itemsCount = $containerFirst.find(".product__count");



        if (mode) {
            $containerInfoPriceGoldSpan.text((itemConfig.priceGoldAlt * $itemsCount.val()));
            $containerInfoPriceRetailSpan.text((itemConfig.priceRetailAlt * $itemsCount.val()));
            $containerFirst.attr("data-mode", "gold");
        }
        else {
            $containerInfoPriceGoldSpan.text((itemConfig.priceGold * $itemsCount.val()));
            $containerInfoPriceRetailSpan.text((itemConfig.priceRetail * $itemsCount.val()));
            $containerFirst.attr("data-mode", "default");
        }
    },
    renderItem: function (itemConfig) {

        var newStr = itemConfig.primaryImageUrl.substring(0, itemConfig.primaryImageUrl.length - 4);
        var imgSrc = 'http:' + newStr + '_220x220_1.jpg';

        var html = [
            "<div class='products_page pg_0' data-product-config='{{itemConfig}}'>",
            '                        <div class="product product_horizontal">',
            '                            <span class="product_code">Код: {{code}}</span>',
            '                            <div class="product_status_tooltip_container">',
            '                                <span class="product_status">Наличие</span>',
            '                            </div>',
            '                            <div class="product_photo">',
            '                                <a href="#" class="url--link product__link">',
            '                                    <img src="{{primaryImageUrl}}">',
            '                                </a>',
            '                            </div>',
            '                            <div class="product_description">',
            '                                <a href="#" class="product__link">{{title}}</a>',
            '                            </div>',
            '                            <div class="product_tags hidden-sm">',
            '                                <p>Могут понадобиться:</p>',
            '                                {{assocProducts}}',
            '                            </div>',
            '                            <div class="product_units">',
            '                                <div class="unit--wrapper">',
            '                                    <div class="unit--select unit--active" onclick="Item.changeCostTemplate(this, true)" >',
            '                                        <p class="ng-binding">За м. кв.</p>',
            '                                    </div>',
            '                                    <div class="unit--select" onclick="Item.changeCostTemplate(this, false)">',
            '                                        <p class="ng-binding">За упаковку</p>',
            '                                    </div>',
            '                                </div>',
            '                            </div>',
            '                            <p class="product_price_club_card">',
            '                                <span class="product_price_club_card_text">По карте<br>клуба</span>',
            '                                <span class="goldPrice">{{priceGoldAlt}}</span>',
            '                                <span class="rouble__i black__i">',
            '                                        <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">',
            '                                           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>',
            '                                        </svg>',
            '                                     </span>',
            '                            </p>',
            '                            <p class="product_price_default">',
            '                                <span class="retailPrice">{{priceRetailAlt}}</span>',
            '                                <span class="rouble__i black__i">',
            '                                        <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">',
            '                                           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>',
            '                                        </svg>',
            '                                     </span>',
            '                            </p>',
            '                            <div class="product_price_points">',
            '                                <p class="ng-binding">Можно купить за {{bonusAmount}} балла</p>',
            '                            </div>',
            '                            <div class="list--unit-padd"></div>',
            '                            <div class="list--unit-desc">',
            '                                <div class="unit--info">',
            '                                    <div class="unit--desc-i"></div>',
            '                                    <div class="unit--desc-t">',
            '                                        <p>',
            '                                            <span class="ng-binding">Продается упаковками:</span>',
            '                                            <span class="unit--infoInn">{{unitRatio}} {{unit}} = {{unitRatioAlt}} {{unitAlt}} </span>',
            '                                        </p>',
            '                                    </div>',
            '                                </div>',
            '                            </div>',
            '                            <div class="product__wrapper">',
            '                                <div class="product_count_wrapper">',
            '                                    <div class="stepper">',
            '                                        <input class="product__count stepper-input" type="number" value="1">',
            '                                        <span class="stepper-arrow up" onclick="Spinner.changeValue(this)"></span>',
            '                                        <span class="stepper-arrow down" onclick="Spinner.changeValue(this)"></span>',
            '                                    </div>',
            '                                </div>',
            '                                <span class="btn btn_cart" data-url="/cart/" data-product-id="{{productId}}">',
            '                                        <svg class="ic ic_cart">',
            '                                           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>',
            '                                        </svg>',
            '                                        <span class="ng-binding">В корзину</span>',
            '                                    </span>',
            '                            </div>',
            '                        </div>',
            '                    </div>',
        ].join('')
            .replace(/{{productId}}/g, itemConfig.productId)
            .replace(/{{code}}/g, itemConfig.code)
            .replace(/{{unitRatio}}/g, itemConfig.unitRatio)
            .replace(/{{unitAlt}}/g, itemConfig.unitAlt)
            .replace(/{{unitRatioAlt}}/g, itemConfig.unitRatioAlt)
            .replace(/{{unit}}/g, itemConfig.unit)
            .replace(/{{itemConfig}}/g, JSON.stringify(itemConfig))

            .replace(/{{bonusAmount}}/g, itemConfig.bonusAmount)

            .replace(/{{priceGoldAlt}}/g, itemConfig.priceGoldAlt)
            .replace(/{{priceRetailAlt}}/g, itemConfig.priceRetailAlt)
            .replace(/{{primaryImageUrl}}/g, imgSrc)
            .replace(/{{assocProducts}}/g, itemConfig.assocProducts)
            .replace(/{{title}}/g, itemConfig.title);
        return html;
    }
};


$(document).ready(function () {

    
        var $products_section = $("#products_section");
        for (var itemConfig in products) {
            var item = products[itemConfig];
            $products_section.append(Item.renderItem(item));

        }
    
});















