import * as React from 'react';

export interface ICounterProps {
  readonly value?: number;
  readonly onIncrement?: () => null;
  readonly onDecrement?: () => null;
}

export default class Counter extends React.Component<ICounterProps> {
  constructor(props: ICounterProps) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  public render(): JSX.Element {
    const { value } = this.props;
    return (
      <div>
        <p>Current counter value: <span>{value}</span></p>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }

  private increment(): void {
    if (this.props.onIncrement) {
      this.props.onIncrement();
    }
  }

  private decrement(): void {
    if (this.props.onDecrement) {
      this.props.onDecrement();
    }
  }
}
