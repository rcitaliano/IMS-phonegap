/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('load', this.onLoad, false);
    },
    onLoad: function () {
    },
    loadAbout: function () {
        $.get("about.html", function (data) {
            $("#mainContent").html("");
            $("#mainContent").html(data);

            var context = {
                items: [
                  { image: "assets/img/team/ariene.jpg", title: "ariene",          text: "fotografa", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/fabiana.jpg", title: "fabiana",      text: "fotografa", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/jolanda.jpg", title: "jolanda",      text: "cantante", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/julieta.jpg", title: "julieta", text: "cantante", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/ludovica.jpg", title: "ludovica",    text: "ballerina", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/miriana.jpg", title: "miriana", text: "ballerina", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/mirko.jpg", title: "mirko", text: "ballerino", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/robson.jpg", title: "robson",        text: "informatico", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/samuel.jpg", title: "samuel",        text: "fotografo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/sandy.jpg", title: "sandy", text: "cantante", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/thomas.jpg", title: "thomas", text: "cantante", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/valentina.jpg", title: "valentina", text: "cantante", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/valeria.jpg", title: "valeria", text: "ballerina", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/1.jpg", title: "1", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/2.jpg", title: "2", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/3.jpg", title: "3", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/4.jpg", title: "4", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/5.jpg", title: "5", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/6.jpg", title: "6", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/7.jpg", title: "7", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/8.jpg", title: "8", text: "ruolo", link: "#", linkText: "contatta" }
                , { image: "assets/img/team/9.jpg", title: "9", text: "ruolo", link: "#", linkText: "contatta" }]
            };
            var templateHeadings = Handlebars.compile($("#headings-template").html());
            $("#headings").append(templateHeadings(context));
            app.setActiveMenu("#about");
        });
    },
    setActiveMenu: function (selector) {
        $("#navbar>ul>li").removeClass(active);
        $(selector).addClass("active");
    },
    loadCarousel: function () {

        //=======================================carousel=======================================
        var carousel = $("#myCarousel");

        var context = {
            items: [
                { image: "assets/img/IMG_0383.JPG", title: "titolo1", text: "", link: "#", linkText: "contatta" }
                , { image: "assets/img/IMG_0607.JPG", title: "titolo2", text: "testo testo testo testo testo testo testo testo testo 2", link: "#", linkText: "link2" }
                , { image: "assets/img/IMG_0709.JPG", title: "titolo3", text: "testo testo testo testo testo testo testo testo testo 3", link: "#", linkText: "link3" }
                , { image: "assets/img/IMG_0607.JPG", title: "titolo4", text: "testo testo testo testo testo testo testo testo testo 4", link: "#", linkText: "link4" }
                , { image: "assets/img/IMG_0709.JPG", title: "titolo5", text: "testo testo testo testo testo testo testo testo testo 5", link: "#", linkText: "link5" }
                , { image: "assets/img/IMG_0383.JPG", title: "titolo6", text: "testo testo testo testo testo testo testo testo testo 6", link: "#", linkText: "link6" }
                , { image: "assets/img/IMG_0383.JPG", title: "titolo7", text: "testo testo testo testo testo testo testo testo testo 7", link: "#", linkText: "link7" }
                , { image: "assets/img/IMG_0383.JPG", title: "titolo8", text: "testo testo testo testo testo testo testo testo testo 8", link: "#", linkText: "link8" }
            ]
        };
        var templateIndicators = Handlebars.compile($("#carousel-indicators-template").html());
        var templateItems = Handlebars.compile($("#carousel-items-template").html());

        carousel.append(templateItems(context));
        carousel.append(templateIndicators(context));

        $(".carousel-indicators > li").first().addClass("active");

        $(".carousel-inner > .item").each(function (index, element) {
            if (index == 0)
                $(this).addClass("active first-slide");
            else if ($(this).is(':last-child'))
                $(this).addClass("third-slide");
            else
                $(this).addClass("second-slide");
        });
        //this must be done here to refresh the carousel after we added the dynamic items
        carousel.carousel("pause").removeData();
        carousel.carousel(0);
        //=======================================carousel end=======================================
    },
    loadHome: function () {
        $.get("home.html", function (data) {
            $("#mainContent").html("");
            $("#mainContent").html(data);
            app.loadCarousel();
            var context = {
                items: [
                    { image: "assets/img/IMG_0383.JPG", title: "titolo1", text: "", link: "#", linkText: "contatta" }
                    , { image: "assets/img/IMG_0607.JPG", title: "titolo2", text: "testo testo testo testo testo testo testo testo testo 2", link: "#", linkText: "link2" }
                    , { image: "assets/img/IMG_0709.JPG", title: "titolo3", text: "testo testo testo testo testo testo testo testo testo 3", link: "#", linkText: "link3" }
                    , { image: "assets/img/IMG_0607.JPG", title: "titolo4", text: "testo testo testo testo testo testo testo testo testo 4", link: "#", linkText: "link4" }
                    , { image: "assets/img/IMG_0709.JPG", title: "titolo5", text: "testo testo testo testo testo testo testo testo testo 5", link: "#", linkText: "link5" }
                    , { image: "assets/img/IMG_0383.JPG", title: "titolo6", text: "testo testo testo testo testo testo testo testo testo 6", link: "#", linkText: "link6" }
                    , { image: "assets/img/IMG_0383.JPG", title: "titolo7", text: "testo testo testo testo testo testo testo testo testo 7", link: "#", linkText: "link7" }
                    , { image: "assets/img/IMG_0383.JPG", title: "titolo8", text: "testo testo testo testo testo testo testo testo testo 8", link: "#", linkText: "link8" }
                ]
            };
            //=======================================headings=======================================
            var templateHeadings = Handlebars.compile($("#headings-template").html());
            $("#headings").append(templateHeadings(context));
            //=======================================headings end=======================================
            //=======================================featurette=======================================
            var templateFeaturette = Handlebars.compile($("#featurette-template").html());
            $("#headings").append(templateFeaturette(context));
            //=======================================featurette end=======================================

            app.setActiveMenu("#home");
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        //app.receivedEvent('deviceready');
        app.loadHome();
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

        var i = 0;
        alert(i++);
        var parentElement = document.getElementById(id);
        alert(i++);
        var listeningElement = parentElement.querySelector('.listening');
        alert(i++);
        var receivedElement = parentElement.querySelector('.received');
        alert(i++);

        listeningElement.setAttribute('style', 'display:none;');
        alert(i++);
        receivedElement.setAttribute('style', 'display:block;');
        alert(i++);

        console.log('Received Event: ' + id);
        alert(i++);
        //navigator.splashscreen.show();
        //setTimeout(function () { navigator.splashscreen.hide(); }, 3000);
    }
};
