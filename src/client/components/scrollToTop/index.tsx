import * as React from 'react';
import { animateScroll } from 'react-scroll';
import { Button } from 'semantic-ui-react';
import {
    IScrollToTopState,
    IScrollToTopProps,
} from '../../interfaces/components/scrollToTop';
import { ButtonWrapper } from './style';

class ScrollToTop extends React.PureComponent<IScrollToTopProps, IScrollToTopState> {
    state = { showButton: false };

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        if (window.scrollY >= this.props.activeOn && !this.state.showButton) {
            this.setState({ showButton: true });
        } else if (window.scrollY < this.props.activeOn && this.state.showButton) {
            this.setState({ showButton: false });
        }
    }

    render() {
        return this.state.showButton
            ? (
                <ButtonWrapper>
                    <Button
                        inverted
                        onClick={() => animateScroll.scrollToTop({ duration: 400 })}
                    >
                        Scroll to top
                    </Button>
                </ButtonWrapper>
            )
            : null;
    }
}

export default ScrollToTop;
