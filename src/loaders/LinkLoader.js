export default class LinkLoader {
  needsToSyncStore(params, store) {
    return true;
  }

  syncStore(params, store) {
    return Promise.resolve('Success');
  };
}
