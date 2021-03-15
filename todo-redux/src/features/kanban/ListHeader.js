import React from 'react';
import styles from './Kanban.module.css';

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: this.props.name
    };
  }

  onDelete = () => {
    if (window.confirm('Are you sure you want to delete this list?')) {
      this.props.onDelete({'name': this.props.name});
    }
  }

  onFinishedEditing = e => {
    e.preventDefault();
    this.props.onSubmit({
      'newName': this.state.name,
      'oldName': this.props.name
    });
    this.setState({editing: false});
  }

  render() {
    const headerClass = this.state.editing ? "hidden" : "list";
    const inputClass = this.state.editing ? "header-input" : "hidden";
    return (
      <div className={styles.listHeader}>
        <div className={headerClass}>
          {this.props.name}
          <div className={styles.actionButtons}>
            <button onClick={() => this.setState({editing: true})}>edit</button>
            <button onClick={this.onDelete}>X</button>
          </div>
        </div>
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
