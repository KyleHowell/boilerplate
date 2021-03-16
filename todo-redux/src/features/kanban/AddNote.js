import React from 'react';
import styles from './Kanban.module.css';

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      note: ''
    };
  }

  onFinishedEditing = e => {
    e.preventDefault();
    this.props.onSubmit({
      'listName': this.props.list,
      'note': this.state.note
    });
    this.setState({editing: false, note: ''});
  }

  render() {
    const buttonClass = this.state.editing ? "hidden" : "button";
    const inputClass = this.state.editing ? "header-input" : "hidden";
    return (
      <div className={styles.addCard}>
        <div
          className={buttonClass}
          onClick={() => this.setState({editing: true})}
        >
          + Add a card
        </div>
        <form onSubmit={this.onFinishedEditing}>
          <input
            className={inputClass}
            onChange={e => this.setState({note: e.target.value})}
            value={this.state.note}
          />
        </form>
      </div>
    );
  }
}
