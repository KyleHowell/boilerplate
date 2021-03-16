import React from 'react';
import styles from './Kanban.module.css';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      note: this.props.note,
    };
  }

  onDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      this.props.onDelete({
        'listName': this.props.list,
        'note': this.props.note
      });
      this.setState({note: ''});
    }
  }

  onFinishedEditing = e => {
    e.preventDefault();
    this.props.onSubmit({
      'newNote': this.state.note,
      'listName': this.props.list,
      'oldNote': this.props.note,
    });
    this.setState({editing: false, note: ''});
  }

  render() {
    const headerClass = this.state.editing ? "hidden" : "list";
    const inputClass = this.state.editing ? "header-input" : "hidden";
    return (
      <div className={styles.note}>
        <div className={headerClass}>
          <div>{this.props.note}</div>
          <div className={styles.actionButtons}>
            <button onClick={() => this.setState({editing: true})}>edit</button>
            <button onClick={this.onDelete}>X</button>
          </div>
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
