const TrafficEvent = require("../models/eventModel");

exports.extractEventList = (data) => {
  const jamList = [];

  data.forEach((road) => {
    road.segments.forEach((segment) => {
      if (segment.jams) {
        segment.jams.forEach((jam) => {
          const event = new TrafficEvent({
            eventId: jam.id,
            eventType: "congestion",
            road: jam.road,
            from: jam.from,
            to: jam.to,
            polyLine: jam.polyline,
            fromLocLat: jam.fromLoc.lat,
            fromLocLon: jam.fromLoc.lon,
            toLocLat: jam.toLoc.lat,
            toLocLon: jam.toLoc.lon,
            delay: jam.delay || undefined,
            distance: jam.distance || undefined,
            label: jam.label || undefined,
          });
          event.save();
        });
      }

      if (segment.radars) {
        segment.radars.forEach((radar) => {
          const event = new TrafficEvent({
            eventId: radar.id,
            eventType: "radar",
            road: radar.road,
            from: radar.from,
            to: radar.to,
            fromLocLat: radar.fromLoc.lat,
            fromLocLon: radar.fromLoc.lon,
            toLocLat: radar.toLoc.lat,
            toLocLon: radar.toLoc.lon,
            label: radar.label || undefined,
          });
          event.save();
        });
      }

      if (segment.roadworks) {
        segment.roadworks.forEach((work) => {
          const event = new TrafficEvent({
            eventId: work.id,
            eventType: "roadwork",
            road: work.road,
            from: work.from,
            to: work.to,
            fromLocLat: work.fromLoc.lat,
            fromLocLon: work.fromLoc.lon,
            toLocLat: work.toLoc.lat,
            toLocLon: work.toLoc.lon,
            label: work.label || undefined,
            reason: work.reason,
          });
          event.save();
        });
      }
    });
  });

  return jamList;
};
