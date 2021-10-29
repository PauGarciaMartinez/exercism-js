export function createVisitor(name, age, ticketId) {
  const newVisitor = {
    name: name,
    age: age,
    ticketId: ticketId
  }
  return newVisitor;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  return tickets[ticketId] 
    ? `sold to ${tickets[ticketId]}`
    : tickets[ticketId] === null
      ? `not sold`
      : `unknown ticket id`
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? `invalid ticket !!!`
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
