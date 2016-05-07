// Generated by CoffeeScript 1.10.0
(function() {
  var UI_JS, VERSION, Weya, template;

  VERSION = 9;

  Weya = (require('weya')).Weya;

  UI_JS = ['static', 'parser', 'reader', 'nodes', 'render'];

  template = function() {
    return this.html(function() {
      this.head(function() {
        this.meta({
          charset: "utf-8"
        });
        this.title(this.$.title);
        this.meta({
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        });
        this.meta({
          name: "apple-mobile-web-app-capable",
          content: "yes"
        });
        this.link({
          href: 'http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900',
          rel: 'stylesheet',
          type: 'text/css'
        });
        this.link({
          href: "lib/skeleton/css/skeleton.css",
          rel: "stylesheet"
        });
        this.link({
          href: "lib/highlightjs/styles/default.css",
          rel: "stylesheet"
        });
        this.link({
          href: "css/style.css",
          rel: "stylesheet"
        });
        this.link({
          href: "blog.css",
          rel: "stylesheet"
        });
        return this.script('(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n\nga(\'create\', \'UA-44255805-1\', \'auto\');\nga(\'send\', \'pageview\');');
      });
      return this.body(function() {
        var file, i, len, ref, results;
        this.div(".container.wallapatta-container", function() {
          this.div(".header", function() {
            this.h1(function() {
              return this.a({
                href: "index.html"
              }, "VARUNA JAYASIRI");
            });
            return this.a(".button", {
              href: "https://www.twitter.com/vpj"
            }, "@vpj");
          });
          return this.div(".wallapatta", function() {
            this.h1(".title", this.$.title);
            this.h3(".date", "" + this.$.date);
            return this.div(".row", function() {
              this.div(".wallapatta-main.nine.columns", "###MAIN###");
              this.div(".wallapatta-sidebar.three.columns", "###SIDEBAR###");
              return this.div({
                style: {
                  display: 'none'
                }
              }, "###CODE###");
            });
          });
        });
        this.script({
          src: "lib/highlightjs/highlight.pack.js"
        });
        this.script({
          src: "lib/weya/weya.js"
        });
        this.script({
          src: "lib/weya/base.js"
        });
        this.script({
          src: "lib/mod/mod.js"
        });
        ref = this.$.scripts;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          file = ref[i];
          results.push(this.script({
            src: "js/" + file + ".js?v=" + VERSION
          }));
        }
        return results;
      });
    });
  };

  exports.html = function(options) {
    var html;
    if (options == null) {
      options = {};
    }
    if (options.scripts == null) {
      options.scripts = UI_JS;
    }
    html = Weya.markup({
      context: options
    }, template);
    html = html.replace('###MAIN###', options.main);
    html = html.replace('###SIDEBAR###', options.sidebar);
    html = html.replace('###CODE###', "<div class='wallapatta-code'>" + options.code + "</div>");
    html = "<!DOCTYPE html>" + html;
    return html;
  };

}).call(this);
