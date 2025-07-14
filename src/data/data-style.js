import competitor from "@/data/competitor.json";
import prom from "@/data/prom.json";

export const dataStyle = {
    "sources": {
        "prom": {
            "type": "geojson",
            "data": prom,
        }, "competitor": {
            "type": "geojson",
            "data": competitor,
        }
    },
    "layers": [
        {
            id: "prom",
            type: "fill",
            source: "prom",
            layout: {},
            paint: {
                "fill-color": [
                    "interpolate",
                    ["linear"],
                    ["get", "price_promka_real"],
                    15000,
                    ["to-color", "#ffff00"],
                    40000,
                    ["to-color", "#ff7200"],
                    60000,
                    ["to-color", "#ff0000"],
                    80000,
                    ["to-color", "#C70050"],
                    100000,
                    ["to-color", "#B80FAE"],
                ],
                "fill-opacity": 0.25,
            },
        }, {
            id: "outline",
            type: "line",
            source: "prom",
            layout: {},
            paint: {
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["get", "price_promka_real"],
                    15000,
                    ["to-color", "#ffff00"],
                    40000,
                    ["to-color", "#ff7200"],
                    60000,
                    ["to-color", "#ff0000"],
                    80000,
                    ["to-color", "#C70050"],
                    100000,
                    ["to-color", "#B80FAE"],
                ],
                "line-width": 2,
            },
        },
        {
            id: "highlighted",
            type: "line",
            source: "prom",
            paint: {
                "line-color": "#08a0f7",
                "line-width": 4,
            },

            filter: ["in", "id", ""],
        },
        {
            id: "competitor-layer",
            type: "circle",
            source: "competitor",
            paint: {
                "circle-radius": ["get", "size"],
                "circle-stroke-width": 4,
                "circle-color": "#21E18A",
                "circle-stroke-color": "rgba(34, 176, 125, .45)",
            },
            filter: ["in", "promka_id", ""],
        },
        {
            id: "competitor-symbol",
            type: "symbol",
            source: "competitor",
            layout: {
                "text-field": ["get", "Name"],
                "text-size": 10,
                "text-transform": "uppercase",
                "text-anchor": "top",
                'text-font': [
                    "Noto Sans Regular"
                ],
                "text-offset": [
                    "interpolate",
                    ["linear"],
                    ["get", "size"],
                    8,
                    ["literal", [0, 1]],
                    14,
                    ["literal", [0, 2]],
                ],
            },
            paint: {
                "text-halo-blur": 5,
                "text-color": "#f2f2f2",
            },
            filter: ["in", "promka_id", ""],
        }
    ],
}