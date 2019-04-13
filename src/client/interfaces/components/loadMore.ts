import { RefObject } from 'react';

export interface ILoadMoreProps {
    bgcolor: string;
    containerRef: RefObject<HTMLDivElement>;
    enableLoader: boolean;
    handleLoadMore: () => Promise<any>;
    showLoader: boolean;
}
