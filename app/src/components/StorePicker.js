import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get text from that input
    const storeName = this.myInput.current.value;
    // 3. Change page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required placeholder="Store Name"
            defaultValue={getFunName()} />
          <button type="submit">Visit Store →</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;