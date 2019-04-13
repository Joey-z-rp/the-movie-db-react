
export interface ISearchBarStateProps {}

export interface ISearchBarDispatchProps {
    handleInputChange: (input) => void;
    search: () => Promise<any>;
}

export type ISearchBarProps = ISearchBarStateProps & ISearchBarDispatchProps;
