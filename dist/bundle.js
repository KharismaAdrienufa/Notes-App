(() => {
  var t = {
      639() {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_formSubmitHandler", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              (e._formSubmitHandler = e._onFormSubmit.bind(e)),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(c, n),
            (u = c),
            (l = [
              {
                key: "connectedCallback",
                value: function () {
                  (this._shadowRoot
                    .querySelector("#createNote")
                    .addEventListener("submit", this._formSubmitHandler),
                    this._onInputTitle());
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  this._shadowRoot
                    .querySelector("#createNote")
                    .removeEventListener("submit", this._formSubmitHandler);
                },
              },
              {
                key: "_onInputTitle",
                value: function (t) {
                  var e = this._shadowRoot.querySelector("#noteTitle"),
                    n = this._shadowRoot.querySelector("#validMessage"),
                    r = function (t) {
                      (t.target.setCustomValidity(""),
                        t.target.validity.patternMismatch
                          ? (t.target.setCustomValidity(
                              "it can't start with symbol, contain whitespace or special character",
                            ),
                            (n.textContent =
                              "it can't start with symbol, contain whitespace or special character"))
                          : (n.textContent = ""));
                    };
                  (e.addEventListener("input", r),
                    e.addEventListener("blur", r));
                },
              },
              {
                key: "_onFormSubmit",
                value: function (t) {
                  t.preventDefault();
                  var e = this._shadowRoot.querySelector("#noteTitle").value,
                    n = this._shadowRoot.querySelector("#noteBody").value;
                  e &&
                    n &&
                    this.dispatchEvent(
                      new CustomEvent("submit-note", {
                        detail: { noteTitle: e, noteBody: n },
                        bubbles: !0,
                        composed: !0,
                      }),
                    );
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n        :host {\n            font-family: var(--primary-font);\n            color: white;\n        }\n\n        .form-group {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            grid-template-rows: 1fr, auto, 1fr;\n            grid-template-areas:\n            'title message'\n            'body .'\n            'button .'\n            ;\n            gap: 15px;\n        }\n\n        .semi-hidden {\n            font-size: 1px;\n            color: black;\n        }\n\n        input,\n        textarea,\n        p,\n        button {\n            font-family: inherit;\n            color: inherit;\n        }\n\n        ::placeholder {\n            color: inherit;\n        }\n\n        input,\n        textarea {\n            width: 250px;\n            border: none;\n            border-radius: 15px;\n        }\n\n\n        input {\n            grid-area: title;\n            background-color: var(--purple-color);\n            padding: 15px;\n        }\n\n        textarea {\n            grid-area: body;\n            background-color: var(--pink-color);\n            height: 200px;\n            padding: 20px;\n        }\n\n        p {\n            grid-area: message;\n            font-size: 12px;\n            align-self: end;\n        }\n\n        button {\n            grid-area: button;\n            border: none;\n            width: 60px;\n            background-color: var(--green-color);\n            border-radius: 15px;\n            padding: 5px;\n            font-weight: bold;\n            justify-self: end;\n        }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  (this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n            <div class="create-note">\n                <form id="createNote" class="create-note">\n                    <div class="form-group">\n                        <label for="noteTitle" class="semi-hidden">Note Title</label>\n                        <input id="noteTitle" name="noteTitle" placeholder="Title" pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"/>\n                        <p id="validMessage" class="valid-message"></p>\n                        \n                        <label for="noteBody" class="semi-hidden">Note Body</label>\n                        <textarea id="noteBody" name="noteBody" placeholder="Body"></textarea>\n\n                        <button type="submit">Add</button>\n                    </div>\n                </form>\n            </div>\n        '));
                },
              },
            ]) && e(u.prototype, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define("create-note", u);
      },
      784() {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_note", {
                id: null,
                title: null,
                body: null,
                createdAt: null,
                archived: null,
              }),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(c, n),
            (u = c),
            (l = [
              {
                key: "note",
                get: function () {
                  return this._note;
                },
                set: function (t) {
                  ((this._note = t), this.render());
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n        .card {\n            background-color: var(--yellow-color);\n            color: black;\n            width: 150px;\n            padding: 20px;\n            border-radius: 15px;\n            font-size: small;\n            position: relative;\n        }\n\n        .card-button {\n            display: flex;\n            flex-direction: row;\n            position: absolute;\n            right: 5px;\n            bottom: 5px;\n        }\n            \n        button {                \n            background: none;\n            border: none;\n        }\n\n        .archive-icon, .delete-icon {\n            font-family: 'Material Symbols Outlined';\n            font-size: 20px;\n            font-weight: 20px;\n        }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  (this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n            <div class="card" data-note-id='
                        .concat(this._note.id, ">\n                <h4>")
                        .concat(this._note.title, "</h4>\n                <p>")
                        .concat(
                          this._note.createdAt,
                          "</p>\n                <p>",
                        )
                        .concat(
                          this._note.body,
                          '</p>\n                <div class="card-button">\n                    <button>\n                        <span class="archive-icon">archive</span>\n                    </button>\n                    <button>\n                        <span class="delete-icon">delete</span>\n                    </button>\n                </div\n            </div>\n        ',
                        )));
                },
              },
            ]) && e(u.prototype, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define("note-item", u);
      },
      94() {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(c, n),
            (u = c),
            (l = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n        .notes-list{\n            height: 300px;\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            overflow-y: auto;\n            gap: 10px;\n        }\n            \n        .notes-list::-webkit-scrollbar {\n            display: none;\n        }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  (this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n            <div class="notes-list">\n                <slot></slot>\n            </div>\n        '));
                },
              },
            ]) && e(u.prototype, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define("notes-list", u);
      },
      566() {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(c, n),
            (u = c),
            (l = [
              {
                key: "connectedCallback",
                value: function () {
                  var t = this;
                  (this._shadowRoot
                    .querySelector("#searchForm")
                    .addEventListener("submit", function (t) {
                      t.preventDefault();
                    }),
                    this._shadowRoot
                      .querySelector("input")
                      .addEventListener("input", function (e) {
                        t.dispatchEvent(
                          new CustomEvent("search", {
                            detail: { query: e.target.value },
                            bubbles: !0,
                          }),
                        );
                      }));
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n        .search-form {\n            display: flex;\n            flex-direction: row;\n        }\n\n        .form-group {\n            position: relative;\n        }\n        \n        input {\n            width: 150px;\n            height: 25px;\n            padding: 15px;\n            border-radius: 20px;\n            border-style: none;\n            background-color: var(--blue-color);\n            color: white;\n        }\n\n        ::placeholder {\n            font-family: var(--primary-font);\n            color: white;\n        }\n\n        .semi-hidden {\n            font-size: 1px;\n            color: black;\n        }\n\n        button {\n            background: none;\n            border: none;\n            color: white;\n            position: absolute;\n            right: 5px;\n        }\n\n        .search-icon {\n            font-family: 'Material Symbols Outlined';\n            font-size: 20px;\n        }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "render",
                value: function () {
                  (this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n            <div class="search-bar">\n                <form id="searchForm" class="search-form">\n                    <div class="form-group">\n                        <label for="title" class="semi-hidden">Title</label>\n                        <input id="title" name="title" type="search" placeholder="Search"/>\n                        <button>\n                            <span class="search-icon">search</span>\n                        </button>\n                    </div>\n\n                </form>\n            </div>\n        '));
                },
              },
            ]) && e(u.prototype, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define("search-bar", u);
      },
      919(t, e, n) {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          ":root {\n    --primary-font: 'Montserrat', serif;\n    --secondary-font: 'Alata', sans-serif;\n    --blue-color: #2E6E83;\n    --purple-color: #451952;\n    --pink-color: #662549;\n    --green-color: #45775F;\n    --yellow-color: #EFBC08;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: black;\n    color: white;\n}\n\nh1, h3 {\n    font-family: var(--primary-font);\n}\n\nh1 {\n    font-weight: bold;\n    font-size: 75px;\n}\n\n.grid {\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    grid-template-areas:\n    'header .'\n    'main-content side-content'\n    ;\n    padding: 0 30px;\n    margin-bottom: 50px;\n    gap: 10px;\n}\n\nheader {\n    grid-area: header;\n}\n\nmain {\n    grid-area: main-content;\n}\n\naside {\n    grid-area: side-content;\n}\n",
          "",
        ]);
        const c = a;
      },
      314(t) {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var s = [].concat(t[l]);
                (r && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      601(t) {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72(t) {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              l = r.base ? u[0] + r.base : u[0],
              s = i[l] || 0,
              f = "".concat(l, " ").concat(s);
            i[l] = s + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) (e[p].references++, e[p].updater(d));
            else {
              var y = o(d, r);
              ((r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: y, references: 1 }));
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), l = 0; l < i.length; l++) {
              var s = n(i[l]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            i = u;
          };
        };
      },
      659(t) {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540(t) {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return (t.setAttributes(e, t.attributes), t.insert(e, t.options), e);
        };
      },
      56(t, e, n) {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825(t) {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                (n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {")));
                var o = void 0 !== n.layer;
                (o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}"));
                var i = n.sourceMap;
                (i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options));
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113(t) {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return (t[r](i, i.exports, n), i.exports);
  }
  ((n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return (n.d(e, { a: e }), e);
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        u = n.n(c),
        l = n(540),
        s = n.n(l),
        f = n(113),
        p = n.n(f),
        d = n(919),
        y = {};
      function b(t) {
        return (
          (b =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          b(t)
        );
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, v(r.key), r));
        }
      }
      function v(t) {
        var e = (function (t) {
          if ("object" != b(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != b(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == b(e) ? e : e + "";
      }
      function m(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (m = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (w()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return (n && g(o, n.prototype), o);
              })(t, arguments, _(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              g(n, t)
            );
          }),
          m(t)
        );
      }
      function w() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (w = function () {
          return !!t;
        })();
      }
      function g(t, e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return ((t.__proto__ = e), t);
              }),
          g(t, e)
        );
      }
      function _(t) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          _(t)
        );
      }
      ((y.styleTagTransform = p()),
        (y.setAttributes = u()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = s()),
        e()(d.A, y),
        d.A && d.A.locals && d.A.locals,
        n(566));
      var S = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((t = (function (t, e, n) {
              return (
                (e = _(e)),
                (function (t, e) {
                  if (e && ("object" == b(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(t);
                })(
                  t,
                  w()
                    ? Reflect.construct(e, n || [], _(t).constructor)
                    : e.apply(t, n),
                )
              );
            })(this, e))._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && g(t, e));
          })(e, t),
          (n = e),
          (r = [
            {
              key: "_updateStyle",
              value: function () {
                this._style.textContent =
                  "\n            .app-bar {\n                display: grid;\n                grid-template-columns: repeat(2, 1fr);\n                grid-template-rows: repeat(3, 1fr);\n                grid-template-areas:\n                'app-title .'\n                'app-title title-desc'\n                'search-bar title-desc'\n                ;\n            }\n\n            .app-title {\n                grid-area: app-title;\n            }\n\n            .title-desc {\n                grid-area: title-desc;\n            }\n\n            search-bar {\n                grid-area: search-bar;\n            }\n        ";
              },
            },
            {
              key: "_emptyContent",
              value: function () {
                this.innerHTML = "";
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                this.render();
              },
            },
            {
              key: "render",
              value: function () {
                (this._emptyContent(),
                  this._updateStyle(),
                  this.appendChild(this._style),
                  (this.innerHTML +=
                    '\n            <div class="app-bar">\n                <h1 class="app-title">Notes</h1>\n                <h3 class="title-desc">Write down your<br>thought</h3>\n                <search-bar></search-bar> \n            </div>\n        '));
              },
            },
          ]) && h(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(m(HTMLElement));
      function O(t) {
        return (
          (O =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          O(t)
        );
      }
      function j(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, T(r.key), r));
        }
      }
      function T(t) {
        var e = (function (t) {
          if ("object" != O(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != O(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == O(e) ? e : e + "";
      }
      (customElements.define("app-bar", S), n(639), n(784), n(94));
      var x = [
        {
          id: "notes-jT-jjsyz61J8XKiI",
          title: "Welcome to Notes, Dimas!",
          body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
          createdAt: "2022-07-28T10:03:12.594Z",
          archived: !1,
        },
        {
          id: "notes-aB-cdefg12345",
          title: "Meeting Agenda",
          body: "Discuss project updates and assign tasks for the upcoming week.",
          createdAt: "2022-08-05T15:30:00.000Z",
          archived: !1,
        },
        {
          id: "notes-XyZ-789012345",
          title: "Shopping List",
          body: "Milk, eggs, bread, fruits, and vegetables.",
          createdAt: "2022-08-10T08:45:23.120Z",
          archived: !1,
        },
        {
          id: "notes-1a-2b3c4d5e6f",
          title: "Personal Goals",
          body: "Read two books per month, exercise three times a week, learn a new language.",
          createdAt: "2022-08-15T18:12:55.789Z",
          archived: !1,
        },
        {
          id: "notes-LMN-456789",
          title: "Recipe: Spaghetti Bolognese",
          body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
          createdAt: "2022-08-20T12:30:40.200Z",
          archived: !1,
        },
        {
          id: "notes-QwErTyUiOp",
          title: "Workout Routine",
          body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
          createdAt: "2022-08-25T09:15:17.890Z",
          archived: !1,
        },
        {
          id: "notes-abcdef-987654",
          title: "Book Recommendations",
          body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
          createdAt: "2022-09-01T14:20:05.321Z",
          archived: !1,
        },
        {
          id: "notes-zyxwv-54321",
          title: "Daily Reflections",
          body: "Write down three positive things that happened today and one thing to improve tomorrow.",
          createdAt: "2022-09-07T20:40:30.150Z",
          archived: !1,
        },
        {
          id: "notes-poiuyt-987654",
          title: "Travel Bucket List",
          body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
          createdAt: "2022-09-15T11:55:44.678Z",
          archived: !1,
        },
        {
          id: "notes-asdfgh-123456",
          title: "Coding Projects",
          body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
          createdAt: "2022-09-20T17:10:12.987Z",
          archived: !1,
        },
        {
          id: "notes-5678-abcd-efgh",
          title: "Project Deadline",
          body: "Complete project tasks by the deadline on October 1st.",
          createdAt: "2022-09-28T14:00:00.000Z",
          archived: !1,
        },
        {
          id: "notes-9876-wxyz-1234",
          title: "Health Checkup",
          body: "Schedule a routine health checkup with the doctor.",
          createdAt: "2022-10-05T09:30:45.600Z",
          archived: !1,
        },
        {
          id: "notes-qwerty-8765-4321",
          title: "Financial Goals",
          body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
          createdAt: "2022-10-12T12:15:30.890Z",
          archived: !1,
        },
        {
          id: "notes-98765-54321-12345",
          title: "Holiday Plans",
          body: "Research and plan for the upcoming holiday destination.",
          createdAt: "2022-10-20T16:45:00.000Z",
          archived: !1,
        },
        {
          id: "notes-1234-abcd-5678",
          title: "Language Learning",
          body: "Practice Spanish vocabulary for 30 minutes every day.",
          createdAt: "2022-10-28T08:00:20.120Z",
          archived: !1,
        },
      ];
      const E = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "getAll",
              value: function () {
                return x;
              },
            },
            {
              key: "searchNotes",
              value: function (t) {
                return x.filter(function (e) {
                  var n = (e.title || "-").toLowerCase().replace(/\s/g, ""),
                    r = t.toLowerCase().replace(/\s/g, "");
                  return -1 !== n.indexOf(r);
                });
              },
            },
            {
              key: "addNotes",
              value: function (t) {
                x.push(t);
              },
            },
          ]),
          null && j(t.prototype, null),
          e && j(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function P(t) {
        return (
          (P =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          P(t)
        );
      }
      function k(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, C(r.key), r));
        }
      }
      function C(t) {
        var e = (function (t) {
          if ("object" != P(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != P(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == P(e) ? e : e + "";
      }
      const R = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "emptyElement",
              value: function (t) {
                t.innerHTML = "";
              },
            },
            {
              key: "showElement",
              value: function (t) {
                ((t.style.display = "block"), (t.hidden = !1));
              },
            },
            {
              key: "hideElement",
              value: function (t) {
                ((t.style.display = "none"), (t.hidden = !0));
              },
            },
            {
              key: "generateId",
              value: function () {
                return "notes-".concat(crypto.randomUUID());
              },
            },
            {
              key: "generateDate",
              value: function () {
                return new Date().toISOString();
              },
            },
          ]),
          null && k(t.prototype, null),
          e && k(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function M(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      document.addEventListener("DOMContentLoaded", function () {
        var t = document.querySelector("notes-list"),
          e = document.querySelector("search-bar"),
          n = document.querySelector("create-note"),
          r = function (e) {
            R.emptyElement(t);
            var n,
              r = e.map(function (t) {
                var e = document.createElement("note-item");
                return ((e.note = t), e);
              });
            t.append.apply(
              t,
              (function (t) {
                if (Array.isArray(t)) return M(t);
              })((n = r)) ||
                (function (t) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                  )
                    return Array.from(t);
                })(n) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return M(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? M(t, e)
                          : void 0
                    );
                  }
                })(n) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(),
            );
          },
          o = function () {
            var t = E.getAll();
            r(t);
          };
        (e.addEventListener("search", function (t) {
          t.preventDefault();
          var e = t.detail.query;
          if (e.trim()) {
            var n = E.searchNotes(e);
            r(n);
          } else o();
        }),
          n.addEventListener("submit-note", function (t) {
            t.preventDefault();
            var e = t.detail,
              n = e.noteTitle,
              r = e.noteBody,
              i = {
                id: R.generateId(),
                title: n,
                body: r,
                createdAt: R.generateDate(),
                archived: !1,
              };
            (E.addNotes(i), o());
          }),
          o());
      });
    })());
})();
