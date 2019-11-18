'use strict';

var Imitation = function () {
    var imitation = this;

    this.Progress = function() {
        this.wrapper = $('.js-progress');
        this.percent = this.wrapper.find('.js-progress-percent');
        this.progressbar = this.wrapper.find('.js-progress-bar');
        this.index = 0;
        this.actCl = 'state_active';
    };

    this.Progress.prototype = {
        calc: function () {
            this.progressbar.addClass(this.actCl);
            var progress = this;
            setTimeout(function () {
                if (progress.index < 101) {
                    progress.percent.text(progress.index + '%');
                    progress.index++;
                    progress.calc();
                } 
                else {
                    
                }
            }, 60);
        },
        init: function () {
            this.calc();
        }
    };

    this.Stages = function () {
        this.wrapper = $('.js-stage');
        this.stage = this.wrapper.find('.js-stage-block');
        this.startBlock = this.wrapper.find('.js-stages-start');
        this.endBlock = this.wrapper.find('.js-stages-end');
        this.actCl = 'state_visible';
        this.disCl = 'state_hidden';
        this.length = this.stage.length;
        this.index = 0;
    };

    this.Stages.prototype = {
        show: function () {
            var stages = this;
            setTimeout(function () {
                if (stages.index < stages.length) {
                    stages.stage.eq(stages.index).addClass(stages.actCl);
                    this.checkbox = stages.stage.eq(stages.index).find('.js-checkbox');
                    this.checkbox.attr('checked', true);
                    stages.index++;
                    stages.show();
                } else {
                    stages.onStagesEnd();                        
                }
            }, 1500);
        },
        onStagesEnd: function() {
            this.startBlock.addClass(this.disCl);
            this.endBlock.addClass(this.actCl);
        },
        init: function() {
            this.show();
        }
    };
};

Imitation.prototype = {
    init: function() {
        this.stages = new this.Stages();
        this.progress = new this.Progress();

        this.stages.init();
        this.progress.init();
    }
};

var App = function () {
    var app = this;

    this.Indent = function () {
        var indent = this;
        this.wrapper = document.getElementById('js-wrapper');
        this.footer = document.getElementById('js-footer');
        this.mutation = new MutationObserver(function () { indent.padding(); })
    };

    this.Indent.prototype = {
        events: function () {
            this.padding = this.padding.bind(this);
            window.addEventListener('load', this.padding);
            window.addEventListener('resize', this.padding);
            if (this.footer !== null) {
                this.mutation.observe(this.footer, {subtree: true, childList: true});
            }
        },
        padding: function () {
            if (this.wrapper !== null && this.footer !== null) {
                this.wrapper.style.paddingBottom = this.footer.offsetHeight + 'px';
            }
        },
        init: function () {
            this.padding();
            this.events();
        }
    };

    this.DiffDays = function () {
        this.wrapper = document.getElementById('js-days-left');
        this.currentDate = new Date();
        this.finaleDate = new Date("2017-11-30");
    };

    this.DiffDays.prototype = {
        calc: function () {
            this.timeLeft = Math.abs(this.finaleDate.getTime() - this.currentDate.getTime());
            this.daysleft = Math.ceil(this.timeLeft / (1000 * 3600 * 24));
            return this.daysleft;
        },
        init: function () {
            this.calc = this.calc.bind(this);
            this.wrapper.innerHTML = this.calc();
        }
    }

    this.Tabs = function(wrapper) {
        this.tab = wrapper.getElementsByClassName('js-tab');
        this.length = this.tab.length;
        this.tabActCl = 'tab_state_active';
        this.index = 0;
    };

    this.Tabs.prototype = {
        skip: function (index) {
            if (this.index < this.length - 1) {
                this.tab[this.index].classList.remove(this.tabActCl);
                this.tab[this.index].nextElementSibling.classList.add(this.tabActCl);
                this.index++;
            } else {
                this.onTabsEnd();
            }
        },
        onTabsEnd: function () {
        }
    };

    this.Steps = function () {
        this.index = 0;
        this.length = document.getElementsByClassName('js-tab').length;
        this.pagination = document.querySelector('.js-tab-pagination');
        this.step = this.pagination.getElementsByClassName('js-pagination-item');
    };

    this.Form = function () {
        this.index = 0;
        this.wrapper = document.getElementById('js-tab-wrapper');
        this.form = document.getElementsByClassName('js-form');
        this.button = this.wrapper.getElementsByClassName('js-tab-button');
        this.tabs = new app.Tabs(this.wrapper);

        this.buttonReason = $('.js-button-reason');
        this.buttonDate = $('.js-button-date');
        this.buttonTime = $('.js-button-time');
        this.selectDay = $('.js-select-day');
        this.selectMonth = $('.js-select-month');
        this.selectYear = $('.js-select-year');
        this.selects = $('.js-select');
        this.selectError = $('.js-date-error');
    }

    this.Form.prototype = {
        submit: function () {
            var form = this;
            for (var i = 0; i < this.form.length; i++) {
                this.form[i].addEventListener('submit', function (e) {
                    e.preventDefault();
                    if (app.steps.index == 2) {
                        var dayVal = Number(form.selectDay.val());
                        var monthVal = Number(form.selectMonth.val());
                        var yearVal = Number(form.selectYear.val());
                        if (isNaN(dayVal)) {
                            form.selects.removeClass('error');
                            form.selectDay.addClass('error');
                            form.selectError.show();
                            return;                            
                        } else if(isNaN(monthVal)) {
                            form.selects.removeClass('error');
                            form.selectMonth.addClass('error');
                            form.selectError.show();
                            return;
                        } else if (isNaN(yearVal)) {
                            form.selects.removeClass('error');
                            form.selectYear.addClass('error');
                            form.selectError.show();
                            return;
                        } else {
                            form.selectError.hide();
                            form.selects.removeClass('error');
                            form.selects.addClass('success');
                            app.zodiac = new app.Zodiac();
                            app.zodiac.init();
                            var resultZodiac = app.zodiac.init();
                            app.userinfo.userInfoZodiac.text(resultZodiac);
                        }
                    }
                    if (app.steps.index != 1) {
                        this.querySelector('.js-tab-button').classList.add('button_state_disabled');                        
                    }
                    setTimeout(function () {
                        form.tabs.skip();
                        app.steps.index++;
                        if (app.steps.index >= 1) {
                            app.steps.pagination.classList.add('tab__pagination_state_active');
                        } 
                        if (app.steps.index < app.steps.length - 1) {
                            app.steps.step[app.steps.index - 1].classList.add('pagination__circle_state_active');
                        }
                        if (app.steps.index == 4 ) {
                            var imitation = new Imitation();
                            imitation.init();
                        }
                        if (app.steps.index == 5 ) {
                            app.steps.pagination.classList.remove('tab__pagination_state_active');
                        }
                    }, 800)
                })                
            }
        },
        click: function () {
            var form = this;
            this.buttonReason.on('click', function () {
                $(this).addClass('button_state_disabled');
                app.userinfo.userInfoReason.text($(this).data('reason'));
            });
            this.buttonDate.on('click', function () {
                var year = form.selectYear.val();
                var month = form.selectMonth.val();
                var day = form.selectDay.val();
                if (day.length < 2) { day = '0' + day };
                if (month.length < 2) { month = '0' + month };
                var date = day + '.' + month + '.' + year;
                app.userinfo.userInfoDate.text(date);
            });
            this.buttonTime.on('click', function () {
                app.userinfo.userInfoTime.text($(this).data('time'));
            });
        },
        init: function () {
            this.submit();
            this.click();
        }
    }

    this.UserInfo = function () {
        this.userInfoReason = $('#js-user-reason');
        this.userInfoDate = $('#js-user-date');
        this.userInfoZodiac = $('#js-user-zodiac');
        this.userInfoTime = $('#js-user-time');
    };

    this.Zodiac = function () {
        this.day = $('.js-select-day').val();
        this.month = $('.js-select-month').val();
        this.value = '';
    };

    this.Zodiac.prototype = {
        init: function() {
            if (this.month==1 && this.day>=20 || this.month==2 && this.day<=18) this.value = $('.zodiac_1').text();
            else if (this.month==2 && this.day>=19 || this.month==3 && this.day<=20) this.value = $('.zodiac_2').text();
            else if (this.month==3 && this.day>=21 || this.month==4 && this.day<=19) this.value = $('.zodiac_3').text();
            else if (this.month==4 && this.day>=20 || this.month==5 && this.day<=20) this.value = $('.zodiac_4').text();
            else if (this.month==5 && this.day>=21 || this.month==6 && this.day<=21) this.value = $('.zodiac_5').text();
            else if (this.month==6 && this.day>=22 || this.month==7 && this.day<=22) this.value = $('.zodiac_6').text();
            else if (this.month==7 && this.day>=23 || this.month==8 && this.day<=22) this.value = $('.zodiac_7').text();
            else if (this.month==8 && this.day>=23 || this.month==9 && this.day<=22) this.value = $('.zodiac_8').text();
            else if (this.month==9 && this.day>=23 || this.month==10 && this.day<=22) this.value = $('.zodiac_9').text();
            else if (this.month==10 && this.day>=23 || this.month==11 && this.day<=21) this.value = $('.zodiac_10').text();
            else if (this.month==11 && this.day>=22 || this.month==12 && this.day<=21) this.value = $('.zodiac_11').text();
            else if (this.month==12 && this.day>=22 || this.month==1 && this.day<=19) this.value = $('.zodiac_12').text();
            return this.value;
        }
    }
}

App.prototype = {
    init: function () {
        this.indent = new this.Indent();
        this.diffDays = new this.DiffDays();
        this.steps = new this.Steps();
        this.form = new this.Form();
        this.userinfo = new this.UserInfo();

        this.indent.init();
        this.diffDays.init();
        this.form.init();
    }
}

var app = new App();
app.init();