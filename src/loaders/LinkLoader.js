import _ from 'lodash';
import * as Actions from 'actions/Actions';
import API from 'api/API';

export default class LinkLoader {
  needsToSyncStore(params, store) {
    return true;
  }

  syncStore(params, store) {
    return Promise.resolve("Success");
  };
}
