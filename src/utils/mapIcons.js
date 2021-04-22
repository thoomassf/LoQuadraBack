"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leaflet_1 = require("leaflet");
var map_marker_svg_1 = require("../images/map-marker.svg");
var mapIcon = leaflet_1.default.icon({
    iconUrl: map_marker_svg_1.default,
    iconSize: [50, 68],
    iconAnchor: [25, 68],
    popupAnchor: [170, 2],
});
exports.default = mapIcon;