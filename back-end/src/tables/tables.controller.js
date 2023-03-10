const service = require("./tables.service");
const reservationsService = require("../reservations/reservations.service");

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");

///////////////////////////////////// validation middleware ////////////////////////////////////

// validate existence of table by ID
async function tableExists(req, res, next) {
  const { table_id } = req.params;

  const foundTable = await service.read(table_id);
  if (foundTable) {
    res.locals.table = foundTable;
    return next();
  }
  next({
    status: 404,
    message: `table with an id of ${table_id} cannot be found.`,
  });
}

// validate existence of reservation by ID
async function reservationIdExists(req, res, next) {
  const { reservation_id } = req.body.data
  const foundReservation = await reservationsService.read(reservation_id)

  if (foundReservation) {
    res.locals.reservation = foundReservation
    return next()
  }
  next({
    status: 404,
    message: `A reservation with an ID of ${reservation_id} could not be found`
  })
}

// validate name length is more than one character
function validateNameLength(req, res, next) {
  const { data = {} } = req.body;
  if (!data.table_name || data.table_name.length < 2) {
    return next({
      status: 400,
      message: `table_name must be at least two characters`,
    });
  }
  next();
}

// validate capacity exists and is a valid number
function validateCapacityNumber(req, res, next) {
  const { data = {} } = req.body;
  if (!data.capacity || typeof data.capacity !== "number") {
    return next({
      status: 400,
      message: `capacity must be a number greater than one`,
    });
  }
  next();
}

// validate table is occupied before finishing
function validateOccupiedForFinish(req, res, next) {
  const { reservation_id } = res.locals.table
  if (!reservation_id) {
    return next({
      status: 400,
      message: "Table is not occupied, please pick an occupied table to free up"
    })
  }
  next()
}

// validate that the table is not occupied before seating, also check if capacity > partysize 
async function validateTableOccupation(req, res, next) {
  const { table } = res.locals
  const { reservation } = res.locals

  if (table.reservation_id) {
    return next({
      status: 400,
      message: `Table is occupied, it has a reservation_id`
    })
  } else if (reservation.people > table.capacity) {
    return next({
      status: 400,
      message: `Too many people to fit tables maximum capacity, choose another table`
    })
  } else {
    next()
  }
}

// validate the table is not seated to allow for new seating to table
function validateTableNotSeated(req, res, next) {
  const { status } = res.locals.reservation;
  if (status === "seated") {
    return next({
      status: 400,
      message: "table currently seated, pick an open table please",
    });
  }
  next();
}

///////////////////////////// validate form data submission //////////////////////////////////////
// properties to look for
const hasValidProperties = hasProperties("table_name", "capacity");

// valid properties for form submission
// const VALID_PROPERTIES = ["table_name", "capacity", "reservation_id"]

// function hasValidFields(req, res, next) {
//   const { data = {} } = req.body;
//   const invalidFields = Object.keys(data).filter(
//     (field) => !VALID_PROPERTIES.includes(field)
//   );

//   if (invalidFields.length) {
//     return next({
//       status: 400,
//       message: `Invalid field(s): ${invalidFields.join(", ")}`,
//     });
//   }
//   next();
// }

//////////////////////////////////// Route  Handlers ///////////////////////////////////////////

async function list(req, res) {
  res.json({ data: await service.list() });
}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function read(req, res) {
  res.json({ data: res.locals.table });
}

async function seatTable(req, res) {
  const { reservation_id } = res.locals.reservation
  const { table_id } = res.locals.table

  const data = await service.seatTable(table_id, reservation_id)
  res.json({ data })
}

async function finishTable(req, res) {
  const { table_id } = req.params
  const { reservation_id } = res.locals.table
  
  const data = await service.finishTable(table_id, reservation_id)
  res.status(200).json({ data })
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [
    hasValidProperties,
    validateNameLength,
    validateCapacityNumber,
    asyncErrorBoundary(create),
  ],
  read: [
    tableExists,
    asyncErrorBoundary(read)
  ],
  seatTable: [
    hasProperties("reservation_id"),
    asyncErrorBoundary(reservationIdExists),
    asyncErrorBoundary(tableExists),
    validateTableOccupation,
    validateTableNotSeated,
    asyncErrorBoundary(seatTable)
  ],
  finishTable: [
    asyncErrorBoundary(tableExists),
    validateOccupiedForFinish,
    asyncErrorBoundary(finishTable)
  ]
};
