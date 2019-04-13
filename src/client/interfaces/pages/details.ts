import { RouteComponentProps } from 'react-router';
import { IMainSectionProps } from '../components/detailsPage/mainSection';

export interface IDetailsStateProps extends IMainSectionProps {
    backdropPath: string;
    isFetching: boolean;
}

export interface IDetailsDispatchProps {
    load: (id: string) => Promise<any>;
}

export type IDetailsProps = IDetailsStateProps & IDetailsDispatchProps & RouteComponentProps;
