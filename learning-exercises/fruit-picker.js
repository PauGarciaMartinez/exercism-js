import { checkStatus, checkInventory } from './grocer';

export function isServiceOnline(status) {
  return checkStatus(status => status === 'ONLINE');
}

export function pickFruit(variety, quantity, callback) {
  return checkInventory({ variety, quantity }, callback);
}

export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err) throw new Error(err);
  if (!err && isAvailable) return 'PURCHASE';
  if (!err && !isAvailable) return 'NOOP';
}

export function pickAndPurchaseFruit(variety, quantity) {
  return pickFruit(variety, quantity, purchaseInventoryIfAvailable);
}
