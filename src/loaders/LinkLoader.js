import _ from 'lodash';
import * as TeamReaderActions from 'actions/TeamReaderActions';
import TeamReaderAPI from 'api/TeamReaderAPI';

export default class LinkLoader {
  needsToSyncStore(params, store) {
    let links = store.getState().links;
    if(links) {
      const link = _.findWhere(links.links, { id: parseInt(params.id) });
      if(link) {
        return false;
      }
    }
    return true;
  }

  syncStore(params, store) {
    let { dispatch } = store;
    let { session } = store.getState().app;
    const api = new TeamReaderAPI(session);

    return api.getLink({ id: params.id }).then(
      (response) => {
        console.log(response.data.data);
        dispatch(TeamReaderActions.loadLinks([response.data.data]));
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
