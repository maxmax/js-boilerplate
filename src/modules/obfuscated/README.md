# Module Obfuscated

`function functionTestOne(el, q) {
  // ...
}`

`function functionTestTwo(el, q) {
  // ...
}`

`Object.assign(window, {
  functionTestOne: functionTestOne,
  functionTestTwo: functionTestTwo,
  ...
})`

`! function(n) {
    function o(e) {
        if (t[e]) return t[e].exports;
        var u = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(u.exports, u, u.exports, o), u.l = !0, u.exports
    }
    var t = {};
    o.m = n, o.c = t, o.d = function(n, t, e) {
        o.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }, o.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return o.d(t, "a", t), t
    }, o.o = function(n, o) {
        return Object.prototype.hasOwnProperty.call(n, o)
    }, o.p = "", o(o.s = 0)
}([function(n, o) {
    function t(n, o) { // functionTestOne
        console.log("function assign Mount!"), n && o ? console.log("function assign Mount! el, q:", n, o) : n ? console.log("function assign Mount! el:", n) : console.log("function assign Mount!")
    }

    function e(n, o) { // functionTestTwo
        console.log("function assign Mount!"), n && o ? console.log("ffunction assign Mount! el, q:", n, o) : n ? console.log("function assign Mount! el:", n) : console.log("function assign Mount!")
    }
    e("Default Mount!"), Object.assign(window, {
        functionTestOne: t,
        functionTestTwo: e
    })
}]);`
