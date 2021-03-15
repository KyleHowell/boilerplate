import React from 'react';
import styles from './Kanban.module.css';

export default class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: ''
    };
  }

  onFinishedEditing = e => {
    e.preventDefault();
    this.props.onSubmit({
      'name': this.state.name
    });
    this.setState({editing: false, name: ''});
  }

  render() {
    const buttonClass = this.state.editing ? "hidden" : "button";
    const inputClass = this.state.editing ? "header-input" : "hidden";
    return (
      <div className={styles.listHeader}>
        <button
          className={buttonClass}
          onClick={() => this.setState({editing: true})}
        >
          + Add another list
        </button>
        <form onSubmit={this.onFinishedEditing}>
          <input
            className={inputClass}
            onChange={e => this.setState({name: e.target.value})}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}
