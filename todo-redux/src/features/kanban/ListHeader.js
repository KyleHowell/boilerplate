import React from 'react';
import styles from './Kanban.module.css';

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: this.props.name,
      oldName: this.props.name,
    };
  }

  onFinishedEditing = () => {
    this.props.onSubmit({
      'newName': this.state.name,
      'oldName': this.state.oldName
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
          {this.props.name}
        </div>
        <form onSubmit={this.onFinishedEditing}>
          <input
            className={inputClass}
            onBlur={this.onFinishedEditing}
            onChange={e => this.setState({name: e.target.value})}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}
