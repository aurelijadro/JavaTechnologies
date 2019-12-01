import React from 'react';

class SelfDestructTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 10
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                clearInterval(this.myInterval)
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state) => ({ seconds: state.seconds - 1 }));
    }

    render() {
        const seconds = this.state.seconds;
        return (
            <div>
                {(this.state.seconds > 0) ? (
                    <div>
                        <h1>{seconds} </h1>
                    </div>) : (
                        <div className='red'>
                            <h1>{seconds} </h1>

                        </div>)
                }

            </div>
        )
    }
}

export default SelfDestructTimer;