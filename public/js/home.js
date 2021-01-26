!(function e(t, r, n) {
  function a(l, i) {
    if (!r[l]) {
      if (!t[l]) {
        var c = 'function' == typeof require && require;
        if (!i && c) return c(l, !0);
        if (o) return o(l, !0);
        throw new Error("Cannot find module '" + l + "'");
      }
      var s = (r[l] = {exports: {}});
      t[l][0].call(
        s.exports,
        function (e) {
          var r = t[l][1][e];
          return a(r || e);
        },
        s,
        s.exports,
        e,
        t,
        r,
        n
      );
    }
    return r[l].exports;
  }
  for (
    var o = 'function' == typeof require && require, l = 0;
    l < n.length;
    l++
  )
    a(n[l]);
  return a;
})(
  {
    1: [
      function (e, t, r) {
        'use strict';
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function a(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(r), !0).forEach(function (t) {
                  l(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function l(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        var i = $('#chart-row'),
          c = i.find('.loader'),
          s = i.find('.chart'),
          d = i.find('[data-toggle="popover"]'),
          u = $('body');
        function p(e) {
          var t = [];
          return (
            ['Female', 'Male', 'Others', 'Anonymous'].forEach(function (r) {
              e.forEach(function (e) {
                r === e.gender && t.push(e);
              });
            }),
            t
          );
        }
        function m(e, t) {
          return e.map(function (e) {
            var r;
            return e[t]
              ? e
              : (l((r = {}), t, 'Anonymous'), l(r, 'count', e.count), r);
          });
        }
        function f(e) {
          ($.fn.popover.Constructor.Default.whiteList.table = []),
            ($.fn.popover.Constructor.Default.whiteList.tbody = []),
            ($.fn.popover.Constructor.Default.whiteList.tr = []),
            ($.fn.popover.Constructor.Default.whiteList.td = []),
            fetch('/getAllInfo/'.concat(e))
              .then(function (e) {
                if (e.ok) return e.json();
                throw Error(e.statusText || 'HTTP error');
              })
              .then(function (e) {
                try {
                  c.hide().removeClass('d-flex'), s.removeClass('d-none');
                  var t = m(e.ageGroups, 'ageGroup').sort(function (e, t) {
                    return Number(e.count) - Number(t.count);
                  });
                  b(t);
                  var r = e.motherTongues.reduce(function (e, t) {
                      return e + Number(t.count);
                    }, 0),
                    n = m(e.motherTongues, 'motherTongue').sort(function (
                      e,
                      t
                    ) {
                      return Number(t.count) - Number(e.count);
                    });
                  y(n.slice(0, 4), r, 'mother-tongue-chart', !0),
                    y(n, r, 'modal-chart');
                  var a = e.genderData.map(function (e) {
                      return e.gender
                        ? o(
                            o({}, e),
                            {},
                            {
                              gender:
                                e.gender.charAt(0).toUpperCase() +
                                e.gender.slice(1),
                            }
                          )
                        : {gender: 'Anonymous', count: e.count};
                    }),
                    l = p(a),
                    i = new h();
                  C(l),
                    g(d.eq(0), i.createTableWithTwoColumns(n, 'motherTongue')),
                    g(d.eq(1), i.createTableWithTwoColumns(t, 'ageGroup')),
                    g(d.eq(2), i.createTableWithOneColumn(a, 'gender')),
                    innerWidth < 992 &&
                      $('#modal-chart-wrapper')
                        .find('.modal-dialog')
                        .addClass('w-90'),
                    setTimeout(function () {
                      fetch(
                        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
                      ),
                        fetch(
                          'https://fonts.googleapis.com/icon?family=Material+Icons'
                        ),
                        fetch('css/notyf.min.css'),
                        fetch('css/record.css');
                    }, 2e3);
                } catch (e) {
                  console.log(e),
                    c.show().addClass('d-flex'),
                    s.addClass('d-none');
                }
              })
              .catch(function (e) {
                console.log(e);
              });
        }
        var h = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e);
            }
            var t, r, a;
            return (
              (t = e),
              (r = [
                {
                  key: 'createColumn',
                  value: function (e, t) {
                    return (
                      '<div class="'.concat(t, '">') +
                      '<table class="table table-sm table-borderless mb-0"><tbody>' +
                      e.join('') +
                      '</tbody></table></div>'
                    );
                  },
                },
                {
                  key: 'createTableWithTwoColumns',
                  value: function (e, t) {
                    var r = e.length,
                      n = Math.ceil(r / 2),
                      a = this.createTableRows(e.slice(0, n), t),
                      o = this.createTableRows(e.slice(n, r), t);
                    return (
                      '<div class="row">' +
                      this.createColumn(a, 'col-6') +
                      this.createColumn(o, 'col-6') +
                      '</div>'
                    );
                  },
                },
                {
                  key: 'createTableRows',
                  value: function (e, t) {
                    return e.map(function (e) {
                      return '<tr><td>'
                        .concat(e[t], '</td><td>')
                        .concat(e.count, '</td></tr>');
                    });
                  },
                },
                {
                  key: 'createTableWithOneColumn',
                  value: function (e, t) {
                    var r = this.createTableRows(e, t);
                    return '<div class="row">'.concat(
                      this.createColumn(r, 'col'),
                      '</div>'
                    );
                  },
                },
              ]) && n(t.prototype, r),
              a && n(t, a),
              e
            );
          })(),
          g = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '<div></div>';
            e
              .on('mouseenter focus', function () {
                e.attr('data-content', t),
                  e.popover('show'),
                  u.children('.popover').on('mouseleave blur', function () {
                    setTimeout(function () {
                      u.children('.popover').find(':hover').length ||
                        e.is(':hover') ||
                        e.popover('hide');
                    }, 300);
                  });
              })
              .on('mouseleave blur', function () {
                setTimeout(function () {
                  u.children('.popover').find(':hover').length ||
                    e.is(':hover') ||
                    e.popover('hide');
                }, 300);
              }),
              e.on('shown.bs.popover', function () {
                var e = u.children('.popover')[0];
                setTimeout(function () {
                  var t = e.getBoundingClientRect();
                  t.height + t.y > innerHeight && e.scrollIntoView(!1);
                }, 0);
              });
          },
          v = ['#3f80ff', '#4D55A5', '#735dc6', '#68b7dc'],
          b = function (e) {
            var t = am4core.create('age-group-chart', am4charts.PieChart3D);
            (t.data = e.slice(0, 3).concat({
              ageGroup: 'Others',
              count: e.slice(3).reduce(function (e, t) {
                return e + Number(t.count);
              }, 0),
            })),
              (t.paddingBottom = 50),
              (t.innerRadius = am4core.percent(40)),
              (t.depth = 50),
              (t.legend = new am4charts.Legend()),
              (t.legend.labels.template.fill = am4core.color('#74798c')),
              (t.legend.valueLabels.template.fill = am4core.color('#74798c')),
              (t.legend.labels.template.textDecoration = 'none'),
              (t.legend.valueLabels.template.textDecoration = 'none'),
              (t.legend.itemContainers.template.paddingTop = 5),
              (t.legend.itemContainers.template.paddingBottom = 5),
              (t.legend.labels.template.states.getKey(
                'active'
              ).properties.textDecoration = 'line-through'),
              (t.legend.valueLabels.template.states.getKey(
                'active'
              ).properties.textDecoration = 'line-through'),
              (t.legend.valueLabels.template.align = 'right'),
              (t.legend.valueLabels.template.textAlign = 'start');
            var r = t.series.push(new am4charts.PieSeries3D());
            (r.labels.template.disabled = !0),
              (r.ticks.template.disabled = !0),
              (r.calculatePercent = !0),
              (r.slices.template.tooltipText =
                "{category}: [bold]{value.percent.formatNumber('#.0')}% ({value.value})[/]"),
              (r.dataFields.value = 'count'),
              (r.dataFields.depthValue = 'count'),
              (r.dataFields.category = 'ageGroup'),
              r.slices.template.adapter.add('fill', function (e, t) {
                return v[t.dataItem.index];
              });
          },
          y = function (e, t, r, n) {
            var a = am4core.create(r, am4charts.XYChart3D);
            a.data = e;
            var o = a.xAxes.push(new am4charts.CategoryAxis());
            (o.dataFields.category = 'motherTongue'),
              (o.renderer.labels.template.rotation = 270),
              (o.renderer.labels.template.hideOversized = !1),
              (o.renderer.minGridDistance = 10),
              (o.renderer.labels.template.horizontalCenter = 'right'),
              (o.renderer.labels.template.verticalCenter = 'middle'),
              (o.renderer.labels.template.fill = '#74798c'),
              (o.renderer.grid.template.disabled = !0);
            var l = a.yAxes.push(new am4charts.ValueAxis());
            (l.renderer.labels.template.fill = '#74798c'),
              (l.renderer.grid.template.disabled = !1),
              (l.renderer.baseGrid.disabled = !0);
            var i = a.series.push(new am4charts.ColumnSeries3D());
            (i.dataFields.valueY = 'count'),
              (i.dataFields.categoryX = 'motherTongue'),
              (i.calculatePercent = !0);
            var c = i.columns.template;
            (c.tooltipText = '{categoryX} : [bold]@@@% ({valueY.value})[/]'),
              i.tooltip.label.adapter.add('text', function (e, r) {
                return r.dataItem && e
                  ? e.replace('@@@', ((100 * r.dataItem.valueY) / t).toFixed(1))
                  : '';
              }),
              c.adapter.add('fill', function (e, t) {
                return n
                  ? v[t.dataItem.index]
                  : a.colors.getIndex(t.dataItem.index);
              });
          },
          C = function (e) {
            am4core.ready(function () {
              var t = am4core.create('gender-chart', am4charts.XYChart3D);
              (t.paddingBottom = 30), (t.paddingTop = 5), (t.data = e);
              var r = t.xAxes.push(new am4charts.CategoryAxis());
              (r.dataFields.category = 'gender'),
                (r.renderer.minGridDistance = 20),
                (r.renderer.inside = !1),
                (r.renderer.labels.template.fill = '#74798c'),
                (r.renderer.grid.template.disabled = !0);
              var n = r.renderer.labels.template;
              (n.rotation = -90),
                (n.horizontalCenter = 'left'),
                (n.verticalCenter = 'middle'),
                (n.dy = 10),
                (n.inside = !1);
              var a = t.yAxes.push(new am4charts.ValueAxis());
              (a.renderer.grid.template.disabled = !1),
                (a.renderer.labels.template.fill = '#74798c'),
                (a.renderer.baseGrid.disabled = !0);
              var o = t.series.push(new am4charts.ConeSeries());
              (o.calculatePercent = !0),
                (o.dataFields.valueY = 'count'),
                (o.dataFields.categoryX = 'gender'),
                (o.columns.template.tooltipText =
                  "{categoryX} : [bold]{valueY.percent.formatNumber('#.0')}% ({valueY.value})[/]");
              var l = o.columns.template;
              l.adapter.add('fill', function (e, t) {
                return v[v.length - 1 - t.dataItem.index];
              }),
                l.adapter.add('stroke', function (e, t) {
                  return v[v.length - 1 - t.dataItem.index];
                });
            });
          };
        t.exports = {
          Table: h,
          updateGraph: function (e) {
            am4core.disposeAllCharts(),
              c.show().addClass('d-flex'),
              s.addClass('d-none'),
              f(e);
          },
          buildGraphs: f,
          getOrderedGenderData: p,
          getFormattedData: m,
        };
      },
      {},
    ],
    2: [
      function (e, t, r) {
        'use strict';
        var n = e('./draw-chart'),
          a = n.updateGraph,
          o = n.buildGraphs;
        function l(e, t, r) {
          var n = e.val().trim();
          c(n)
            ? (e.addClass('is-invalid'), t.removeClass('d-none'))
            : (e.removeClass('is-invalid'), t.addClass('d-none')),
            r.trigger('change');
        }
        function i() {
          var e = document.getElementById('age'),
            t = document.getElementById('mother-tongue'),
            r = document.getElementById('username'),
            n = document.querySelector('input[name = "gender"]:checked');
          n && (n.checked = !1),
            (e.selectedIndex = 0),
            (t.selectedIndex = 0),
            (r.value = '');
        }
        var c = function (e) {
          return /^[6-9]\d{9}$/.test(e) || /^\S+@\S+[\.][0-9a-z]+$/.test(e);
        };
        function s(e) {
          e.val().length > 11
            ? (e.tooltip('enable'), e.tooltip('show'))
            : (e.tooltip('disable'), e.tooltip('hide'));
        }
        function d(e) {
          document.getElementById(
            'start-record'
          ).innerText = 'START RECORDING IN '.concat(e.toUpperCase());
        }
        function u(e) {
          var t = 6 * e,
            r = t % 3600;
          return {
            hours: Math.floor(t / 3600),
            minutes: Math.floor(r / 60),
            seconds: r % 60,
          };
        }
        var p = function (e) {
          return fetch('/getDetails/'.concat(e)).then(function (e) {
            if (e.ok) return Promise.resolve(e.json());
            throw Error(e.statusText || 'HTTP error');
          });
        };
        function m(e) {
          var t = $('#speaker-data').find('#loader1,#loader2'),
            r = $('#speakers-wrapper'),
            n = $('#speaker-value'),
            a = $('#hours-wrapper'),
            o = $('#hour-value');
          t.removeClass('d-none'),
            a.addClass('d-none'),
            r.addClass('d-none'),
            p(e)
              .then(function (e) {
                try {
                  var l = u(
                      e.find(function (e) {
                        return 1 === e.index;
                      }).count
                    ),
                    i = l.hours,
                    c = l.minutes,
                    s = l.seconds;
                  o.text(''.concat(i, 'h ').concat(c, 'm ').concat(s, 's')),
                    n.text(
                      e.find(function (e) {
                        return 0 === e.index;
                      }).count
                    ),
                    t.addClass('d-none'),
                    a.removeClass('d-none'),
                    r.removeClass('d-none'),
                    localStorage.setItem('speakersData', JSON.stringify(e));
                } catch (e) {
                  console.log(e);
                }
              })
              .catch(function (e) {
                console.log(e);
              });
        }
        var f = function (e, t) {
            c(e)
              ? t.attr(
                  'data-original-title',
                  'Please validate any error message before proceeding'
                )
              : t.attr(
                  'data-original-title',
                  'Please agree to the Terms and Conditions before proceeding'
                );
          },
          h = function (e, t, r, n) {
            var a = localStorage.getItem(e);
            if (a) {
              var o = JSON.parse(a),
                i = document.querySelector(
                  'input[name = "gender"][value="' + o.gender + '"]'
                );
              i && ((i.checked = !0), (i.previous = !0)),
                (t.value = o.age),
                (r.value = o.motherTongue),
                n.val(o.userName ? o.userName.trim().substring(0, 12) : ''),
                l(n, n.next(), $('#tnc'));
            }
          };
        $(document).ready(function () {
          var e,
            t = $('#proceed-box'),
            r = t.parent(),
            n = document.querySelectorAll('input[name = "gender"]'),
            u = document.getElementById('age'),
            p = document.getElementById('mother-tongue'),
            g = $('#username'),
            v = g.next(),
            b = $('#tnc'),
            y = 'Odia';
          b.prop('checked', !1),
            r.tooltip({
              container: 'body',
              placement: screen.availWidth > 500 ? 'right' : 'auto',
            }),
            h('speakerDetails', u, p, g),
            n.forEach(function (e) {
              e.addEventListener('click', function (e) {
                e.target.previous && (e.target.checked = !1),
                  (e.target.previous = e.target.checked);
              });
            }),
            $('#languageTop').on('change', function (t) {
              (e = t.target.value),
                $('#start_recording').removeAttr('disabled');
            }),
            $('#start_recording').on('click', function () {
              y = e;
            });
          var C = 'Odia';
          $('#language').on('change', function (e) {
            m((C = e.target.value)), d(C), a(C);
          }),
            $('#start-record').on('click', function () {
              y = C;
            }),
            f(g.val().trim(), r),
            b.change(function () {
              var e = g.val().trim();
              this.checked && !c(e)
                ? (t.removeAttr('disabled').removeClass('point-none'),
                  r.tooltip('disable'))
                : (f(e, r),
                  t.prop('disabled', 'true').addClass('point-none'),
                  r.tooltip('enable'));
            }),
            g.on('input focus', function () {
              l(g, v, b), s(g);
            }),
            t.on('click', function () {
              if (b.prop('checked')) {
                var e = Array.from(n).filter(function (e) {
                    return e.checked;
                  }),
                  t = e.length ? e[0].value : '',
                  r = g.val().trim().substring(0, 12);
                if (c(r)) return;
                var a = {
                  gender: t,
                  age: u.value,
                  motherTongue: p.value,
                  userName: r,
                  language: y,
                };
                localStorage.setItem('speakerDetails', JSON.stringify(a)),
                  (location.href = '/record');
              }
            }),
            $('#userModal').on('shown.bs.modal', function () {
              $('#resetBtn').on('click', i),
                g.tooltip({
                  container: 'body',
                  placement: screen.availWidth > 500 ? 'right' : 'auto',
                  trigger: 'focus',
                }),
                s(g);
            }),
            d('Odia'),
            m('Odia'),
            o('Odia');
        }),
          (t.exports = {
            updateLanguageInButton: d,
            updateLanguage: m,
            calculateTime: u,
            testUserName: c,
            fetchDetail: p,
            validateUserName: l,
            resetSpeakerDetails: i,
            setUserNameTooltip: s,
            setStartRecordBtnToolTipContent: f,
            setSpeakerDetails: h,
          });
      },
      {'./draw-chart': 1},
    ],
  },
  {},
  [2]
);
