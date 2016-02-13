import React, { PropTypes } from 'react';
import RouterContext from 'react-router/lib/RouterContext';

class StoreLoader extends React.Component {
  static childContextTypes = {
    storeIsSynchronized: React.PropTypes.bool
  };

  static propTypes = {
    routes: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    let storeIsSynchronized = true;

    this.props.routes.forEach((route) => {
      if (route.loader) {
        let loader = new route.loader();
        if (loader.needsToSyncStore(this.props.params, this.props.store)) {
          storeIsSynchronized = false;
        }
      }
    });

    this.state = {
      storeIsSynchronized: storeIsSynchronized
    };
  }

  getChildContext() {
    return {
      storeIsSynchronized: this.state.storeIsSynchronized
    };
  }

  syncStore() {
    this.props.routes.forEach((route) => {
      if (route.loader) {
        let loader = new route.loader();

        if (loader.needsToSyncStore(this.props.params, this.props.store)) {
          loader.syncStore(this.props.params, this.props.store).then(
            (response) => {
              this.setState({ storeIsSynchronized: true });
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }
    });
  }

  componentDidMount() {
    this.syncStore();
  }

  componentWillReceiveProps(nextProps) {
    this.syncStore();
  }

  render() {
    return <RouterContext {...this.props} />;
  }
}

export default StoreLoader;
