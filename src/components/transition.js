import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const animationTimeout = 160;
const timeout = 250;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: 'translate3d(0, 100px, 0)',
    overflow: 'hidden',
  },
  entered: {
    transition: `all ${animationTimeout}ms cubic-bezier(0.0, 0.0, 0.2, 1)`,
    opacity: 1,
    transform: 'translate3d(0, 0px, 0)',
    overflow: 'hidden',
  },
  exiting: {
    transition: `all ${animationTimeout}ms cubic-bezier(0.4, 0.0, 1, 1)`,
    opacity: 0,
    transform: 'translate3d(0, 100px, 0)',
    overflow: 'hidden',
  },
};

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;
    /* Have to use if to render without Transition components if location is undefined otherwise
    Gatsby will throw error during static HTML building */
    if (location !== undefined) {
      return (
        <TransitionGroup>
          <ReactTransition
            key={location.pathname}
            timeout={timeout}
          >
            {status => (
              <div
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {children}
              </div>
            )}
          </ReactTransition>
        </TransitionGroup>
      );
    } else {
      return (
        <div>
          {children}
        </div>
      );
    }
  }
}

export default Transition