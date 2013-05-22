// Generated by CoffeeScript 1.6.2
(function() {
  var _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Route = (function(_super) {
    __extends(Route, _super);

    function Route() {
      _ref = Route.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Route.prototype.defaults = {
      routePath: "",
      routeCode: "",
      options: {},
      isRequired: false,
      isProductionVersion: false
    };

    Route.prototype.initialize = function() {};

    return Route;

  })(Backbone.Model);

  window.RouteCollection = (function(_super) {
    __extends(RouteCollection, _super);

    function RouteCollection() {
      this.getRouteCode = __bind(this.getRouteCode, this);
      this.hasRoute = __bind(this.hasRoute, this);
      this.comparator = __bind(this.comparator, this);      _ref1 = RouteCollection.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    RouteCollection.prototype.model = Route;

    RouteCollection.prototype.initialize = function() {
      var indexRoute;

      indexRoute = new Route({
        routePath: "/test",
        routeCode: "'test page: ' + params.q",
        isRequired: true
      });
      return this.add(indexRoute);
    };

    RouteCollection.prototype.comparator = function(route) {
      return route.get("routePath");
    };

    RouteCollection.prototype.hasRoute = function(routePath) {
      console.log("route path: " + routePath);
      return this.findWhere({
        routePath: routePath
      });
    };

    RouteCollection.prototype.getRouteCode = function(routePath) {
      return this.findWhere({
        routePath: routePath
      }).get("routeCode");
    };

    return RouteCollection;

  })(Backbone.Collection);

}).call(this);
