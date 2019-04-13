import * as React from 'react';
import Loader from '../loader';
import { ILoadMoreProps } from '../../interfaces/components/loadMore';
import { LoadMoreWrapper } from './style';

export default class LoadMore extends React.PureComponent<ILoadMoreProps> {
    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        const scrollAtBottom = window.innerHeight + window.scrollY
            >= this.props.containerRef.current!.offsetHeight;
        if (scrollAtBottom && this.props.enableLoader && !this.props.showLoader) {
            this.props.handleLoadMore();
        }
    }

    render() {
        const {
            bgcolor,
            showLoader,
        } = this.props;

        return showLoader
            ? (
                <LoadMoreWrapper bgcolor={bgcolor}>
                    <Loader active />
                </LoadMoreWrapper>
            )
            : null;
    }
}
