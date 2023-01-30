const mongoose = require("mongoose");

const trafficEvent = new mongoose.Schema(
  {
    eventId: {
      type: Number,
      require: [true],
    },
    eventType: {
      type: String,
      enum: ["roadwork", "congestion", "radar"],
      require: [true],
    },
    road: {
      type: String,
      required: [true],
    },
    from: {
      type: String,
      required: [true],
    },
    to: {
      type: String,
      required: [true],
    },
    fromLocLat: {
      type: Number,
      required: [true],
    },
    fromLocLon: {
      type: Number,
      required: [true],
    },
    toLocLat: {
      type: Number,
      required: [true],
    },
    toLocLon: {
      type: Number,
      required: [true],
    },
    polyLine: {
      type: String,
    },
    delay: {
      type: Number || undefined,
    },
    distance: {
      type: Number || undefined,
    },
    label: {
      type: String,
    },
    reason: {
      type: String,
    },
    //auto expire functionality could be implemented here using  expireAt: {}
    //to keep DB clean from old documents
  },

  { timestamps: true }
);

const TrafficEvent = mongoose.model("TrafficEvent", trafficEvent);
module.exports = TrafficEvent;
