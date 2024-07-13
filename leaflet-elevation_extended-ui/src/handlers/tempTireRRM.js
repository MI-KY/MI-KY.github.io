export function TempTireRRM() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireRRM',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireRRM',         
        coordinateProperties: ["tireTempRRMs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireRRM ?? point.meta.tempTireRRM ?? point.prev('tireTempRRM')) || 0,
		stats: { max: _.iMax, min: _.iMin, avg: _.iAvg },
        scale: {
            axis       : "y",
            position   : "left",
            scale      : { min: -1, max: +1 },
            tickPadding: 25,
            labelX     : -30,
            labelY     : -8,
        },
        path: {
            label        : 'tempTireRRM',
            yAttr        : 'tempTireRRM',
            scaleX       : 'distance',
            scaleY       : 'tempTireRRM',
            color        : 'white',
            strokeColor  : 'green',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireRRM: ") + item.tempTireRRM + " " + '°C',
            marker: (item) => "RRM: " + Math.round(item.tempTireRRM) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireRRM": {
                label: "Min tempTireRRM: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireRRM": {
                label: "Max tempTireRRM: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireRRM": {
                label: "Avg tempTireRRM: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};