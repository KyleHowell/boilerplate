import React from 'react';
import styles from './Kanban.module.css';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      note: this.props.note,
      oldNote: this.props.note,
    };
  }

  onFinishedEditing = e => {
    e.preventDefault();
    this.props.onSubmit({
      'newNote': this.state.note,
      'listName': this.props.list,
      'oldNote': this.props.note,
    });
    this.setState({editing: false});
  }

  render() {
    const headerClass = this.state.editing ? "hidden" : "list";
    const inputClass = this.state.editing ? "header-input" : "hidden";
    return (
      <div className={styles.listHeader}>
        <div
          className={headerClass}
          onClick={() => this.setState({editing: true})}
        >
          {this.props.note}
        </div>
        <form onSubmit={this.onFinishedEditing}>
          <input
            className={inputClass}
            onBlur={this.onFinishedEditing}
            onChange={e => this.setState({note: e.target.value})}
            value={this.state.note}
          />
        </form>
      </div>
    );
  }
}
