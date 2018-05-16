// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import { auth } from '../firebase';

// const AccountImage = () =>
//   <div>
//     <h1>AccountImage</h1>
//     <AccountImageForm />
//   </div>

// const byPropKey = (propertyName, value) => () => ({
//   [propertyName]: value,
// });

// const INITIAL_STATE = {
//   url: '',
//   error: null,
// };

// class AccountImageForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }

//   onSubmit = (event) => {
//     const { url } = this.state;

//     auth.doPasswordReset(url)
//       .then(() => {
//         this.setState(() => ({ ...INITIAL_STATE }));
//       })
//       .catch(error => {
//         this.setState(byPropKey('error', error));
//       });
//       event.preventDefault();
//   }

//   render() {
//     const {
//       url,
//       error,
//     } = this.state;

//     const isInvalid = url === '';

//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           value={this.state.url}
//           onChange={event => this.setState(byPropKey('url', event.target.value))}
//           type="text"
//           placeholder="Image URL"
//         />
//         <button disabled={isInvalid} type="submit">
//           Add Image
//         </button>

//         { error && <p>{error.message}</p> }
//       </form>
//     );
//   }
// }

// const AccountImageLink = () =>
//   <p>
//     <Link to="/addImage">bla bla bla</Link>
//   </p>

// export default AccountImage;


import React, { Component } from 'react';

import { auth, db } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  url: '',
  error: null,
};

class AccountImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { url } = this.state;

    db.updateImageURL(url)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      url,
      error,
    } = this.state;

    const isInvalid =
      url === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={url}
          onChange={event => this.setState(byPropKey('url', event.target.value))}
          type="url"
          placeholder="Image URL"
        />
        <button disabled={isInvalid} type="submit">
          Add Image
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default AccountImageForm;