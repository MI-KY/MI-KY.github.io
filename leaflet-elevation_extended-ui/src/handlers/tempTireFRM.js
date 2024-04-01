export function TempTireFRM() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireFRM',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireFRM',         
        coordinateProperties: ["TireTempFRMs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireFRM ?? point.meta.tempTireFRM ?? point.prev('tempTireFRM')) || 0,
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
            label        : 'tempTireFRM',
            yAttr        : 'tempTireFRM',
            scaleX       : 'distance',
            scaleY       : 'tempTireFRM',
            color        : 'white',
            strokeColor  : 'yellow',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireFRM: ") + item.tempTireFRM + " " + '°C',
            marker: (item) => Math.round(item.tempTireFRM) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireFRM": {
                label: "Min tempTireFRM: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireFRM": {
                label: "Max tempTireFRM: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireFRM": {
                label: "Avg tempTireFRM: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};