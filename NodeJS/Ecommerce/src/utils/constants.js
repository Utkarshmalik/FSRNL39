


const userTypes = {
    CUSTOMER:"CUSTOMER",
    ADMIN:"ADMIN"
}

const userStatus = {
    PENDING:"PENDING",
    BLOCKED:"BLOCKED",
    REJECTED:"REJECTED",
    APPROVED:"APPROVED"
}

const releaseStatus={
    released:"RELEASED",
    unreleased:"UNRELEASED",
    blocked:"BLOCKED"
}

const bookingStatus = {
    inProgress:"IN_PROGRESS",
    completed:"COMPLETED",
    cancelled:"CANCELLED",
    expired:"EXPIRED",
    failed:"FAILED"
}

const paymentStatus = {
    pending:"PENDING",
    success:"SUCCESS",
    failed:"FAILED"
}



module.exports ={
    userTypes,
    userStatus,
    releaseStatus,
    bookingStatus,
    paymentStatus
}