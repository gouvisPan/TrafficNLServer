const TrafficEvent = require("../models/eventModel");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");

exports.getLatestEvents = asyncHandler(async (req, res, next) => {
  let filter = { createdAt: { $gt: new Date(Date.now() - 5 * 60 * 1000) } };

  const latestEvents = await TrafficEvent.find(filter);
  if (!latestEvents)
    return next(new AppError("Problem with fetching documents"));

  res.status(200).json({
    status: "success",
    results: latestEvents.length,
    data: {
      data: latestEvents,
    },
  });
});

exports.getSpecificEvents = asyncHandler(async (req, res, next) => {
  const dateInt = parseInt(req.params.date);

  let filter = {
    createdAt: {
      $gt: new Date(dateInt - 5 * 60 * 1000),
      $lt: new Date(dateInt),
    },
  };

  const specificEvents = await TrafficEvent.find(filter);

  if (!specificEvents)
    return next(new AppError("Problem with fetching documents"));

  res.status(200).json({
    status: "success",
    results: specificEvents.length,
    data: {
      data: specificEvents,
    },
  });
});

exports.getAllEvents = asyncHandler(async (req, res, next) => {
  const allEvents = await TrafficEvent.find();

  if (!allEvents) return next(new AppError("Problem with fetching documents"));

  res.status(200).json({
    status: "success",
    results: allEvents.length,
    data: {
      data: allEvents,
    },
  });
});
