import * as React from 'react';

export class NewSpace extends React.Component<Props, State> {

  constructor(param: Props) {
    super(param);
    this.state = {
      fieldValue : ''
    };
    this.update = this.update.bind(this);
  }
  update(e: React.FormEvent<HTMLInputElement>) {
     this.props.onUpdate(e.currentTarget.value);
     this.setState({
       fieldValue: e.currentTarget.value
     });
  }
    render() {
      return (
        <div>
          <h4>First Child</h4>
          <input type="text" placeholder="Type here" onChange={this.update} value={this.state.fieldValue}/>
        </div>

      );
    }
  }
export interface Props {
    onUpdate: Function;
  }
export interface State {
    fieldValue: string;
  }
