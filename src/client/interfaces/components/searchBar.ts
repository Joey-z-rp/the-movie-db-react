import { IAction } from '../actions';

export interface ISearchBarStateProps {}

export interface ISearchBarDispatchProps {
    handleInputChange: (input) => IAction;
    search: () => Promise<any>;
}

export type ISearchBarProps = ISearchBarStateProps & ISearchBarDispatchProps;
